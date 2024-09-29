import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the upward arrow icon
import "../styles/Footer.css"; // Assuming you have a CSS file for styling

function Footer() {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <h3 className="footer-title">Connect with Me</h3>
                        <ul className="social-links">
                            {/* Social media links/icons */}
                        </ul>
                    </div>
                    <div className="footer-right">
                        <p>&copy; 2024 Your Name. All rights reserved.</p>
                        <button className="scroll-top-button" onClick={scrollToTop}>
                            <FaArrowUp />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
