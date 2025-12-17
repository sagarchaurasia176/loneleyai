import React from "react";
import { ChooseUsData } from "./data/whyChooseUsData";

const WhyChoose = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="w-full max-w-7xl text-center p-4 sm:p-8 md:p-12">
        <div className="mb-6 p-2 sm:p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold ">
            Why Choose Lonely.AI?
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          We understand that improving communication skills can feel daunting.
          That's why we created a space that feels safe, supportive, and
          understanding.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {ChooseUsData.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 border border-zinc-200 rounded-2xl shadow hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center p-8 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50"
            >
              <item.logo size={48} className="text-purple-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-zinc-900">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.descp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
