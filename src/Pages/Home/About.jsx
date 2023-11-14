import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={parts} className=" border-8 border-white absolute right-5 top-1/2 w-1/2 rounded-lg shadow-2xl" />
          </div>
          <div className="space-y-5 lg:w-1/2">
            <p className="text-orange-600 font-bold text-xl">About us</p>
            <h1 className="md:text-5xl text-3xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="">
              Reliable car fix service providing expert diagnostics and swift
              repairs to get you back on the road with confidence. Our skilled
              technicians ensure precision and efficiency for all your
              automotive needs.
            </p>
            <p className="">
              With a commitment to customer satisfaction, we offer transparent
              communication and competitive pricing. Trust us to deliver quality
              car repairs that prioritize both safety and performance.
            </p>
            <button className="btn btn-neutral text-white">
              Get More info
            </button>
          </div>
        </div>
      </div>
    );
};

export default About;