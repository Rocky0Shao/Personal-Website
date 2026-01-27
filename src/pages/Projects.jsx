import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "YR5-HMI-Intel",
    description: "Human-Machine Interface system for Buckeye AutoDrive, Ohio State's autonomous vehicle competition team. Working on real-time visualization and control systems.",
    tags: ["Python", "Autonomous Vehicles", "HMI", "ROS"],
    github: "https://github.com/Rocky0Shao/YR5-HMI-Intel",
    category: "robotics",
    featured: true
  },
  {
    id: 2,
    title: "2023Visions",
    description: "Computer vision pipeline for CR Robotics FRC team. Implemented object detection and tracking for competition game pieces using OpenCV and machine learning.",
    tags: ["Python", "Computer Vision", "OpenCV", "Robotics"],
    github: "https://github.com/CRRobotics/2023Visions",
    category: "robotics",
    featured: true
  },
  {
    id: 3,
    title: "Task Tracking WebApp",
    description: "Full-stack task management application with real-time updates, user authentication, and collaborative features built with modern web technologies.",
    tags: ["TypeScript", "React", "Full-Stack", "Web App"],
    github: "https://github.com/Rocky0Shao/Task_Tracking_Webapp",
    category: "web"
  },
  {
    id: 4,
    title: "Personal Website",
    description: "This portfolio website you're viewing! Built with React, featuring dynamic animations, theme switching, and a modern responsive design.",
    tags: ["JavaScript", "React", "CSS", "Vite"],
    github: "https://github.com/Rocky0Shao/Personal-Website",
    category: "web",
    live: "/"
  },
  {
    id: 5,
    title: "ESP32 Learning",
    description: "Embedded systems projects exploring IoT capabilities with ESP32 microcontrollers. Experiments with sensors, wireless communication, and low-level programming.",
    tags: ["C", "ESP32", "Embedded", "IoT"],
    github: "https://github.com/Rocky0Shao/esp32_leaning",
    category: "embedded"
  },
  {
    id: 6,
    title: "Gerrymander Project",
    description: "Data visualization and analysis project exploring electoral district boundaries and their mathematical properties. Built for Precalculus coursework.",
    tags: ["Python", "Data Viz", "Mathematics", "Analysis"],
    github: "https://github.com/Rocky0Shao/GerrymanderProject",
    category: "data"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "robotics", label: "Robotics & CV" },
  { id: "web", label: "Web Dev" },
  { id: "embedded", label: "Embedded" },
  { id: "data", label: "Data Science" }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title animate-fade-up">My Projects</h1>
        <p className="projects-subtitle animate-fade-up delay-1">
          A collection of my work spanning robotics, web development, embedded systems, and more.
        </p>
      </div>

      <div className="filter-container animate-fade-up delay-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card animate-fade-up ${project.featured ? 'featured' : ''}`}
            style={{ animationDelay: `${0.1 * index}s` }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-header">
                <div className="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="card-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link" title="View on GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  {project.live && (
                    <a href={project.live} className="card-link" title="View Live">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>

              <div className="card-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {project.featured && (
              <div className="featured-badge">Featured</div>
            )}
          </div>
        ))}
      </div>

      <div className="github-cta animate-fade-up">
        <p>Want to see more?</p>
        <a href="https://github.com/Rocky0Shao" target="_blank" rel="noopener noreferrer" className="github-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View GitHub Profile</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
