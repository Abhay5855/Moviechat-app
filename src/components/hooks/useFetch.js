




import { useEffect, useState } from 'react'
import axios from 'axios';
export const useFetch = (url) => {

     const [movies , setMovies ] = useState([]);
     const [isLoading , setIsLoading] = useState(true);
     const [error , setError] = useState(false);


     useEffect(() => {

          function fetchData () {

                axios.get(url)
                .then(() => {
                      console.log('data')
                })
                .catch((err) => {
                     setError(err);
                     console.log(err);
                })




          }
          

          fetchData();


     }, [url , isLoading , error]);

     
     

   return {url , isLoading , error, movies}
  
}
