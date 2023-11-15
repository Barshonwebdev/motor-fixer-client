import React from 'react';
import { Link } from 'react-router-dom';

const EachService = ({service}) => {
    const {_id,price,img,title}= service;
    return (
      <div className="card w-full shadow-xl">
        <figure className="">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-red-800">{title}</h2>
          <p className="text-red-700">${price}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-accent">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default EachService;