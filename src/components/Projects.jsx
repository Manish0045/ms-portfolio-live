import React, { useState } from 'react';
import "../styles/Projects.css"; // Assuming you have a Projects.css file for styling

// Sample projects data
const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "Description of Project 1. This is a sample description for Project 1. It can be long and will scroll within the tile.",
        imageUrl: "https://via.placeholder.com/150", // Sample image URL
        liveDemoUrl: "https://example.com", // Sample live demo URL
        githubUrl: "https://github.com/example/project1", // Sample GitHub repository URL
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description of Project 2. This is a sample description for Project 2. It can be long and will scroll within the tile.",
        imageUrl: "https://via.placeholder.com/150", // Sample image URL
        liveDemoUrl: "https://example.com", // Sample live demo URL
        githubUrl: "https://github.com/example/project2", // Sample GitHub repository URL
    },
    {
        id: 3,
        title: "Project 3",
        description: "Description of Project 3. This is a sample description for Project 3. It can be long and will scroll within the tile.",
        imageUrl: "https://via.placeholder.com/150", // Sample image URL
        liveDemoUrl: "https://example.com", // Sample live demo URL
        githubUrl: "https://github.com/example/project3", // Sample GitHub repository URL
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
