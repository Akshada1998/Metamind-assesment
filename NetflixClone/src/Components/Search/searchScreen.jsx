import axios from "axios";
import React, { useState } from "react";
import { Search_Movie, options } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../Redux/userSlice";
import { setSearchMovieDetails } from "../../Redux/searchSlice";
import MovieList from "../MainContainer/movieList";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState("");
  const isLoading = useSelector((store) => store.app.isLoading);

  const { movieName, searchedMovie } = useSelector((store) => store.searchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get( `${Search_Movie} ${searchMovie}&include_adult=false&language=en-US&page=1`,options);
      console.log(res.data.results);
      const movies = res?.data.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };

  return (
    <>
      <div className="flex bg-black pt-[10%] w-[100%] justify-center">
        <form className="w-[50%] bg-black" onSubmit={submitHandler}>
          <div className="flex justify-between shadow-md border-2 border-gray-200 p-2 rounded-lg w-[100%]">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              type="text"
              placeholder="Search Movies..."
              className="w-full outline-none rounded-md text-lg"
            />
            <button className="bg-red-800 ml-2 text-white rounded-md px-4 py-2">
              {" "}
              {isLoading ? "Loading..." : "Search"}{" "}
            </button>
          </div>
        </form>
      </div>
      
      <MovieList title={movieName}  movie={searchedMovie}  />
     
            
    </>
)};

export default SearchScreen;
