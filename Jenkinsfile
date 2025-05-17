pipeline {
    agent any
    
    // 파이프라인 파라미터 정의
    parameters {
        string(name: 'DOCKER_REGISTRY', defaultValue: '', description: 'Docker 레지스트리 이름')
    }
    
    environment {
        IMAGE_NAME = 'fintech-fe-mobile'
        K8S_NAMESPACE = 'fintech-fe-mobile'
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
                    if (params.DOCKER_REGISTRY == '') {
                        error "DOCKER_REGISTRY 파라미터가 설정되지 않았습니다. 'Build with Parameters'를 사용하여 값을 입력해주세요."
                    }
                    env.DOCKER_REGISTRY = params.DOCKER_REGISTRY
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
                sh 'npm run build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER} ."
                sh "docker tag ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER} ${env.DOCKER_REGISTRY}/${IMAGE_NAME}:latest"
            }
        }
        
        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh '''
                    echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                    docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER}
                    docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
                    '''
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubernetes-config', variable: 'KUBECONFIG')]) {
                    sh '''
                    sed -i "s|\\${DOCKER_REGISTRY}|${DOCKER_REGISTRY}|g" kubernetes/deployment.yaml
                    sed -i "s|\\${VERSION}|${BUILD_NUMBER}|g" kubernetes/deployment.yaml
                    kubectl apply -f kubernetes/deployment.yaml -n $K8S_NAMESPACE
                    kubectl apply -f kubernetes/service.yaml -n $K8S_NAMESPACE
                    kubectl rollout status deployment/fintech-fe-mobile -n $K8S_NAMESPACE
                    '''
                }
            }
        }
    }
    
    post {
        success {
            echo '배포가 성공적으로 완료되었습니다!'
        }
        failure {
            echo '배포 중 오류가 발생했습니다.'
        }
    }
}