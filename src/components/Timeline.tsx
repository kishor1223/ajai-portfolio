import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'none', color: 'white', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid  transparent' }}
            date="Aug 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Thikse Software Solutions, Puducherry</h4>
            <p>
              Developed API architecture, real-time notifications with WebSocket/Pusher, Redis caching, AWS S3 integration, and role-based access control.
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'none', color: 'white', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid  transparent' }}
            date="June 2025 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Programmer</h3>
            <h4 className="vertical-timeline-element-subtitle">National Informatics Centre (NIC), Puducherry</h4>
            <p>
              Worked on e-governance platforms, MySQL database normalization/optimization, and backend integration.
            </p>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'none', color: 'white', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid  transparent' }}
            date="March 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Twilight IT Solutions, Puducherry</h4>
            <p>
              Built dynamic web pages with HTML/CSS/PHP/MySQL, focusing on responsive design and database connectivity.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;