import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Hearder(props) {

    const [list, setlist] = useState([])
    const [search, setSearch] = useState("girls")
    // console.log("list", list)

    useEffect(()=>{
        fetch(`https://api.tvmaze.com/search/shows?q=${search == "" ? "girls" : search}&embed=episodes`)
        .then(response => {
            return response.json()
        })
        .then(result => setlist(result))
        .catch(err => {
            console.log("err", err)
        })
        console.log("search",search)

    },[search])
   
  return (
    <div>
        <div className='flex justify-start items-start'>
        <input className='w-1/3 h-12 border-gray-500 shadow-lg p-2 rounded-2xl 'type='text' placeholder='Search Here' onChange={e => setSearch(e.target.value)}/>
        </div>
        <div className='grid grid-flow-row grid-cols-3 gap-3 items-center pt-10'>
        {list?.map((user,index)=>(
                <div className='text-white text-2xl justify-center gap-3  col-span-1 items-center mx-auto '>
                       <Link to={{
                        pathname:`/details/${user?.show?.id}`,
                        state : "hey",
                       }}>
                       <img src={user?.show?.image?.medium} alt="img" className='rounded-xl shadow-md shadow-slate-700'/>
                       </Link> 
                       

                </div>
            ))}
        </div>
            
    
      
    </div>

  )
}

export default Hearder