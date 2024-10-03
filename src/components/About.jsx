/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import "../styles/About.css";
import Skills from './Skills';

function AboutMe() {
    return (
        <section className="about-me" id="about">
            <div className="container">
                <div className="about-content">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-details">
                        <div className="bio">
                            <p>Hello! I'm Manish Sahani, a passionate backend developer specializing in Node.js.</p>
                            <p>I have a strong foundation in JavaScript and extensive experience building server-side applications with Node.js and Express.js.</p>
                            <p>My expertise includes designing and implementing RESTful APIs, working with databases like MongoDB and MySQL, and deploying applications to cloud platforms like AWS and Heroku.</p>
                            <p>I enjoy solving complex problems and optimizing performance to deliver scalable and efficient backend solutions.</p>
                            <p>Let's collaborate and build robust and reliable backend systems together!</p>
                        </div>
                        <div className="profile-pic">
                            <img src="Images/myPic.png" alt="My Profile" className="profile-img" />
                        </div>
                    </div>
                </div>
                <div className="skills__content">
                    <Skills />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
