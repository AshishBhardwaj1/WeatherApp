import React, { useState } from "react";
import './Weather.css'
const api = {
  key: "5c0344f349e944a5bd95991789febfe5",
 // base: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid={API key}",
 base:"https://api.openweathermap.org/data/2.5/"
};
const Weather = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${input}&units=matric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) =>{
setData(result)
setInput("")
console.log(result);
        })
    }
  };
  const DateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
    

      <main>
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="search here..."
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {(typeof data.main != "undefined")?(
          <div>
          <div className="location-box">
            <div className="location">
              {data.name},{data.sys.country}
            </div>
            <div className="date">{DateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
                {Math.round(data.main.temp)}°c
            </div>
            <div className="weather">
              {data.weather[0].main}
            </div>

          </div>
        </div>
        ) : (' ')}

      </main>

    </div>
  );
};

export default Weather;
