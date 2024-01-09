import "./App.css";

import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
// import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./Components/Assets/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
// import Hero from "./Components/Assets/Assets/Hero/Hero";
// import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="womens" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />

          <Route path="/product" element={<Product />}>
            <Route path="productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Hero /> */}
    </div>
  );
}

export default App;
