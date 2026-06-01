import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Simpana Technologies Pvt Ltd',
      role: 'Associate Software Engineer',
      duration: 'April 2025 - Present',
      location: 'Bangalore, India',
      achievements: [
        'Developed and maintained enterprise applications using Java and Spring Boot',
        'Implemented JWT Authentication and OAuth2 for secure API endpoints',
        'Integrated Kafka-based asynchronous communication between microservices',
        'Built RESTful APIs and optimized database queries for performance',
        'Worked on React frontend development for responsive user interfaces',
        'Integrated AI-powered features using RAG systems and LangChain',
        'Provided production support and resolved critical bugs in real-time',
        'Collaborated with cross-functional teams in Agile environment',
      ],
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      university: 'Veer Bahadur Singh Purvanchal University',
      duration: '2022 - 2024',
      cgpa: '7.4 / 10',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      university: 'Veer Bahadur Singh Purvanchal University',
      duration: '2019 - 2022',
      cgpa: '7.2 / 10',
    },
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className='experience' id='experience' ref={ref}>
      <div className='experience-container'>
        <motion.div
          className='section-header'
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='section-title'>Experience & Education</h2>
          <div className='title-underline'></div>
        </motion.div>

        <div className='experience-content'>
          <motion.div
            className='experience-section'
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className='subsection-title'>
              <FaBriefcase /> Professional Experience
            </h3>

            <div className='timeline'>
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className='timeline-item'
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className='timeline-marker'>
                    <div className='marker-dot'></div>
                  </div>

                  <div className='timeline-content'>
                    <div className='experience-header'>
                      <h4 className='job-title'>{exp.role}</h4>
                      <span className='duration'>{exp.duration}</span>
                    </div>

                    <p className='company-name'>{exp.company}</p>
                    <p className='location'>{exp.location}</p>

                    <ul className='achievements-list'>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>
                          <FaCheckCircle className='check-icon' />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className='education-section'
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className='subsection-title'>🎓 Education</h3>

            <div className='education-list'>
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className='education-card'
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className='education-content'>
                    <h4 className='degree'>{edu.degree}</h4>
                    <p className='university'>{edu.university}</p>
                    <div className='education-details'>
                      <span className='duration'>{edu.duration}</span>
                      <span className='cgpa'>CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
