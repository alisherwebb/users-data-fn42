import React from "react";
import useGetData from "../hooks/useGetData";
import { Link } from "react-router-dom";

function Home() {
  const { data, error, loading } = useGetData();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-blue-500"></span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 font-semibold text-xl">
        Xatolik yuz berdi!
      </div>
    );
  }
  return (
    <div className="min-h-screen text-white p-6">
      <h1 className="flex justify-center text-3xl md:text-4xl font-bold mb-8 tracking-wide">
         Foydalanuvchilar:
      </h1>

      {data && (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((obj) => (
            <li key={obj.id}>
              <Link
                to={"/about/" + obj.id}
                className="block bg-[#212842] hover:bg-[#2b3559] transition-colors duration-300 
                           shadow-md hover:shadow-xl rounded-xl px-5 py-4 
                           text-lg font-medium tracking-wide text-[#f0e7d5]"
              >
                {obj.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
