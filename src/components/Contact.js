import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'tazeemk329@gmail.com',
      link: 'mailto:tazeemk329@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91-7084256243',
      link: 'tel:+917084256243',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Noida, Uttar Pradesh, India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/tazeemk',
      color: '#ffffff',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tazeem-khan-905b2735b/',
      color: '#0A66C2',
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      url: 'https://leetcode.com/u/tazeemk329/',
      color: '#FFA500',
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
    <section className='contact' id='contact' ref={ref}>
      <div className='contact-container'>
        <motion.div
          className='section-header'
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='section-title'>Get In Touch</h2>
          <div className='title-underline'></div>
          <p className='section-subtitle'>
            I'm always open to new opportunities and interesting projects. Let's connect!
          </p>
        </motion.div>

        <div className='contact-content'>
          <motion.div
            className='contact-info'
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className='info-title'>Contact Information</h3>

            <div className='info-items'>
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={idx}
                    href={info.link}
                    className='info-item'
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <div className='info-icon'>
                      <Icon />
                    </div>
                    <div className='info-details'>
                      <p className='info-label'>{info.label}</p>
                      <p className='info-value'>{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className='social-links'>
              <h4>Follow Me</h4>
              <div className='social-icons'>
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='social-icon-large'
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.label}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>

              <motion.a
                href='https://docs.google.com/document/d/1AwW3ah8ki8iOHMtkgUV3P68ykjVqcMfL/edit?usp=sharing&ouid=116012601473421634124&rtpof=true&sd=true'
                target='_blank'
                rel='noopener noreferrer'
                className='resume-download-btn'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            className='contact-form'
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className='form-title'>Send Me a Message</h3>

            <motion.div className='form-group' variants={itemVariants}>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className='form-group' variants={itemVariants}>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className='form-group' variants={itemVariants}>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className='form-group' variants={itemVariants}>
              <textarea
                name='message'
                placeholder='Your Message'
                rows='6'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>

            {submitted && (
              <motion.div
                className='success-message'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ✓ Message sent successfully!
              </motion.div>
            )}

            <motion.button
              type='submit'
              className='submit-btn'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
