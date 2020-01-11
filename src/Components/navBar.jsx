import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='#'>
        Movie App
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <div className='navbar-nav'>
          <NavLink className='nav-link' to='/movies'>
            Movies
          </NavLink>
          <NavLink className='nav-link' to='/customers'>
            Customers
          </NavLink>
          <NavLink className='nav-link' to='/rentals'>
            Rentals
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className='nav-link' to='/Login'>
                Login
              </NavLink>
              <NavLink className='nav-link' to='/Register'>
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className='nav-link' to='/profile'>
                {user.name}
              </NavLink>
              <NavLink className='nav-link' to='/logout'>
                logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
