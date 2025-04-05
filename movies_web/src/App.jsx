import "./App.css";
import Banner from "./components/Banner";
import Cards_section from "./components/Cards_section";
import Movie_bar from "./components/Movie_bar";
import Movie_card from "./components/Movie_card";
import Navbar from "./components/Navbar";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router";
import Wishlist from "./components/Wishlist";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import Searchedmovies from "./components/Searchedmovies";
import { useContext } from "react";
import { MovieContext } from "./components/Context";

function App() {
   const [movies, setmovies] = useState([]);
    const [searchmovie, setSearchmovie] = useState(0);
    const [page, setPage] = useState(1);
     useEffect(() => {
       axios
         .get(
           `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=ee68dcfa5da1610d105cdade05c9abf0`
         )
         .then((res) => {
            setmovies(res.data.results);
         });
     }, [page]);
   
  const [wishlistedmovie, setwishlistedmovies] = useState([]);
  const addtoWishlist = (movie) => {
    setwishlistedmovies([...wishlistedmovie, movie]);
  }
 const removefromWishlist = (movie) => {
    const newWishlist = wishlistedmovie.filter((m) => m.id !== movie.id);
    setwishlistedmovies(newWishlist);
  }

  useEffect(() => {
    const movies = localStorage.getItem("movies");
    if (movies) {
      setwishlistedmovies(JSON.parse(movies));
    }
  }
  , []);
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(wishlistedmovie));
  }, [wishlistedmovie]);
  console.log(movies[0]?.backdrop_path);
  
  return (
    <>
   <MovieContext.Provider value={{ searchmovie, setSearchmovie }}>
      <div className=" min-h-[100vh] bg-black text-white position-relative">
        
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Searchedmovies" element={<Searchedmovies />} />
            <Route path="/wishlist" element={<Wishlist wishlistedmovie={wishlistedmovie} removefromWishlist={removefromWishlist}/>} />
            <Route
              path="/"
              element={
                <>
                  <Banner movies={movies}/><Movie_bar /> <Cards_section page={page} setPage={setPage} wishlistedmovie={wishlistedmovie} removefromWishlist={removefromWishlist} addtoWishlist={addtoWishlist} movies={movies} setmovies={setmovies}/> 
                </>
              }
            />
          </Routes>
        </BrowserRouter>
       
      </div>
      </MovieContext.Provider>
    </>
  );
}

export default App;
