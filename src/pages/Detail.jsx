import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ImgDetail from "../assets/images/samsung-ssd.jpeg";

function Detail() {
  return (
    <Layout>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div
          className="grid md:grid-cols-4 gri
        d-cols-1 gap-4 my-20 "
        >
          <div className="col-start-2 col-end-">
            <img
              src={ImgDetail}
              alt="img-detail"
              className="w-100 h-100 object-center"
            />
          </div>
          <div className=" flex flex-col justify-center  ">
            <h1 className="text-2xl my-5">Samsung SSD Internal</h1>
            <p className="my-5">Rp.750,000.-</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Detail;
