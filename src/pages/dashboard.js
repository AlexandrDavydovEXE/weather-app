import React from 'react';
import { Link } from 'react-router-dom';

import { useHTTP } from '../hooks/useHTTP';

export const DashboardPage =()=>{

    const city = 'Kharkiv';
    const id = 'b1b35bba8b434a28a0be2a3e1071ae5b';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}&units=imperial`;

    const [ isLoading, weather ] = useHTTP(url);

    const result = isLoading? <h2>Loading data...</h2>
        : <h2>Temperature in Kharkiv: { weather } </h2>

    return (
        <div className="wrapper fadeInDown">
            { result }
            <button className="btn btn-success">
                <Link to='/'>BACK </Link>
            </button>
        </div>
    )
};
