

import React, {useState, useEffect} from 'react'



const CallApi = () => {


const URL = 
 /* https://animechan.vercel.app/guide#default-quotes  API
 -pedir 10 randoms quotes | 100 animes disponibles | 
 */
/* https://anapioficeandfire.com/?ref=devresourc.es  API */ 
/* "https://anapioficeandfire.com/api/books/"; // api books */
"https://anapioficeandfire.com/api/characters/"

/* "https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/CO.json"; */


const [state, setState] = useState([]);

useEffect( ()=>{

    fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data))

}, [])



  return (
    <div>
   <button>
       
   </button>

    </div>
  )
}

export default CallApi