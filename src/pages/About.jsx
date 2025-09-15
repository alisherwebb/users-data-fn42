import React from "react";
import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";

function About() {
  const { id } = useParams();
  const { data, error, loading } = useGetData(id);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
        <span className="loading loading-spinner loading-lg text-[#e3c39d]"></span>
      </div>
    );
  }
  if (error)
    return (
      <h2 className="text-red-500 text-center text-2xl mt-20 font-semibold">
        {error}
      </h2>
    );
  if (!data)
    return (
      <h2 className="text-gray-300 text-center text-xl mt-20">
        Xatolik yuz berdi
      </h2>
    );

  return (
    <div className="container mx-auto px-4">
      <div
        className="max-w-2xl mt-20 mx-auto p-10 rounded-2xl
        bg-[#212842] border border-white/10 shadow-2xl"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          User ma’lumotlari
        </h1>

        <div className="space-y-5 text-lg text-gray-200">
          <p>
            <span className="font-semibold text-[#e3c39d]">Name:</span>{" "}
            {data.name}
          </p>
          <p>
            <span className="font-semibold text-[#e3c39d]">Username:</span>{" "}
            {data.username}
          </p>
          <p>
            <span className="font-semibold text-[#e3c39d]">Email:</span>{" "}
            {data.email}
          </p>
          <p>
            <span className="font-semibold text-[#e3c39d]">Phone:</span>{" "}
            {data.phone}
          </p>
          <p>
            <span className="font-semibold text-[#e3c39d]">Website:</span>{" "}
            {data.website}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
