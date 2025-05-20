import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/Login';
import SignUp from '@/pages/Login/SignUp';
import Register from '@/pages/Register';
import Main from '@/pages/Main';
import QrScan from '@/pages/QrScan';
import UsageHistory from '@/pages/UsageHistory';
import Filter from '@/pages/UsageHistory/Filter';
import Payment from '@/pages/Payment';
import EnterPassword from '@/pages/Payment/EnterPassword';
import Success from '@/pages/Payment/Success';
import Fail from '@/pages/Payment/Fail/Index';

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
      path: 'signup',
      element: <SignUp />,
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
    {
      path: 'payment/password',
      element: <EnterPassword />,
    },
    {
      path: 'payment/success',
      element: <Success />,
    },
    {
      path: 'payment/fail',
      element: <Fail />,
    }
  ]);

  return <RouterProvider router={browserRouter} future={{ v7_startTransition: true }} />;
};

export default CustomRouterProvider;
