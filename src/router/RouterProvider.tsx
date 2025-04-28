import { BrowserRouter, Routes, Route, Navigate, RouterProvider } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Main from '@/pages/Main';
import QrPayment from '@/pages/QrPayment';
import UsageHistory from '@/pages/UsageHistory';

const CustomRouterProvider = () => {
  const browserRouter = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/qr" element={<QrPayment />} />
        <Route path="/history" element={<UsageHistory />} />
      </Routes>
    </BrowserRouter>
  );

  return <RouterProvider router={browserRouter} future={{ v7_startTransition: true }} />;
};
