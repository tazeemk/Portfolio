import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaJava,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaServer,
  FaCogs,
  FaCubes,
  FaReact.js,
} from 'react-icons/fa';
import { SiSpringboot, SiHibernate } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'Java', icon: FaJava, color: '#ED8936' },
        { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Spring Batch', icon: FaServer, color: '#6DB33F' },
        { name: 'Hibernate', icon: SiHibernate, color: '#59666C' },
        { name: 'Kafka', icon: FaCubes, color: '#000000' },
        { name: 'REST API', icon: FaReact, color: '#61DAFB' },
        { name: 'JWT', icon: FaCogs, color: '#00A86B' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: FaReact.js, color: '#61DAFB' },
        { name: 'TypeScript', icon: FaReact.js, color: '#61DAFB' },
        { name: 'React.js', icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaReact, color: '#F7DF1E' },
        { name: 'HTML', icon: FaReact, color: '#E34C26' },
        { name: 'CSS', icon: FaReact, color: '#1572B6' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: FaDatabase, color: '#005A87' },
        { name: 'SQL Server', icon: FaDatabase, color: '#CC2927' },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F1502F' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'Jenkins', icon: FaGitAlt, color: '#D33833' },
        { name: 'Jira', icon: FaCogs, color: '#0052CC' },
        { name: 'Maven', icon: FaGitAlt, color: '#C71C36' },
      ],
    },
    {
      title: 'AI & ML',
      skills: [
        { name: 'RAG Systems', icon: FaPython, color: '#3776AB' },
        { name: 'LangChain', icon: FaPython, color: '#3776AB' },
        { name: 'Qdrant', icon: FaPython, color: '#3776AB' },
        { name: 'Ollama', icon: FaPython, color: '#3776AB' },
        { name: 'Prompt Engineering', icon: FaPython, color: '#3776AB' },
      ],
    },
  ];

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
    <section className='skills' id='skills' ref={ref}>
      <div className='skills-container'>
        <motion.div
          className='section-header'
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='section-title'>Skills & Expertise</h2>
          <div className='title-underline'></div>
        </motion.div>

        <motion.div
          className='skills-grid'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} className='skill-category' variants={itemVariants}>
              <h3 className='category-title'>{category.title}</h3>
              <div className='skills-list'>
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIdx}
                      className='skill-item'
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className='skill-icon'
                        style={{ color: skill.color }}
                      >
                        <Icon />
                      </div>
                      <span className='skill-name'>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='skills-info'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className='skills-description'>
            Continuously learning and exploring new technologies to stay ahead of industry trends
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
