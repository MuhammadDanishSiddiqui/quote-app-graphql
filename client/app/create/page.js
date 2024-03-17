import React from "react";

const page = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-4">
      <div className="flex flex-col items-start w-3/4">
        <input
          className="w-full border-b border-black outline-none p-2"
          placeholder="Enter your quote"
          type="text"
        />
        <button className="my-4 bg-green-500 px-4 py-2 text-white rounded-lg">
          Create
        </button>
      </div>
    </div>
  );
};

export default page;
