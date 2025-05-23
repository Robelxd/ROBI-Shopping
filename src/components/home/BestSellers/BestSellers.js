import React from "react";
import { motion } from "framer-motion";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  const products = [
    {
      _id: "1011",
      img: bestSellerOne,
      productName: "Flower Base",
      price: "35.00",
      color: "Black and White",
      badge: true,
    },
    {
      _id: "1012",
      img: bestSellerTwo,
      productName: "New Backpack",
      price: "180.00",
      color: "Gray",
      badge: false,
    },
    {
      _id: "1013",
      img: bestSellerThree,
      productName: "Household Materials",
      price: "25.00",
      color: "Mixed",
      badge: true,
    },
    {
      _id: "1014",
      img: bestSellerFour,
      productName: "Travel Bag",
      price: "220.00",
      color: "Black",
      badge: false,
    },
  ];

  return (
    <div className="w-full py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="px-4 mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Heading heading="🔥 Our Bestsellers" />
          <p className="text-center text-gray-500 text-sm mt-[-8px] mb-10">
            Discover the products our customers love the most
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {products.map((product, i) => (
            <motion.div
              key={product._id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.97 }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className="transition-transform duration-300"
            >
              <Product
                {...product}
                des="Top rated, premium quality and a customer favorite!"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BestSellers;
