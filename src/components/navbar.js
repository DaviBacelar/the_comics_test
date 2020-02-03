import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../marvel-logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img className="marvel-logo" src={logo} />
            </div>
            <div className="menu">
                <Link to="/"><a>Home</a></Link>
                <Link to="/comics"><a>Comics</a></Link>
                <Link to="/characters"><a>Characters</a></Link>
                <Link to="/creators"><a>Creators</a></Link>
                <Link to="/events"><a>Events</a></Link>
                {/* <Link to="/comics"><a>Series</a></Link>
                <Link to="/comics"><a>Stories</a></Link> */}
            </div>
        </div>
    )
}

export default Navbar