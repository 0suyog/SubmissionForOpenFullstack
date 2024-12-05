import axios from "axios";
import { useEffect, useState } from "react";

export default function Weather({ lat, lng }) {
    const [weather, setWeather] = useState();
    const [baseWeatherUrl, setBaseWeatherUrl] = useState(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
        }`
    );

    useEffect(() => {
        setBaseWeatherUrl(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
                import.meta.env.VITE_WEATHER_API_KEY
            }`
        );
    }, [lat, lng]);

    useEffect(() => {
        axios.get(baseWeatherUrl).then((data) => {
            console.log(data.data);
            setWeather(data.data);
        });
    }, [baseWeatherUrl]);

    return (
        <>
            {/* {console.log(weather)} */}
            {weather ? <h2>Weather: {JSON.stringify(weather.weather[0].main)}</h2> : null}
            <img
                src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                alt=""
            />
        </>
    );
}
