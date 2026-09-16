import { Link } from 'react-router-dom';
import styles from '../NDIS.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        <div className={styles.ctaContent}>
          <h2>Want to see what this could look like for your service?</h2>

          <p>
            Every NDIS provider's setup is different. Have a conversation with
            our team about where your biggest risks and <br></br>time drains are
            no obligation, just a straightforward look at what's possible.
          </p>

          <Link to="/contact">
            <button>Talk to Our Team</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
