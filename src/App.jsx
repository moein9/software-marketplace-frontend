import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProductDetail from "./pages/SingleProductDetail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import DevelopersPage from "./pages/Developers";
import Checkout from "./pages/Checkout";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  return (
    <div className="App">
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Landing className="bg-gray-900" />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProductDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
