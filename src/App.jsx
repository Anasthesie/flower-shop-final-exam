import { Routes, Route } from "react-router";
import "./App.css";
import HeaderMenu from "./components/header";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import SignUpPage from "./pages/signup-page";
import ProductsPage from "./pages/products-page";
import ProductDetailsPage from "./pages/product-details-page";

export default function App() {
  return (
    <div>
      <HeaderMenu />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="log-in" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />

        <Route path="products" element={<ProductsPage />} />
        <Route path="product-details/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}
