import React, { useState } from 'react';
import "../styles/Projects.css"; // Assuming you have a Projects.css file for styling
import portfolioHomeImage from "../assets/project_images/portfolio/home_screen.png";
// import attendanceManagementImage from "../assets/project_images/attendance_management.png"; // Replace with actual image
// import blogAppImage from "../assets/project_images/blog_app.png"; // Replace with actual image
// import vibroImage from "../assets/project_images/vibro.png"; // Replace with actual image
// import productCrudImage from "../assets/project_images/product_crud.png"; // Replace with actual image

// Sample projects data
const projects = [
    {
        id: 1,
        title: "My Portfolio",
        description: "A personal portfolio web app built using React and Vite. It showcases my background, skills, and work experience.",
        imageUrl: portfolioHomeImage,
        liveDemoUrl: "https://ms-portfolio-live.onrender.com/",
        githubUrl: "https://github.com/Manish0045/ms-portfolio-live?tab=readme-ov-file",
    },
    {
        id: 2,
        title: "Attendance Management App",
        description: "A Flutter application using Firebase for backend services that allows teachers to track student attendance easily. Features include real-time attendance logging and report generation.",
        imageUrl: "attendanceManagementImage",
        liveDemoUrl: "https://attendance-management-example.com", // Replace with actual URL
        githubUrl: "https://github.com/example/attendance-management-app", // Replace with actual URL
    },
    {
        id: 3,
        title: "Blog App",
        description: "A Flutter-based blog application utilizing Firebase for data storage. Users can create, edit, and comment on posts, featuring user authentication and post categorization.",
        imageUrl: "blogAppImage",
        liveDemoUrl: "https://blog-app-example.com", // Replace with actual URL
        githubUrl: "https://github.com/example/blog-app", // Replace with actual URL
    },
    {
        id: 4,
        title: "Vibro",
        description: "A web application built with Node.js and Express.js, using MySQL as the database. Vibro provides a platform for users to manage their tasks efficiently.",
        imageUrl: "vibroImage",
        liveDemoUrl: "https://vibro-example.com", // Replace with actual URL
        githubUrl: "https://github.com/example/vibro", // Replace with actual URL
    },
    {
        id: 5,
        title: "Product CRUD",
        description: "A Node.js application that allows users to perform CRUD operations on products using MongoDB. The app is designed for easy management of product data.",
        imageUrl: "productCrudImage",
        liveDemoUrl: "https://product-crud-example.com", // Replace with actual URL
        githubUrl: "https://github.com/example/product-crud", // Replace with actual URL
    },
    // Add more projects as needed
];

function Projects() {
    const [focusedProject, setFocusedProject] = useState(null);

    const handleScroll = (event) => {
        const container = event.target;
        const scrollPosition = container.scrollLeft;
        const tileWidth = container.clientWidth;

        // Calculate the index of the focused project based on scroll position and tile width
        const focusedIndex = Math.floor((scrollPosition + tileWidth / 2) / tileWidth);
        setFocusedProject(focusedIndex);
    };

    return (
        <section className="projects" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-container" onScroll={handleScroll}>
                {projects.map((project, index) => (
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
                            <div className="project-buttons">
                                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-button">Live Demo</a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-button">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
