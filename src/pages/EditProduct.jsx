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
                Edit Product
              </h1>
            </div>

            <div className="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
              <form method="POST" action="#">
                <div>
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="img"
                  >
                    image source
                  </label>

                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="image_source"
                    placeholder="180"
                    value="Image"
                  />
                </div>

                <div className="mt-4">
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="name"
                  >
                    Product Name
                  </label>

                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="prdoduct_name"
                    placeholder="180"
                    value="Keyboard Dell"
                  />
                </div>

                <div className="mt-4">
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="price"
                  >
                    Price
                  </label>

                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="product_price"
                    placeholder="180"
                    value="Rp.400.000"
                  />
                </div>

                <div className="mt-4">
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="quantity"
                  >
                    Quantity
                  </label>

                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="Quantity"
                    placeholder="180"
                    value="Rp.400.000"
                  />
                </div>

                <div className="mt-4">
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="description"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="4"
                    placeholder="400"
                  >
                    lorem ipsum dolor sit amet, consectet
                  </textarea>
                </div>

                <div className="flex items-center justify-start mt-4 gap-x-2">
                  <button
                    type="submit"
                    className="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-orange-500 hover:bg-orange-700 focus:outline-none focus:border-gray-900 focus:ring ring-orange-300"
                  >
                    Update
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
