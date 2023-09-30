import React, { useState } from "react";
import { MovieCard, Navbar, SearchBar } from "./Compnents";
import config from "./Config/config";

const App = () => {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=${config.apiKey}`
      );
      const data = await res.json();
      setAllMovieData(data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="bg">
        <SearchBar
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData}
        />
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </div>
  );
};

export default App;
