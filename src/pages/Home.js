import React from 'react';
import TopSection from '../components/TopSection';
import BelowTopSection from '../components/BelowTopSection';
import TechnologiesSection from '../components/TechnologiesSection';
import ProjectsSection from '../components/ProjectsSection';

import { motion } from 'framer-motion';

function Home({ offsetY }) {
  return (
    <>
      <TopSection offsetY={offsetY} />
      <motion.div
      // transition={{ duration: 1, delay: 0.2 }}
      // initial={{ backgroundColor: '#e1e1e1' }}
      // whileInView={{ backgroundColor: '#F9F9F9' }}
      // viewport={{ margin: '0px 0px -280px 0px', once: true }}
      >
        <BelowTopSection />
        <div className="lower-sections">
          <TechnologiesSection offsetY={offsetY} />
          <ProjectsSection offsetY={offsetY} />
        </div>
      </motion.div>
    </>
  );
}

export default Home;
