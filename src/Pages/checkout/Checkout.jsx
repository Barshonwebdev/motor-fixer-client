import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const serviceData=useLoaderData();
    const {img,service_id,price,title}= serviceData;
    const {user}=useContext(AuthContext);
    const handleOrder=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=user?.email;
        const date=form.date.value;
        const order={
            CustomerName:name,
            email,
            date,
            price:price,
            service_id
        }
        console.log(order);
    }
    return (
      <div>
        <p className='text-center font-bold text-3xl'>Package: {title}</p>
        <div className=" ">
          <form onSubmit={handleOrder} className="mx-4 text-white">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  defaultValue={user.displayName}
                  className="input input-bordered"
                  name='name'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Issue Date"
                  className="input input-bordered"
                  name='date'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user.email}
                  className="input input-bordered"
                  name='email'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due</span>
                </label>
                <input
                  type="text"
                  defaultValue={'$ '+price}
                  className="input input-bordered"
                  name='due'
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success text-white btn-block">
                <input type="submit" value="Order" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Checkout;