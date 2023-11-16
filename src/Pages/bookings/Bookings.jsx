import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {

    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/booking?email=${user?.email}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])

    const handleDelete=(id)=>{
        const proceed=confirm('Are you sure you want to delete this?');
        if(proceed){
            fetch(`http://localhost:5000/booking/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if(data.deletedCount>0){
                    alert("Deleted Successfully");
                    const remaining=bookings.filter(booking=>booking._id!==id);
                    setBookings(remaining);
                }
              });
        }
    }
    return (
      <div>
        <h2 className="text-4xl text-center mb-8">
          Your Bookings : {bookings.length} bookings in total
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Package</th>
                <th>Email</th>
                <th>Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
                
              </tr>
            </thead>
            <tbody>
                {
                    bookings.map(booking=><BookingRow key={booking._id} handleDelete={handleDelete} booking={booking}></BookingRow>)
                }
            </tbody>
            
          </table>
        </div>
      </div>
    );
};

export default Bookings;