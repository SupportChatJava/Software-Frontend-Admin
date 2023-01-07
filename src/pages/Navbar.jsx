import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-light bg-success">
            <span className="navbar-brand mb-0 h1">Admin Panel</span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/Register">Register</NavLink>
            <NavLink to="/Users">Users</NavLink>
        </nav>
    );
}

export default Navigation;

