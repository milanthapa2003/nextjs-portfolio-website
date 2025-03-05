"use client"; // Ensure it runs on the client side

import React from "react";
import projects from "../../data/data"; // Import project data
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg p-4">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <Link href={project.liveUrl} target="_blank">
                <span className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
                  Live Demo
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
