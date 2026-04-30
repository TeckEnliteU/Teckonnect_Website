'use client';

import { useState } from 'react';
import styles from '../contact.module.css';

export default function ContactFormSimple() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // just fake success message
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.formContainer}>
        <div className={styles.formBorder}>
          <form
            className={styles.formBox}
            onSubmit={handleSubmit}
          >
            <div className={styles.grid}>
              <div>
                <label>First name</label>
                <input
                  placeholder="Enter your first name*"
                  required
                />
              </div>

              <div>
                <label>Last name</label>
                <input
                  placeholder="Enter your last name*"
                  required
                />
              </div>

              <div>
                <label>Phone number</label>
                <input
                  placeholder="Phone number*"
                  required
                />
              </div>

              <div>
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="Email address*"
                  required
                />
              </div>
            </div>

            <div className={styles.full}>
              <label>Your message</label>
              <textarea
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
            >
              Submit Here
            </button>

            {submitted && (
              <p style={{ color: 'green', marginTop: '15px' }}>
                Form submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
