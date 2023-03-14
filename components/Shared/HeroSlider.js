import React from "react";

const HeroSlider = () => {
  return (
    <div className="hero-slider py-10">
      <div className="container">
        <div className="px-6 max-w-lg">
          <h1 className="text-black md:text-6xl text-2xl">
            Shop&nbsp;
            <span className="text-secondaryLight font-normal">
              Computer & experience
            </span>
          </h1>

          <div className="my-2">
            <p className="text-sm text-black max-w-sm ">
              You cannot inspect quality into the product; it is already there.
            </p>

            <p className="text-sm text-black max-w-sm">
              I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
          </div>

          <button className="py-2 px-6 bg-secondaryDeep text-white rounded text-sm">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
