import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);

  useEffect(() => {
    let price = 0;
    products.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price);
  }, [products]);

  useEffect(() => {
    if (totalAmt <= 200) setShippingCharge(30);
    else if (totalAmt <= 400) setShippingCharge(25);
    else setShippingCharge(20);
  }, [totalAmt]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      {products.length > 0 ? (
        <motion.div
          className="pb-20"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {/* Table Heading */}
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold shadow-sm">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>

          {/* Cart Items */}
          <motion.div className="mt-5 space-y-4">
            <AnimatePresence>
              {products.map((item) => (
                <motion.div key={item._id} variants={itemVariants}>
                  <ItemCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Reset Button */}
          <div className="mt-8">
            <button
              onClick={() => dispatch(resetCart())}
              className="py-2 px-8 bg-red-600 text-white rounded-md shadow hover:bg-red-800 transition-all duration-300"
            >
              🗑 Reset Cart
            </button>
          </div>

          {/* Coupon and Update Section */}
          <motion.div
            className="flex flex-col mdl:flex-row justify-between items-center gap-4 border py-4 px-6 mt-6 rounded-md shadow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 w-full mdl:w-auto">
              <input
                className="w-full mdl:w-52 h-9 px-4 border rounded-md text-primeColor text-sm outline-none border-gray-400 border-solid focus:ring-2 focus:ring-primeColor"
                type="text"
                placeholder="Enter Coupon Code"
              />
              <button className="text-sm font-semibold text-white bg-primeColor px-4 py-2 rounded-md hover:bg-black transition-all">
                Apply
              </button>
            </div>
            <p className="text-sm font-medium">🛒 Update Cart</p>
          </motion.div>

          {/* Total Section */}
          <motion.div
            className="max-w-7xl flex justify-end mt-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-full sm:w-96 flex flex-col gap-4 border p-6 rounded-md shadow">
              <h1 className="text-2xl font-bold text-right">Cart Totals</h1>
              <div className="text-base font-medium">
                <div className="flex justify-between py-2 border-b">
                  <span>Subtotal</span>
                  <span className="font-semibold">${totalAmt}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Shipping</span>
                  <span className="font-semibold">${shippingCharge}</span>
                </div>
                <div className="flex justify-between py-2 font-bold text-lg">
                  <span>Total</span>
                  <span>${totalAmt + shippingCharge}</span>
                </div>
              </div>
              <Link to="/paymentgateway" className="self-end">
                <button className="w-full h-10 bg-primeColor text-white hover:bg-black rounded-md transition duration-300">
                  🚀 Proceed to Checkout
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <img
            className="w-80 rounded-lg p-4 mx-auto"
            src={emptyCart}
            alt="emptyCart"
          />
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md px-8 py-2 font-titleFont font-semibold text-lg text-white hover:bg-black transition-all duration-300">
                🛍 Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
