'use client';

import { useState } from 'react';
import styles from '../contact.module.css';

export default function ContactFormSimple() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://teckonnect.com/contact.php', {
        method: 'POST',
        body: new FormData(e.target),
      });

      const result = await res.text();

      if (result === 'success') {
        setSubmitted(true);
        e.target.reset();

        setTimeout(() => setSubmitted(false), 2500);
      } else {
        alert('Submission failed');
      }
    } catch (err) {
      alert('Server error');
    }

    setLoading(false);
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
                  name="firstName"
                  placeholder="Enter your first name*"
                  required
                />
              </div>

              <div>
                <label>Last name</label>
                <input
                  name="lastName"
                  placeholder="Enter your last name*"
                  required
                />
              </div>

              <div>
                <label>Phone number</label>
                <input
                  name="phone"
                  placeholder="Phone number*"
                  required
                />
              </div>

              <div>
                <label>Email address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email address*"
                  required
                />
              </div>
            </div>

            <div className={styles.full}>
              <label>Your message</label>
              <textarea
                name="message"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading || submitted}
            >
              {loading ? 'Sending...' : submitted ? 'Sent ✓' : 'Submit Here'}
            </button>

            {submitted && (
              <div className={styles.successBox}>
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
