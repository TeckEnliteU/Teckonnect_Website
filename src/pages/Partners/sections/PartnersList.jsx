'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from '../Partners.module.css';

/* ========================= */
/* 🔥 PREMIUM ANIMATION */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.3,
    },
  },
};

const textReveal = {
  hidden: {
    y: 100,
    opacity: 0,
    filter: 'blur(10px)',
  },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardAnim = {
  hidden: {
    y: 120,
    opacity: 0,
    scale: 0.92,
    filter: 'blur(8px)',
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ========================= */
/* CARD */
/* ========================= */

const Card = ({ item }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -5;
    const rotateY = (x / rect.width - 0.5) * 5;

    ref.current.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  };

  const reset = () => {
    ref.current.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <motion.div
      ref={ref}
      className={styles.partnersListCard}
      variants={cardAnim}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
    >
      <div className={styles.partnersListImgWrap}>
        <img
          src={item.img}
          alt={item.name}
          className={styles.partnersListImg}
        />
      </div>

      <h4 className={styles.partnersListTitle}>{item.name}</h4>

      <p className={styles.partnersListDesc}>{item.desc}</p>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.partnersListLink}
      >
        Visit Website →
      </a>
    </motion.div>
  );
};

/* ========================= */
/* MAIN */
/* ========================= */

export default function PartnersList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const partners = [
    {
      name: 'Crayon',
      // img: '/partners/crayon.svg',
      img: `${import.meta.env.BASE_URL}partners/crayon.svg`,

      link: 'https://www.crayon.com',
      desc: 'A strategic partner helping us simplify software licensing and cloud economics. Together, we enable smarter decisions across cloud, cost optimisation, and governance.',
    },
    {
      name: 'TechData',
      // img: '/partners/TechData.svg',
      img: `${import.meta.env.BASE_URL}partners/TechData.svg`,

      link: 'https://www.techdata.com/in',
      desc: 'Our distribution partner supporting scalable technology delivery and reach. They help strengthen our ability to deliver cloud and software solutions efficiently.',
    },
    {
      name: 'Redington',
      // img: '/partners/Redington.svg',
      img: `${import.meta.env.BASE_URL}partners/Redington.svg`,

      link: 'https://www.redingtongroup.com',
      desc: 'A key ecosystem partner extending access to global technology platforms. Redington supports our ability to serve diverse markets with speed and scale.',
    },
    {
      name: 'Ingram Micro',
      // img: '/partners/Ingram MIcro.svg',
      img: `${import.meta.env.BASE_URL}partners/Ingram MIcro.svg`,

      link: 'https://www.ingrammicro.com',
      desc: 'A global partner supporting software distribution and lifecycle management. Ingram Micro enables us to simplify licensing and subscription experiences.',
    },
    {
      name: 'Acronis',
      // img: '/partners/acronis.svg',
      img: `${import.meta.env.BASE_URL}partners/acronis.svg`,

      link: 'https://www.acronis.com',
      desc: 'A technology partner strengthening cyber protection and data resilience. We work together to help organisations protect, recover, and stay secure.',
    },
    {
      name: 'Meier Business Systems',
      // img: '/partners/mbs.svg',
      img: `${import.meta.env.BASE_URL}partners/mbs.svg`,

      link: 'https://mbs.net.au',
      desc: 'Our IBM-focused partner supporting enterprise-grade platforms and solutions. Together, we deliver trusted IBM software and data-driven capabilities.',
    },
    {
      name: 'Briskinfosec',
      // img: '/partners/BriskInfosec.svg',
      img: `${import.meta.env.BASE_URL}partners/BriskInfosec.svg`,

      link: 'https://www.briskinfosec.com',
      desc: 'A cybersecurity partner enhancing our security and risk management capabilities. Together, we help organisations strengthen their cyber resilience.',
    },
    {
      name: 'Future',
      // img: '/partners/FCC.svg',
      img: `${import.meta.env.BASE_URL}partners/FCC.svg`,

      link: 'https://www.fcc-kuwait.com/',
      desc: 'An innovation-focused partner supporting digital transformation initiatives. They complement our services with forward-looking, technology-driven solutions.',
    },
    {
      name: 'Pax8',
      // img: '/partners/pax8.svg',
      img: `${import.meta.env.BASE_URL}partners/pax8.svg`,

      link: 'https://www.pax8.com',
      desc: 'A specialist partner supporting complementary technology services. Together, we extend our capabilities to deliver complete, integrated outcomes.',
    },
  ];

  const implementationPartners = [
    {
      name: 'SigniFlow',
      // img: '/partners/SigniFlow.svg',
      img: `${import.meta.env.BASE_URL}partners/SigniFlow.svg`,

      link: 'https://www.signiflow.com',
      desc: 'A digital signing and workflow partner enabling secure, compliant document processes. Together, we help organisations simplify approvals, reduce manual effort, and maintain trust.',
    },
    {
      name: 'Kissflow',
      // img: '/partners/kissflow.svg',
      img: `${import.meta.env.BASE_URL}partners/kissflow.svg`,

      link: 'https://kissflow.com',
      desc: 'A low-code automation partner helping streamline workflows and processes. Together, we enable faster digital transformation with flexibility and control.',
    },
    {
      name: 'Corporater',
      // img: '/partners/corporater.svg',
      img: `${import.meta.env.BASE_URL}partners/corporater.svg`,

      link: 'https://corporater.com',
      desc: 'A governance and performance management partner supporting better decisions. Corporater helps bring strategy, risk, and execution together.',
    },
    {
      name: 'Employment Hero',
      // img: '/partners/employeement hero.svg',
      img: `${import.meta.env.BASE_URL}partners/employeement hero.svg`,

      link: 'https://employmenthero.com',
      desc: 'A people and payroll technology partner supporting workforce management. We simplify HR processes and enhance employee experiences.',
    },
    {
      name: 'Salesforce',
      // img: '/partners/salesforce.svg',
      img: `${import.meta.env.BASE_URL}partners/salesforce.svg`,

      link: 'https://salesforce.com',
      desc: 'A CRM partner supporting customer engagement and data-driven growth. Together, we help organisations connect customers, data, and processes.',
    },
    {
      name: 'Volody',
      // img: '/partners/volody.svg',
      img: `${import.meta.env.BASE_URL}partners/volody.svg`,

      link: 'https://volody.com',
      desc: 'A contract lifecycle and legal tech partner improving compliance and visibility. They help strengthen governance and efficiency across agreements.',
    },
  ];
  return (
    <section
      className={styles.partnersListSection}
      ref={ref}
    >
      {/* HEADER */}
      <motion.div
        className={styles.partnersListHeader}
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {/* <motion.h2 variants={textReveal}>Extending Partners</motion.h2>

        <motion.p variants={textReveal}>
          Trusted specialists who enhance our core services with complementary
          expertise and proven capability.
        </motion.p> */}
        <motion.h2
          variants={textReveal}
          className={styles.partnersListH3}
        >
          Our Distributors Networks
        </motion.h2>

        <motion.p
          variants={textReveal}
          className={styles.partnersListSubText}
        >
          Trusted specialists who enhance our core services with complementary
          expertise and proven capability.
        </motion.p>
      </motion.div>

      {/* GRID */}
      <motion.div
        className={styles.partnersListGrid}
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {partners.map((item, i) => (
          <Card
            key={i}
            item={item}
          />
        ))}
      </motion.div>

      {/* IMPLEMENTATION */}

      <motion.div
        className={styles.implSection}
        variants={container}
      >
        {/* HEADER */}
        <motion.div
          className={styles.implHeader}
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <motion.h3
            variants={textReveal}
            className={styles.implH3}
          >
            Our Extending Partners
          </motion.h3>

          <motion.p
            variants={textReveal}
            className={styles.implSubText}
          >
            Trusted specialists who enhance our core services with complementary
            expertise.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className={styles.implGrid}
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {implementationPartners.map((item, i) => (
            <motion.div
              key={i}
              className={styles.implCard}
              variants={cardAnim}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >
              <div className={styles.implImgWrap}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles.implImg}
                />
              </div>

              <h4 className={styles.implTitle}>{item.name}</h4>

              <p className={styles.implDesc}>{item.desc}</p>

              <a
                href={item.link}
                className={styles.implLink}
                target="_blank"
              >
                Visit Website →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
