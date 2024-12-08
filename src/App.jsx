import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import Popular from "./Pages/Popular";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShow";
import People from "./Pages/People";
import MovieDetails from "./Pages/MovieDetails";
import TvDetails from "./Pages/TvDetails";
import PersonDetails from "./Pages/PersonDetails";
import Trailer from "./Pages/Trailer";

const App = () => {
  return (
    <div className="min-h-screen w-full flex bg-zinc-900  text-zinc-100">
      <Sidenav />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/people" element={<People />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/person/details/:id" element={<PersonDetails />} />
      </Routes>
    </div>
  );
};

export default App;
