import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const typingSpeed = useMemo(() => (isDeleting ? 50 : 100), [isDeleting]);

  useEffect(() => {
    const words = [
      'Full Stack  Developer',
      'Angular/React Developer',
      'AI/RAG Enthusiast',
    ];
    const period = 2000;

    let timer;

    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        timer = setTimeout(handleType, typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className='hero' id='home'>
      <div className='hero-container'>
        <motion.div
          className='hero-content'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div variants={itemVariants} className='hero-text'>
            <h3 className='hero-subtitle'>Hello, I'm</h3>
            <h1 className='hero-name'>Tazeem Khan</h1>
            <div className='typing-container'>
              <h2 className='typing-text'>{displayText}</h2>
              <span className='cursor'>|</span>
            </div>
            <p className='hero-description'>
              Full Stack Java Developer with strong expertise in Spring Boot, Angular, TypeScript, React.js, Microservices, and Cloud-Native Architecture. Experienced in designing, developing, and deploying scalable enterprise applications with a focus on performance, security, and maintainability. Passionate about building distributed systems, AI-powered solutions, and delivering innovative digital products that drive business value.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className='hero-buttons'>
            <a
              href='https://docs.google.com/document/d/1AwW3ah8ki8iOHMtkgUV3P68ykjVqcMfL/edit?usp=drive_link&ouid=116012601473421634124&rtpof=true&sd=true'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'
            >
              <FaDownload /> Resume
            </a>
            <a
              href='https://github.com/tazeemk'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-secondary'
            >
              <FaGithub /> GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/tazeem-khan-905b2735b/'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-secondary'
            >
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className='hero-info'>
            <div className='info-item'>
              <span className='info-label'>Location:</span>
              <span className='info-value'>Noida, India</span>
            </div>
            <div className='info-divider'></div>
            <div className='info-item'>
              <span className='info-label'>Email:</span>
              <span className='info-value'>tazeemk329@gmail.com</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='hero-avatar'
          variants={itemVariants}
          initial='hidden'
          animate='visible'
        >
          <div className='avatar-circle'>
            <div className='avatar-content'>
              <span>👨‍💻</span>
            </div>
          </div>
          <motion.div
            className='floating-element'
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className='floating-card'>
              <span>Java</span>
            </div>
          </motion.div>
          <motion.div
            className='floating-element floating-element-2'
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className='floating-card'>
              <span>React</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className='scroll-indicator'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link to='about' smooth={true} duration={500}>
          <div className='mouse'></div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
