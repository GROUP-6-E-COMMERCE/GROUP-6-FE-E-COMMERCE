import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Layout from "../components/Layout";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [qty, setQty] = useState();
  const [desc, setDesc] = useState("");
  //const [image, setImage] = useState("");

  const handleSave = () => {
    axios({
      method: "post",
      url: "http://18.204.209.223/products",
      data: {
        name: name,
        price: +price,
        qty: +qty,
        desc: desc,
        //image: image,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        const { data } = res;
        console.log(data);
        localStorage("products", JSON.stringify(data.data));
        alert(data.message);
      })
      .catch((err) => console.log(err));
  };

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
            <div className="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
              <form onSubmit={(e) => handleSave(e)}>
                <div>
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="title"
                  >
                    Image source
                  </label>

                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="product_name"
                    placeholder=""
                    //onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="mt-4">
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
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="title"
                  >
                    Price
                  </label>

                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="number"
                    name="product_price"
                    placeholder=""
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <label
                    className="block text-sm font-bold text-gray-700"
                    for="title"
                  >
                    Quantity
                  </label>
                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="number"
                    name="product_price"
                    placeholder=""
                    onChange={(e) => setQty(e.target.value)}
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
                    placeholder=""
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>

                <div className="flex items-center justify-start mt-4 gap-x-2">
                  <button
                    type="submit"
                    className="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-orange-500 hover:bg-orange-700 focus:outline-none focus:border-orange-900 focus:ring ring-gray-300"
                  >
                    Save
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
