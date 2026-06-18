import ipadImg from '../../assets/Ipad.png';
import projects from './projectsData.js';
import '../../styles/projects/Projects.css';

export default function Projects({ onClose }) {
  return (
    <div className="ipad-overlay" onClick={onClose}>
      <button className="ipad-close" onClick={onClose} aria-label="Close">&times;</button>

      <div className="ipad-wrap" onClick={e => e.stopPropagation()}>
        <img src={ipadImg} alt="iPad" className="ipad-bg" />

        <div className="ipad-screen">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div
                className="project-thumb"
                style={{
                  background: project.image
                    ? `url(${project.image}) center/cover`
                    : project.placeholderColor,
                }}
              />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
