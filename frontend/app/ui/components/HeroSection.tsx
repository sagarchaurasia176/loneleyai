
"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-100 py-16 px-4">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center text-center shadow-xl rounded-3xl bg-white/80 backdrop-blur-md p-8 border border-amber-100">
        <div className="w-full overflow-hidden rounded-b-full shadow-lg">
          <Image
            src="https://res.cloudinary.com/dc3mdr2ol/image/upload/v1766703602/Whisk_e25580f17eb0e369a044c50b57a2feb4dr_vtnzzz.jpg"
            width={800}
            height={400}
            alt="Hero Image"
            className="w-full h-auto object-cover rounded-b-full"
            priority
          />
        </div>
        <h1 className="mt-10 text-4xl md:text-5xl font-extrabold text-amber-700 drop-shadow-sm leading-tight">
          Welcome to <span className="text-amber-500">LonelyAI</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Your AI companion, always here to listen and chat. Start a conversation and experience the future of friendly AI interaction.
        </p>
        <div className="mt-10">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 hover:from-amber-600 hover:to-amber-700 transition-transform duration-200">
            Start Talking Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
