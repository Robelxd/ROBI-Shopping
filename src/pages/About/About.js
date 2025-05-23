import React from "react";
import { FaHandshake, FaRocket, FaGem } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primeColor mb-4">About ROBI Store</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ROBI Store is your one-stop destination for modern, affordable, and top-quality products in electronics, fashion, and lifestyle.
        </p>
      </div>

      {/* Sections */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Mission */}
        <div className="group bg-gray-100 hover:bg-primeColor transition p-6 rounded-xl text-center shadow hover:shadow-xl">
          <div className="text-4xl mb-4 text-primeColor group-hover:text-white">
            <FaRocket />
          </div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Our Mission</h2>
          <p className="text-gray-600 group-hover:text-gray-100">
            To empower everyday living by delivering exceptional products at unmatched value through seamless online experiences.
          </p>
        </div>

        {/* Vision */}
        <div className="group bg-gray-100 hover:bg-primeColor transition p-6 rounded-xl text-center shadow hover:shadow-xl">
          <div className="text-4xl mb-4 text-primeColor group-hover:text-white">
            <FaGem />
          </div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Our Vision</h2>
          <p className="text-gray-600 group-hover:text-gray-100">
            To become a household name for smart shopping in Africa and beyond — combining innovation, trust, and convenience.
          </p>
        </div>

        {/* Values */}
        <div className="group bg-gray-100 hover:bg-primeColor transition p-6 rounded-xl text-center shadow hover:shadow-xl">
          <div className="text-4xl mb-4 text-primeColor group-hover:text-white">
            <FaHandshake />
          </div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Core Values</h2>
          <p className="text-gray-600 group-hover:text-gray-100">
            Customer-first approach, integrity, quality, and innovation are the cornerstones of everything we do.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primeColor mb-4">Why Choose ROBI Store?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’re not just a store — we’re a movement to make smart living accessible for everyone. Experience fast delivery, unbeatable deals, and a support team that truly listens.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center">
        <a
          href="/shop"
          className="inline-block bg-primeColor text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
        >
          Start Shopping
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
