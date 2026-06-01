import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer className='footer'>
      <motion.div
        className='footer-container'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div className='footer-content' variants={itemVariants}>
          <div className='footer-section'>
            <h3 className='footer-title'>Tazeem Khan</h3>
            <p className='footer-subtitle'>Full Stack Java Developer</p>
            <p className='footer-description'>
              Building scalable enterprise applications and exploring AI-powered solutions.
            </p>
          </div>

          <div className='footer-section'>
            <h4 className='footer-section-title'>Quick Links</h4>
            <ul className='footer-links'>
              <li>
                <Link to='home' smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='about' smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to='skills' smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to='projects' smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to='contact' smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='footer-section'>
            <h4 className='footer-section-title'>Connect</h4>
            <div className='footer-social'>
              <a
                href='https://github.com/tazeemk'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-social-link'
              >
                <FaGithub /> GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/tazeem-khan-905b2735b/'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-social-link'
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a href='mailto:tazeemk329@gmail.com' className='footer-social-link'>
                <span>📧</span> Email
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className='footer-divider' variants={itemVariants}></motion.div>

        <motion.div className='footer-bottom' variants={itemVariants}>
          <p className='copyright'>
            © {currentYear} Tazeem Khan. All rights reserved. | Designed & Built with ❤️
          </p>
          <p className='footer-note'>
            Made with React, Framer Motion & lots of ☕
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={showScrollTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to='home' smooth={true} duration={500}>
          <FaArrowUp />
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
