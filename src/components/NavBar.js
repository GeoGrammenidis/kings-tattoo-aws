import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/hygiene">Hygiene</Link></li>
                <li><Link to="/staff">Staff</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </ul>
        </div>
    )
}