import React from "react";
import { useRef ,useState } from "react";

function Wishlist({ wishlistedmovie, removefromWishlist }) {
  const inputRef = useRef(null);
  const [searchedmovie, setSearchedmovie] = useState("");
  console.log(wishlistedmovie);
  // const filterdmovies = wishlistedmovie.filter((movie) => movie.title.lowerase().includes(searchedmovie.lowercase().current.value));

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center items-center gap-4 border-1 border-gray-800 p-3 w-[200px] rounded-2xl pl-10 ">
          <i
            onClick={() => inputRef.current.focus()}
            className="fa-solid fa-magnifying-glass "
          ></i>
          <input
            type="text"
            ref={inputRef}
            value={searchedmovie}
            onChange={(e) => setSearchedmovie(e.target.value)}
            placeholder="Search Movies"
            className="outline-none"
          />
          {
            console.log(searchedmovie)
            
          }
        </div>
      </div>
      <div className="m-5 rounded-2xl  overflow-hidden border-1 border-gray-800  ">
        <table className="w-full ">
          <thead className="bg-gray-900 text-white border-1 border-gray-800  ">
            <tr className=" h-10">
              <th> movie</th>
              <th>name</th>
              <th>rating</th>
              <th>genre</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistedmovie.filter(
              (movie) =>
                movie.title
                  .toLowerCase()
                  .includes(searchedmovie.toLowerCase())
            ).map((movie) => {
              return (
                <tr className="border-1 border-gray-800">
                  <th>
                    <div className="w-full h-full flex justify-center items-center p-3">
                      <div
                        className="w-[70px] h-[70px] rounded-xl border-1  duration-500 bg-center bg-cover bg-no-repeat"
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                        }}
                      ></div>
                    </div>
                  </th>
                  <th className="hover:scale-110 duration-300">{movie.title}</th>
                  <th>{movie.vote_average}</th>
                  <th>{movie.genr}</th>
                  <th>
                    <div className="w-full h-full flex justify-center items-center ">
                      <div
                        className="hover:cursor-pointer hover:border-red-400 hover:scale-110 hover:text-red-500 duration-300 border-1 border-gray-500 p-2 px-3  rounded-xl "
                        onClick={() => {
                          removefromWishlist(movie);
                        }}
                      >
                        Delete
                      </div>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Wishlist;
