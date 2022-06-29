import React from "react";
import { Link } from "react-router-dom";

function Card() {
  const myClick = () => {
    alert("Added to Cart");
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
          <h2 className="font-bold py-2">Asus latitude</h2>
          <p>Rp. 4.500.000</p>
          <div className="card-actions justify-end text-center">
            <div className="pt-3">
              <button
                onClick={myClick}
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
}

export default Card;
