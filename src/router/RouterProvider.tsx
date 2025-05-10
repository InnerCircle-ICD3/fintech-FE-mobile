import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Main from '@/pages/Main';
import QrPayment from '@/pages/QrPayment';
import UsageHistory from '@/pages/UsageHistory';
import Filter from '@/pages/UsageHistory/Filter';

const CustomRouterProvider = () => {
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <Main />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'qr',
      element: <QrPayment />,
    },
    {
      path: 'history',
      element: <UsageHistory />,
    },
    {
      path: 'history/filter',
      element: <Filter />,
    },
  ]);

  return <RouterProvider router={browserRouter} future={{ v7_startTransition: true }} />;
};

export default CustomRouterProvider;
