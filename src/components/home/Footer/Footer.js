import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";

const shopLinks = ["Accessories", "Clothes", "Electronics", "Home Appliances", "New Arrivals"];
const accountLinks = ["Profile", "Orders", "Addresses", "Account Details", "Payment Options"];
const socialLinks = [
  { icon: <FaYoutube />, href: "https://www.youtube.com/" },
  { icon: <FaGithub />, href: "https://github.com/" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#1f1f1f] text-gray-300 py-16 mt-16">
      <div className="max-w-container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <FooterListTitle title="About Orebi Shop" />
          <p className="text-sm leading-6 text-gray-400">
            ROBI Shop is your one-stop destination for premium electronics, stylish fashion, and
            home essentials — blending quality and affordability to elevate your everyday living.
          </p>
          <div className="flex gap-3 mt-5">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-white text-black hover:text-white hover:bg-primeColor rounded-full flex items-center justify-center transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <FooterListTitle title="Shop" />
          <ul className="space-y-2 mt-4">
            {shopLinks.map((link, idx) => (
              <li
                key={idx}
                className="text-sm hover:text-white hover:underline underline-offset-2 cursor-pointer transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Account Links */}
        <div>
          <FooterListTitle title="Your Account" />
          <ul className="space-y-2 mt-4">
            {accountLinks.map((link, idx) => (
              <li
                key={idx}
                className="text-sm hover:text-white hover:underline underline-offset-2 cursor-pointer transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <FooterListTitle title="Contact Us" />
          <div className="mt-4 text-sm text-gray-400 space-y-2">
            <p>Email: <a href="mailto:support@robistore.com" className="text-white hover:underline">support@robistore.com</a></p>
            <p>Phone: +251 456 7890</p>
            <p>Support: Mon - Fri (9AM - 6PM)</p>
            <p>Address: Jemo, Adiss Ababa</p>
          </div>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ROBI Shop. All rights reserved. <a href="https://robeldoba.vercel.app/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by Rob
            </span>
          </a>
      </div>
    </footer>
  );
};

export default Footer;
