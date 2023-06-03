import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Root from './routes/Root/Root';
import SignIn from './routes/SignIn/SignIn';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import Accounts from './routes/Accounts/Accounts';
import Planning from './routes/Planning/Planning.tsx';
import Transfer from './routes/Transfer/Transfer.tsx';
import Billing from './routes/Billing/Billing.tsx';
import Profile from './routes/Profile/Profile.tsx';
import Settings from './routes/Settings/Settings.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/portal',
    element: <Root />,
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </React.StrictMode>
);
