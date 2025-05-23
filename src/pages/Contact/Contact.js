import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  const EmailValidation = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) setErrClientName("Please enter your name");
    if (!email) setErrEmail("Please enter your email");
    else if (!EmailValidation(email)) setErrEmail("Invalid email address");
    if (!messages) setErrMessages("Please enter your message");

    if (clientName && EmailValidation(email) && messages) {
      setSuccessMsg(`Thank you, ${clientName}! We've received your message and will reach out at ${email}.`);
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-3 py-12 text-gray-800">
      <Breadcrumbs title="Contact Us" prevLocation={prevLocation} />

      <div className="grid md:grid-cols-2 gap-12 mt-10">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primeColor">Get in Touch with ROBI Store</h2>
          <p className="text-gray-600">
            Whether you have a question about products, orders, or partnership opportunities — we're here to help!
          </p>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-primeColor mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm">+251-912-345-678</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-primeColor mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm">support@robistore.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-primeColor mt-1" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm">Jemo, Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handlePost} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-primeColor">Send Us a Message</h2>

          {successMsg && (
            <p className="text-green-600 font-medium">{successMsg}</p>
          )}

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={clientName}
              onChange={handleName}
              placeholder="Your full name"
              className="w-full mt-1 p-2 border rounded focus:ring-2 ring-primeColor outline-none"
            />
            {errClientName && <p className="text-sm text-red-500 mt-1">{errClientName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="you@example.com"
              className="w-full mt-1 p-2 border rounded focus:ring-2 ring-primeColor outline-none"
            />
            {errEmail && <p className="text-sm text-red-500 mt-1">{errEmail}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              value={messages}
              onChange={handleMessages}
              rows={4}
              placeholder="Tell us what you need..."
              className="w-full mt-1 p-2 border rounded focus:ring-2 ring-primeColor outline-none resize-none"
            />
            {errMessages && <p className="text-sm text-red-500 mt-1">{errMessages}</p>}
          </div>

          <button
            type="submit"
            className="bg-primeColor hover:bg-black text-white font-semibold px-6 py-2 rounded shadow transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
