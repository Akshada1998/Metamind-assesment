import React from "react";
import { useSelector } from "react-redux";
import useMovieById from "../../hooks/useMovieById.js";

function VedioBackground({ movieId, bool }) {  //vediocommingfromModal=false
  const trailerMovies = useSelector((store) => store.movie.TrailerMovies);
  useMovieById(movieId);

  return (
    <div className="w-[vw] aspect-vedio ">
       
      <iframe  
     width="100% " height="700" 
        className={` ${bool ? "w-[100%]" : "w-screen"} `}
        src={`https://www.youtube.com/embed/${trailerMovies?.key}?si=aXkStGE1sI5o355T&autoplay=1&mute=1`}
        // src="https://www.youtube.com/embed/LXb3EKWsInQ?si=DKCzUPoLpfwSTH_g&autoplay=1&mute=1" 
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

    </div>
  );
}

export default VedioBackground;

