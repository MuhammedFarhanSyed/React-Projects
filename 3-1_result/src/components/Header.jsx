import React from "react";
import Logo from "../assets/logo.png";
import "../App.css";

function Header() {
  return (
    <div className=" flex justify-center  bg-blue-100 ">
      <div className="header flex  sm:w-[1220px] items-center  h-full pb-2 sm:justify-start">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            className=" h-20  sm:h-28 w-25 ml-4 mr-3 mt-1"
          />
        </div>
        <div className="headcontent mr-4 mt-2 pl-4 pt-2 sm:pl-[100px] drop-shadow-mc">
          <div className="inst-names items-center  sm:flex flex-col justify-center ">
            <div className="h1 font-medium text-blue-400 mb-1 text-xs sm:pt-3">
              Jawaharlal Nehru Technological University Anantapur
            </div>
            <div className="h2 hn font-medium pr-1 text-red-500 mb-1 text-xs sm:pt-2">
              జవహర్‌లాల్ నెహ్రూ సాంకేతిక విశ్వవిద్యాలయం అనంతపురం
            </div>
            <div className="hidden md:block h3 pt-2 sm:pt-2 text-blue-500">
              Ananthapuramu, Andhra Pradesh, India Pin : 515002
            </div>

            <div className="h4 hn font-bold text-blue-700 text-[12px] items-center sm:pt-2">
              JNTUA Examination Information Center
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
