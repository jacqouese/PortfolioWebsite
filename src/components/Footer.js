import React from 'react';
import { ReactComponent as ReactIcon } from '../assets/reactIcon.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div>
          <h3>Attributions:</h3>
          <p>main svg: made by unDraw.co, animated by me</p>
          <p>skill icons: svgrepo.com</p>
          <p>linguesia mockup: freepick.com by user17882893</p>
          <p>Thank you for letting me use your assets</p>
        </div>
        <div>
          <h3>Quick links</h3>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
        </div>
        <div>
          <h3>Quick contact</h3>
          <p>email: jakub003@pm.me</p>
          <a href="https://github.com/jacqouese">GitHub</a>
          <a href="">Resume</a>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
            <p>Made in React</p>
            <ReactIcon style={{ maxHeight: 15 }} />
          </div>
          <p>Jakub Czaja all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
