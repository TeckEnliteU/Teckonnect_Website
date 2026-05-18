// ServicesInner.jsx

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ServicesInner.module.css';

const ServicesInner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState('microsoft');

  /* URL ACTIVE */

  useEffect(() => {
    if (location.pathname.includes('aws')) {
      setActive('aws');
    } else if (location.pathname.includes('ibm')) {
      setActive('ibm');
    } else if (location.pathname.includes('adobe')) {
      setActive('adobe');
    } else if (location.pathname.includes('cybersecurity')) {
      setActive('cybersecurity');
    } else {
      setActive('microsoft');
    }
  }, [location.pathname]);

  /* CONTENT */

  const services = {
    microsoft: {
      title: 'Microsoft Designation Solutions Partner',

      description:
        'As a Certified Microsoft Solutions Partner, Teckonnect brings validated expertise across Microsoft’s most critical solution areas. Our designation reflects our proven ability to deliver secure, scalable, and outcome-driven solutions that help organisations modernise operations, strengthen governance, and drive innovation.',

      description2:
        'We specialise in delivering end-to-end Microsoft services tailored to enterprise, government, and growing businesses.',

      explore: 'Explore Our Microsoft Service Platforms',

      items: [
        'Microsoft 365 & Modern Workplace',
        'Azure Cloud Services',
        'Microsoft Security Solutions',
        'Dynamics 365 & Power Platform',
        'Copilot & AI Solutions',
      ],

      logo: '/images/microsoft-partner.png',
    },

    aws: {
      title: 'AWS Select Tier Partner',

      description:
        'As an AWS Select Tier Partner, Teckonnect brings proven expertise across cloud transformation, migration, and optimisation. Our partnership reflects our ability to design and deliver scalable, secure, and cost-efficient cloud solutions that help organisations accelerate innovation and improve operational agility.',

      description2:
        'We specialise in delivering end-to-end AWS services tailored to enterprise, government, and fast-growing businesses.',

      explore: 'Explore Our AWS Solutions',

      items: [
        'Cloud Migration',
        'AWS Infrastructure',
        'DevOps & Automation',
        'Cloud Security',
        'Managed AWS Services',
      ],

      logo: '/images/aws-partner.png',
    },

    ibm: {
      title: 'IBM Silver Partner',

      description:
        'As an IBM Silver Partner, Teckonnect helps organisations modernise and secure their critical business operations. Our expertise is built on strong governance, intelligent automation, and data-driven strategies that support complex and regulated environments.',

      description2:
        'We specialise in delivering end-to-end IBM solutions tailored to enterprise, government, and compliance-driven industries.',

      explore: 'Explore Our IBM Solutions',

      items: [
        'IBM Cloud Services',
        'Data & AI Solutions',
        'Cybersecurity & Governance',
        'Enterprise Automation',
        'Infrastructure Modernisation',
      ],

      logo: '/images/ibm-partner.png',
    },

    adobe: {
      title: 'Adobe Certified Reseller Partner',

      description:
        'As an Adobe Certified Reseller Partner, Teckonnect enables organisations to deliver impactful digital experiences and streamlined document workflows. Our expertise supports businesses in creating connected, engaging, and scalable customer journeys across every touchpoint.',

      description2:
        'We specialise in delivering end-to-end Adobe services tailored to enterprise, government, and digital-first organisations.',

      explore: 'Explore Our Adobe Solutions',

      items: [
        'Adobe Creative Cloud',
        'Adobe Acrobat Solutions',
        'Digital Experience Platforms',
        'Document Workflow Automation',
        'Enterprise Adobe Licensing',
      ],

      logo: '/images/adobe-partner.png',
    },

    cybersecurity: {
      title: 'Cybersecurity Solutions',

      description:
        'Teckonnect delivers enterprise-grade cybersecurity solutions that help organisations protect infrastructure, data, users, and digital operations against evolving cyber threats.',

      description2:
        'We specialise in governance, compliance, cloud security, endpoint protection, identity management, and security operations.',

      explore: 'Explore Our Cybersecurity Solutions',

      items: [
        'Managed Security Services',
        'Identity & Access Management',
        'Cloud Security',
        'Threat Detection',
        'Compliance & Governance',
      ],

      logo: '/images/cybersecurity.png',
    },
  };

  const current = services[active];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.mainCard}>
        {/* SIDEBAR */}

        <div className={styles.sidebar}>
          <p className={styles.overview}>OVERVIEW</p>

          <button
            className={`${styles.menuItem} ${
              active === 'microsoft' ? styles.active : ''
            }`}
            onClick={() => navigate('/services/microsoft')}
          >
            <span>Microsoft Solutions</span>

            {active === 'microsoft' && <span>›</span>}
          </button>

          <button
            className={`${styles.menuItem} ${
              active === 'aws' ? styles.active : ''
            }`}
            onClick={() => navigate('/services/aws')}
          >
            <span>AWS Solutions</span>

            {active === 'aws' && <span>›</span>}
          </button>

          <button
            className={`${styles.menuItem} ${
              active === 'ibm' ? styles.active : ''
            }`}
            onClick={() => navigate('/services/ibm')}
          >
            <span>IBM Solutions</span>

            {active === 'ibm' && <span>›</span>}
          </button>

          <button
            className={`${styles.menuItem} ${
              active === 'adobe' ? styles.active : ''
            }`}
            onClick={() => navigate('/services/adobe')}
          >
            <span>Adobe Solutions</span>

            {active === 'adobe' && <span>›</span>}
          </button>

          <button
            className={`${styles.menuItem} ${
              active === 'cybersecurity' ? styles.active : ''
            }`}
            onClick={() => navigate('/services/cybersecurity')}
          >
            <span>Cybersecurity Solutions</span>

            {active === 'cybersecurity' && <span>›</span>}
          </button>
        </div>

        {/* RIGHT CONTENT */}

        <div className={styles.contentWrapper}>
          {/* LEFT SIDE */}

          {active === 'microsoft' && (
            <div className={styles.leftContent}>
              <h3>{current.explore}</h3>

              <div className={styles.serviceList}>
                {current.items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          )}

          {/* RIGHT SIDE */}

          <div className={styles.rightContent}>
            <h2>{current.title}</h2>

            <p>{current.description}</p>

            <p>{current.description2}</p>

            <img
              src={current.logo}
              alt=""
            />

            {active !== 'microsoft' && (
              <div className={styles.bottomLink}>
                Explore Our {active.toUpperCase()} Solutions
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInner;
