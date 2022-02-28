




import { useEffect, useState } from 'react'
import axios from 'axios';

export const useFetch = (url) => {

     const [movies , setMovies ] = useState([]);
     const [isLoading , setIsLoading] = useState(true);
     const [error , setError] = useState('');


     useEffect(() => {

         function fetchData () {

          axios.get(url)
          .then((response) => {

            setMovies(() => response && response.data && response.data.results ? response.data.results : '');
            console.log(response.data.results);

          })
          .catch((err) => {

                 setError(err);
          })

          

    
          }
          

          fetchData();


     }, [isLoading , error, url]);

     
     

   return {url , isLoading , error, movies}
  
}
