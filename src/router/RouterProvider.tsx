import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Main from '@/pages/Main';
import QrScan from '@/pages/QrScan';
import UsageHistory from '@/pages/UsageHistory';
import Filter from '@/pages/UsageHistory/Filter';
import Payment from '@/pages/Payment';

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
      element: <QrScan />,
    },
    {
      path: 'history',
      element: <UsageHistory />,
    },
    {
      path: 'history/filter',
      element: <Filter />,
    },
    {
      path: 'payment',
      element: <Payment />,
    },
  ]);

  return <RouterProvider router={browserRouter} future={{ v7_startTransition: true }} />;
};

export default CustomRouterProvider;
