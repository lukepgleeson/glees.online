import React from 'react';
import Index from './components/index/Index.jsx';
import Newspaper from './components/newspaper/Newspaper.jsx';
import Projects from './components/projects/Projects.jsx';
import AboutMe from './components/aboutme/AboutMe.jsx';
import Degrees from './components/degrees/Degrees.jsx';
import WriteALetter from './components/letter/WriteALetter.jsx';
import ReadALetter from './components/letter/ReadALetter.jsx';
import Pro from './components/pro/Pro.jsx';
import ExperienceModal from './components/experience/ExperienceModal.jsx';
import BuoyModal from './components/buoy/BuoyModal.jsx';
import ViewToggle from './components/ViewToggle.jsx';
import iconEmail from './assets/mail.png';
import iconGitHub from './assets/github.png';
import iconLinkedIn from './assets/social.png';
import './styles/index/HexLayout.css';
import './styles/ViewToggle.css';

export default function App() {
  const [view, setView] = React.useState('fun');
  const [modal, setModal] = React.useState(null);
  const [activeLetter, setActiveLetter] = React.useState(null);
  const [uiBarHovered, setUiBarHovered] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLetterFound = (letter) => {
    setActiveLetter(letter);
    setModal("READ_LETTER");
  };

  const switchView = () => {
    setModal(null);
    setView(v => v === 'fun' ? 'pro' : 'fun');
  };

  return (
    <>
      {view === 'fun' && modal === null && (
        <div className="fun-ui-bar" onMouseEnter={() => setUiBarHovered(true)} onMouseLeave={() => setUiBarHovered(false)}>
          <div className="fun-socials">
            <a href="mailto:luke@glees.online" className="fun-social-link" aria-label="Email">
              <img src={iconEmail} alt="Email" className="fun-social-icon" />
            </a>
            <a href="https://github.com/lukepgleeson" target="_blank" rel="noopener noreferrer" className="fun-social-link" aria-label="GitHub">
              <img src={iconGitHub} alt="GitHub" className="fun-social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/gleeson-luke/" target="_blank" rel="noopener noreferrer" className="fun-social-link" aria-label="LinkedIn">
              <img src={iconLinkedIn} alt="LinkedIn" className="fun-social-icon" />
            </a>
          </div>
          <ViewToggle view="fun" onToggle={switchView} context="fun" />
        </div>
      )}

      {view === 'fun' ? (
        <>
          <Index
            changeView={setModal}
            modalOpen={modal !== null}
            onLetterFound={handleLetterFound}
            cursorHidden={uiBarHovered}
          />
          {modal === "NEWSPAPER"    && <Newspaper    onClose={() => setModal(null)} />}
          {modal === "PROJECTS"     && <Projects     onClose={() => setModal(null)} />}
          {modal === "ABOUT"        && <AboutMe      onClose={() => setModal(null)} onNavigate={setModal} />}
          {modal === "DEGREES"      && <Degrees      onClose={() => setModal(null)} />}
          {modal === "WRITE_LETTER" && <WriteALetter onClose={() => setModal(null)} />}
          {modal === "READ_LETTER"  && activeLetter && <ReadALetter letter={activeLetter} onClose={() => setModal(null)} />}
          {modal === "EXPERIENCE"   && <ExperienceModal onClose={() => setModal(null)} />}
          {modal === "BUOY"         && <BuoyModal       onClose={() => setModal(null)} />}
        </>
      ) : (
        <Pro onToggle={switchView} />
      )}
    </>
  );
}
