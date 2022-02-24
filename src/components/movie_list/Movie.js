


import React from 'react'
import './movie.css'
import { useFetch } from '../hooks/useFetch'
import requests from '../../api/requests';

const Movie = ({title , trending}) => {

    // API_KEY='d97b3e0257a2c71f178ef69c4ca4f27c'
    const  BASE_URL="https://image.tmdb.org/t/p/original/";

      const {isLoading , error, movies} = useFetch(`${trending}`);


  return (
    <div>

        <h2 className='movie__desc'>{title}</h2>
            
             

        

    </div>
  )
}

export default Movie