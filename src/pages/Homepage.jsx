import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Hero from "../components/Hero";
import axios from "axios";
const Homepage = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    fetchLocalData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://18.204.209.223/products", {})
      .then((res) => {
        const { data } = res.data;
        setData(data);
      })
      .catch((err) =>
        //alert(err.toString())
        console.log(err.toString())
      )
      .finally(() => ({ loading: false }));
  };

  const fetchLocalData = () => {
    const temp = localStorage.getItem("cart");
    if (temp) {
      const tempData = JSON.parse(temp);
      setData(tempData);
      console.log(tempData);
    }
  };

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <div className="text-center text-3xl font-bold p-5">List Product</div>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-5">
        {data.map((item) => (
          <Card itemid={item.id} nameitem={item.name} priceitem={item.price} />
        ))}
      </div>
      <div className="text-end p-5">
        <a
          href=" "
          className="inline-block px-3 py-2 font-semibold text-center border-2 border-orange-500 text-orange-500 transition-colors duration-200 transform bg-white rounded-md hover:bg-orange-400 hover:text-white"
        >
          Load More
        </a>
      </div>
    </div>
  );
};

export default Homepage;
