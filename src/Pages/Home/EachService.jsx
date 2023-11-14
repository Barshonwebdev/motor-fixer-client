import React from 'react';

const EachService = ({service}) => {
    const {price,img,title}= service;
    return (
      <div className="card w-full shadow-xl">
        <figure className="">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default EachService;