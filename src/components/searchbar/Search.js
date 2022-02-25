import React, { useState , useRef, useEffect} from "react";
import axios from "axios";
import './search.css'

const Search = () => {

       const [searchMovie , setSearchMovie] = useState("");
       const []

        // Using the input ref
        const inputRef = useRef();

       const SearchURL = 	"https://api.themoviedb.org/3/search/movie?api_key=25575b6919f268ac741d136aa573c4d4&query="; 

         useEffect(() => {

             setTimeout(() => {

              const searchMovies = () => {

                axios.get()
                .then((response) => {
                    console.log(response);
                })
                
                .catch((err) => {
                    console.log(err);
                })
               
            }

            searchMovies();

             },3000)

              
            

             

         }, [])

       
             
                  
               
        


  return (
    <>
      <div className="nav__input">
       
          <input type="text" placeholder="search" ref={inputRef} value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)}/>
          <button className="search__btn" type='submit'>Search</button>
        
      </div>
    </>
  );
};

export default Search;
