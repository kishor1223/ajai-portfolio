import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Fuoday HRMS & ATS Platform</h2></a>
                    <p>Enterprise-grade HR automation system built with Laravel, Java, and Angular. Features real-time notifications via WebSocket, Redis caching, and AWS S3 integration.</p>
                </div>
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Enzopik Oil Collection Platform</h2></a>
                    <p>Industrial automation platform for oil collection tracking using Laravel REST APIs and Angular. Includes role-based access control and real-time analytical dashboards.</p>
                </div>
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Enzopik Official Website</h2></a>
                    <p>Corporate website with dynamic content management, secure file uploads via AWS S3, and a responsive Angular frontend with SEO optimization.</p>
                </div>
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Thikse Software Solutions Website</h2></a>
                    <p>Corporate website featuring backend API development, redis caching for optimized content delivery, and an analytics dashboard using Chart.js.</p>
                </div>
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Seminar Hall Booking System</h2></a>
                    <p>Full-stack booking platform built with PHP and MySQL. Features secure session management, conflict resolution algorithms, and automated email notifications.</p>
                </div>
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Momento Events Platform</h2></a>
                    <p>Event management system with secure payment gateway integration, RESTful APIs for ticketing, and role-based admin panels for revenue reporting.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;