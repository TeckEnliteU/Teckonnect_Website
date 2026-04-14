'use client';

import { useEffect, useState } from 'react';
import styles from '../home.module.css';
import { Link } from 'react-router-dom';
const cards = [
  {
    title: 'About Teckonnect',
    content: `Your Managed Services Partner for Modern Cloud & IT Operations.

Teckonnect is a Managed Service Provider delivering reliable, secure, and scalable IT services across cloud, infrastructure, and data protection. We partner with organizations to manage, optimize, and modernize their IT environments, enabling them to focus on what matters most—business growth.`,
  },
  {
    title: 'Who We Are',
    content: `Teckonnect is a Managed Service Provider delivering reliable, secure, and scalable IT services across cloud, infrastructure, and data protection. We partner with organizations to manage, optimize, and modernize their IT environments, enabling them to focus on what matters most—business growth.

We operate as an extension of your IT team, providing proactive monitoring, performance optimization, and continuous improvement—ensuring your systems are always available, secure, and ready to perform.`,
  },
  {
    title: 'Why Choose Us',
    content: `Technology Should Make Life Easier, Not Harder.

Too often, IT becomes a source of complexity instead of clarity. Systems fail, security risks increase, and teams are forced to manage technology rather than focus on their real work. That’s where we step in.

Our approach is simple and proven: combine the right technology with the right people to deliver secure, reliable outcomes that truly support your business.`,
  },
];

const AboutSection = () => {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);

  /* 🔥 AUTO SLIDE */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  /* 🔥 POSITION LOGIC */
  const getClass = (index) => {
    if (index === active) return styles.center;
    if (index === (active - 1 + cards.length) % cards.length)
      return styles.left;
    return styles.right;
  };

  return (
    <section className={styles.aboutSection}>
      {/* 🔥 HEADER */}
      <div className={styles.aboutHeader}>
        <h2>
          Welcome to <span>Teckonnect</span>
        </h2>
        <p>Your Managed Services Partner for Modern Cloud & IT Operations</p>
      </div>

      {/* 🔥 CAROUSEL */}
      <div
        className={styles.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${styles.card} ${getClass(i)}`}
          >
            <h3>{card.title}</h3>

            {/* 🔥 MULTI-LINE CONTENT FIX */}
            <p style={{ whiteSpace: 'pre-line' }}>{card.content}</p>

            {/* CTA ONLY IN LAST CARD */}
            {i === 0 && (
              <Link
                to="/about"
                className={styles.btn}
              >
                About Us
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
