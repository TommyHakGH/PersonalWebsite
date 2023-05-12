import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
    <div className="toggleButton">
        <buttom></buttom>
    </div>
    <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Project </Link>
        <Link to="/experience"> Experience </Link>
    </div>
    </div>
  )
}

export default Navbar