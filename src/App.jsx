import React from 'react';
import Index from './components/index/Index.jsx';
import Newspaper from './components/newspaper/Newspaper.jsx';
import Projects from './components/projects/Projects.jsx';
import AboutMe from './components/aboutme/AboutMe.jsx';
import './styles/index/HexLayout.css';

export default function App() {
  const [modal, setModal] = React.useState(null);

  return (
    <>
      <Index changeView={setModal} modalOpen={modal !== null} />
      {modal === "NEWSPAPER" && <Newspaper onClose={() => setModal(null)} />}
      {modal === "PROJECTS"  && <Projects  onClose={() => setModal(null)} />}
      {modal === "ABOUT"     && <AboutMe   onClose={() => setModal(null)} />}
    </>
  );
}
