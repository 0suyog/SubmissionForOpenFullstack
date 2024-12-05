import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "./Weather";

export default function SingleCountry({ details }) {
    const [country, setCountry] = useState(details);
    const [lat, setLat] = useState(details.latlng[0]);
    const [long, setLong] = useState(details.latlng[1]);

    useEffect(() => {
        setCountry(details);
        setLat(details.latlng[0]);
        setLong(details.latlng[1]);
    }, [details]);

    // axios.get(baseWeatherUrl).then((data) => {
    //     console.log(JSON.stringify(data.data));
    // });
    return (
        <>
            <h1>Official Name: {country.name.official}</h1>
            <h2>Common Name: {country.name.common}</h2>
            <h3>Languages:</h3>
            <ul>
                {Object.values(country.languages).map((lang) => {
                    return <li key={lang}>{lang}</li>;
                })}
            </ul>
            <p>Latitude: {lat}</p>
            <p>Longitude: {long}</p>
            <img src={country.flags.png} alt={country.flags.alt} />
            <hr />
            <Weather lat={lat} lng={long} />
        </>
    );
}
