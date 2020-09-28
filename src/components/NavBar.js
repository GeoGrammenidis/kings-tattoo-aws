import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const [active, setActive] = React.useState(false);
    function onClick() {
        setActive(!active)
    }
    
    return (
        <div className="navbar-wrapper">
            <div className={active?"navbar-container open":"navbar-container"}>
                <NavLink to="/">
                    <div className="navbar-logo">
                        <img src="https://my-image-upload-bucket-kings-tattoo-2.s3-eu-central-1.amazonaws.com/87421c75-e905-4c92-b7c6-4a100e18d1ca.png"></img>
                        <h2>Kings <br></br>Tattoo</h2>
                    </div>
                </NavLink>
                <div className={active?"drop-down open":"drop-down"}>
                    <ul>
                        <li><NavLink to="/" exact activeClassName="selected">Home</NavLink></li>
                        <li><NavLink to="/gallery" activeClassName="selected">Gallery</NavLink></li>
                        <li><NavLink to="/hygiene" activeClassName="selected">Hygiene</NavLink></li>
                        <li><NavLink to="/staff" activeClassName="selected">Staff</NavLink></li>
                        <li><NavLink to="/about-us" activeClassName="selected">About Us</NavLink></li>
                    </ul>
                </div>
                <div className="burger-container">
                    <div onClick={()=>onClick()} className={active?"burger open":"burger"}>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                    </div>
                </div>

            </div>

        </div>
    )
}