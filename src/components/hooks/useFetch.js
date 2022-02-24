




import { useEffect, useState } from 'react'
import axios from 'axios';

export const useFetch = (url) => {

     const [movies , setMovies ] = useState([]);
     const [isLoading , setIsLoading] = useState(true);
     const [error , setError] = useState(false);


     useEffect(() => {

         function fetchData () {

          const request = axios.get(url);

          // setMovies(request.data.results);

          setMovies(() => request && request.data && request.data.results ? request.data.results : '');
    
          }
          

          fetchData();


     }, [isLoading , error, movies]);

     
     

   return {url , isLoading , error, movies}
  
}
