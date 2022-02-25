


import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchPage = () => {
    const location = useLocation();
    const value  = location.state;

   console.log(value);
  return (
    <div>




    </div>
  )
}

export default SearchPage