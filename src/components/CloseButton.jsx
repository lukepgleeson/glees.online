import xImg from '../assets/x.png';
import '../styles/CloseButton.css';

export default function CloseButton({ onClick }) {
  return (
    <button className="modal-close-btn" onClick={onClick} aria-label="Close">
      <img src={xImg} alt="Close" />
    </button>
  );
}
