import React from 'react'
import './Weather/WeatherApp.css'
import Not404_icon from "./Assets/Not404.png";
import Search_icon from "../Components/Assets/Search.png";

const ErrAdress = ({weather, searchPressed, setSearch}) => {
  
  return (
    
    <div className={weather.name ? "container" : "container2"}>
        <div >
            <form className={'top-bar2 top-bar '} onSubmit={searchPressed}>
            <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed} type="submit"><img src={Search_icon} alt="  " /></button>
            </form>
            
        </div >

        
            <div className= "displayblock">

                <div className="weather-image">
                <img src={Not404_icon} alt="" />
                
                
                    
                </div>
                
        </div>
    </div>
   
  )
}

export default ErrAdress