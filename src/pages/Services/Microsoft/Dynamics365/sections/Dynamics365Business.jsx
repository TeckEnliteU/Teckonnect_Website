import React, { useState } from 'react';
import styles from '../dynamics365.module.css';

const faqData = [
  {
    question: 'What is Dynamics 365?',
    answer:
      'Microsoft Dynamics 365 combines CRM and ERP applications into a unified cloud platform that helps organizations streamline operations, improve customer engagement, automate workflows, and drive intelligent business growth through connected data and AI-powered insights.',
  },
  {
    question: 'Can we start with one module and expand later?',
    answer:
      'Yes. Dynamics 365 is designed as a modular ecosystem, allowing organizations to begin with a single business application and expand gradually into finance, supply chain, customer service, or analytics as operational requirements evolve.',
  },
  {
    question: 'How does Teckonnect differ from larger Dynamics partners?',
    answer:
      'We focus on governance-led delivery, operational accountability, long-term optimization support, and measurable outcomes instead of only deployment scale. Our approach prioritizes transparency, adoption, and continuous improvement.',
  },
  {
    question: 'What does post go-live managed support include?',
    answer:
      'Our managed support includes monitoring, KPI reporting, optimization planning, governance reviews, issue resolution, adoption tracking, roadmap planning, and continuous platform improvement initiatives.',
  },
];

const Dynamics365Business = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.businessFaqSection}>
      {/* GLOW EFFECTS */}
      <div className={styles.faqGlowOne}></div>
      <div className={styles.faqGlowTwo}></div>

      <div className={styles.businessFaqContainer}>
        {/* TOP */}
        <div className={styles.faqTop}>
          <span className={styles.faqBadge}>FAQS</span>

          <h2 className={styles.faqTitle}>
            Common
            <span> questions</span>
          </h2>

          <p className={styles.faqDescription}>
            What organizations typically ask before starting a Dynamics 365
            engagement.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className={styles.faqWrapper}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.activeFaq : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* QUESTION */}
              <div className={styles.faqQuestion}>
                <span>{faq.question}</span>

                <div className={styles.faqArrow}></div>
              </div>

              {/* ANSWER */}
              <div
                className={`${styles.faqAnswerWrapper} ${
                  activeIndex === index ? styles.openAnswer : ''
                }`}
              >
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dynamics365Business;
