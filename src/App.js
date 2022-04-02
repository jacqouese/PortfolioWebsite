import './styles/App.scss';
import TopSection from './components/TopSection';
import BelowTopSection from './components/BelowTopSection';
import TechnologiesSection from './components/TechnologiesSection';
import ProjectsSection from './components/ProjectsSection';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

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
      <TopSection offsetY={offsetY} />
      <BelowTopSection />
      <motion.div
        className="lower-sections"
        transition={{ duration: 1.5, delay: 0.5 }}
        initial={{ backgroundColor: '#242a36' }}
        whileInView={{ backgroundColor: '#141618' }}
      >
        <TechnologiesSection offsetY={offsetY} />
        <ProjectsSection offsetY={offsetY} />
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;
