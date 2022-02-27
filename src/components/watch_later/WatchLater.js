


import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import {db} from '../../firebase/firebase'
import './watchlater.css'

const WatchLater = () => {

      useEffect(() => {

             async function fetchWatchLater (){

                  await getDocs(collection(db , 'movies'))
                  .then((snapshot) => snapshot.docs.map((doc) => 
                        
                          console.log(doc.title)
                  ))
                     
              }

              fetchWatchLater();



      },[])
  return (
    <div>

        <Navbar />
          <div className='watchlist__container'>

          <h2 className='watchlist'>Watchlist</h2>



          </div>
        

    </div>
  )
}

export default WatchLater