import aboutMeImg from '../../assets/AboutMe.png';
import '../../styles/aboutme/AboutMe.css';

export default function AboutMe({ onClose }) {
  return (
    <div className="aboutme-overlay" onClick={onClose}>
      <button className="aboutme-close" onClick={onClose} aria-label="Close">&times;</button>
      <img
        src={aboutMeImg}
        alt="About Me"
        className="aboutme-img"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}
