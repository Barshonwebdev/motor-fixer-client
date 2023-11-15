import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Bookings = () => {

    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/booking?email=${user.email}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Bookings;