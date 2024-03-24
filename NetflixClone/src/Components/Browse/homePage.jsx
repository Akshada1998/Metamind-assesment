import React, { useEffect } from "react";
import Header from "../Header/header.jsx";
import { useSelector  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainScreen } from "../MainContainer/mainScreen.jsx";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies.js";
import useWatchList from "../../hooks/useWatchList";
import usePopularMovies from "../../hooks/usePopularMovies.js";
import useTopRatedMovies from "../../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../../hooks/useUpcomingMovies.js";
import { MovieScreen } from "../MainContainer/movieScreen.jsx";
import SearchScreen from "../Search/searchScreen.jsx";

function HomePage() {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  const toggle = useSelector((store) => store.movie.toggle);

  //custome hooks
  useWatchList();
  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();  

  // If User Not Available
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="bg-black">
      <Header />
      <div> 
        {toggle ? 
        (<SearchScreen  />) :
          (
          <>
            <MainScreen  />
            <MovieScreen />
          </>
        ) }
      </div>
      
    </div>
  );
}

export default HomePage;
