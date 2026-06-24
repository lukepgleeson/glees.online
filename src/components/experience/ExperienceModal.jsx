import experienceData from './experienceData.js';
import experienceBg from '../../assets/Experience.png';
import CloseButton from '../CloseButton.jsx';
import '../../styles/experience/ExperienceModal.css';

export default function ExperienceModal({ onClose }) {
  return (
    <div className="exp-overlay" onClick={onClose}>
      <CloseButton onClick={onClose} />
      <div className="exp-modal" onClick={e => e.stopPropagation()}>
        <img src={experienceBg} className="exp-bg" alt="" />
        <div className="exp-content">
          <div className="exp-timeline-scroll">
            <div className="exp-timeline">
              <div className="exp-line" />
              {experienceData.map(job => (
                <div key={job.id} className="exp-entry">
                  <span className="exp-period">{job.period}</span>
                  <div className="exp-notch" />
                  <h3 className="exp-role">{job.role}</h3>
                  <p className="exp-company">{job.company} &middot; {job.location}</p>
                  <ul className="exp-points">
                    {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
