import React from 'react';
import "../styles/Navigation.css";

function Navigation() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar">
            <div className="left_navigation">
                <img src="./myLogo.png" alt="Signature" className='sign' onClick={() => scrollToSection("home")} />
            </div>
            <div className="right_navigation">
                <ul className="navbar__lists">
                    <li className="navbar__list">
                        <button onClick={() => scrollToSection("home")} className="navbar__link">Home</button>
                    </li>
                    <li className="navbar__list">
                        <button onClick={() => scrollToSection("about")} className="navbar__link">About</button>
                    </li>
                    <li className="navbar__list">
                        <button onClick={() => scrollToSection("projects")} className="navbar__link">Projects</button>
                    </li>
                    <li className="navbar__list">
                        <button onClick={() => scrollToSection("contact")} className="navbar__link">Contact</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
