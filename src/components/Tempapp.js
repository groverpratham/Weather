import React, { useEffect, useState } from 'react'
import "./css/style.css"
export default function Tempapp() {

     const [city, setCity] = useState(null);
     const [search, setSearch]= useState("mumbai");
     useEffect ( ()=>{
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a63413491a3fc29448e5c47f44bfb4eb`
            const response = await fetch(url);
            const resJson =await response.json();
            setCity(resJson.main);
        }
        fetchApi();

     },[search]) // jab kab  search ki value change hogi tab tab hi change krna hai use effect ko
  return (
    <>
    <div className='box'>
        <div className='inputData'>
            <input type="search" value={search} className='inputField' onChange={(event)=>{
                setSearch(event.target.value)

            }} />
        </div>
    {
    !city?( 
        <p className='errorMsg'>No Data Found</p>
    ):(  <div>
        <div className='info'>
        <h2 className='location'>
        <i className="fa-solid fa-street-view"></i>{search}
        </h2>

        <h1 className='temp'>
        {city.temp} Cel
        </h1>
        <h3 className='tempmin_max'>{city.temp_min} Cel| {city.temp_max} Cel</h3>
    </div>


    <div className='wave -one'></div>
    <div className='wave -two'></div>
    <div className='wave -'></div>
    </div>
    )
    
    }

    

    </div>
    </>
  )
}
