import React from "react";

import { useLocation } from "react-router-dom";
// import parse from "html-react-parser";
import { FaFastBackward } from "react-icons/fa";

const Details = (props) => {
  const location = useLocation().state;
  console.log("state", location);
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] font-bold bg-clip-text text-5xl leading-[1.2] tracking-tight text-transparent sm:text-center sm:text-[4rem] sm:leading-[4.75rem] lg:text-left py-3">
        {location?._embedded ? location?._embedded?.show?.name : location?.name} {location?.genres?.length ?<span className="font-medium"> ({location?.genres?.map((special, index)=>(
          <span className="text-xl pr-1 tracking-wide">{special}{" "}{index !== (location?.genres?.length) -1 ? "," :"......"}</span>
          
        ))})</span> :  <span className="font-medium"> ({location?._embedded?.show?.genres?.map((special, index)=>(
          <span className="text-xl pr-1 tracking-wide">{special}{" "}{index !== (location?._embedded?.show?.genres?.length) -1 ? "," :"......"}</span>
          
        ))})</span>}
      </div>
      
      <div className=" grid justify-start items-start md:items-center md:grid-flow-row md:grid-cols-2 gap-6 lg:gap-10">
        <div className="md:col-span-1 flex md:justify-end">
          <a href="">
          <img src={location?.image?.medium ?? location?._embedded?.show?.image?.medium} alt={location?.image?.original} className="w-full  rounded-xl shadow-md shadow-slate-700 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300" />
          </a>
        </div>
        <div className="max-w-lg flex flex-col  items-start gap-3">
        <span className="text-xl font-bold  text-gray-100">
        Rating: {location?.rating.average ?? location?._embedded?.rating?.average}
      </span>
      <span className="text-xl font-bold  text-gray-100">
        Language: {location?.language ?? location?._embedded?.show?.language}
      </span>
          <div
            dangerouslySetInnerHTML={{ __html: location?.summary ?? location?._embedded?.show?.summary }}
            className="text-white text-lg "
          ></div>
          {console.log("location?._links?.previousepisode",location)}
          <div className=" flex gap-3 flex-row">
            {/* <div className="px-10 py-3 bg-white shadow-md hover:bg-gray-300  rounded-full  shadow-slate-700 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300">
              <a href={!location?._embedded ? location?._links?.previousepisode?.href : location?._embedded?.show?.url } className="  broder-gray-800  mt-10">
                Pre Episod
              </a>
            </div> */}
            <div className="px-10  animate-bounce bg-white shadow-md hover:bg-gray-300 rounded-full  shadow-slate-700 transition py-3 my-3 ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300">
              <a href={location?.url} className="  broder-gray-800  mt-10">
                Play
              </a>
            </div>
          </div>
          {/* <FaFastBackward className='bg-white'/> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
