import React from "react";
import { Link } from "react-router";
import { useRef } from "react";

function Navbar() {
  const inputRef = useRef(null);
  const [searchmovie, setSearchmovie] = React.useState("");
  async function fetchMovie(){
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchmovie}&include_adult=false&language=en-US&page=1&api_key=ee68dcfa5da1610d105cdade05c9abf0`);
    const data = await res.json();
    console.log(data);
  }
  const handlekeydown = () => {
    if (searchmovie) {
      fetchMovie();
    }
  };
  return (
    <>
      <div className="  p-5  ">
        <div className="">
          <div className="flex justify-between p-2 items-center  text-white rounded-2xl ">
            <Link to="/">
              <div>Home</div>
            </Link>
            <div>
              <div className="flex items-center gap-4 bg-gray-900 p-3 w-[25vw] rounded-2xl pl-5 ">
                <i
                  onClick={() => inputRef.current.focus()}
                  className="fa-solid fa-magnifying-glass text-gray-400  hover:cursor-pointer"
                ></i>
                <input
                  type="text"
                  ref={inputRef}
                  value={searchmovie}
                  onKeyDown={(e) => {if(e.key === "Enter") {handlekeydown()}}}
                  onChange={(e) => setSearchmovie(e.target.value)}
                  placeholder="Search Movies"
                  className="outline-none"
                />
              </div>
            </div>
            <Link to="/wishlist">
              <div>Wishlist</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
