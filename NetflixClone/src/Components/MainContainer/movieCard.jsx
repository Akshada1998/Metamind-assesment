import React from "react";
import { TMDB_img_url } from "../Utils/constant.js";
import { useDispatch } from "react-redux";
import {  setOpen } from "../../Redux/movieSlice.js";

export const MovieCard = ({ posterPath}) => {  
   //movieId
  const dispatch = useDispatch();

  if (posterPath=== null) return null;

  const handleOpen = () => {
    // dispatch(getID(movieId));      
    dispatch(setOpen(true));
  };   
  
  return (
     <div className="w-40 pr-2 m-2"  onClick={handleOpen}>
    <img src={`${TMDB_img_url}/${posterPath}`} alt="movieeee banner" />
      </div>

  );
};
