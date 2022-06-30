import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Card = (props) => {
  const loggedin = localStorage.getItem("token");
  const loggedout = !loggedin;

  const data = {
    name: props.nameitem,
    price: props.priceitem,
    qty: 0,
    id: props.itemid,
  };

  //gg
  const handleAddCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (loggedin) {
      if (cart) {
        if (data.id === props.itemid) {
          // alert("already in cart");
          data.qty += 1;

          //console.log(data.id);
          //console.log(props.itemid);
        }
        alert("add to cart");
        const newCart = [...cart, data];
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        localStorage.setItem("cart", JSON.stringify([data]));
      }
    } else {
      alert("Please login first");
    }
  };

  const handleAddCart2 = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (loggedin) {
      if (cart) {
        if (item.id === props.itemid) {
          alert(" already in cart");
          console.log(item.id);
          console.log(props.itemid);
          item.qty += 1;
        }
        alert("add to cart");
        const newCart = [...cart, item];
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        localStorage.setItem("cart", JSON.stringify([item]));
      }
    } else {
      alert("Please login first");
    }
  };

  const handleAddtoCart = (item) => {
    const temp = localStorage.getItem("cart");
    if (temp) {
      const tempData = JSON.parse(temp);
      const find = tempData.find((data) => data.id === item.id);
      if (find) {
        alert("The product is already in cart");
        return;
      }
    }
    if (temp) {
      const tempData = JSON.parse(temp);
      tempData.push(item);
      localStorage.setItem("cart", JSON.stringify(tempData));
    } else {
      localStorage.setItem("cart", JSON.stringify([item]));
    }
    alert("Added to cart");
  };

  const myClick = () => {
    if (loggedin) {
      alert("Added to Cart");
      localStorage.setItem("cart", JSON.stringify(props.item));
      //localStorage.setData("cart", JSON.stringify(props.item));
      console.log(localStorage.getItem("cart"));
    } else {
      alert("Please Login First");
    }
  };

  return (
    <div className="">
      <div className="card p-5 max-w-md shadow-xl bg-gray-600 rounded-md">
        <Link to="/detail">
          <figure>
            <img
              src="https://nzxt.com/assets/cms/34299/1626207059-starterpc3-white-2000x2000-hero.png?fit=crop&fm=jpg&h=1000&w=1000"
              alt="Shoes"
            />
          </figure>
        </Link>
        <div className="text-white">
          <h2 className="font-bold py-2">{props.nameitem}</h2>
          <p>Rp. {props.priceitem}</p>
          <div className="card-actions justify-end text-center">
            <div className="pt-3">
              <button
                onClick={handleAddCart}
                className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
