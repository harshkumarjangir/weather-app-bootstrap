import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Weather = () => {

    const [cityName, setCityName] = useState("")
    const [weatherData, setWeatherData] = useState(null)

    function getWeather(city) {

        if (!cityName) return;

        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=526113c12e230005842cab1b4969d788&units=metric`
        axios.get(API_URL)
            .then((res) => {
                console.log(res.data);
                setWeatherData(res.data)
            }).catch((error) => {
                console.log("Error fetching weather data:", error);
            })

    }

    function handleSearch(e) {
        e.preventDefault()
        getWeather(cityName)
        setCityName("")
    }

    useEffect(() => {
        getWeather()
    })

    return (
        <div className='container'>
            <div className="row my-5 p-1">
                <div className="col-md-3"></div>
                <div className="col-md-6 py-1">
                    <div className="" >
                        <form onSubmit={handleSearch} className='form-floating mb-3 d-flex gap-2'>
                            <input value={cityName} onChange={(e) => { setCityName(e.target.value) }} type="text" className="form-control" id="floatingInput" placeholder='Search city ...' />
                            <label htmlFor="floatingInput">Search city ...</label>
                            {/* <span onClick={handleSearch} className="input-group-text" ><i className="bi bi-search" /></span> */}
                            <button onClick={handleSearch} type="button" className="btn btn-outline-light px-3"><i className="bi bi-search" /></button>

                        </form>
                    </div>

                    {
                        weatherData?.main ? (
                            <div className="text-white rounded p-2" id='weather-deatails'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Temp:</p>
                                    <img
                                        style={{background: "rgba(0, 0, 0, 0.8)"}}
                                        className='rounded'
                                        src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
                                        alt={weatherData?.weather[0]?.description}
                                        // width="100px"
                                        // height="100px"
                                    />
                                    <p>{weatherData?.main?.temp.toFixed()} °C</p>
                                </div>
                                <hr />

                                <div className="d-flex justify-content-between">
                                    <p>Feels Like:</p>
                                    <p>{weatherData?.main?.feels_like.toFixed()} °C</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <p>Temp Min:</p>
                                    <p>{weatherData?.main?.temp_min.toFixed()} °C</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <p>Temp Max:</p>
                                    <p>{weatherData?.main?.temp_max.toFixed()} °C</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <p>Humidity:</p>
                                    <p>{weatherData?.main?.humidity} %</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <p>Wind Speed:</p>
                                    <p>{weatherData?.wind?.speed} Km/h</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <p>Pressure:</p>
                                    <p>{weatherData?.main?.pressure} hPa</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <p>City:</p>
                                    <p>{weatherData?.name}, {weatherData?.sys?.country}</p>
                                </div>
                            </div>
                        ) : (
                            <p className='text-white text-center rounded p-2' id='weather-deatails'>Enter a city to view weather information.</p>
                        )
                    }





                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Weather