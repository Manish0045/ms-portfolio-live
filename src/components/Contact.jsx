import React, { useState } from 'react';
import "../styles/Contact.css";
import axios from 'axios';
import Modal from './Modal';

function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await sendMessage(name, email, message);
            setIsSent(true); // Show the modal
        } catch (error) {
            console.error("Error during submission:", error);
        }
    };

    const closeModal = () => {
        setIsSent(false); // Close the modal
        setTimeout(() => {
            window.location.href = '/'; // Redirect to home after closing
        }, 2000);
    };

    return (
        <section className="contact-us" id="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="left-section">
                        <div className="map-container">
                            <img src="map_image.png" alt="Map" className="map-image" />
                        </div>
                    </div>
                    <div className="right-section">
                        <h2 className="section-title">Contact Us</h2>
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        rows="4"
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-button">Send Message</button>
                            </form>
                            {isSent && (
                                <Modal
                                    message="Message sent successfully!"
                                    duration={3000}
                                    onClose={closeModal}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

async function sendMessage(name, email, message) {
    const URI = "https://product-crud-app-3f7k.onrender.com/";
    const URL = URI + "mail/send";
    const subject = `Message from ${email}`;
    const data = {
        name: name,
        userEmail: email,
        subject: subject,
        message: name + "\n" + message
    };
    console.log("Sending data:", data);

    try {
        const response = await axios.post(URL, data);
        console.log("Response received:", response.data);
        if (response.status === 200) {
            return response.data;
        } else {
            console.error("Unexpected response status:", response.status);
        }
    } catch (error) {
        console.error("Error sending message:", error.response ? error.response.data : error.message);
        throw error;
    }
}

export default ContactUs;
