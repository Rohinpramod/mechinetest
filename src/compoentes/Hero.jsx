import React from "react";
import HeroImg from "../assets/gym.jpg";

const Hero = () => {
  return (
    <div>
      <div className="relative text-center text-white ">
        <img className="w-full h-150" src={HeroImg}></img>
        <div className=" w-full absolute top-0 left-0 text-center mt-10">
          <h2 className="text-4xl font-bold text-center">
            Transform Your Body, Transform Your Life!
          </h2>
        </div>
        <div className="flex justify-center">
          <button className="absolute top-25 text-center cursor-pointer hover:bg-gray-400 bg-white font-bold text-black p-3 rounded-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
