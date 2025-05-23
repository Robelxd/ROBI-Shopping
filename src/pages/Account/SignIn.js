import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    let hasError = false;
    if (!email) {
      setErrEmail("Enter your email");
      hasError = true;
    } else {
      setErrEmail("");
    }

    if (!password) {
      setErrPassword("Enter your password");
      hasError = true;
    } else {
      setErrPassword("");
    }

    if (!hasError) {
      setIsLoading(true);
      setTimeout(() => {
        setSuccessMsg(`Welcome! Logged in as ${email}`);
        setEmail("");
        setPassword("");
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-center bg-cover"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/view-arrangement-with-keyboard-notebooks_23-2148847749.jpg')`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-white shadow-2xl bg-opacity-90 backdrop-blur-sm rounded-xl"
      >
        {successMsg ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-medium text-center text-green-600"
          >
            <p className="mb-6">{successMsg}</p>
            <Link to="/signup">
              <button className="w-full h-10 text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700">
                Go to Sign Up
              </button>
            </Link>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSignIn}
            className="flex flex-col gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Sign In to ROBI Store
            </h2>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full p-2 mt-1 border rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errEmail && <p className="mt-1 text-sm text-red-500">{errEmail}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-600">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-2 mt-1 border rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="mt-1 text-xs text-indigo-600 cursor-pointer hover:underline"
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </p>
              {errPassword && <p className="mt-1 text-sm text-red-500">{errPassword}</p>}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-2 text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>

            <p className="text-sm text-center text-gray-700">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-indigo-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default SignIn;
