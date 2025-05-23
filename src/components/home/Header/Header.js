import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logoLight } from "../../../assets/images";
import { logo8 } from "../../../assets/images";
import { navBarList } from "../../../constants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth >= 667);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 border-solid">
      <nav className="max-w-container h-20 mx-auto px-4 flex items-center justify-between md:justify-center gap-4">
        {/* Desktop Layout (Logo + Nav) */}
        <div className="flex items-center justify-center gap-10 w-full">
          {/* Logo with hover animation */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                src={logo8}
                alt="logo"
                className="w-10 h-10 rounded-full shadow-md transition duration-300 hover:shadow-xl"
              />
              <p className="text-xl font-extrabold tracking-wide text-gray-800">
                ROBI STORE
              </p>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          {showMenu && (
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-8"
            >
              {navBarList.map(({ _id, title, link }) => (
                <NavLink
                  key={_id}
                  to={link}
                  className={({ isActive }) =>
                    `relative text-[16px] font-medium transition duration-300 ${
                      isActive ? "text-black" : "text-gray-500"
                    } after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300 hover:text-black`
                  }
                  state={{ data: location.pathname.split("/")[1] }}
                >
                  <li>{title}</li>
                </NavLink>
              ))}
            </motion.ul>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <HiMenuAlt2
          onClick={() => setSidenav(true)}
          className="md:hidden text-3xl cursor-pointer text-gray-700"
        />

        {/* Mobile Sidenav */}
        {sidenav && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70">
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-[80%] h-full bg-white p-6 relative"
            >
              <img className="w-28 mb-6" src={logoLight} alt="logo" />

              {/* Nav Links */}
              <ul className="flex flex-col gap-4">
                {navBarList.map((item) => (
                  <li key={item._id}>
                    <NavLink
                      to={item.link}
                      state={{ data: location.pathname.split("/")[1] }}
                      onClick={() => setSidenav(false)}
                      className="block text-lg font-medium text-gray-700 hover:text-primeColor transition"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Category Dropdown */}
              <div className="mt-6">
                <h2
                  onClick={() => setCategory(!category)}
                  className="flex justify-between items-center text-base font-semibold cursor-pointer"
                >
                  Shop by Category <span>{category ? "-" : "+"}</span>
                </h2>
                {category && (
                  <motion.ul
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 ml-2 text-sm flex flex-col gap-1"
                  >
                    <li className="hover:text-primeColor cursor-pointer">
                      New Arrivals
                    </li>
                    <li className="hover:text-primeColor cursor-pointer">
                      Gadgets
                    </li>
                    <li className="hover:text-primeColor cursor-pointer">
                      Accessories
                    </li>
                    <li className="hover:text-primeColor cursor-pointer">
                      Electronics
                    </li>
                    <li className="hover:text-primeColor cursor-pointer">
                      Others
                    </li>
                  </motion.ul>
                )}
              </div>

              {/* Brand Dropdown */}
              <div className="mt-4">
                <h2
                  onClick={() => setBrand(!brand)}
                  className="flex justify-between items-center text-base font-semibold cursor-pointer"
                >
                  Shop by Brand <span>{brand ? "-" : "+"}</span>
                </h2>
                {brand && (
                  <motion.ul
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 ml-2 text-sm flex flex-col gap-1"
                  >
                    <li className="hover:text-primeColor cursor-pointer">
                      Apple
                    </li>
                    <li className="hover:text-primeColor cursor-pointer">
                      Samsung
                    </li>
                    <li className="hover:text-primeColor cursor-pointer">
                      Huawei
                    </li>
                    <li className="hover:text-primeColor cursor-pointer">
                      Xiaomi
                    </li>
                    <li className="hover:text-primeColor cursor-pointer">
                      Other Brands
                    </li>
                  </motion.ul>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSidenav(false)}
                className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-2xl"
              >
                <MdClose />
              </button>
            </motion.div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
