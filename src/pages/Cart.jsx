import React from "react";
import Header from "../components/Header";
import CartCard from "../components/CartCard";
import Layout from "../components/Layout";

const Cart = () => {
  const state = {
    data: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  };

  return (
    <Layout>
      <Header></Header>
      <div>
        <div className="text-start text-3xl font-bold p-5 pl-16">
          My Shopping Cart
        </div>
        <div className="grid grid-flow-row auto-rows-max grid-cols-1">
          {state.data.map(() => (
            <CartCard />
          ))}
        </div>
        <div className="flex justify-center p-5 mb-5">
          <div className="block py-5 px-16 rounded-lg shadow-lg bg-white max-w-sm border-2">
            <p className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Order List
            </p>
            <p className="text-gray-700 text-base m-2">Total Quantity: 2</p>
            <p className="text-gray-700 text-base m-2">Shipping Free</p>{" "}
            <p className="text-gray-700 text-base m-2">
              Total Price Rp 9.000.000-
            </p>
            <button
              type="button"
              className="w-full inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
