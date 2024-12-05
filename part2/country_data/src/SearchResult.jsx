import { ListOfCountries } from "./ListOfCountries";
import SingleCountry from "./SingleCountry";

export default function SearchResult({ isLessThanTen, searchResult }) {
    if (searchResult) {
        if (isLessThanTen) {
            if (searchResult.length === 1) {
                return <SingleCountry details={searchResult[0]} />;
            } else if (searchResult.length === 0) {
                return <>Unfortunately No country found with that initial</>;
            } else return <ListOfCountries countries={searchResult} />;
        } else {
            return <>Too many searchResults</>;
        }
    } else {
        return <>Type name of a country to search</>;
    }
}

