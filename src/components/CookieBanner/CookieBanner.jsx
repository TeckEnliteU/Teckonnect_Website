import { useEffect, useState } from 'react';
import styles from './CookieBanner.module.css';

function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    const consentDate = localStorage.getItem('cookieConsentDate');

    // Hide banner if consent was given within last 6 months
    if (consent && consentDate) {
      const sixMonths = 1000 * 60 * 60 * 24 * 180;

      if (Date.now() - new Date(consentDate).getTime() < sixMonths) {
        return;
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className={styles.cookieOverlay}>
      <div className={styles.cookiePopup}>
        <h2>We Value Your Privacy</h2>

        <p>
          We use cookies and similar technologies to operate our website, keep
          it secure, understand how it's used, and improve your experience. Some
          are strictly necessary; others help with performance, functionality,or
          marketing.
        </p>

        <p>
          By clicking <strong>Accept All</strong>, you consent to our use of
          cookies as described in our{' '}
          <a
            href="/cookies"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cookieLink}
          >
            Cookie Policy
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cookieLink}
          >
            Privacy Policy
          </a>
          .
        </p>

        <div className={styles.actions}>
          <button
            className={styles.acceptBtn}
            onClick={handleAccept}
          >
            Accept All
          </button>

          <button
            className={styles.rejectBtn}
            onClick={handleReject}
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
