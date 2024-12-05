import { useEffect, useState } from "react";

export default function SingleCountry({ details }) {
    const [country, setCountry] = useState(details);

    useEffect(() => {
        setCountry(details);
    }, [details]);

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
            <img src={country.flags.png} alt={country.flags.alt} />
        </>
    );
}
