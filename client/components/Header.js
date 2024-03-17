import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-purple-500 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href={"/"} className="text-2xl">
            Quote App
          </Link>
        </div>
        <div className="flex">
          <Link className="mr-4" href={"/login"}>
            Login
          </Link>
          <Link href={"/signup"}>Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
