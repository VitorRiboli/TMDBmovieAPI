import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import './NavBar.css';

const Navbar = () => {
    return (
        <nav id='navbar'>
            <h2>
                <Link to="/">
                    <BiCameraMovie />Movies
                </Link>
            </h2>
            <form>
                <input type="text" placeholder='Buque um filme' />
                <button type='submit'>
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar