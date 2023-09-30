import React from "react";
import { Card } from "./index";

const MovieCard = ({ allMovieData, loading }) => {
  return (
    <>
      {loading ? (
        <div className="flex justify-center ">
          <img
            className=" w-16 py-20"
            src="https://i.gifer.com/ZZ5H.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="flex flex-wrap px-4 lg:px-10 ">
          {allMovieData.map((item, index) => {
            const { Title, Year, Poster } = item;
            return (
              <div key={index} className="p-2 md:w-1/4 w-full">
                <Card title={Title} year={Year} poster={Poster} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MovieCard;
