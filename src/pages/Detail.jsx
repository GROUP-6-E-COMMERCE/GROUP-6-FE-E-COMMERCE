import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ImgDetail from "../assets/images/samsung-ssd.jpeg";

function Detail() {
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
              Samsung SSD Internal
            </div>
            <p className="text-gray-700 text-base mb-3">Rp.750,000.-</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-col-1 px-5 mx-5 bg-white">
        <h2 className="font-bold mb-3">Description</h2>
        <p className="mb-5">
          Samsung SSD 870 EVO 250GB 500GB 1TB 2.5" SATA III Internal SSD The
          perfect choice for creators, IT professionals or everyday users, the
          latest 870 EVO has indisputable performance, reliability and
          compatibility built upon Samsung's pioneering technology. Excellence
          in performance Everyday users can now enjoy professional-level SSD
          performance with the 870 EVO, which maximizes the SATA interface limit
          to 560/530 MB/s sequential speeds, * accelerates write speeds and
          maintains long-term high performance with a larger variable buffer
          that lets the SSD work faster, longer.
        </p>
      </div>
    </Layout>
  );
}

export default Detail;
