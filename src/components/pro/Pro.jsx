import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import projects from '../projects/projectsData.js';
import articles from '../newspaper/articlesData.js';
import experience from '../experience/experienceData.js';
import ViewToggle from '../ViewToggle.jsx';
import iconGitHub from '../../assets/github.png';
import iconEmail from '../../assets/mail.png';
import iconLinkedIn from '../../assets/social.png';
import '../../styles/pro/Pro.css';
import '../../styles/ViewToggle.css';

function ArticleModal({ article, onClose }) {
  return (
    <div className="pro-modal-overlay" onClick={onClose}>
      <div className="pro-modal" onClick={e => e.stopPropagation()}>
        <button className="pro-modal-close" onClick={onClose}>&times;</button>
        <h2 className="pro-modal-title">{article.title}</h2>
        <div className="pro-modal-body">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default function Pro({ onToggle }) {
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = ''; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActiveArticle(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="pro-site">
      <nav className="pro-nav">
        <span className="pro-nav-brand">Luke Gleeson</span>
        <div className="pro-nav-links">
          {['about', 'experience', 'projects', 'articles', 'education'].map(id => (
            <a key={id} className="pro-nav-link" href={`#${id}`}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <div className="pro-nav-right">
          <div className="pro-nav-socials">
            <a href="mailto:LukePGleeson@gmail.com" className="pro-nav-social-link" aria-label="Email">
              <img src={iconEmail} alt="Email" className="pro-nav-social-icon" />
            </a>
            <a href="https://github.com/lukepgleeson" target="_blank" rel="noopener noreferrer" className="pro-nav-social-link" aria-label="GitHub">
              <img src={iconGitHub} alt="GitHub" className="pro-nav-social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/gleeson-luke/" target="_blank" rel="noopener noreferrer" className="pro-nav-social-link" aria-label="LinkedIn">
              <img src={iconLinkedIn} alt="LinkedIn" className="pro-nav-social-icon" />
            </a>
          </div>
          <ViewToggle view="pro" onToggle={onToggle} context="pro" />
        </div>
      </nav>

      <header className="pro-hero">
        <h1 className="pro-hero-name">Luke Gleeson</h1>
        <p className="pro-hero-title">Software Engineer</p>
        <p className="pro-hero-location">Melbourne, Victoria, Australia</p>
        <div className="pro-hero-tags">
          {['Java', 'Spring Boot', 'Python', 'React', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL'].map(tag => (
            <span key={tag} className="pro-tag">{tag}</span>
          ))}
        </div>
      </header>

      {/* ── About ──────────────────────────────────────────── */}
      <section id="about" className="pro-section">
        <div className="pro-section-inner">
          <h2 className="pro-section-title">About Me</h2>
          <p className="pro-body-text">
            I'm an Irish software engineer based in Melbourne, Australia. I have a background
            in Electronic Engineering (UCD) and Applied Software Engineering (Technological
            University of the Shannon, sponsored by Ericsson), and have spent the past several
            years building production systems across telecoms, financial services, and consulting.
          </p>
          <p className="pro-body-text">
            My work spans the full stack — Java Spring Boot backends, Python APIs, PostgreSQL and
            AWS infrastructure, and React frontends. I enjoy working in agile teams, have experience
            in technical leadership, and care about writing software that is maintainable and
            well-tested. Outside of work I keep active through running, cycling, gaming, and sailing.
          </p>
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────── */}
      <section id="experience" className="pro-section pro-section--alt">
        <div className="pro-section-inner">
          <h2 className="pro-section-title">Experience</h2>
          <div className="pro-experience-list">
            {experience.map(job => (
              <div key={job.id} className="pro-job">
                <div className="pro-job-header">
                  <div>
                    <h3 className="pro-job-role">{job.role}</h3>
                    <p className="pro-job-meta">{job.company} &middot; {job.location}</p>
                  </div>
                  <span className="pro-job-period">{job.period}</span>
                </div>
                <ul className="pro-job-points">
                  {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────── */}
      <section id="projects" className="pro-section">
        <div className="pro-section-inner">
          <h2 className="pro-section-title">Projects</h2>
          <div className="pro-projects-grid">
            {projects.map(project => (
              <div key={project.id} className="pro-project-card">
                <div
                  className="pro-project-thumb"
                  style={{
                    background: project.image
                      ? `url(${project.image}) center/cover`
                      : project.placeholderColor,
                  }}
                />
                <div className="pro-project-body">
                  <h3 className="pro-project-title">{project.title}</h3>
                  <p className="pro-project-desc">{project.description}</p>
                  <a
                    className="pro-project-link"
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
      </section>

      {/* ── Articles ───────────────────────────────────────── */}
      <section id="articles" className="pro-section pro-section--alt">
        <div className="pro-section-inner">
          <h2 className="pro-section-title">Articles</h2>
          <div className="pro-articles-list">
            {articles.map(article => (
              <button
                key={article.id}
                className="pro-article-card"
                onClick={() => setActiveArticle(article)}
              >
                <div className="pro-article-text">
                  <h3 className="pro-article-title">{article.title}</h3>
                  <p className="pro-article-snippet">{article.snippet}</p>
                </div>
                <span className="pro-article-arrow">→</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ──────────────────────────────────────── */}
      <section id="education" className="pro-section">
        <div className="pro-section-inner">
          <h2 className="pro-section-title">Education</h2>
          <div className="pro-experience-list">
            <div className="pro-edu-entry">
              <div className="pro-edu-header">
                <div>
                  <h3 className="pro-edu-degree">M.Sc. Applied Software Engineering</h3>
                  <p className="pro-edu-school">Technological University of the Shannon</p>
                </div>
                <span className="pro-job-period">2020 – 2021</span>
              </div>
              <p className="pro-body-text pro-edu-detail">
                1st Class Honours. Offered by Ericsson in association with Technology Ireland.
              </p>
            </div>
            <div className="pro-edu-entry">
              <div className="pro-edu-header">
                <div>
                  <h3 className="pro-edu-degree">B.E. Electronic Engineering</h3>
                  <p className="pro-edu-school">University College Dublin</p>
                </div>
                <span className="pro-job-period">2016 – 2020</span>
              </div>
              <p className="pro-body-text pro-edu-detail">
                2.1 Honours. Thesis: <em>Noise and Spur Prediction in Fractional-N Frequency Synthesizers</em>.
                Published: <em>Analysis and Prediction of Spurs in a Fractional-N Frequency Synthesizer
                with Discontinuous Nonlinearity</em> (2020) — Research Gate.
              </p>
              <p className="pro-body-text pro-edu-detail">
                Student Ambassador (2018–2020) · Class Representative for 300+ Engineering students (2017–2019).
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="pro-footer">
        <p className="pro-footer-name">Luke Gleeson</p>
      </footer>

      {activeArticle && (
        <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
      )}
    </div>
  );
}
