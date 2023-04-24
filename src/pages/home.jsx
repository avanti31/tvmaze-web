import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../component/Loader'

function Home(props) {

    const [list, setlist] = useState([])
    const[loader, setLoader] = useState(false)
    const [search, setSearch] = useState("")
    console.log("list", list)
    useEffect(()=>{
        //bydefaut kept search on girl
        setLoader(true)
        fetch(`https://api.tvmaze.com/search/shows?q=${search == "" ? "girls" : search}&embed=episodes`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            setlist(result)
            setLoader(false)})
        .catch(err => {
            console.log("err", err)
        })
    },[search])

   function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function saveInput(data){
  setSearch(data)
}
const processChange = debounce((data) => saveInput(data));
   
  return (
    <>
    {
        loader ? <Loader/> : <div>
        <div className='flex justify-between items-center flex-col md:flex-row'>
            <div className='w-full md:w-1/3'>
            <input className='w-full h-12 border-gray-500 shadow-lg p-2 rounded-2xl 'type='text' placeholder='Search Here' onChange={e => processChange(e.target.value)} defaultValue={search}/>
            </div>
            <div className='flex flex-col md:flex-row md:justify-end md:items-center py-2'>
                <div className='pr-4'>
                <Link to="./episodes">
                     <span className='text-black text-xl lg:px-8 font-bold'>Future Episodes</span>
                </Link>
                </div>
                <div>
                <Link to="./browse">
                     <span className='text-black text-xl lg:px-8 font-bold'>Browse By Date & Country</span>
                </Link>
                </div>
               
            </div>
        </div>
        <div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-3 items-between justify-between pt-10'>
        {list?.map((user,index)=>(
                <div className='text-white text-2xl justify-center gap-3  col-span-1 items-center mx-auto mb-10'>
                     <div className='mb-4'>Rating: {user?.show?.rating?.average}</div>
                       <Link to={`/details/${user?.show?.id}`}
                        state = {user?.show}
                       >
                       <img src={user?.show?.image?.medium} alt={user?.show?.image?.original} className='rounded-xl shadow-md shadow-slate-700 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300'/>
                       </Link> 
                       <p className='p-2'>{user?.show?.name}</p>
                       

                </div>
            ))}
        </div>
    </div>
    }</>

  )
}

export default Home