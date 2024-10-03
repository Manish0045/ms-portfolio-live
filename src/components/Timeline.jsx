// import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Timeline.css';

function Timeline() {
    return (
        <div className="timeline_container" id='timeline'>
            <h2 className='timeline-title'>My Career Journey</h2>
            <VerticalTimeline>

                {/* SSC */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2014 - 2015"
                    iconStyle={{ background: '#f9c74f', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">SSC</h3>
                    <p>Completed Secondary School (SSC)</p>
                    <p>S. K. B. Damani Highschool,Sangli</p>
                </VerticalTimelineElement>

                {/* HSC */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016 - 2017"
                    iconStyle={{ background: '#f9844a', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">HSC</h3>
                    <p>Completed Higher Secondary School (HSC)</p>
                    <p>Willingdon College, Sangli</p>
                </VerticalTimelineElement>

                {/* BCA */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017 - 2019"
                    iconStyle={{ background: '#f94144', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Bachelors in Computer Application (BCA)</h3>
                    <p>V.P. Institute of Management Studies and Research Centre, Sangli</p>
                </VerticalTimelineElement>

                {/* Junior Software Developer Course */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--course"
                    date="2018 - 2019"
                    iconStyle={{ background: '#577590', color: '#0A1927FF' }}
                >
                    <h3 className="vertical-timeline-element-title">Junior Software Developer Course</h3>
                    <p>Pradhanmantri Kaushal Vikas Yojna (Sangli)</p>
                </VerticalTimelineElement>

                {/* MCA */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019 - 2022"
                    iconStyle={{ background: '#90be6d', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Masters in Computer Application (MCA)</h3>
                    <p>Dr. D. Y. Patil Institute of Management, Ambi, Pune</p>
                </VerticalTimelineElement>


                {/* Full Stack Python Course */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--course"
                    date="2022 - 2023"
                    iconStyle={{ background: '#43aa8b', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Full Stack Python Course</h3>
                    <p>Globaledx.com, Hyderabad</p>
                </VerticalTimelineElement>

                {/* Web Developer Intern */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023"
                    iconStyle={{ background: '#577590', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
                    <p>Worked as an intern</p>
                </VerticalTimelineElement>

                {/* Jr. Backend Developer */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023"
                    iconStyle={{ background: '#f3722c', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Junior Backend Developer (Node.js)</h3>
                    <p>Ujjavilas Techsoft, Sangli</p>
                </VerticalTimelineElement>

                {/* Flutter Developer */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024"
                    iconStyle={{ background: '#43aa8b', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Flutter Developer</h3>
                    <p>Zidio Development</p>
                </VerticalTimelineElement>


            </VerticalTimeline>
        </div>
    )
}

export default Timeline;