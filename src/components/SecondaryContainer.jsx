import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movieslist=useSelector(store=>store.movies);
console.log(movieslist);
  return (
    <div >
      <div className='-mt-60 relative z-4 p-1' >
      <MoviesList heading={"Now Playing"} list={movieslist.Movies}/>
      <MoviesList heading={"Trending"} list={movieslist.trending}/>
      <MoviesList heading={"Top Rated"} list={movieslist.toprated}/>
  
    </div>
    </div>
  )
}

export default SecondaryContainer