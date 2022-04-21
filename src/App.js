import './styles/App.scss';

import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import SingleProject from './pages/SingleProject';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="App">
        <Header />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home offsetY={offsetY} />}></Route>
            <Route path="/project/:id" element={<SingleProject />}></Route>
          </Routes>
        </AnimatePresence>
        
      </div>
  );
}

export default App;
