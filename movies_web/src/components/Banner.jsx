import React from "react";

function Banner() {
  return (
    <div className="h-[85vh]  p-5">
      <div className="flex justify-center items-end  h-full  bg-no-repeat  bg-center bg-cover bg-gray-700 rounded-2xl" style={{backgroundImage:`url('https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg')`}}>
        <div className="p-2 w-full text-center text-xl bg-gray-900/60 rounded-b-2xl">
          <h2>movies_name</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
