// import React from 'react';
import { useRef } from 'react';
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
import djangoImage from "../assets/Logos/django.png";
import flutterImage from "../assets/Logos/flutter.png";
import firebseImage from "../assets/Logos/firebase.png";
import htmlImage from "../assets/Logos/HTML.png";
import cssImage from "../assets/Logos/CSS.png";
import dartImage from "../assets/Logos/dart.png";

const skills = [
    { id: 1, name: "HTML", imageUrl: htmlImage },
    { id: 2, name: "CSS", imageUrl: cssImage },
    { id: 3, name: "JavaScript", imageUrl: javascriptImage },
    { id: 4, name: "React.js", imageUrl: reactImage },
    { id: 5, name: "Node.js", imageUrl: nodeImage },
    { id: 6, name: "Express.js", imageUrl: expressImage },
    { id: 7, name: "Postman", imageUrl: postmanImage },
    { id: 8, name: "Python", imageUrl: pythonImage },
    { id: 9, name: "Flutter", imageUrl: flutterImage },
    { id: 10, name: "Dart Programming", imageUrl: dartImage },
    { id: 11, name: "Git", imageUrl: gitImage },
    { id: 12, name: "GitHub", imageUrl: gitHubImage },
    { id: 13, name: "MySQL", imageUrl: mySQLImage },
    { id: 14, name: "MongoDB", imageUrl: mongoDBImage },
    { id: 15, name: "Firebase", imageUrl: firebseImage },
    { id: 16, name: "Django", imageUrl: djangoImage },
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
