import { useState, useEffect } from 'react';

export const useHTTP =(url)=> {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ weather, setWeather ] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
                .then(res=> {
                    if(!res.ok){
                        throw new Error('Failed to fetch data.');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsLoading(false);
                    const temperature = Math.floor((data.main.temp - 32) * 5 / 9);
                    setWeather(temperature);
                    // setWeather(data)
                })
                .catch(err=> console.error(err))
        }, 2000);
        });
    return [ isLoading, weather ]
};
