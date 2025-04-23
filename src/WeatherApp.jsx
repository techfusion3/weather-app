import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Lucknow",
        feelslike: 24.84, 
        temp: 25.05,
        tempMin: 25.05, 
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <>
        <div className="clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        </div>
        <div style={{textAlign: "center"}}>
            <h1>Weather app by Faijan!</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        </>
    );
}