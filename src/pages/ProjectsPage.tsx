import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaAngular,
  FaChevronRight,
  FaCheck,
} from "react-icons/fa6";
import { SiGatsby, SiFlutter } from "react-icons/si";

interface Technology {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
}

const technologies: Technology[] = [
  { id: "react", name: "React", icon: <FaReact />, color: "#61dafb" },
  { id: "html", name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
  { id: "css", name: "CSS", icon: <FaCss3Alt />, color: "#1572b6" },
  { id: "vue", name: "Vue", icon: <FaVuejs />, color: "#4fc08d" },
  { id: "angular", name: "Angular", icon: <FaAngular />, color: "#dd0031" },
  { id: "gatsby", name: "Gatsby", icon: <SiGatsby />, color: "#663399" },
  { id: "flutter", name: "Flutter", icon: <SiFlutter />, color: "#02569b" },
];

const projects: Project[] = [
  {
    id: "1",
    title: "Project 1",
    subtitle: "_ui-animations",
    description:
      "Duis aute irure dolor in velit esse cillum dolore. Modern UI animations built with React and Framer Motion.",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&h=200&fit=crop",
    technologies: ["react"],
  },
  {
    id: "2",
    title: "Project 2",
    subtitle: "_tetris-game",
    description:
      "Duis aute irure dolor in velit esse cillum dolore. Classic tetris game rebuilt with modern web technologies.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
    technologies: ["react", "css"],
  },
  {
    id: "3",
    title: "Project 3",
    subtitle: "_portfolio-site",
    description:
      "A responsive portfolio website with IDE-inspired design and smooth animations.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop",
    technologies: ["html", "css"],
  },
  {
    id: "4",
    title: "Project 4",
    subtitle: "_dashboard-app",
    description:
      "Admin dashboard with real-time data visualization and modern UI components.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    technologies: ["vue"],
  },
  {
    id: "5",
    title: "Project 5",
    subtitle: "_mobile-app",
    description:
      "Cross-platform mobile application built with Flutter and Firebase backend.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
    technologies: ["flutter"],
  },
  {
    id: "6",
    title: "Project 6",
    subtitle: "_blog-platform",
    description:
      "Static blog platform with markdown support and blazing fast performance.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=200&fit=crop",
    technologies: ["gatsby"],
  },
];

const ProjectsPage = () => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>(["react"]);

  const toggleTech = (techId: string) => {
    setSelectedTechs((prev) => {
      if (prev.includes(techId)) {
        return prev.filter((id) => id !== techId);
      }
      return [...prev, techId];
    });
  };

  const filteredProjects =
    selectedTechs.length === 0
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) => selectedTechs.includes(tech)),
        );

  const getFilterLabel = () => {
    if (selectedTechs.length === 0) return "All";
    return selectedTechs
      .map((id) => technologies.find((t) => t.id === id)?.name)
      .join("; ");
  };

  const getTechIcon = (techId: string) => {
    const tech = technologies.find((t) => t.id === techId);
    return tech ? tech.icon : null;
  };

  return (
    <div className="projects-page">
      <div className="projects-sidebar">
        <div className="sidebar__header sidebar__header--open">
          <FaChevronRight />
          <span>projects</span>
        </div>

        <div className="projects-filter">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="projects-filter__item"
              onClick={() => toggleTech(tech.id)}
            >
              <div
                className={`projects-filter__checkbox ${
                  selectedTechs.includes(tech.id)
                    ? "projects-filter__checkbox--checked"
                    : ""
                }`}
              >
                {selectedTechs.includes(tech.id) && <FaCheck />}
              </div>
              <span
                className="projects-filter__icon"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-content">
        <div className="projects-content__tabs">
          <div className="projects-content__tab">
            <span>{getFilterLabel()}</span>
            <span className="projects-content__tab-close">✕</span>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card__label">
                <span className="project-card__label-name">
                  {project.title}
                </span>
                <span className="project-card__label-desc">
                  {"// "}
                  {project.subtitle}
                </span>
              </div>
              <div className="project-card__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                  loading="lazy"
                />
                <div
                  className="project-card__tech-badge"
                  style={{
                    color: technologies.find(
                      (t) => t.id === project.technologies[0],
                    )?.color,
                  }}
                >
                  {getTechIcon(project.technologies[0])}
                </div>
              </div>
              <p className="project-card__description">{project.description}</p>
              <a href="#" className="project-card__button">
                view-project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
