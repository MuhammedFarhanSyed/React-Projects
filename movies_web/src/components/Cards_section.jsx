import React, { useState } from "react";
import Movie_card from "./Movie_card";

import { useEffect } from "react";
import Pagination from "./Pagination";

function Cards_section({ addtoWishlist, removefromWishlist, wishlistedmovie ,movies ,page , setPage}) {
  

 
 




  const prevPage = () => {
    if (page > 1) { setPage(page - 1);
      
    } 
  }
  const nextPage = () => {
    setPage(page + 1);
  }


  // console.log(movies);
  // // console.log(movies.backdrop_path);
  return (
    <>
      <div className="p-5 w-full flex justify-evenly  flex-wrap ">
        {movies.map((movie) => {
          return (
            <Movie_card
            movie={movie}
              poster_path={movie.backdrop_path}
              key={movie.id}
              title={movie.title}
              addtoWishlist={addtoWishlist}
              removefromWishlist={removefromWishlist}
              wishlistedmovies={wishlistedmovie}
            />
          );
        })}


      </div>
      <Pagination  prevPage={prevPage} nextPage={nextPage} page={page}/>
    </>
  );
}

export default Cards_section;

// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTY4ZGNmYTVkYTE2MTBkMTA1Y2RhZGUwNWM5YWJmMCIsIm5iZiI6MTc0MTI4ODg5OS40NTI5OTk4LCJzdWIiOiI2N2M5ZjVjMzU0NzgzY2FhYTNhZmIzYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Wkc7crdXIYYjqrsjWn6JAkAYCrPjaM30Wfc2uK5yrBw
// ee68dcfa5da1610d105cdade05c9abf0
