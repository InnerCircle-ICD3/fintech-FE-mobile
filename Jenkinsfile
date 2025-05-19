pipeline {
    agent any
    
    // 파이프라인 파라미터 정의
    parameters {
        string(name: 'DOCKER_REGISTRY', defaultValue: 'nullplusnull', description: 'Docker 레지스트리 이름')
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: '빌드할 브랜치 이름')
    }
    
    environment {
        IMAGE_NAME = 'fintech-fe-mobile'
        // 브랜치에 따라 다른 환경 변수 설정
        BRANCH_ENV = "${params.BRANCH_NAME == 'main' ? 'prod' : params.BRANCH_NAME == 'develop' ? 'dev' : 'test'}"
        K8S_NAMESPACE = "fintech-fe-mobile-${BRANCH_ENV}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Validate Parameters') {
            steps {
                script {
                    // DOCKER_REGISTRY 파라미터가 비어있더라도 기본값 사용
                    if (params.DOCKER_REGISTRY == null || params.DOCKER_REGISTRY == '') {
                        env.DOCKER_REGISTRY = 'nullplusnull'
                        echo "DOCKER_REGISTRY가 설정되지 않아 기본값 'nullplusnull'을 사용합니다."
                    } else {
                        env.DOCKER_REGISTRY = params.DOCKER_REGISTRY
                    }
                    
                    echo "브랜치 이름: ${params.BRANCH_NAME}"
                    echo "Docker 레지스트리: ${env.DOCKER_REGISTRY}"
                    echo "환경: ${env.BRANCH_ENV}"
                    echo "쿠버네티스 네임스페이스: ${env.K8S_NAMESPACE}"
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install || echo "의존성 설치 건너뜀"'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint || echo "린트 건너뜀"'
            }
        }
        
        stage('Build') {
            steps {
                script {
                    // 브랜치에 따른 빌드 환경 설정
                    if (params.BRANCH_NAME == 'main') {
                        sh 'NODE_ENV=production npm run build'
                    } else if (params.BRANCH_NAME == 'develop') {
                        sh 'NODE_ENV=development npm run build'
                    } else {
                        sh 'NODE_ENV=test npm run build'
                    }
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // 브랜치에 따른 태그 설정
                script {
                    def imageTag = "${BUILD_NUMBER}-${env.BRANCH_ENV}"
                    sh "docker build -t ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:${imageTag} ."
                    
                    // main 브랜치인 경우에만 latest 태그 추가
                    if (params.BRANCH_NAME == 'main') {
                        sh "docker tag ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:${imageTag} ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:latest"
                    }
                    
                    // 환경별 태그 추가
                    sh "docker tag ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:${imageTag} ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:${env.BRANCH_ENV}-latest"
                    
                    // 이미지 태그 저장
                    env.IMAGE_TAG = imageTag
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh '''
                    echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                    docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
                    docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${BRANCH_ENV}-latest
                    '''
                    
                    // main 브랜치인 경우에만 latest 태그 푸시
                    script {
                        if (params.BRANCH_NAME == 'main') {
                            sh "docker push ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:latest"
                        }
                    }
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubernetes-config', variable: 'KUBECONFIG')]) {
                    script {
                        // 쿠버네티스 네임스페이스 존재 확인 및 생성
                        sh "kubectl get namespace ${env.K8S_NAMESPACE} || kubectl create namespace ${env.K8S_NAMESPACE}"
                        
                        // 배포 파일 수정
                        sh '''
                        sed -i "s|\\${DOCKER_REGISTRY}|${DOCKER_REGISTRY}|g" kubernetes/deployment.yaml
                        sed -i "s|\\${VERSION}|${IMAGE_TAG}|g" kubernetes/deployment.yaml
                        '''
                        
                        // 브랜치별 인그레스 설정 수정
                        if (params.BRANCH_NAME == 'main') {
                            sh "sed -i 's|test.passion-pay.com|passion-pay.com|g' kubernetes/service.yaml"
                        } else if (params.BRANCH_NAME == 'develop') {
                            sh "sed -i 's|test.passion-pay.com|dev.passion-pay.com|g' kubernetes/service.yaml"
                        }
                        
                        // 쿠버네티스 배포
                        sh '''
                        kubectl apply -f kubernetes/deployment.yaml -n ${K8S_NAMESPACE}
                        kubectl apply -f kubernetes/service.yaml -n ${K8S_NAMESPACE}
                        kubectl rollout status deployment/fintech-fe-mobile -n ${K8S_NAMESPACE}
                        '''
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo "배포가 성공적으로 완료되었습니다! 환경: ${env.BRANCH_ENV}, 브랜치: ${params.BRANCH_NAME}"
        }
        failure {
            echo "배포 중 오류가 발생했습니다. 환경: ${env.BRANCH_ENV}, 브랜치: ${params.BRANCH_NAME}"
        }
        always {
            // 도커 이미지 정리
            sh "docker rmi -f \$(docker images ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:${env.IMAGE_TAG} -q) || true"
            sh "docker rmi -f \$(docker images ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:${env.BRANCH_ENV}-latest -q) || true"
            sh "docker system prune -f || true"
        }
    }
}