import React from "react";

const Card = ({ title, year, poster }) => {
  return (
    <div className="bg-[#40407a] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-200">
      <img className="rounded-lg w-full h-full mb-2" src={poster} alt={title} />
      <h2 className="text-xl text-white font-bold">{title}</h2>
      <h2 className="text-lg text-white mb-2">Year : {year}</h2>
    </div>
  );
};

export default Card;
