import React from "react";
import HeroImg from "../assets/images/pcgaming.png";

function Hero() {
  return (
    <div>
      <div class="bg-gray-200 ">
        <div class="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
          <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div class="max-w-lg">
              <h1 class="text-xl tracking-wide text-white  lg:text-3xl font-bold">
                KAMI SIAP MELAYANI
              </h1>
              <p class="mt-4 text-yellow-300 font-bold">
                KEBUTUHAN TEKNOLOGI ANDA
              </p>
              <div class="mt-6">
                <a
                  href=" "
                  className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400"
                >
                  Product
                </a>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <img
              class="object-cover w-full max-w-2xl rounded-md lg:h-full"
              src={HeroImg}
              alt="apple watch photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
