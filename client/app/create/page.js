"use client";
import { CREATE_QUOTE } from "@/gqlOperations/mutations";
import { GET_ALL_QUOTES, GET_MY_PROFILE } from "@/gqlOperations/queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [quote, setQuote] = useState("");
  const [createQuote, { data, loading, error }] = useMutation(CREATE_QUOTE);
  const { push } = useRouter();

  const handleCreate = () => {
    createQuote({
      variables: {
        quote,
      },
      refetchQueries: [{ query: GET_ALL_QUOTES }, { query: GET_MY_PROFILE }],
    });
  };

  if (error) {
    console.log("error", error.message);
  }
  if (data) {
    alert("Quote created successfully");
    push("/");
  }

  return (
    <div className="container mx-auto flex flex-col items-center py-4">
      <div className="flex flex-col items-start w-3/4">
        <input
          className="w-full border-b border-black outline-none p-2"
          placeholder="Enter your quote"
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button
          disabled={loading || !quote}
          onClick={() => handleCreate()}
          className="my-4 disabled:bg-gray-500 bg-green-500 px-4 py-2 text-white rounded-lg"
        >
          Create
        </button>
      </div>
      {error && (
        <p class="text-red-500 text-xs text-center mb-4">{error.message}</p>
      )}
    </div>
  );
};

export default page;
