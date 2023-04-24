import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Browse(props) {
  const [browseBydate, SetBrowseByDate] = useState([]);
  const currDate = new Date();
  currDate.setDate(currDate.getDate() + 3);
  var date = currDate.toISOString().substring(0, 10);
  const [browseDate, setBrowseDate] = useState(date);
  var countries = require("i18n-iso-countries");
 countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
const obj=countries.getNames("en", {select: "official"})
 const countryCodeArr = Object.keys(obj)
//  console.log("q111",countryCodeArr)
 const [listOfCountry,setListCountryCode] = useState("US")
  // console.log("qewewre", date)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/schedule/web?date=${browseDate}&country=${listOfCountry}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => SetBrowseByDate(result));
  }, [browseDate, listOfCountry]);
  return (
    <div className="space-y-20">
      <div className="flex justify-between items-center">
        <div className="text-black font-extrabold text-3xl">
          Browse By Date and Country
        </div>
        <div className="flex justify-end items-center gap-3">
          <div>
            <input
              type="date"
              onChange={(e) => setBrowseDate(e.target.value)}
              defaultValue={date}
              className="p-2 rounded-lg"
            />
          </div>
          <div className="w-full">
            <select name="" id="" className="p-2 rounded-lg " defaultValue={listOfCountry} onChange={e => setListCountryCode(e.target.value)}>
            {countryCodeArr?.map((data1,index)=>(
                // {console.log('data',data1)} 
                <option value={data1}>{data1}</option>
            ))}
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-12 justify-start">
        {browseBydate?.map((user, index) => (
          <div key={index} className="text-white text-2xl justify-center space-y-3  col-span-1 items-center mx-auto ">
            {/* {console.log("user",user)} */}
            <Link to={`/details/${user?.id}`} state={user}>
              <div className="text-center">{user?.name}</div>
            </Link>
            <div className="flex justify-center  items-center">
              <Link to={`/details/${user?.id}`} state={user}>
                <img
                  src={user?.image?.medium}
                  className="rounded-xl shadow-md shadow-slate-700"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
