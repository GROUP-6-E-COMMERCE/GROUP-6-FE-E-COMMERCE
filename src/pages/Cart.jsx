import React, { useEffect } from "react";
import Header from "../components/Header";
import CartCard from "../components/CartCard";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Cart = (props) => {
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

  const fetchData = () => {
    localStorage.getItem("cart");
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
  };

  const data = {
    name: props.nameitem,
    price: props.priceitem,
    qty: 1,
    id: props.itemid,
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData2 = () => {
    localStorage.getItem("cart");
    console.log(localStorage.getItem("cart"));
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
            <Link to="/orderlist">
              <button
                type="button"
                className="w-full inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400"
              >
                Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
