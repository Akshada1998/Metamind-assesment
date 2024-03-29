import axios from "axios";
import { Top_Rated_Movies, options } from "../Components/Utils/constant.js";
import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../Redux/movieSlice.js";

const useTopRatedMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Top_Rated_Movies, options);
    dispatch(getTopRatedMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};
export default useTopRatedMovies;
