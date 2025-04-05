import React from "react";
import { use } from "react";
import { useState } from "react";

function Movie_card({
  poster_path,
  title,
  movie,
  addtoWishlist,
  removefromWishlist,
  wishlistedmovies,
}) {
  const itcontains = (movie) => {
    for (let i = 0; i < wishlistedmovies.length; i++) {
      if (wishlistedmovies[i].id === movie.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
    className="bg-center bg-no-repeat bg-cover w-[180px] h-[40vh] rounded-2xl ml-1 mb-4 flex flex-col items-end justify-between font-black border-2 border-gray-600 hover:scale-110 hover:border-white duration-300 bg-gray-800/60 shadow-lg shadow-gray-900/50"
    style={{
      backgroundImage: `url(${poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"})`,
    }}
  >
    {itcontains(movie) ? (
      <div
        onClick={() => removefromWishlist(movie)}
        className="p-1 m-2 px-1.5 bg-gray-600/40 rounded-xl hover:cursor-pointer"
      >
        <div className="hover:scale-110 duration-200">{"❤️"}</div>
      </div>
    ) : (
      <div
        onClick={() => addtoWishlist(movie)}
        className="p-1 m-2 px-1.5 bg-gray-600/40 rounded-xl hover:cursor-pointer"
      >
        <div className="hover:scale-110 duration-200">{"🤍"}</div>
      </div>
    )}
  
    <div className="bg-gray-600/40 w-full text-center p-2">{title}</div>
  </div>
  
  );
}

export default Movie_card;
