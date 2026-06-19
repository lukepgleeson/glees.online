import aboutMeImg from '../../assets/AboutMe.png';
import '../../styles/aboutme/AboutMe.css';

export default function AboutMe({ onClose, onNavigate }) {
  return (
    <div className="aboutme-overlay" onClick={onClose}>
      <button className="aboutme-close" onClick={onClose} aria-label="Close">&times;</button>
      <div className="aboutme-wrap" onClick={e => e.stopPropagation()}>
        <img src={aboutMeImg} alt="About Me" className="aboutme-img" />
        <button
          className="aboutme-letter-btn"
          onClick={() => onNavigate("WRITE_LETTER")}
          aria-label="Write a letter for other site visitors"
        />
      </div>
    </div>
  );
}
