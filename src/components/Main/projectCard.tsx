import React from 'react';
import './projectCard.css'; // Importa o CSS para estilizar o componente

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  projectLink: string;
  repoLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  projectLink,
  repoLink,
  technologies,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Repository
          </a>
        </div>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="technology">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
