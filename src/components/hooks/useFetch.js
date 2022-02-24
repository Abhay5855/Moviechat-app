




import { useEffect, useState } from 'react'
import axios from 'axios';

export const useFetch = (url) => {

     const [movies , setMovies ] = useState([]);
     const [isLoading , setIsLoading] = useState(true);
     const [error , setError] = useState(false);


     useEffect(() => {

         async function fetchData () {

          const request = await axios.get(url);

          // setMovies(request.data.results);
    
          console.log(request);

          console.log(url);




          }
          

          fetchData();


     }, [isLoading , error]);

     
     

   return {url , isLoading , error, movies}
  
}
