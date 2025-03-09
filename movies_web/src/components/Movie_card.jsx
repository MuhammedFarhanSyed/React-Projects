import React from 'react'

function Movie_card( {poster_path, title} ) {
  return (
    <div className='   bg-center bg-no-repeat bg-cover w-[180px] h-[40vh] rounded-2xl  ml-1 mb-4 p-2  flex items-end justify-center font-black border-2 border-gray-600 hover:scale-110 hover:border-white duration-300  bg-gray-800/60' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>{title}</div>
  )
}

export default Movie_card