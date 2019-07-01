import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage=()=>{

    return (
        <div className="wrapper fadeInDown">
            <h2>
                Check Your typings!
            </h2>
            <button className="btn btn-danger">
                <Link to='/'>BACK </Link>
            </button>
        </div>
    )
};
