import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect( () =>{
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]));
    }, [countryName])
    return (
        <div>
            <h2>Country Detail for: {countryName}</h2>
            <p>Region: {country.region}</p>
        </div>
    );
};

export default CountryDetail;