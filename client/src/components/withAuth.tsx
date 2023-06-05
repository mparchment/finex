import useProtectedRoute from '../hooks/useProtectedRoute';

const withAuth = (Component: React.ComponentType<any>): React.ComponentType<any> => {
  const AuthenticatedComponent = (props: any) => {
    const { isLoading } = useProtectedRoute();

    if (isLoading) {
      // Show loading spinner, return null, or any loading state you want to show
      return null;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;