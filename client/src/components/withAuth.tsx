import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../contexts/userContext';

const withAuth = (Component: React.ComponentType<any>): React.ComponentType<any> => {
  const AuthenticatedComponent = (props: any) => {
    const userContext = useContext(UserContext);

    if (!userContext?.user) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;