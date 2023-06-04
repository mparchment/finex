import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserContext, { IUser, IUserState } from './contexts/userContext';
import SignIn from './routes/SignIn/SignIn';
import Root from './routes/Root/Root.tsx';
import ErrorPage from './routes/ErrorPage/ErrorPage.tsx';
import Accounts from './routes/Accounts/Accounts.tsx';
import Planning from './routes/Planning/Planning.tsx';
import Transfer from './routes/Transfer/Transfer.tsx';
import Billing from './routes/Billing/Billing.tsx';
import Profile from './routes/Profile/Profile.tsx';
import Settings from './routes/Settings/Settings.tsx';
import withAuth from './components/withAuth.tsx';

const AuthenticatedRoot = withAuth(Root);

const router = createBrowserRouter([
    {
      path: '/',
      element: <SignIn />,
    },
    {
      path: '/portal',
      element: <AuthenticatedRoot />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'accounts',
          element: <Accounts />,
        },
        {
          path: 'planning',
          element: <Planning />,
        },
        {
          path: 'transfer',
          element: <Transfer />,
        },
        {
          path: 'billing',
          element: <Billing />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'settings',
          element: <Settings />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);

const App = () => {
    const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default App;
