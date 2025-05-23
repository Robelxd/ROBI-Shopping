import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      _id: "100001",
      img: newArrOne,
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
      badge: true,
    },
    {
      _id: "100002",
      img: newArrTwo,
      productName: "Smart Watch",
      price: "250.00",
      color: "Black",
      badge: true,
    },
    {
      _id: "100003",
      img: newArrThree,
      productName: "Cloth Basket",
      price: "80.00",
      color: "Mixed",
      badge: true,
    },
    {
      _id: "100004",
      img: newArrFour,
      productName: "Funny Toys for Babies",
      price: "60.00",
      color: "Mixed",
      badge: false,
    },
    {
      _id: "100005",
      img: newArrTwo,
      productName: "Stylish Headphones",
      price: "99.00",
      color: "Silver",
      badge: false,
    },
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="px-4 mx-auto max-w-container">
        <Heading heading="✨ New Arrivals" />
        <p className="text-center text-gray-500 text-sm mt-[-8px] mb-8">
          Discover the latest trending products just added to our store
        </p>
        <Slider {...settings}>
          {products.map((item, index) => (
            <div key={item._id} className="px-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="transition-all duration-300"
              >
                <Product
                  {...item}
                  des="High-quality and trending item for your everyday need."
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
