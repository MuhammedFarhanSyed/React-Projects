import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <div className="  p-5  ">
        <div className="">
          <div className="flex justify-between p-4  bg-gray-800 text-white rounded-2xl">
            <div>Logo</div>
            <Link to="/"><div>Home</div></Link>       
            <Link to="/wishlist"><div>Wishlist</div></Link>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
