import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import QrPaymentPage from "./pages/QrPaymentPage";
import UsageHistoryPage from "./pages/UsageHistoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/qr" element={<QrPaymentPage />} />
        <Route path="/history" element={<UsageHistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
