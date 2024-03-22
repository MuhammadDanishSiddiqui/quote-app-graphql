"use client";
import { SIGNUP_USER } from "@/gqlOperations/mutations";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const [signUpUser, { data, loading, error }] = useMutation(SIGNUP_USER);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
    if (!newUser.first_name) {
      setErrors((prev) => {
        return {
          ...prev,
          first_name: "First name is required",
        };
      });
    }
    if (!newUser.last_name) {
      setErrors((prev) => {
        return {
          ...prev,
          last_name: "Last name is required",
        };
      });
    }
    if (!newUser.email) {
      setErrors((prev) => {
        return {
          ...prev,
          email: "Email is required",
        };
      });
    }
    if (newUser.email && !isValidEmail(newUser.email)) {
      setErrors((prev) => {
        return {
          ...prev,
          email: "Email is invalid",
        };
      });
    }
    if (!newUser.password) {
      setErrors((prev) => {
        return {
          ...prev,
          password: "Password is required",
        };
      });
    }
    if (
      !newUser.first_name ||
      !newUser.last_name ||
      !newUser.password ||
      !newUser.email ||
      (newUser.email && !isValidEmail(newUser.email))
    ) {
      return;
    }
    signUpUser({
      variables: {
        newUser,
      },
    });
  };
  return (
    <div className="flex justify-center py-4">
      <div class="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {error && (
            <p class="text-red-500 text-xs text-center mb-4">{error.message}</p>
          )}
          {data?.user && (
            <p class="text-green-500 text-xs text-center mb-4">
              You can now login!
            </p>
          )}
          <h2 className="text-lg text-center font-bold mb-4">Sign Up</h2>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="first_name"
            >
              First Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              name="first_name"
              type="text"
              disabled={loading}
              placeholder="First Name"
              onChange={handleChange}
              value={newUser.first_name}
            />
            {errors.first_name && (
              <p class="text-red-500 text-xs">{errors.first_name}</p>
            )}
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="last_name"
            >
              Last Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              name="last_name"
              type="text"
              disabled={loading}
              placeholder="Last Name"
              onChange={handleChange}
              value={newUser.last_name}
            />
            {errors.last_name && (
              <p class="text-red-500 text-xs">{errors.last_name}</p>
            )}
          </div>
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
              disabled={loading}
              placeholder="Email"
              onChange={handleChange}
              value={newUser.email}
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
              disabled={loading}
              placeholder="Password"
              onChange={handleChange}
              value={newUser.password}
            />
            {errors.password && (
              <p class="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>
          <div class="flex flex-col">
            <Link
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mb-4"
              href="/login"
            >
              Already have an account? Login
            </Link>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
