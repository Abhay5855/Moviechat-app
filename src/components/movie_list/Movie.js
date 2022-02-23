


import React from 'react'
import './movie.css'
import { useFetch } from '../hooks/useFetch'

const Movie = ({title}) => {

      const {url , isLoading , error, movies} = useFetch(`process.env.BASE_URL/url`)


  return (
    <div>

        <h2 className='movie__desc'>{title}</h2>
            


        

    </div>
  )
}

export default Movie