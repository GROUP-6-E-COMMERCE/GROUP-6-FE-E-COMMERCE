import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ImgDetail from "../assets/images/samsung-ssd.jpeg";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGetData();
  }, []);

  const fetchGetData = () => {
    const { detail_id } = params;
    console.log(params);
    axios({
      method: "get",
      url: `http://18.204.209.223/products/${detail_id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        const { data } = res;
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log(err.toString()));
  };

  return (
    <Layout>
      <Header />
      <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center mt-24">
        <div className="h-48 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img src={ImgDetail} alt="img-detail" />
        </div>
        <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-3">
              {data.name}
            </div>
            <p className="text-gray-700 text-base mb-3">{data.price}</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-col-1 px-5 mx-5 bg-white">
        <h2 className="font-bold mb-3">Description</h2>
        <p className="mb-5">{data.desc}</p>
      </div>
    </Layout>
  );
};

export default Detail;
