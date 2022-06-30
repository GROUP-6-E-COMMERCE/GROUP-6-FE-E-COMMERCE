import React from "react";
import HeroImg from "../assets/images/pcgaming.png";
import { Link } from "react-router-dom";

function Hero() {
  const loggedin = localStorage.getItem("token");
  const loggedout = !loggedin;

  return (
    <div className="h-1/2">
      <div className="bg-gray-200">
        <div className="container  py-4 mx-auto md:flex lg:h-128 lg:py-20">
          <div className="flex items-center justify-center flex-col  w-fit lg:flex-row px-5 lg:pl-40 ">
            <div className="max-w-lg">
              <p className="text-xl tracking-wide text-orange-500 lg:text-4xl  font-bold pb-3">
                AFFORDABLE PARTS
              </p>
              <p className="text-gray-500 font-bold text-4xl pb-3">
                FOR EVERY PC
              </p>
              <div hidden={loggedin} className="py-3">
                <Link to="/register">
                  <a
                    href=" "
                    className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400"
                  >
                    Register Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:h-72 lg:w-1/2">
            <img
              className="object-cover w-auto rounded-md sm:w-100 lg:w-2xl"
              src={HeroImg}
              alt=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
