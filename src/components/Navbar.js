import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        <Link to='home' smooth={true} duration={500} className='navbar-logo'>
          
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link
              to='home'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='about'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='skills'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='experience'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Experience
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='projects'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='certifications'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Certifications
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className='navbar-social'>
          <a
            href='https://github.com/tazeemk'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/tazeem-khan-905b2735b/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://leetcode.com/u/tazeemk329/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
