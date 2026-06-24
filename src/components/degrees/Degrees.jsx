import degreesImg from '../../assets/Degrees.png';
import CloseButton from '../CloseButton.jsx';
import '../../styles/degrees/Degrees.css';

export default function Degrees({ onClose }) {
  return (
    <div className="degrees-overlay" onClick={onClose}>
      <CloseButton onClick={onClose} />
      <img
        src={degreesImg}
        alt="Degrees"
        className="degrees-img"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}
