import styles from '../home.module.css';

const feedbacks = [
  { name: 'Arjun', role: 'CEO', text: 'Absolutely transformed our workflow.' },
  {
    name: 'Meera',
    role: 'Manager',
    text: 'Clean UI and intuitive experience.',
  },
  { name: 'Rahul', role: 'Founder', text: 'Boosted productivity massively.' },
  { name: 'Divya', role: 'Designer', text: 'Feels like Apple-level design.' },
  { name: 'Karthik', role: 'Developer', text: 'Super smooth performance.' },
  { name: 'Sneha', role: 'Marketing', text: 'Loved the simplicity.' },
  { name: 'Vikram', role: 'CTO', text: 'Very scalable and clean system.' },
  { name: 'Ananya', role: 'Lead', text: 'Best experience so far.' },
  { name: 'Rohit', role: 'Engineer', text: 'Very polished interactions.' },
  { name: 'Pooja', role: 'HR', text: 'Easy and beautiful UI.' },
];

/* 🔥 IMPORTANT: duplicate for seamless loop */
const loopData = [...feedbacks, ...feedbacks];
export default function FeedbackSection() {
  return (
    <section className={styles.feedback}>
      <h2 className={styles.feedbackTitle}>Trusted by Customers Worldwide</h2>

      <div className={styles.feedbackGrid}>
        {/* LEFT COLUMN (UP) */}
        <div className={styles.feedbackColumn}>
          <div className={`${styles.track} ${styles.scrollUp}`}>
            {loopData.map((item, i) => (
              <div
                key={i}
                className={styles.feedbackCard}
              >
                <p className={styles.feedbackText}>“{item.text}”</p>
                <div className={styles.feedbackUser}>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN (DOWN) */}
        <div className={styles.feedbackColumn}>
          <div className={`${styles.track} ${styles.scrollDown}`}>
            {loopData.map((item, i) => (
              <div
                key={i}
                className={styles.feedbackCard}
              >
                <p className={styles.feedbackText}>“{item.text}”</p>
                <div className={styles.feedbackUser}>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN (UP) */}
        <div className={styles.feedbackColumn}>
          <div className={`${styles.track} ${styles.scrollUp}`}>
            {loopData.map((item, i) => (
              <div
                key={i}
                className={styles.feedbackCard}
              >
                <p className={styles.feedbackText}>“{item.text}”</p>
                <div className={styles.feedbackUser}>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
