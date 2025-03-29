import React, { useState } from "react";

function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar">
            <h1>Panda Portfolio</h1>
            <ul className={open? "nav-links active" : "nav-links"}>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
                <i className={open ? "fas fa-bars close" : "fas fa-bars open"} onClick={()=> setOpen(true)}></i>
                <i className={open ? "fas fa-times close" : "fas fa-times open"} onClick={()=> setOpen(false)}></i>
            </ul>

        </nav>
    );
}

export default NavBar;
