
import "./WeatherApp.css"
import { useState } from "react";

import Search_icon from "../Assets/Search.png";
import Clear_icon from "../Assets/Clear.png";
import Clouds_icon from "../Assets/Clouds.png";
import Drizzle_icon from "../Assets/Drizzle.png";
import Haze_icon from "../Assets/Haze.png";
import Mist_icon from "../Assets/Mist.png";
import Rain_icon from "../Assets/Rain.png";
import Smoke_icon from "../Assets/Smoke.png";
import Snow_icon from "../Assets/Snow.png";
import Humidity_icon from "../Assets/Humidity.png";
import Wind_icon from "../Assets/Wind.png";
import ErrAdress from "../ErrAdress"

const WeatherApp = () => {
    const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({
    
    "weather": [
      {
        "main": "Clear",
      }
    ],
    "main": {
      "temp": 284.8,
      "humidity": 66,
    },
    "wind": {
      "speed": 2.45,
    },
    "name": "",
  });
    const api = {
        key: "e5ec0f58c9a3155aaa55690a42762dee",
        base: "https://api.openweathermap.org/data/2.5/",
      };

      const searchPressed = (event) => {
        event.preventDefault();
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error('Failed to fetch weather data');
            }
            return res.json();
          })
          .then((result) => {
            setWeather(result);
          })
          .catch((error) => {
            setWeather(false)
            console.error('loi khi call api', error);
            // Thực hiện các hành động phù hợp, ví dụ: hiển thị thông báo lỗi
          });
      };
    

  return (
   <>{weather && (
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

        
            <div className={weather.name ? "displayblock" : "displaynone"}>

                <div className="weather-image">
                {weather.weather[0].main === "Clear" &&(<img src={Clear_icon} alt="" />)}
                {weather.weather[0].main === "Clouds" &&(<img src={Clouds_icon} alt="" />)}
                {weather.weather[0].main === "Drizzle" &&(<img src={Drizzle_icon} alt="" />)}
                {weather.weather[0].main === "Haze" &&(<img src={Haze_icon} alt="" />)}
                {weather.weather[0].main === "Mist" &&(<img src={Mist_icon} alt="" />)}
                {weather.weather[0].main === "Rain" &&(<img src={Rain_icon} alt="" />)}
                {weather.weather[0].main === "Smoke" &&(<img src={Smoke_icon} alt="" />)}
                {weather.weather[0].main === "Snow" &&(<img src={Snow_icon} alt="" />)}
                    
                </div>
                <div className="weather-temp">{weather.main.temp}°C</div>
                <div className="weather-location">{weather.name}</div>
                <div className="data-container">
                    <div className='element'>
                        <img src={Humidity_icon} alt="" className='icon'/>
                        <div className='data'>
                            <div className='humidity-percent'>{weather.main.humidity}%</div>
                            <div className='text'>Humidity</div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src={Wind_icon} alt="" className='icon'/>
                        <div className='data'>
                            <div className='wind-rate'>{weather.wind.speed}km/h</div>
                            <div className='text'>Wind speed</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
   )}
   {weather === false && (<ErrAdress weather = {weather} searchPressed={searchPressed} setSearch = {setSearch}/>)}</>
    
  )
}
 export default WeatherApp