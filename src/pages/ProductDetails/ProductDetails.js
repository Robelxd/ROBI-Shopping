import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    setProductInfo(location.state?.item || {});
    setPrevLocation(location.pathname);
  }, [location]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300 border-solid bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Breadcrumbs title={productInfo.title || "Product"} prevLocation={prevLocation} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 py-8"
        >
          {/* Sidebar: Products On Sale */}
          <div className="xl:col-span-1 hidden xl:block">
            <ProductsOnSale />
          </div>

          {/* Product Image */}
          <div className="md:col-span-1 xl:col-span-2 flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-[400px] xl:h-[480px] bg-white shadow-md rounded-xl overflow-hidden p-4"
            >
              <img
                src={productInfo.img}
                alt={productInfo.title}
                className="w-full h-full object-contain transition-transform duration-300"
              />
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="md:col-span-1 xl:col-span-3">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white shadow-md p-6 rounded-xl"
            >
              <ProductInfo productInfo={productInfo} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
