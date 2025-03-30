import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBarPages() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar navbar-pages">
            <ul className={open? "nav-links active" : "nav-links"}>
                <li> <Link to="/Home">Home</Link></li>
                <li> <Link to="/AboutMe">About</Link></li>
                <li> <Link to="/Projects">Projects</Link></li>
                <li> <Link to="/Resume">Resume</Link></li>
                <li> <Link to="/Contact">Contact</Link></li>
                <i className={open ? "fas fa-bars close" : "fas fa-bars open"} onClick={()=> setOpen(true)}></i>
                <i className={open ? "fas fa-times close" : "fas fa-times open"} onClick={()=> setOpen(false)}></i>
            </ul>

        </nav>
    );
}

export default NavBarPages;