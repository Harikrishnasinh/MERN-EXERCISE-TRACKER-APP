import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-dark bg-primary mt-4">
      <div className="container-fluid">
        <a className="navbar-brand fs-3" >Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={'/'} className="nav-link fs-5">Exercises</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/create'} className="nav-link fs-5">Create Exercise Log</NavLink>
          </li>
            <li className="nav-item">
              <NavLink to={'/user'} className="nav-link fs-5">Create User</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={'/userslist'} className="nav-link fs-5">Users</NavLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar