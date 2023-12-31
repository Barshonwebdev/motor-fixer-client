import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { BiShoppingBag } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
  const {user,logout}=useContext(AuthContext);
  const handleLogout=()=>{
    logout()
    .then(()=>{
      localStorage.removeItem('car-access-token')
    })
  }
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>
          <AnchorLink href="#about">About</AnchorLink>
        </Link>
      </li>
      <li>
        <Link>
          <AnchorLink href="#service">Services</AnchorLink>
        </Link>
      </li>
      {user?.email ? (
        <>
          <li >
            <Link to='/bookings'>My Bookings</Link>
          </li>
          <button onClick={handleLogout} className="btn btn-primary">
            <Link>Logout</Link>
          </button>
        </>
      ) : (
        <button className="btn btn-secondary">
          <Link to="/login">Login</Link>
        </button>
      )}
    </>
  );
    return (
      <div className="navbar h-28 mb-6 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navItems}</ul>
        </div>
        <div className="navbar-end space-x-4">
          <BiShoppingBag className="text-xl hover:scale-150"></BiShoppingBag>
          <FiSearch className="text-xl hover:scale-150"></FiSearch>
          <a className="btn btn-outline btn-error">Appointment</a>
        </div>
      </div>
    );
};

export default Header;