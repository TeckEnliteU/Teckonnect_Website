import React from 'react';
import styles from '../Microsoft.module.css';
import { Link } from 'react-router-dom';
const MicrosoftFeatures = () => {
  const features = [
    {
      number: '01',
      logo: '/images/Business App.svg',
      title: 'Business Applications',
      subtitle: '(Dynamics 365 Solutions)',
      description:
        'Modern CRM and ERP solutions designed to streamline operations, automate workflows, improve customer engagement, and provide actionable business insights.',
      button: 'Explore Dynamics 365 Solutions',
      link: '/services/microsoft/dynamics-365',
    },
    {
      number: '02',
      logo: '/images/Modern work.svg',
      title: 'Modern Work',
      subtitle: '(Microsoft 365 Solutions and Copilot)',
      description:
        'Empower employees with secure collaboration, AI-powered productivity, governance-focused Microsoft 365 experiences, and cloud-first workplace solutions.',
      button: 'Explore Modern Workplace',
      link: '/services/microsoft/microsoft-365',
    },

    {
      number: '03',
      logo: '/images/Infra 1.svg',
      title: 'Infrastructure',
      subtitle: '(Azure Cloud Infrastructure)',
      description:
        'End to end Azure cloud infrastructure services covering migration, optimization, hybrid environments, governance, and scalable deployment.',
      button: 'Explore Azure Cloud',
      link: '/services/microsoft/azure',
    },
    {
      number: '04',
      logo: '/images/Data & AI.svg',
      title: 'Data & AI',
      subtitle: '(Azure Data & AI Solutions)',
      description:
        'Unlock intelligent decision-making with Azure analytics, scalable data platforms, reporting automation, and AI-powered business insights.',
    },
    {
      number: '05',
      logo: '/images/Digital app & Innovation.svg',
      title: 'Digital Innovation',
      subtitle: '(Azure App Services)',
      description:
        'Build secure modern applications using APIs, cloud-native architecture, microservices, and scalable Azure application ecosystems.',
    },
    {
      number: '06',
      logo: '/images/Security.svg',
      title: 'Security',
      subtitle: '(Microsoft Security Solutions)',
      description:
        'Protect identities, applications, endpoints, and business data with enterprise-grade security architecture and compliance-focused solutions.',
    },
  ];

  return (
    <section className={styles.microsoftFeaturesSection}>
      <div className={styles.microsoftFeaturesGlowOne}></div>
      <div className={styles.microsoftFeaturesGlowTwo}></div>

      <div className={styles.microsoftFeaturesContainer}>
        {/* TOP WRAPPER */}
        <div className={styles.microsoftFeaturesTopWrapper}>
          {/* LEFT */}
          <div className={styles.microsoftFeaturesTop}>
            <div className={styles.microsoftFeaturesBadge}>
              <span></span>
              SOLUTION AREAS
            </div>

            <h2>
              Microsoft <span> Solution Designation </span>Services
            </h2>

            <p>
              As a Microsoft Solution Designation Partner, Teckonnect delivers
              end-to-end Microsoft cloud solutions aligned with Microsoft’s core
              solution areas — helping organizations modernize operations,
              strengthen security, and accelerate digital transformation.
            </p>
          </div>

          {/* RIGHT LOGOS */}
          <div className={styles.microsoftFeaturesLogos}>
            <div className={styles.microsoftLogoCard}>
              <img
                src="/images/Modern work.svg"
                alt="Modern Work"
              />
            </div>

            <div className={styles.microsoftLogoCard}>
              <img
                src="/images/Infra 1.svg"
                alt="Infrastructure"
              />
            </div>

            <div className={styles.microsoftLogoCard}>
              <img
                src="/images/Security.svg"
                alt="Security"
              />
            </div>

            <div className={styles.microsoftLogoCard}>
              <img
                src="/images/Data & AI.svg"
                alt="Data & AI"
              />
            </div>

            <div className={styles.microsoftLogoCard}>
              <img
                src="/images/Digital app & Innovation.svg"
                alt="Innovation"
              />
            </div>

            <div className={styles.microsoftLogoCard}>
              <img
                src="/images/Business App.svg"
                alt="Business Applications"
              />
            </div>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className={styles.microsoftFeaturesGrid}>
          {features.map((item, index) => (
            <div
              key={index}
              className={styles.microsoftFeaturesCard}
            >
              <div className={styles.microsoftFeaturesNumber}>
                {item.number}
              </div>

              <div className={styles.microsoftFeaturesCardTop}>
                {/* <div className={styles.microsoftFeaturesLogoWrap}>
                  <img
                    src={item.logo}
                    alt={item.title}
                  />
                </div> */}

                <div className={styles.microsoftFeaturesContent}>
                  <h3>
                    {item.title}
                    <span>{item.subtitle}</span>
                  </h3>
                </div>
              </div>

              <p className={styles.microsoftFeaturesDescription}>
                {item.description}
              </p>

              <Link
                to={item.link}
                className={styles.microsoftFeaturesBtn}
              >
                {item.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicrosoftFeatures;
