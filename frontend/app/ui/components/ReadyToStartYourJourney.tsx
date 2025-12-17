import React from "react";

const ReadyToStartYourJourney = () => {
  return (
    <div className=" w-full h-full  py-5 px-5">
      {/* ready to start your journey */}
      <div className=" w-full h-full bg-blue-100 rounded-3xl flex flex-col justify-center items-center gap-8 p-8">
        <h2 className=" text-4xl font-bold text-center">
          Ready to Start Your Journey?
        </h2>
        <p className=" text-center text-lg">
          Join thousands of parents who are using My BabyAI to make informed
          decisions about their baby's health and development.
        </p>
        <button className=" bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default ReadyToStartYourJourney;
