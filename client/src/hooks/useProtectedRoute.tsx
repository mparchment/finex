import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useProtectedRoute = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem('token');
    
      if (!token) {
        navigate('/');
        setIsLoading(false);
        return;
      }
    
      try {
        const response = await axios.get('http://localhost:5000/api/users/checkToken', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
    
        if (response.status !== 200) {
          localStorage.removeItem('token');
          navigate('/');
        }
      } catch (error) {
        console.error('An error occurred', error);
        navigate('/');
      }
    
      setIsLoading(false);
    };    

    checkTokenValidity();
  }, [navigate]);

  return { isLoading };
};

export default useProtectedRoute;
