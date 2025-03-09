import React from "react";
import { useRef } from "react";

function Wishlist() {
  const inputRef = useRef(null);

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
            placeholder="Search Movies"
            className="outline-none"
          />
        </div>
      </div>
      <div className="m-5 rounded-2xl  overflow-hidden border-1 border-gray-800  ">
        <table className="w-full ">
          <thead className="bg-gray-900 text-white border-1 border-gray-800  ">
            <tr className=" h-10">
              <th> movie</th>
              <th>name</th>
              <th>rating</th>
              <th>genr</th>
              <th>fdf</th>

            </tr>
          </thead>
          <tbody>
            <tr className="h-10 border-1 border-gray-800">
              <th>dffad</th>
              <th>fa</th>
              <th>fa</th>
              <th>faf</th> <th>faf</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Wishlist;
