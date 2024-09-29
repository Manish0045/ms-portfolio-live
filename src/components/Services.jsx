import React from 'react';
import "../styles/Services.css"; // Assuming you have a CSS file for styling

function Services() {
    const services = [
        {
            id: 1,
            title: "Frontend Development",
            description: "Designing and developing responsive and user-friendly web interfaces using HTML, CSS, and JavaScript frameworks like React, Angular, or Vue.js."
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Building robust server-side applications and APIs using Node.js with frameworks like Express.js, and working with databases such as MongoDB, MySQL, or PostgreSQL."
        },
        {
            id: 3,
            title: "Database Management",
            description: "Designing, implementing, and optimizing databases, including schema design, querying, indexing, and performance tuning."
        },
        {
            id: 4,
            title: "API Integration",
            description: "Integrating third-party APIs and services to add functionality, such as payment gateways, social media integration, or data analytics tools."
        },
        {
            id: 5,
            title: "Deployment and DevOps",
            description: "Setting up continuous integration and deployment pipelines, managing server infrastructure, and ensuring scalability, security, and performance of applications."
        },
        {
            id: 6,
            title: "Version Control",
            description: "Using Git for version control, managing code repositories, and collaborating with team members using platforms like GitHub or GitLab."
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
