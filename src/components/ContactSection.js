import React from 'react'
import { motion } from 'framer-motion';

import {ReactComponent as EnvelopeIcon} from '../assets/envelope.svg'
import {ReactComponent as ShapeLeft} from '../assets/shape1.svg'
import {ReactComponent as ShapeRight} from '../assets/shape2.svg'
import GithubIcon from '../assets/github.png';

function ContactSection( {offsetY} ) {
  const triggerEnvelopeAnimation = () => {
    document.querySelector('.svg-envelope').classList.add('animate');
  }
  

  return (
    <div className="contact-section">
        <div className="contact-section-title">
          <div>
            <motion.h1
              className="h1-outline"
              style={{ transform: `translateX(${offsetY * 0.2 - 1350}px)` }}
            >
              Contact
            </motion.h1>
          </div>
        </div>
        <motion.div className="contact-inner" whileInView={() => triggerEnvelopeAnimation}>
            <div className="contact-inner-wrapper">
              <div className="shape-left">
                  <ShapeLeft />
              </div>
              <div className="shape-right">
                  <ShapeRight />
              </div>
              <div className="contact-text">
                <h1>Thanks for checking out my website</h1>
                <h3>Here are my contact details:</h3>
                <div>
                  <p>jakub003@proton.me</p>
                  <span>
                    <img src={GithubIcon} alt="" style={{ maxWidth: 20, filter: 'invert(100%)' }}/>
                    <img src={GithubIcon} alt="" style={{ maxWidth: 20, filter: 'invert(100%)' }}/>
                  </span>
                </div>
              </div>
              <div className="contact-svg">
                <EnvelopeIcon />
              </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ContactSection;