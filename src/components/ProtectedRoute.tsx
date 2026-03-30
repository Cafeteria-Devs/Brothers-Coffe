import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../config/supabase';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate('/login');
      }
    };

    checkSession();
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;