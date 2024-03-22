"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const { push } = useRouter();
  const [token, setToken] = useState();
  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("token") && !token) {
        setToken(localStorage.getItem("token"));
      }
    }, 100);
  }, []);

  return (
    <div className="bg-purple-500 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href={"/"} className="text-2xl">
            Quote App
          </Link>
        </div>
        <div className="flex">
          {token ? (
            <>
              <Link className="mr-4" href={"/profile"}>
                Profile
              </Link>
              <Link className="mr-4" href={"/create"}>
                Create
              </Link>
              <button
                onClick={() => {
                  localStorage.clear();
                  setToken("");
                  push("/login");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="mr-4" href={"/login"}>
                Login
              </Link>
              <Link href={"/signup"}>Signup</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
