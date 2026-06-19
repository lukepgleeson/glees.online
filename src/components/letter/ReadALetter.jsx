import readLetterImg from '../../assets/ReadALetter.png';
import '../../styles/letter/Letter.css';

export default function ReadALetter({ letter, onClose }) {
  return (
    <div className="letter-overlay" onClick={onClose}>
      <button className="letter-close" onClick={onClose} aria-label="Close">&times;</button>
      <div className="letter-wrap" onClick={e => e.stopPropagation()}>
        <img src={readLetterImg} alt="A letter from a bottle" className="letter-bg" />
        <p className="letter-read-title letter-title">{letter.title}</p>
        <p className="letter-read-body letter-body">{letter.text}</p>
        <p className="letter-read-from letter-from">{letter.from}</p>
      </div>
    </div>
  );
}
