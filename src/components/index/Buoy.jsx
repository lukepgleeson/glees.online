import buoyGif from '../../assets/Buoy.gif';
import '../../styles/index/Buoy.css';

export default function Buoy({ onClick }) {
  return (
    <img
      src={buoyGif}
      alt="Buoy"
      className="buoy"
      onClick={onClick}
    />
  );
}
