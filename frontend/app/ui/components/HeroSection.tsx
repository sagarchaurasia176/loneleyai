"use client"

import Image from "next/image";
import React from "react";
const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12">
      {/* center container */}
      <div className="w-full text-center p-12">
        {/* heading */}
        <div className="mb-6 p-4">
          <h1 className=" text-9xl sm:text-4xl md:text-8xl font-bold ">
            You're Never Truly
          </h1>
          <h2 className="text-6xl sm:text-5xl md:text-7xl font-bold text-amber-700">
            Alone
          </h2>
        </div>

        {/* description */}
        <p className="text-sm sm:text-base  font-stretch-50% md:text-lg text-gray-700 max-w-2xl mx-auto">
          Practice meaningful conversations with AI. Build confidence, improve your communication skills, and find your voice in a supportive, judgment-free environment.
        </p>

        {/* button (optional) */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">
            Start Talking Now
          </button>
        </div>
        {/* video palyer  */}
        <div className=" mt-5">
            <Image src="https://res.cloudinary.com/dc3mdr2ol/image/upload/v1766000157/Whisk_741c45d0935943787124e1b96f4fd391dr_pdzhsu.jpg"
              width={800}
              height={400}
            alt="Image"
            className="w-full rounded-b-full h-fit"
            />

        </div>

      </div>
    </div>
  );
};

export default HeroSection;
