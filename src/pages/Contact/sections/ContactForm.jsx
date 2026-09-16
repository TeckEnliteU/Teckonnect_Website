// 'use client';

// import { useState } from 'react';
// import styles from '../contact.module.css';

// export default function ContactFormSimple() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch('https://teckonnect.com/contact.php', {
//         method: 'POST',
//         body: new FormData(e.target),
//       });

//       const result = await res.text();

//       if (result === 'success') {
//         setSubmitted(true);
//         e.target.reset();

//         setTimeout(() => setSubmitted(false), 2500);
//       } else {
//         alert('Submission failed');
//       }
//     } catch (err) {
//       alert('Server error');
//     }

//     setLoading(false);
//   };

//   return (
//     <section className={styles.contactSection}>
//       <div className={styles.formContainer}>
//         <div className={styles.formBorder}>
//           <form
//             className={styles.formBox}
//             onSubmit={handleSubmit}
//           >
//             <div className={styles.grid}>
//               <div>
//                 <label>First name</label>
//                 <input
//                   name="firstName"
//                   placeholder="Enter your first name*"
//                   required
//                 />
//               </div>

//               <div>
//                 <label>Last name</label>
//                 <input
//                   name="lastName"
//                   placeholder="Enter your last name*"
//                   required
//                 />
//               </div>

//               <div>
//                 <label>Phone number</label>
//                 <input
//                   name="phone"
//                   placeholder="Phone number*"
//                   required
//                 />
//               </div>

//               <div>
//                 <label>Email address</label>
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email address*"
//                   required
//                 />
//               </div>
//             </div>

//             <div className={styles.full}>
//               <label>Your message</label>
//               <textarea
//                 name="message"
//                 placeholder="Your message"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className={styles.submitBtn}
//               disabled={loading || submitted}
//             >
//               {loading ? 'Sending...' : submitted ? 'Sent ✓' : 'Submit Here'}
//             </button>

//             {submitted && (
//               <div className={styles.successBox}>
//                 Message sent successfully!
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { useState } from 'react';
import styles from '../contact.module.css';

import { FiMapPin, FiMail, FiPhone, FiArrowUpRight } from 'react-icons/fi';

import { BsLightningChargeFill } from 'react-icons/bs';

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

        setTimeout(() => {
          setSubmitted(false);
        }, 2500);
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
      <div className={styles.contactWrapper}>
        {/* LEFT SIDE */}

        <div className={styles.contactInfo}>
          <h2>
            Stay Connected With
            <span> Dependable IT & Cloud Support</span>
          </h2>

          <p className={styles.description}>
            From everyday IT operations to cloud architecture and cybersecurity,
            our specialists are here to support your business with clarity,
            speed and accountability.
          </p>

          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}></div>

            <div>
              <h4>Quick Response Guaranteed</h4>

              <p>
                We typically respond to all enquiries within 24 hours. Our team
                is ready to understand your requirements and recommend the best
                solution for your business.
              </p>
            </div>
          </div>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <FiMapPin />
              </div>

              <div>
                <h5>Our Headquarters</h5>

                <p>
                  1 Denison St,
                  <br />
                  North Sydney NSW 2060,
                  <br />
                  Australia
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <FiMail />
              </div>

              <div>
                <h5>Email Us</h5>
                <p>info@teckonnect.com</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <FiPhone />
              </div>

              <div>
                <h5>Call Our Team</h5>
                <p>1800549639</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}

        <div className={styles.formContainer}>
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>First Name *</label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              {/* <div className={styles.formGroup}>
                <label>Last Name *</label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div> */}

              <div className={styles.formGroup}>
                <label>Phone Number *</label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Email Address *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Company Name</label>

              <input
                type="text"
                name="company"
                placeholder="Enter your company name"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Job Title</label>

              <input
                type="text"
                name="jobTitle"
                placeholder="Enter your job title"
              />
            </div>

            {/* <div className={styles.formGroup}>
              <label>What Are You Looking For?</label>

              <select name="service">
                <option value="">Select a service</option>

                <option value="Managed IT Services">Managed IT Services</option>

                <option value="Cloud Solutions">Cloud Solutions</option>

                <option value="Cyber Security">Cyber Security</option>

                <option value="Software Development">
                  Software Development
                </option>

                <option value="AI & Automation">AI & Automation</option>

                <option value="Data & Analytics">Data & Analytics</option>
              </select>
            </div> */}

            <div className={styles.formGroup}>
              <label>Your Message *</label>

              <textarea
                name="message"
                placeholder="Tell us about your requirements..."
                required
              />
            </div>

            <div className={styles.checkbox}>
              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the Privacy Policy and consent to Teckonnect
                contacting me regarding my enquiry.
              </span>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading || submitted}
            >
              {loading ? 'Sending...' : submitted ? 'Sent ✓' : 'Send Message'}
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
