import React from "react";
import useGetData from "../hooks/useGetData";
import { Link } from "react-router-dom";

function Home() {
  const { data, error, loading } = useGetData();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="flex justify-center text-4xl">Mahsulotlar:</h1>
      {data && (
        <ul className="flex flex-col gap-5 p-5 ">
          {data.map((obj) => (
            <li key={obj.id}>
              <Link
                to={"/about/" + obj.id}
                className="flex bg-[#212842] font-normal text-[#f0e7d5] px-4 py-2 rounded"
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
