// import React from 'react';
import { useState } from 'react';
import "../styles/Projects.css";
import portfolioHomeImage from "../assets/project_images/portfolio/home_screen.png";
import attendanceManagementImage from "../assets/project_images/attendance_app/option_page.png";
import blogAppImage from "../assets/project_images/blog_app/blog_splash.png";
import vibroImage from "../assets/project_images/vibro/vibro_home.png";
import productCrudImage from "../assets/project_images/product_crud/crud_thumbnail.png";

const projects = [
    {
        id: 1,
        title: "My Portfolio",
        description: "An engaging personal portfolio web app built with React and Vite, showcasing my skills, projects, and professional journey. Features a sleek, responsive design and an interactive contact form, allowing users to easily reach out with inquiries. Explore my work and connect seamlessly through this user-friendly platform!",
        imageUrl: portfolioHomeImage,
        liveDemoUrl: "https://ms-portfolio-live.onrender.com/",
        githubUrl: "https://github.com/Manish0045/ms-portfolio-live",
    },
    {
        id: 2,
        title: "Attendance Management App",
        description: "A Flutter application using Firebase for backend services that allows teachers to track student attendance easily. Features include real-time attendance logging and report generation.",
        imageUrl: attendanceManagementImage,
        githubUrl: "https://github.com/Manish0045/go-school-app",
    },
    {
        id: 3,
        title: "Blog App",
        description: "A Flutter-based blog application utilizing Firebase for data storage. Users can create, edit, and comment on posts, featuring user authentication and post categorization.",
        imageUrl: blogAppImage,
        githubUrl: "https://github.com/Manish0045/blog-app",
    },
    {
        id: 4,
        title: "Vibro",
        description: "A web application built with Node.js and Express.js, using MySQL as the database. Vibro provides a platform for users to manage their tasks efficiently.",
        imageUrl: vibroImage,
    },
    {
        id: 5,
        title: "Product CRUD",
        description: "A Node.js application that allows users to perform CRUD operations on products using MongoDB. The app is designed for easy management of product data.",
        imageUrl: productCrudImage,
        liveDemoUrl: "https://product-crud-app-3f7k.onrender.com/",
        githubUrl: "https://github.com/Manish0045/product_crud_app",
    },
];

function Projects() {
    const [focusedProject, setFocusedProject] = useState(null);

    const handleScroll = (event) => {
        const container = event.target;
        const scrollPosition = container.scrollLeft;
        const tileWidth = container.clientWidth;

        const focusedIndex = Math.floor((scrollPosition + tileWidth / 2) / tileWidth);
        setFocusedProject(focusedIndex);
    };

    return (
        <section className="projects" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-container" onScroll={handleScroll}>
                {projects.map((project, index) => {
                    const hasLiveDemo = !!project.liveDemoUrl;
                    const hasGithub = !!project.githubUrl;
                    const buttonCount = [hasLiveDemo, hasGithub].filter(Boolean).length;

                    return (
                        <div
                            key={project.id}
                            className={`project-tile ${focusedProject === index ? 'focused' : ''}`}
                        >
                            <img src={project.imageUrl} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-description">
                                    <p>{project.description}</p>
                                </div>
                                <div className={`project-buttons button-count-${buttonCount}`}>
                                    {hasLiveDemo && (
                                        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                                            Live Demo
                                        </a>
                                    )}
                                    {hasGithub && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                                            GitHub
                                        </a>
                                    )}
                                    {!hasLiveDemo && !hasGithub && (
                                        <button disabled className="project-button disabled">
                                            No Links Available
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;