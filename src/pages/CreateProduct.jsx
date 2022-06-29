import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

const CreateProduct = () => {
  return (
    <Layout>
      <Header></Header>
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
          <div className="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
            <div className="mb-4">
              <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">
                Create Product
              </h1>
            </div>
            <div className="max-w-sm rounded-lg shadow-m">
              <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
                alt="image"
              />
              <div className="px-6 py-4">
                <button
                  className="px-4 py-2 text-sm shadow bg-green-100 shadow-green-600 text-green-700 
      hover:bg-green-600 hover:text-green-100"
                >
                  Add
                </button>
                <button
                  className="px-4 py-2 text-sm shadow bg-red-100 shadow-red-600 text-red-700 
      hover:bg-red-600 hover:text-red-100"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
              <form method="POST" action="#">
                <div>
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="title"
                  >
                    Product Name
                  </label>

                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="product_name"
                    placeholder="180"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="title"
                  >
                    Price
                  </label>

                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="product_price"
                    placeholder="180"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="title"
                  >
                    Quantity
                  </label>

                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="product_price"
                    placeholder="180"
                  />
                </div>

                <div className="mt-4">
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="password"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="4"
                    placeholder="400"
                  ></textarea>
                </div>

                <div className="flex items-center justify-start mt-4 gap-x-2">
                  <button
                    type="submit"
                    className="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  >
                    Save
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
