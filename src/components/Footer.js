import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            voluptates.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            voluptates.
          </p>
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
