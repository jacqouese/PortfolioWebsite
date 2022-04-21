import './styles/App.scss';
import TopSection from './components/TopSection';
import BelowTopSection from './components/BelowTopSection';
import TechnologiesSection from './components/TechnologiesSection';
import ProjectsSection from './components/ProjectsSection';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <Home offsetY={offsetY} />
      <Footer />
    </div>
  );
}

export default App;
