import logo from "./logo.svg";
import "./App.css";
import LifeCycleExample from "./components/LifeCycleExample";
import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieListWrapper from "./components/MovieListWrapper";
import MoviePage from "./components/MoviePage";
import Favourites from "./components/Favourites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetailPage from "./components/MovieDetailPage";
import AddMovie from "./components/AddMovie";
import FavouriteProvider from "./context/favourite";
import UserProvider from "./context/user";
import SignIn from "./components/Signin";
import TheatreList from "./components/TheatreList";
import Show from "./components/Show";
import { Myprofile } from "./components/MyProfile";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <UserProvider>
        <Header />
        <FavouriteProvider>
          <Routes>
            <Route path="/" element={<MoviePage />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/movie/:movieId" element={<TheatreList />} />
            <Route path="/show/:showId" element={<Show />} /> 
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/myprofile" element={<Myprofile />} />
          </Routes>
        </FavouriteProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
