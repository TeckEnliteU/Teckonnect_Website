'use client';

import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import styles from '../Services.module.css';

import ms from '/icons/MicrosoftN.svg';
import aws from '/icons/aws.svg';
import ibm from '/icons/ibm.svg';
import adobe from '/icons/adobeN.svg';
import centerLogo from '/icons/log.svg';

const ServicesFinal = () => {
  const sectionRef = useRef(null);

  const [active, setActive] = useState(false);

  const services = [
    {
      logo: ms,
      title: 'Microsoft',
      desc: 'As a Microsoft Solutions Designation Partner, Teckonnect delivers secure, scalable, and outcome-driven Microsoft solutions that help organizations modernize operations, strengthen governance, and accelerate innovation. We provide end-to-end Microsoft services for enterprise, government, and growing businesses.',
      link: '/services/microsoft',
    },
    {
      logo: aws,
      title: 'AWS',
      desc: 'As a certified AWS Select Tier Partner, Teckonnect helps organizations accelerate cloud transformation with secure, scalable, and cost-effective AWS solutions. We deliver end-to-end cloud migration, modernization, and optimization services for enterprise, government, and growing businesses.',
      link: '/services/aws',
    },
    {
      logo: ibm,
      title: 'IBM',
      desc: 'As an IBM Silver Partner, Teckonnect helps organizations modernize and secure critical operations through intelligent automation, strong governance, and data-driven solutions. We deliver end-to-end IBM technologies tailored for enterprise, government, and compliance-focused industries.',
      link: '/services/ibm',
    },
    {
      logo: adobe,
      title: 'Adobe',
      desc: 'As an Adobe Certified Reseller Partner, Teckonnect helps organizations create impactful digital experiences and streamline document workflows. We deliver end-to-end Adobe solutions that enable connected customer journeys, improved engagement, and scalable business growth for enterprise, government, and digital-first organizations.',
      link: '/services/adobe',
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
    >
      {/* TEXT */}

      <div className={`${styles.text} ${active ? styles.show : ''}`}>
        <div className={styles.textMask}>
          <h2>
            Integrated <span>Services </span>
            Across Global
            <br />
            Technology Platforms
          </h2>

          <p>
            Most organisations operate across Microsoft, AWS, IBM, and
            Adobe-each serving a critical role. Teckonnect brings these
            platforms together through a unified managed services model, acting
            as a single point of accountability to simplify complexity and
            deliver secure, governed, and outcome‑driven support.
          </p>
        </div>
      </div>

      {/* VISUAL */}

      <div className={styles.container}>
        {/* LINES */}

        <div
          className={`${styles.lineWrapper} ${active ? styles.lineShow : ''}`}
        >
          {[0, 1, 2, 3].map((_, i) => (
            <div
              key={i}
              className={styles.line}
            />
          ))}
        </div>

        {/* CENTER */}

        <div className={styles.center}>
          <img
            src={centerLogo}
            alt=""
          />
        </div>

        {/* LOGOS */}

        <Link to="/services/microsoft">
          <img
            src={ms}
            alt="Microsoft"
            className={`${styles.logo} ${active ? styles.l1 : ''}`}
          />
        </Link>

        <Link to="/services/aws">
          <img
            src={aws}
            alt="AWS"
            className={`${styles.logo} ${active ? styles.l2 : ''}`}
          />
        </Link>

        <Link to="/services/ibm">
          <img
            src={ibm}
            alt="IBM"
            className={`${styles.logo} ${active ? styles.l3 : ''}`}
          />
        </Link>

        <Link to="/services/adobe">
          <img
            src={adobe}
            alt="Adobe"
            className={`${styles.logo} ${active ? styles.l4 : ''}`}
          />
        </Link>
      </div>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className={styles.serviceCard}
          >
            {/* <div className={styles.cardHeader}>
              <img
                src={service.logo}
                alt={service.title}
              />
            </div> */}

            <div className={styles.cardHeader}>
              <img
                src={service.logo}
                alt={service.title}
                className={
                  service.title === 'Microsoft'
                    ? styles.microsoftLogo
                    : service.title === 'AWS'
                      ? styles.awsLogo
                      : styles.defaultLogo
                }
              />
            </div>

            <div className={styles.cardBody}>
              <p>{service.desc}</p>
            </div>

            <div className={styles.cardFooter}>
              Explore Our {service.title} Solutions
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesFinal;
