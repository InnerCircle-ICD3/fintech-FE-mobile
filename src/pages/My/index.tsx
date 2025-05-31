import { useAuthStore } from '@/store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const My = () => {
  const auth = useAuthStore();
  const clearUser = auth.clearUser;

  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          clearUser();
          navigate('/login', { replace: true });
        }}
      >
        로그아웃!!
      </button>
    </div>
  );
};

export default My;
