import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import { productOfTheYear } from "../../../assets/images";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="relative w-full h-80 mb-20 bg-[#f3f3f3] font-titleFont overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={productOfTheYear}
          alt="Luxury Watch"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        {/* Content Layer */}
        <motion.div
          className="absolute top-0 right-0 flex flex-col items-start justify-center w-full gap-6 px-4 md:w-2/3 xl:w-1/2 h-full md:px-8 z-10 bg-gradient-to-l from-white/90 to-transparent"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1
            className="text-3xl font-semibold text-primeColor tracking-wide"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Product of The Year
          </motion.h1>
          <motion.p
            className="text-base font-normal text-primeColor max-w-[600px] mr-4 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover timeless elegance with our top-rated luxury watch. Crafted
            for those who value precision, prestige, and enduring design — it’s
            not just a timepiece, it’s a statement.
          </motion.p>
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ShopNow />
          </motion.div>
        </motion.div>
      </div>
    </Link>
  );
};

export default YearProduct;