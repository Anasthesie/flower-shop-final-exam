import { Routes, Route } from "react-router";
import "./App.css";
import HeaderMenu from "./components/header";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";

export default function App() {
  return (
    <div>
      <HeaderMenu />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
