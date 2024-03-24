import axios from "axios";
import { options } from "../Components/Utils/constant.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTrailerMovies } from "../Redux/movieSlice.js";



const useMovieById = async (movieId) => {
  const dispatch = useDispatch();

    useEffect(() => {
    const getMoviesById = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos` , options  );
        const trailer = res?.data?.results?.filter((item) => {    
          return item.type === "Trailer";
        });
        dispatch(
          getTrailerMovies(trailer.lenght > 0 ? trailer[0] : res.data.results[0])
        ); 
      } catch (error) {
        console.log("Kahitri error",error);
      } 
    };     
    getMoviesById();
  }, []);
};

export default useMovieById;
