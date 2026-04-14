import React, { useEffect, useRef } from 'react';
import styles from '../Partners.module.css';

export default function PartnersList() {
  const ref = useRef(null);
  useEffect(() => {
    const items = ref.current.querySelectorAll(`.${styles.partnersListReveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;

            el.style.transitionDelay = `${i * 0.1}s`;
            el.classList.add(styles.partnersListShow);
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      className={styles.partnersList}
      ref={ref}
    >
      {/* HERO */}
      <div
        className={`${styles.partnersListHero} ${styles.partnersListReveal}`}
      >
        <h2>Extending Partners</h2>
        <h3>Enhancing Reach, Expertise, and Value</h3>
        <p>
          Collaboration with leading technology and cybersecurity partners
          allows organisations to access a broader range of services, advanced
          solutions, and cost-effective platforms. This Trusted Partner Network
          ensures businesses can adopt modern IT, cloud, and security solutions
          with confidence, backed by industry-leading expertise.
        </p>
      </div>

      {/* TECHNOLOGY PARTNERS */}
      <div className={styles.partnersListSection}>
        <h3 className={styles.partnersListTitle}>Our Technology Partners</h3>

        <div className={styles.partnersListCards}>
          {[
            {
              name: 'Crayon',
              img: '/logos/crayon.png',
              sub: 'Licensing, Software Management & Cloud Expertise',
              desc: `Crayon is a global leader in software asset management, licensing optimisation, and cloud solutions. Their expertise ensures organisations maximise technology investments, simplify software procurement, and implement cloud strategies efficiently.`,
            },
            {
              name: 'Techdata',
              img: '/logos/TechData.png',
              sub: 'Technology Distribution & Cloud Solutions',
              desc: `Techdata provides a broad portfolio of technology and cloud solutions, enabling flexible IT deployment and streamlined service delivery. Their distribution capabilities help organisations access the latest hardware, software, and cloud innovations.`,
            },
            {
              name: 'Redington',
              img: '/logos/Redington.png',
              sub: 'Strategic IT Distribution & Service Enablement',
              desc: `Redington supports IT distribution and service enablement with a focus on driving operational efficiency. Their solutions facilitate seamless delivery of hardware, software, and cloud services across multiple industries.`,
            },
            {
              name: 'Ingram',
              img: '/logos/Ingram MIcro.png',
              sub: 'End-to-End Technology Distribution & Partner Services',
              desc: `Ingram offers end-to-end technology distribution services, including cloud enablement and managed services support. Their expertise ensures reliable supply chains and access to modern IT platforms for organisations of all sizes.`,
            },
            {
              name: 'Pax8',
              img: '/logos/pax8.png',
              sub: 'Cloud Marketplace & Cloud Services',
              desc: `Pax8 provides a cloud marketplace and managed cloud solutions that simplify the adoption, billing, and management of cloud services. Their platform empowers organisations to deploy scalable cloud infrastructure with ease.`,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${styles.partnersListCard} ${styles.partnersListReveal}`}
            >
              {/* LOGO */}
              <div className={styles.partnersListLogo}>
                <img
                  src={item.img}
                  alt={item.name}
                />
              </div>

              {/* CONTENT */}
              <h4>{item.name}</h4>
              <span>{item.sub}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CYBER SECTION */}
      <div
        className={`${styles.partnersListCyber} ${styles.partnersListReveal}`}
      >
        <div className={styles.partnersListCyberContent}>
          <h3>Briskinfosec</h3>
          <span>Cybersecurity Expertise</span>
          <p>
            Briskinfosec delivers advanced cybersecurity services, including
            vulnerability assessments, penetration testing, and risk management.
            Partnering with them strengthens organisations’ cybersecurity
            posture and protects against evolving threats.
          </p>
        </div>

        <div className={styles.partnersListCyberImage}>
          <img
            src="/logos/BriskInfosec.png"
            alt="Briskinfosec"
          />
        </div>
      </div>

      {/* FINAL TEXT */}
      <div
        className={`${styles.partnersListFooter} ${styles.partnersListReveal}`}
      >
        <p>
          These partnerships amplify the ability to deliver secure, scalable,
          and innovative IT and cybersecurity solutions across industries,
          helping organisations achieve operational efficiency, regulatory
          compliance, and technology-driven growth.
        </p>
      </div>

      {/* CTA */}
      <div className={styles.partnersListActions}>
        <a
          href="/services"
          className={styles.partnersListPrimary}
        >
          Explore Our Services →
        </a>
        <a
          href="/contact"
          className={styles.partnersListSecondary}
        >
          Contact Us →
        </a>
      </div>
    </section>
  );
}
