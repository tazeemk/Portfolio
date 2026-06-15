import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className='about' id='about' ref={ref}>
      <div className='about-container'>
        <motion.div
          className='section-header'
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='section-title'>About Me</h2>
          <div className='title-underline'></div>
        </motion.div>

        <motion.div
          className='about-content'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className='about-text' variants={itemVariants}>
            <p className='about-paragraph'>
              I'm a passionate <span className='highlight'>Full Stack Java Developer</span> with
              hands-on experience in building scalable enterprise applications. My expertise spans
              across backend development with Spring Boot, microservices architecture, and
              front-end development with React.js.
            </p>

            <p className='about-paragraph'>
              With a strong foundation in distributed systems and modern development practices, I
              excel at designing robust REST APIs, implementing secure authentication mechanisms,
              and creating responsive user interfaces. I'm particularly interested in AI-powered
              applications, RAG systems, and prompt engineering.
            </p>

            <p className='about-paragraph'>
              Currently working at <span className='highlight'>Simpana Technologies</span>, where
              I contribute to enterprise application development and explore innovative solutions
              using cutting-edge technologies. I believe in clean code, continuous learning, and
              building products that solve real-world problems.
            </p>

            <div className='about-stats'>
              <div className='stat'>
                <h3 className='stat-number'>2.3+</h3>
                <p className='stat-label'>Years Experience</p>
              </div>
              <div className='stat'>
                <h3 className='stat-number'>10+</h3>
                <p className='stat-label'>Projects Completed</p>
              </div>
              <div className='stat'>
                <h3 className='stat-number'>500+</h3>
                <p className='stat-label'>Daily Active Users</p>
              </div>
            </div>
          </motion.div>

          <motion.div className='about-features' variants={itemVariants}>
            <div className='feature-card'>
              <div className='feature-icon'>💻</div>
              <h3>Backend Architecture</h3>
              <p>Expert in designing scalable microservices and enterprise applications</p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'>⚛️</div>
              <h3>Frontend Development</h3>
              <p>Building responsive and interactive user interfaces with React</p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'>🤖</div>
              <h3>AI Integration</h3>
              <p>Implementing RAG systems and AI-powered features with LangChain</p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'>🔧</div>
              <h3>DevOps & Tools</h3>
              <p>Proficient with Docker, Jenkins, Git, and modern development workflows</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
