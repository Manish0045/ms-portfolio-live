// import React from 'react';
import "../styles/Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faClock, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
                        <button onClick={() => scrollToSection("home")} className="navbar__link">
                            <span className="navbar__icon"><FontAwesomeIcon icon={faHome} /></span>
                            <span className="navbar__text">Home</span>
                        </button>
                    </li>
                    <li className="navbar__list">
                        <button onClick={() => scrollToSection("about")} className="navbar__link">
                            <span className="navbar__icon"><FontAwesomeIcon icon={faUser} /></span>
                            <span className="navbar__text">About</span>
                        </button>
                    </li>
                    <li className="navbar__list">
                        <button onClick={() => scrollToSection("timeline")} className="navbar__link">
                            <span className="navbar__icon"><FontAwesomeIcon icon={faClock} /></span>
                            <span className="navbar__text">Timeline</span>
                        </button>
                    </li>
                    <li className="navbar__list">
                        <button onClick={() => scrollToSection("projects")} className="navbar__link">
                            <span className="navbar__icon"><FontAwesomeIcon icon={faProjectDiagram} /></span>
                            <span className="navbar__text">Projects</span>
                        </button>
                    </li>
                    <li className="navbar__list">
                        <button onClick={() => scrollToSection("contact")} className="navbar__link">
                            <span className="navbar__icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <span className="navbar__text">Contact</span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
