import React from "react";

function Card() {
  return (
    <div className="p-5">
      <div className="card p-5 max-w-md shadow-xl bg-gray-400 rounded-md">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="text-white">
          <h2 className="font-bold py-2">Asus latitude</h2>
          <p>Rp. 4.500.000</p>
          <div className="card-actions justify-end text-center">
            <div className="pt-3">
              <a
                href=" "
                className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
