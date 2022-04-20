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
      <motion.div
          className="test"
          transition={{ duration: 1, delay: 0.2 }}
          initial={{ backgroundColor: '#1860A5' }}
          whileInView={{ backgroundColor: '#F9F9F9' }}
          viewport={{ margin: '0px 0px -280px 0px', once: true }}
        >
        <BelowTopSection />
        <div
          className="lower-sections"
        >
          <TechnologiesSection offsetY={offsetY} />
          <ProjectsSection offsetY={offsetY} />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;
