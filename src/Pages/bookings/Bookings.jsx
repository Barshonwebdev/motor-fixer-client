import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import { data } from 'autoprefixer';

const Bookings = () => {

    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);
    const url = `https://motor-fixer-server-production.up.railway.app/booking?email=${user?.email}`;

    useEffect(()=>{
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[url])

    const handleDelete=(id)=>{
        const proceed=confirm('Are you sure you want to delete this?');
        if(proceed){
            fetch(
              `https://motor-fixer-server-production.up.railway.app/booking/${id}`,
              {
                method: "DELETE",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  alert("Deleted Successfully");
                  const remaining = bookings.filter(
                    (booking) => booking._id !== id
                  );
                  setBookings(remaining);
                }
              });
        }
    }

    const handleConfirm=(id)=>{
        fetch(
          `https://motor-fixer-server-production.up.railway.app/booking/${id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ status: "confirm" }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              //update state
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const updated = bookings.find((booking) => booking._id === id);
              updated.status = "confirm";
              const newBooking = [updated, ...remaining];
              setBookings(newBooking);
            }
          });
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
                    bookings.map(booking=><BookingRow key={booking._id} handleConfirm={handleConfirm} handleDelete={handleDelete} booking={booking}></BookingRow>)
                }
            </tbody>
            
          </table>
        </div>
      </div>
    );
};

export default Bookings;