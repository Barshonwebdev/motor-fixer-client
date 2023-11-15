import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const serviceData=useLoaderData();
    const {img,service_id,price,title}= serviceData;
    return (
        <div>
            name : {title}
        </div>
    );
};

export default Checkout;