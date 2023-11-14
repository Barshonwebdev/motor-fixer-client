import  { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Register = () => {

    const {createUser}=useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;

    createUser(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user);
    })
  };
  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left ">
          <img src={loginImg} alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <h3 className="text-white mt-5 text-center text-3xl">Sign Up</h3>
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
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
                name="password"
              />
              
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="SignUp"
                className="btn btn-accent w-2/3 mx-auto"
              />
            </div>
          </form>
          <p className="mb-5 text-center text-white">
            Have an account?{" "}
            <Link className="text-orange-600" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
