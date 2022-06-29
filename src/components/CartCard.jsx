import React from "react";

function Card() {
  return (
    <div className="text-sm px-10 md:px-20 ">
      <div className="flex justify-between  w-full bg-white shadow-lg">
        <div className="md:flex">
          <img
            className="w-full h-auto p-5"
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
          <div className="px-5 md:p-5 justify-self-start w-full">
            <p className="font-bold">Asus latitude</p>
            <p>Rp.4.500.000</p>
          </div>
        </div>

        <div className="p-5">
          <div className=" card-actions justify-end text-center ">
            <div className="qty flex relative">
              <div className="p-2">Qty</div>
              <select
                className="block appearance-none w-10 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <div classname="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="p-5">Subtotal Rp.4.500.000</div>
            <div className="">
              <a
                href=" "
                className="inline-block px-3 py-2 font-semibold text-center border-2 border-yellow-500 text-yellow-500 transition-colors duration-200 transform bg-white rounded-md hover:bg-yellow-400 hover:text-white"
              >
                Remove
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
