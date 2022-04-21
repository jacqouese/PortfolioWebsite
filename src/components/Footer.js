import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div>
          <h3>Attributions:</h3>
          <p className="font-smaller">
            main ilustration: created by unDraw.co, animated by me
          </p>
          <p className="font-smaller">skill icons: svgrepo.com</p>
          <p className="font-smaller">
            linguesia mockup: freepick.com by user17882893
          </p>
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
          <p>Made in React</p>
          <p>Jakub Czaja all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
