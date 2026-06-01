import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaCalendarAlt, FaAward } from 'react-icons/fa';
import '../styles/Certifications.css';

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      id: 1,
      title: 'Full Stack Java Certification',
      issuer: 'Naresh IT, Hyderabad',
      issueDate: 'June 2024',
      expiryDate: 'January 2025',
      description: 'Comprehensive certification covering Java, Spring Boot, Hibernate, REST APIs, and React.js',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'REST API', 'React.js', 'MySQL','DevSecAp Tools'],
      badge: '🏆',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className='certifications' id='certifications' ref={ref}>
      <div className='certifications-container'>
        <motion.div
          className='section-header'
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='section-title'>Certifications</h2>
          <div className='title-underline'></div>
        </motion.div>

        <motion.div
          className='certifications-grid'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className='certification-card'
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)' }}
            >
              <div className='cert-badge'>{cert.badge}</div>

              <div className='cert-content'>
                <div className='cert-icon'>
                  <FaCertificate />
                </div>

                <h3 className='cert-title'>{cert.title}</h3>

                <p className='cert-issuer'>{cert.issuer}</p>

                <p className='cert-description'>{cert.description}</p>

                <div className='cert-dates'>
                  <div className='date-item'>
                    <FaCalendarAlt className='date-icon' />
                    <div className='date-info'>
                      <span className='date-label'>Issued</span>
                      <span className='date-value'>{cert.issueDate}</span>
                    </div>
                  </div>
                  <div className='date-item'>
                    <FaAward className='date-icon' />
                    <div className='date-info'>
                      <span className='date-label'>Completion</span>
                      <span className='date-value'>{cert.expiryDate}</span>
                    </div>
                  </div>
                </div>

                <div className='cert-skills'>
                  <h4 className='skills-title'>Skills Covered:</h4>
                  <div className='skills-list'>
                    {cert.skills.map((skill, i) => (
                      <span key={i} className='skill-tag'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='cert-info'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
