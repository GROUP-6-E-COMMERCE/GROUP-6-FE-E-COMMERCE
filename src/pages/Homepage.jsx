import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Hero from "../components/Hero";

const Homepage = () => {
  const state = {
    data: [
      {
        id: 1,
        title: "The Bad Guys",
        img: "https://lk21.live/wp-content/uploads/2022/05/The-Bad-Guys-2022-170x255.jpg",
      },
      {
        id: 2,
        title: "Turning Red",
        img: "https://lk21.live/wp-content/uploads/2022/03/Turning-Red-2022-170x255.jpg",
      },
      {
        id: 3,
        title: "Encanto",
        img: "https://lk21.live/wp-content/uploads/2022/03/Encanto-2021-170x255.jpg",
      },
      {
        id: 4,
        title: "Sing 2",
        img: "https://lk21.live/wp-content/uploads/2022/02/Sing-2-170x255.jpg",
      },
      {
        id: 5,
        title: "Dogtown 2",
        img: "https://lk21.live/wp-content/uploads/2022/02/Dogtown-2-2022-170x255.jpg",
      },
      {
        id: 6,
        title: "Birds Like Us",
        img: "https://lk21.live/wp-content/uploads/2022/02/Birds-Like-Us-2022-170x255.jpg",
      },
      {
        id: 7,
        title: "Sing 2",
        img: "https://lk21.live/wp-content/uploads/2022/02/Sing-2-170x255.jpg",
      },
      {
        id: 8,
        title: "Dogtown 2",
        img: "https://lk21.live/wp-content/uploads/2022/02/Dogtown-2-2022-170x255.jpg",
      },
    ],
  };

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <div className="text-center text-3xl font-bold p-5">List Product</div>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-5">
        {state.data.map((item, index) => (
          <Card key={index} img={item.img} title={item.title} />
        ))}
      </div>
      <div className="text-end p-5">
        <a
          href=" "
          className="inline-block px-3 py-2 font-semibold text-center border-2 border-yellow-500 text-yellow-500 transition-colors duration-200 transform bg-white rounded-md hover:bg-yellow-400 hover:text-white"
        >
          Load More
        </a>
      </div>
    </div>
  );
};

export default Homepage;
