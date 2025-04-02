import React, { useEffect } from "react";

 function Banner( {movies} ) {
  console.log(movies);

  return (
    
    <div className="h-[70vh]  p-5">
      <div className={`flex justify-center items-end  h-full  bg-no-repeat  bg-center bg-cover bg-gray-700 rounded-2xl `} style={(movies)? {backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[0]?.backdrop_path})`} : {}}>
        <div className="p-2 w-full text-center text-xl bg-gray-900/60 rounded-b-2xl">
          <h2>{(movies)?movies[0]?.title:"movie name"}</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
