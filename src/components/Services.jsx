import React from 'react';
import "../styles/Services.css"; // Assuming you have a CSS file for styling

function Services() {
    const services = [
        {
            id: 1,
            title: "Frontend Development",
            description: "Crafting visually appealing and responsive web interfaces using HTML, CSS, and JavaScript frameworks such as React, Angular, or Vue.js. Focus on user experience and accessibility."
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Developing scalable and secure server-side applications and RESTful APIs with Node.js, utilizing frameworks like Express.js, and managing databases such as MongoDB, MySQL, or PostgreSQL."
        },
        {
            id: 3,
            title: "Database Management",
            description: "Expertise in designing and optimizing relational and NoSQL databases, including schema design, complex querying, indexing strategies, and performance tuning to ensure data integrity and efficiency."
        },
        {
            id: 4,
            title: "API Development",
            description: "Creating robust and scalable APIs to enable communication between different software applications, ensuring they are secure, well-documented, and easy to use."
        },
        {
            id: 5,
            title: "Deployment and DevOps",
            description: "Implementing CI/CD pipelines for automated testing and deployment, managing server infrastructure, and optimizing application performance and security in cloud environments like AWS, Azure, or Google Cloud."
        },
        {
            id: 6,
            title: "Version Control",
            description: "Leveraging Git for effective version control, managing code repositories, and facilitating collaboration among team members using platforms like GitHub and GitLab, ensuring code quality and traceability."
        },
        {
            id: 7,
            title: "Freelance Development",
            description: "Offering flexible and tailored development solutions on a freelance basis, working closely with clients to understand their needs and delivering high-quality software solutions across various technologies."
        }
    ];


    return (
        <section className="services" id="services">
            <div className="container">
                <h2 className="section-title">Services</h2>
                <div className="services-list">
                    {services.map(service => (
                        <div key={service.id} className="service-item">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
