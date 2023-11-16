import React from 'react';

const BookingRow = ({booking,handleDelete}) => {
    const {CustomerName,email,date,price,img,title,_id}=booking;
    return (
      <tr>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br />
        </td>
        <td>{CustomerName}</td>
        <td>{date}</td>
        <td>{price}</td>
      </tr>
    );
};

export default BookingRow;