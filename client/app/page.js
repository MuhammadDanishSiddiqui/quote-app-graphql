"use client";
import { GET_ALL_QUOTES } from "@/gqlOperations/queries";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    console.log(error.message);
  }
  if (data?.quotes?.length == 0) {
    return <h1>No Quotes Found</h1>;
  }
  // useEffect(() => {
  //   fetch("http://localhost:4000", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: `
  //         query getAllQuotes{
  //           quotes{
  //             quote
  //             user{
  //               first_name
  //               last_name
  //             }
  //           }
  //         }
  //       `,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="container mx-auto flex flex-col py-4">
      {data?.quotes?.map(({ quote, user }) => {
        return (
          <div className="border-l-4 border-l-red-500 flex flex-col px-2 mb-4">
            <p>{quote}</p>
            <Link href={""} className="text-blue-500 self-end">
              ~{user?.first_name + " " + user?.last_name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
