// import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the upward arrow icon
import "../styles/Footer.css"; // Ensure you have the correct path to your CSS
import instagramIcon from "/Images/instagram_icon.png"; // Check path
import facebookIcon from "/Images/facebook_icon.png"; // Check path
import gmailIcon from "/Images/gmail_icon.png"; // Check path
import githubIcon from "/Images/github_icon.png";
import linkedinIcon from "/Images/linkedin_icon.png";
import whatsappIcon from "/Images/whatsapp_icon.png";

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
                            <li>
                                <a href="https://api.whatsapp.com/send/?phone=918623943847&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={whatsappIcon} alt="Facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/manish-sahani-mca/" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon linkedin" src={linkedinIcon} alt="Facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/manishs_45/" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={instagramIcon} alt="Instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/ms0045/" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={facebookIcon} alt="Facebook" />
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/Manish0045" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon github" src={githubIcon} alt="GitHub" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:manishsahani345@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={gmailIcon} alt="Gmail" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <p>&copy; 2024 Manish Sahani. All rights reserved.</p>
                        <button className="scroll-top-button" onClick={scrollToTop} aria-label="Scroll to top">
                            <FaArrowUp />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
