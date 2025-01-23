import React from "react";
import SLogo from "../assets/sicon.png";
import MLogo from "../assets/menu.png";
function Navbar() {
  return (
    <div className=" shadow-xl  nav sm:flex sm:justify-center">
    <div className=" flex sm:justify-between items-center sm:w-[1232px] "> 
      <div className="hidden sm:block">
        <ul className=" flex font-semibold ">
          <li className="pr-10">Home</li>
          <li className="pr-10">About Us</li>
          <li className="pr-10">Contact Us</li>
        </ul>
      </div>
      <div className="h-[40px] w-[40px]  place-items-center  sm:block rounded-full hover:bg-slate-100  hidden">
        <img className="h-[30px] w-[30px] p-1 hover:cursor-pointer " src={SLogo} alt="" />
      </div>
      <div className="menuicon  sm:hidden  h-auto w-7 m-2">
        <img className="h-full" src={MLogo} alt="" />
      </div>
    </div></div>
  );
}

export default Navbar;
