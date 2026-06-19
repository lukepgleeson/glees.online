import degreesImg from '../../assets/Degrees.png';
import '../../styles/degrees/Degrees.css';

export default function Degrees({ onClose }) {
  return (
    <div className="degrees-overlay" onClick={onClose}>
      <button className="degrees-close" onClick={onClose} aria-label="Close">&times;</button>
      <img
        src={degreesImg}
        alt="Degrees"
        className="degrees-img"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}
