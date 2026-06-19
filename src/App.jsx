import React from 'react';
import Index from './components/index/Index.jsx';
import Newspaper from './components/newspaper/Newspaper.jsx';
import Projects from './components/projects/Projects.jsx';
import AboutMe from './components/aboutme/AboutMe.jsx';
import Degrees from './components/degrees/Degrees.jsx';
import WriteALetter from './components/letter/WriteALetter.jsx';
import ReadALetter from './components/letter/ReadALetter.jsx';
import './styles/index/HexLayout.css';

export default function App() {
  const [modal, setModal] = React.useState(null);
  const [activeLetter, setActiveLetter] = React.useState(null);

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

  return (
    <>
      <Index
        changeView={setModal}
        modalOpen={modal !== null}
        onLetterFound={handleLetterFound}
      />
      {modal === "NEWSPAPER"    && <Newspaper    onClose={() => setModal(null)} />}
      {modal === "PROJECTS"     && <Projects     onClose={() => setModal(null)} />}
      {modal === "ABOUT"        && <AboutMe      onClose={() => setModal(null)} onNavigate={setModal} />}
      {modal === "DEGREES"      && <Degrees      onClose={() => setModal(null)} />}
      {modal === "WRITE_LETTER" && <WriteALetter onClose={() => setModal(null)} />}
      {modal === "READ_LETTER"  && activeLetter && <ReadALetter letter={activeLetter} onClose={() => setModal(null)} />}
    </>
  );
}
