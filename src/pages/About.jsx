import React from "react";
import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";

function About() {
  const { id } = useParams();
  const { data, error, loading } = useGetData(id);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (error) return <h2 className="text-red-500 text-center">{error}</h2>;
  if (!data) return <h2 className="text-center">Xatolik yuz berdi</h2>;
  return (
    <div className="container">
      <div
        className="max-w-xl mt-20 mx-auto p-8 bg-gradient-to-br bg-[#212842]
                text-white rounded-xl"
      >
        <h1 className="text-4xl font-bold mb-6 text-[rgb(227,195,157,0.4)] text-center">
          User ma’lumotlari
        </h1>

        <div className="space-y-3 text-lg ">
          <p>
            <span className="font-semibold text-[rgb(227,195,157,0.4)]">
              Name:
            </span>{" "}
            {data.name}
          </p>
          <p>
            <span className="font-semibold text-[rgb(227,195,157,0.4)]">
              Username:
            </span>{" "}
            {data.username}
          </p>
          <p>
            <span className="font-semibold text-[rgb(227,195,157,0.4)]">
              Email:
            </span>{" "}
            {data.email}
          </p>
          <p>
            <span className="font-semibold text-[rgb(227,195,157,0.4)]">
              Phone :
            </span>{" "}
            {data.phone}
          </p>
          <p>
            <span className="font-semibold text-[rgb(227,195,157,0.4)]">
              Website:
            </span>{" "}
            {data.website}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
