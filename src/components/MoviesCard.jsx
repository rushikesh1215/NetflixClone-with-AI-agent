import React from 'react'
import { ImgPath } from '../utils/constants'

const MoviesCard = ({Poster_path}) => {
  return (
    <div className='w-44 px- m-1 ' >
        <img className='h-59 w-44' src={ImgPath+Poster_path} alt="Movie Card" />
    </div>
  )
}

export default MoviesCard