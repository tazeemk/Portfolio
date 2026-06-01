import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Warehouse Management System',
      subtitle: 'Saudi Kayan',
      description:
        'Enterprise warehouse management solution supporting 500+ daily users with advanced SAP integration and real-time tracking.',
      achievements: [
        'Reduced load times by ~45%',
        'Developed SAP Posting Module',
        'Resolved production issues',
        'Supported 500+ daily users',
      ],
      technologies: ['Java 17', 'Spring Boot', 'Hibernate', 'React.js', 'SQL Server', 'JWT'],
      featured: true,
      stats: {
        performance: '45% faster',
        users: '500+',
        uptime: '99.9%',
      },
    },
    {
      id: 2,
      title: 'AI Powered RAG Question Answering System',
      description:
        'Intelligent document retrieval system leveraging advanced NLP and vector databases for semantic search and LLM-based answers.',
      achievements: [
        'Semantic search implementation',
        'Document retrieval optimization',
        'LLM-based answer generation',
        'Vector database integration',
      ],
      technologies: ['Python', 'LangChain', 'Qdrant', 'Ollama', 'React.js', 'FastAPI'],
      featured: false,
      stats: {
        accuracy: '95%',
        speed: '<100ms',
      },
    },
    {
      id: 3,
      title: 'Honar Service Marketplace Platform',
      description:
        'Multi-portal service marketplace connecting workers and clients with secure authentication and advanced filtering capabilities.',
      achievements: [
        'Worker portal with job management',
        'Client portal with service discovery',
        'Admin dashboard with analytics',
        'Search and filtering system',
        'Secure JWT authentication',
      ],
      technologies: [
        'Java 8',
        'Spring Boot',
        'Spring Batch',
        'React.js',
        'MySQL',
        'Docker',
        'JWT',
      ],
      featured: true,
      stats: {
        transactions: '1000+',
        workers: '500+',
        growth: '200%',
      },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className='projects' id='projects' ref={ref}>
      <div className='projects-container'>
        <motion.div
          className='section-header'
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='section-title'>Featured Projects</h2>
          <div className='title-underline'></div>
        </motion.div>

        <motion.div
          className='projects-grid'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 200, 255, 0.2)' }}
            >
              {project.featured && (
                <div className='featured-badge'>
                  <FaStar /> Featured
                </div>
              )}

              <div className='project-header'>
                <h3 className='project-title'>{project.title}</h3>
                {project.subtitle && <p className='project-subtitle'>{project.subtitle}</p>}
              </div>

              <p className='project-description'>{project.description}</p>

              <div className='project-achievements'>
                <h4 className='achievements-title'>Key Achievements:</h4>
                <ul className='achievements'>
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx}>
                      <span className='achievement-dot'></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='project-stats'>
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className='stat'>
                    <span className='stat-value'>{value}</span>
                    <span className='stat-label'>{key}</span>
                  </div>
                ))}
              </div>

              <div className='technologies'>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className='tech-badge'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='project-links'>
                <button className='project-link' title='View on GitHub'>
                  <FaGithub /> Code
                </button>
                <button className='project-link' title='Live Demo'>
                  <FaExternalLinkAlt /> Demo
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='projects-cta'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>More projects available on my GitHub</p>
          <a href='https://github.com/tazeemk' target='_blank' rel='noopener noreferrer' className='cta-button'>
            <FaGithub /> Explore More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
