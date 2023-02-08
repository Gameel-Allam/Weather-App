import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEODB_OPTIONS, GEODB_CITIES } from "../api"

const Search = ({ getSearch }) => {

    const [searchText, setSearchText] = useState(null);

    const handleSearchTextChange = (inputSearch) => {
        setSearchText(inputSearch);
        getSearch(inputSearch);
    }

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${GEODB_CITIES}?minPopulation=100000&namePrefix=${inputValue}`, GEODB_OPTIONS);
            const response_1 = await response.json();
            return {
                options: response_1.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                })
            };
        } catch (err) {
            return console.error(err);
        }
    }

    return (<>
        <AsyncPaginate
            placeholder="Enter your city"
            styles={{ borderRadius: "100px" }}
            debounceTimeout={1000}
            value={searchText}
            onChange={handleSearchTextChange}
            loadOptions={loadOptions}
        />
    </>
    )
}

export default Search