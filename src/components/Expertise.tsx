import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Laravel",
    "Java",
    "Angular",
    "TypeScript",
    "JavaScript",
    "PHP",
    "HTML5",
    "CSS3",
    "SASS",
    "Tailwind CSS",
    "SQL"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "AWS S3",
    "MySQL",
    "Redis",
    "Postman",
    "Linux"
];

const labelsThird = [
    "WebSocket",
    "Pusher",
    "RxJS",
    "NgRx",
    "JWT",
    "RBAC",
    "OWASP",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Development</h3>
                        <p>I build scalable web applications using Laravel, Java, and Angular. I have strong expertise in creating RESTful APIs, responsive UIs with TypeScript, and managing complex database interactions.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & Database</h3>
                        <p>I optimize performance using Redis caching and efficient MySQL schema designs. I also have experience with AWS S3 for cloud storage and Git/GitHub for version control and collaboration.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Real-time & Security</h3>
                        <p>I specialize in real-time communication systems using WebSocket and Pusher. My security practices include JWT authentication, RBAC, and adhering to OWASP standards for secure application development.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;