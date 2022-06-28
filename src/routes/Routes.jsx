import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import Orderlist from "../pages/Orderlist";
import Login from "../pages/Login";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderlist" element={<Orderlist />} />
          <Route path="/login" element={<Login />} />
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
  }
}

export default App;
