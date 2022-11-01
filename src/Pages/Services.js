import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetcher from '../Api';

const Services = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
        /*  axios.get('http://localhost:5000/service')
              .then(res => setServices(res.data)); */

        /*   const name = () => {
             }
             name(); */

        (async () => {
            const res = await fetcher.get('/service');
            setServices(res.data);
        })()

    }, [])
    console.log(services)

    return (
        <div>
            <p>service</p>
            <p>service</p>
            <p>service</p>
            <p>service</p>
            <p>service</p>
            <p>service</p>
            <p>service</p>
            <p>service</p>
            <p>service</p>
            <p>service</p>
            <p>service</p>
            <p>service</p>
            <p>service</p>s
        </div>
    );
};

export default Services;