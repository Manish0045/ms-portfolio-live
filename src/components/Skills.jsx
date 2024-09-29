import React, { useRef } from 'react';
import "../styles/Skills.css";
import nodeImage from "../assets/Logos/node.png";
import javascriptImage from "../assets/Logos/javascript.png";
import expressImage from "../assets/Logos/express.png";
import mySQLImage from "../assets/Logos/mySql.png";
import pythonImage from "../assets/Logos/python.png";
import mongoDBImage from "../assets/Logos/mongo.png";
import gitImage from "../assets/Logos/git.png";
import gitHubImage from "../assets/Logos/github.png";
import reactImage from "../assets/Logos/react.png";
import postmanImage from "../assets/Logos/postman.png";

const skills = [
    {
        id: 1,
        name: "Node.js",
        imageUrl: nodeImage, // Sample image URL
    },
    {
        id: 2,
        name: "Express.js",
        imageUrl: expressImage, // Sample image URL
    },
    {
        id: 3,
        name: "JavaScript",
        imageUrl: javascriptImage, // Sample image URL
    },
    {
        id: 4,
        name: "Python",
        imageUrl: pythonImage, // Sample image URL
    },
    {
        id: 5,
        name: "Django",
        imageUrl: "https://via.placeholder.com/150", // Sample image URL
    },
    {
        id: 6,
        name: "Git",
        imageUrl: gitImage, // Sample image URL
    },
    {
        id: 7,
        name: "GitHub",
        imageUrl: gitHubImage, // Sample image URL
    },
    {
        id: 8,
        name: "GitLab",
        imageUrl: "https://via.placeholder.com/150", // Sample image URL
    },
    {
        id: 9,
        name: "Postman",
        imageUrl: postmanImage, // Sample image URL
    },
    {
        id: 10,
        name: "React.js",
        imageUrl: reactImage, // Sample image URL
    },
    {
        id: 11,
        name: "MySQL",
        imageUrl: mySQLImage, // Sample image URL
    },
    {
        id: 12,
        name: "MongoDB",
        imageUrl: mongoDBImage, // Sample image URL
    },
    // Add more skills as needed
];

const Skills = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <section className="skills" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
                <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
                <div className="skills-wrapper" ref={scrollRef}>
                    {skills.map(skill => (
                        <div key={skill.id} className="skill-tile">
                            <img src={skill.imageUrl} alt={skill.name} className="skill-image" />
                            <h3 className="skill-name">{skill.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
            </div>
        </section>
    );
}

export default Skills;