import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";
import { motion } from "framer-motion";

const productData = [
  {
    _id: "1101",
    img: spfOne,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Stylish cap perfect for sunny days and outdoor adventures.",
  },
  {
    _id: "1102",
    img: spfTwo,
    productName: "Tea Table",
    price: "180.00",
    color: "Gray",
    badge: true,
    des: "Modern tea table with a sleek finish, ideal for any living space.",
  },
  {
    _id: "1103",
    img: spfThree,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Experience crystal-clear audio with these stylish, comfortable headphones.",
  },
  {
    _id: "1104",
    img: spfFour,
    productName: "Sun Glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Premium sunglasses that combine UV protection with bold style.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {productData.map((product) => (
          <motion.div key={product._id} variants={itemVariants}>
            <Product {...product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SpecialOffers;
