"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      email: "",
      password: "",
    });
    if (!user.email) {
      setErrors((prev) => {
        return {
          ...prev,
          email: "Email is required",
        };
      });
    }
    if (user.email && !isValidEmail(user.email)) {
      setErrors((prev) => {
        return {
          ...prev,
          email: "Email is invalid",
        };
      });
    }
    if (!user.password) {
      setErrors((prev) => {
        return {
          ...prev,
          password: "Password is required",
        };
      });
    }
    if (
      !user.password ||
      !user.email ||
      (user.email && !isValidEmail(user.email))
    ) {
      return;
    }
  };
  return (
    <div className="flex justify-center py-4">
      <div class="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-lg text-center font-bold mb-4">Login</h2>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={user.email}
            />
            {errors.email && <p class="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
            />
            {errors.password && (
              <p class="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>
          <div class="flex flex-col">
            <Link
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mb-4"
              href="/signup"
            >
              Don't have an account? Sign up
            </Link>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
