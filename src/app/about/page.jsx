// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <>
     <Head>
  <meta property="og:title" content="Milan Thapa - Full-Stack Developer" />
  <meta property="og:description" content="Check out my web development projects and skills." />

  <meta property="og:url" content="https://milanthap1.com.np" />
 
</Head>
    <section className="py-20 bg-gray-100 text-gray-900 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About Me</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          I am a passionate Full-Stack Developer with a deep love for building responsive
          and dynamic web applications. My expertise includes modern front-end and back-end
          technologies, and I am always eager to learn and implement the latest trends in web development.
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          With a strong foundation in React.js, Next.js, and Node.js, I focus on creating
          seamless user experiences and high-performance applications. Let's build something amazing together!
        </p>
      </div>
    </section>

    </>
  );
};

export default About;
