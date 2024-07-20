import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/404page";
import SingleProduct from "./pages/singleProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="about" Component={AboutPage} />
        <Route path="product/:productId" Component={SingleProduct} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </>
  );
}

export default App;
