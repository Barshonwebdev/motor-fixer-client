import React, { useEffect, useState } from 'react';
import EachService from './eachService';


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("https://motor-fixer-server-production.up.railway.app/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[])
    return (
        <div id='service'>
            <div className='text-center'>
                <p className='text-orange-600 font-bold'>Services</p>
                <h3 className='text-3xl font-bold'>Our Service Expertises</h3>
                <p className='text-gray-500 mt-3 mb-10'>Our services range from simple maintenance to full fledged part replacements and modding. <br />Customize and tweak with the help of our experts!</p>
                <div className='lg:grid-cols-3 grid-cols-1 grid gap-5'>
                    {
                        services.map(service=><EachService key={service._id} service={service}></EachService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;