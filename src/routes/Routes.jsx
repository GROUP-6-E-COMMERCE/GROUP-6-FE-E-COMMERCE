import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import Orderlist from "../pages/Orderlist";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ListProductPage from "../pages/ListProductPage";
import Profile from "../pages/Profile";
import CreateProduct from "../pages/CreateProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderlist" element={<Orderlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myproduct" element={<ListProductPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
