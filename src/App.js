import "./App.css";

import Shop from "./Context/Pages/Shop";
import Product from "./Context/Pages/Product";
import ShopCategory from "./Context/Pages/ShopCategory";
import Cart from "./Context/Pages/Cart";
import LoginPage from "./Context/Pages/LoginPage";
import Navbar from "./Components/Assets/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      </BrowserRouter>
    </div>
  );
}

export default App;
