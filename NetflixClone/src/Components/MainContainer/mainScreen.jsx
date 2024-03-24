import React from "react";
import VedioTitle from "./vedioTitle.jsx";
import VedioBackground from "./vedioBackground.jsx";
import { useSelector } from "react-redux";

export const MainScreen = () => {
  const movie =useSelector((store) => store.movie?.NowPlayingMovies);
  if (!movie) return; //early return in react
  const { overview, id, title } = movie[4];
  return (
    <div>
      <VedioTitle title={title} overview={overview} />
      <VedioBackground movieId={id} />
      

    </div>
  );
};
