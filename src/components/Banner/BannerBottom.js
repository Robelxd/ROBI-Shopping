import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import { BiShieldQuarter } from "react-icons/bi";

const BannerBottom = () => {
  const features = [
    {
      icon: <BiShieldQuarter />,
      title: "2 Years Warranty",
      description: "On all electronic items",
    },
    {
      icon: <MdLocalShipping />,
      title: "Free Shipping",
      description: "For orders over $50",
    },
    {
      icon: <CgRedo />,
      title: "30 Days Return",
      description: "Hassle-free return policy",
    },
  ];

  return (
    <div className="w-full px-4 py-8 bg-white border-b border-gray-200 border-solid">
      <div className="grid grid-cols-1 gap-6 mx-auto max-w-container sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 transition duration-300 border border-gray-100 border-solid rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-tr from-white to-gray-50"
          >
            <div className="text-3xl text-primeColor">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerBottom;
