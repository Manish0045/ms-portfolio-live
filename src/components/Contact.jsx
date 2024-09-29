import React from 'react';
import "../styles/Contact.css"; // Assuming you have a CSS file for styling

function ContactUs() {
    return (
        <section className="contact-us" id="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="left-section">
                        {/* Include your map component or image here */}
                        <div className="map-container">
                            {/* Example image for map */}
                            <img src="map_image.png" alt="Map" className="map-image" />
                        </div>
                    </div>
                    <div className="right-section">
                        <h2 className="section-title">Contact Us</h2>
                        <div className="contact-form">
                            <form>
                                <div className="form-group">
                                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
                                </div>
                                <button type="submit" className="submit-button">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
