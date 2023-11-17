import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {

    const {signIn}=useContext(AuthContext);
    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password).then((result) => {
          const user = result.user;
          console.log(user);
          const loggegUserEmail={email:user.email};
          fetch("https://motor-fixer-server-production.up.railway.app/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(loggegUserEmail),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              localStorage.setItem("car-access-token", data.token);
            });
        });
    }
    return (
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="text-center lg:text-left ">
            <img src={loginImg} alt="" />
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <h3 className='text-white mt-5 text-center text-3xl'>Login</h3>
            <form className="card-body" onSubmit={handleLogin} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name='email'
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name='password'
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login" className='btn btn-accent w-2/3 mx-auto' />
              </div>
            </form>
            <p className='mb-5 text-center text-white'>New here? <Link className='text-orange-600' to='/register'>Signup!</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;