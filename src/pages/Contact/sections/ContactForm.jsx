'use client';

import styles from '../contact.module.css';

export default function ContactFormSimple() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.formContainer}>
        <div className={styles.formBorder}>
          <form className={styles.formBox}>
            <div className={styles.grid}>
              <div>
                <label>First name</label>
                <input placeholder="Enter your first name*" />
              </div>

              <div>
                <label>Last name</label>
                <input placeholder="Enter your last name*" />
              </div>

              <div>
                <label>Phone number</label>
                <input placeholder="Phone number*" />
              </div>

              <div>
                <label>Email address</label>
                <input placeholder="Email address*" />
              </div>
            </div>

            <div className={styles.full}>
              <label>Your message</label>
              <textarea placeholder="Your message" />
            </div>

            <button className={styles.submitBtn}>Submit here</button>
          </form>
        </div>
      </div>
    </section>
  );
}
