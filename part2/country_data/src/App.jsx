import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import SearchResult from "./SearchResult";

function App() {
    const [allData, setAllData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState();
    const [isLessThanTen, setIsLessThanTen] = useState(false);
    // const [setDetailedCountry]

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_COUNTRIES_API_URL}`).then((data) => {
            // console.log(data.data);
            setAllData(data.data);
        });
    }, []);

    function handleSearchChange(e) {
        e.preventDefault();
        setSearchQuery(e.target.value.toLowerCase());
    }

    function handleSearch(e) {
        e.preventDefault();
        let searchedData = allData.filter((country) => {
            let conbinedName = `${country.name.official} ${country.name.common}`;
            let combinedNames = conbinedName.split(" ");
            let matches = combinedNames.some((name) => {
                // console.log(name, searchQuery, name.toLowerCase().startsWith(searchQuery));
                return name.toLowerCase().startsWith(searchQuery);
            });
            // console.log(matches);
            return matches;
        });
        if (searchedData.length > 10) {
            setSearchResult("more than 10");
            setIsLessThanTen(false);
        } else if (searchedData.length == 1) {
            setSearchResult(searchedData);
            setIsLessThanTen(true);
        } else {
            setSearchResult(searchedData.map((data) => data.name));
            setIsLessThanTen(true);
        }
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <div>
                    Search: <input type="text" onChange={handleSearchChange} />
                </div>
                <button type="submit">Search</button>
            </form>
            <SearchResult isLessThanTen={isLessThanTen} searchResult={searchResult} />
        </>
    );
}

export default App;
