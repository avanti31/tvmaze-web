import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../component/Loader'

const Episodes = (props) => {
  const [episodesList, setEpisodelist] = useState([])
  const [loader, setloader] = useState(false)
  useEffect(()=>{
    setloader(true)
    fetch("https://api.tvmaze.com/schedule/full")
    .then((res) => {return res.json()})
    .then(result => {setEpisodelist(result)
    setloader(false)})
    .catch(err => {
      console.log(err)
    })

  },[])
  return (
    <>
     <div className="text-black font-extrabold text-3xl mb-5">
          Browse All Future Episodes
        </div>
        {
          loader ? <Loader/> :  <div className="grid grid-cols-3 gap-12 justify-start">
          {episodesList?.map((user, index) => (
            <div key={index} className="text-white text-2xl justify-center space-y-3  col-span-1 items-center mx-auto ">
              {console.log("user",user)}
              <Link to={`/details/${user?.id}`} state={user}>
                <div className="text-center">{user?.name}</div>
              </Link>
              <div className="flex justify-center  items-center">
                <Link to={`/details/${user?.id}`} state={user}>
                  <img
                    src={!user?._embedded ? user?.image?.medium : user?._embedded?.show?.image?.medium }
                    className="rounded-xl shadow-md shadow-slate-700"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        }
       
      </>
   
  )
}

export default Episodes