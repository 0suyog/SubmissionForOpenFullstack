import { useEffect, useState } from "react";

export function ListOfCountries({ countries }) {
    const [list, setList] = useState(countries);
    const [showOfficial, setShowOfficial] = useState(false);
    useEffect(() => {
        setList(countries);
    }, [countries]);

    function handleCheckBox(e) {
        setShowOfficial(e.target.checked);
    }

    return (
        <>
            <input type="checkbox" onChange={handleCheckBox}/><span>List Official Names</span>
            <ol>
                {list.map(({ common, official }) => {
                    return <li key={official}>{showOfficial ? official : common}</li>;
                })}
            </ol>
        </>
    );
}
