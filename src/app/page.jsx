// src/components/Hero.jsx
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>


<section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Hi, I'm Milan</h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-6">
        A passionate Full-Stack Developer creating beautiful & responsive websites.
      </p>
      <div className="flex space-x-4">
        <Link href="/portfolio" className="px-6 py-3 text-lg bg-cyan-500 hover:bg-cyan-400 transition rounded-lg font-semibold">
          View Portfolio
        </Link>
        <Link href="/contact" className="px-6 py-3 text-lg border-2 border-white hover:bg-white hover:text-gray-900 transition rounded-lg font-semibold">
          Contact Me
        </Link>
      </div>
    </section>
    </>
   
  );
};

export default Hero;
