import styles from '../contact.module.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const cards = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Headquarter',
      desc: `Connect with us for strategic discussions, consultations, or
      in-person engagements with our technology experts.`,
      footer: '1 Denison St, North Sydney NSW 2060, Australia',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      desc: `Have a question, requirement, or challenge? Reach out to us and
      start a conversation with professionals who understand real-world IT environments.`,
      footer: 'info@teckonnect.com',
    },
    {
      icon: <FaPhone />,
      title: 'Call Our Team',
      desc: `Speak directly with IT specialists to discuss managed services,
      cloud platforms, or cybersecurity needs tailored to your organisation.`,
      footer: '1800549639',
    },
  ];

  return (
    <section className={styles.infoSection}>
      <div className={styles.infoContainer}>
        {/* HEADING */}
        <h2 className={styles.infoh2}>
          Stay connected with <br />
          dependable IT & cloud support
        </h2>

        {/* SUBTEXT */}
        <p className={styles.infoText}>
          From everyday IT operations to cloud architecture and cybersecurity,
          our specialists are here to support your business with clarity, speed,
          and accountability.
        </p>

        {/* CARDS */}
        <div className={styles.infoGrid}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={styles.infoCard}
            >
              <div className={styles.infoIcon}>{card.icon}</div>

              <h3 className={styles.infoTitle}>{card.title}</h3>

              <p className={styles.infoDesc}>{card.desc}</p>

              <div className={styles.infoDivider}></div>

              <p className={styles.infoFooter}>{card.footer}</p>

              <span className={styles.cardGlow}></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
