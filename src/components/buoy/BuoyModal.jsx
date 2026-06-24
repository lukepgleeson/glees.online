import flagImg from '../../assets/BuoyFlag.png';
import welcomeMessage from './WelcomeMessage.js';
import CloseButton from '../CloseButton.jsx';
import '../../styles/buoy/BuoyModal.css';

export default function BuoyModal({ onClose }) {
  return (
    <div className="buoy-modal-overlay" onClick={onClose}>
      <CloseButton onClick={onClose} />
      <div className="buoy-modal-wrap" onClick={e => e.stopPropagation()}>
        <img src={flagImg} className="buoy-modal-img" alt="Flag" />
        <div className="buoy-modal-content">
          <p className="buoy-modal-text">{welcomeMessage}</p>
        </div>
      </div>
    </div>
  );
}
