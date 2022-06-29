import React from "react";
import HeroImg from "../assets/images/pcgaming.png";

function Hero() {
  return (
    <div className="h-1/2">
      <div className="bg-gray-200">
        <div className="container  py-4 mx-auto md:flex lg:h-128 lg:py-8 ">
          <div className="flex items-center justify-center flex-col  w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
              <h1 className="text-xl tracking-wide text-white  lg:text-3xl font-bold">
                KAMI SIAP MELAYANI
              </h1>
              <p className="mt-4 text-yellow-300 font-bold">
                KEBUTUHAN TEKNOLOGI ANDA
              </p>
              <div className="mt-6">
                <a
                  href=" "
                  className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400"
                >
                  Product
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-2  lg:h-72 lg:w-1/2">
            <img
              className="object-cover w-auto rounded-md sm:w-96 lg:w-2xl"
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
