import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import SignUp from "../Components/Sign up/SignUp";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<Navigate to="home" />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/shop/:id" element={<ProductDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Router;
