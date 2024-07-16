import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import { Tooltip, Toast, Popover, Offcanvas } from "bootstrap";
import Alert from "bootstrap/js/dist/alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import NotFound from "./routes/NotFound.jsx";
import Products from "./components/products/Products.jsx";
import Product from "./components/products/Product.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="products" element={<Products />}>
              <Route path={":productId"} element={<Product />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
