import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Education.scss'

function Education() {
    return (
        <div id="education">
            <div className="items-container">
                <h1>Education</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'none', color: 'white', boxShadow: 'none' }}
                        contentArrowStyle={{ borderRight: '7px solid  transparent' }}
                        date="October 2023 – April 2025"
                        iconStyle={{ background: '#5000ca', color: 'white' }}
                        icon={<FontAwesomeIcon icon={faGraduationCap} />}
                    >
                        <h3 className="vertical-timeline-element-title">Master of Computer Science (M.Sc.)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Pondicherry University</h4>
                        <p>
                            CGPA: 7.89/10
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'none', color: 'white', boxShadow: 'none' }}
                        contentArrowStyle={{ borderRight: '7px solid  transparent' }}
                        date="July 2020 – June 2023"
                        iconStyle={{ background: '#5000ca', color: 'white' }}
                        icon={<FontAwesomeIcon icon={faGraduationCap} />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Computer Science (B.Sc.)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Raak Arts and Science College, Tamil Nadu</h4>
                        <p>
                            CGPA: 7.8/10
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Education;
