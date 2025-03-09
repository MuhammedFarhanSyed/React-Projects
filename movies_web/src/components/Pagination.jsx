import React from "react";

function Pagination( {page, nextPage, prevPage} ) {





  return (
    <div className="flex justify-center items-center gap-5 p-5">
      <div className="bg-gray-800 rounded-full p-2 w-10 text-center hover:cursor-pointer  hover:bg-white hover:text-gray-800 duration-300 h-full display:none" onClick={() => prevPage()}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div>{page}</div>
      <div className="bg-gray-800 rounded-full p-2 w-10 text-center hover:cursor-pointer  hover:bg-white duration-300 hover:text-gray-800 h-full" onClick={() => nextPage()}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
