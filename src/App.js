import "./App.css";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./Components/Assets/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import man_banner from "./Components/Assets/Assets/banner_mens.png";
import women_banner from "./Components/Assets/Assets/banner_women.png";
import kid_banner from "./Components/Assets/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={man_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />

          {/* Updated nested route for the product detail page */}
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* <LoginPage /> */}

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
