import { useEffect, useRef } from "react";
import CV from "../components/CV";
import "./About.css";

const skills = [
  { name: "React / JavaScript", level: 85, category: "frontend" },
  { name: "Python", level: 90, category: "backend" },
  { name: "Computer Vision", level: 80, category: "ai" },
  { name: "ROS (Robotics)", level: 75, category: "robotics" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "C / Embedded", level: 65, category: "embedded" },
];

const timeline = [
  {
    year: "2024 - Present",
    title: "Computer Engineering Student",
    org: "The Ohio State University",
    description: "Pursuing B.S. in Computer Engineering, focusing on autonomous systems and software development."
  },
  {
    year: "2024 - Present",
    title: "Member, Buckeye AutoDrive",
    org: "OSU Autonomous Vehicle Team",
    description: "Working on HMI and perception systems for autonomous vehicle competition."
  },
  {
    year: "2022 - 2024",
    title: "Vision Lead",
    org: "CR Robotics FRC Team",
    description: "Led computer vision development for competition robots, implementing object detection and tracking."
  }
];

const About = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    skillsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title animate-fade-up">About Me</h1>
        <p className="about-intro animate-fade-up delay-1">
          I'm <span className="highlight">Rocky Shao</span>, a first-year Computer Engineering student at
          The Ohio State University with a passion for building systems that bridge hardware and software.
        </p>
      </section>

      <section className="about-story animate-fade-up delay-2">
        <div className="story-content">
          <h2>My Journey</h2>
          <p>
            I grew up in <strong>Ithaca, NY</strong>, spent 10 formative years in <strong>China</strong>,
            and returned to Ithaca for high school. This multicultural background has shaped how I
            approach problem-solving and collaboration.
          </p>
          <p>
            My passion for engineering started with robotics, where I discovered the thrill of making
            machines see and think. Today, I'm channeling that excitement into autonomous vehicles,
            web development, and embedded systems.
          </p>
        </div>
        <div className="story-image">
          <div className="image-placeholder">
            <span>Engineering the Future</span>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title animate-fade-up">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item"
              ref={(el) => (skillsRef.current[index] = el)}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ '--target-width': `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2 className="section-title animate-fade-up">Experience</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item animate-fade-up" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-section animate-fade-up">
        <h2 className="section-title">Resume</h2>
        <CV />
      </section>
    </div>
  );
};

export default About;
