import React, { useState } from 'react'
import { Navbar } from 'react-navbar-menu'

function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }



    return(
        <div>
            <nav className="navBar">
                <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
            </nav>
        </div>
    );
}

export default Header