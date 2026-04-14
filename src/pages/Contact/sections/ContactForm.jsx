// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import styles from '../contact.module.css';

// export default function ContactForm() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     company: '',
//     industry: '',
//     services: [],
//     message: '',
//     consent: false,
//   });

//   const [status, setStatus] = useState({ type: '', message: '' }); // ✅ inline message

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === 'checkbox' && name === 'services') {
//       setForm((prev) => ({
//         ...prev,
//         services: checked
//           ? [...prev.services, value]
//           : prev.services.filter((s) => s !== value),
//       }));
//     } else if (type === 'checkbox') {
//       setForm((prev) => ({ ...prev, [name]: checked }));
//     } else {
//       setForm((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ type: '', message: '' }); // clear previous

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus({
//           type: 'success',
//           message: '✅ Message sent successfully!',
//         });
//         setForm({
//           name: '',
//           email: '',
//           company: '',
//           industry: '',
//           services: [],
//           message: '',
//           consent: false,
//         });
//         setTimeout(() => setStatus({ type: '', message: '' }), 2000);
//       } else {
//         setStatus({
//           type: 'error',
//           message: `❌ Failed to send message. ${result.error || ''}`,
//         });
//         setTimeout(() => setStatus({ type: '', message: '' }), 2000);
//       }
//     } catch (error) {
//       setStatus({
//         type: 'error',
//         message: `❌ An error occurred. ${error.message}`,
//       });
//       setTimeout(() => setStatus({ type: '', message: '' }), 2000);
//     }
//   };

//   return (
//     <section className={styles.formSection}>
//       <div className={styles.formWrapper}>
//         {/* HEADER */}
//         <motion.div
//           className={styles.header}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           <h2>Get in Touch</h2>
//           <p>
//             Connect with our experts and transform your technology strategy.
//           </p>
//         </motion.div>

//         {/* FORM */}
//         <motion.form
//           className={styles.formCard}
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           {/* INPUT GROUP */}
//           <div className={styles.grid}>
//             <input
//               name="name"
//               placeholder="Full Name *"
//               onChange={handleChange}
//               value={form.name}
//               required
//             />
//             <input
//               name="email"
//               placeholder="Email Address *"
//               onChange={handleChange}
//               value={form.email}
//               required
//             />
//             <input
//               name="company"
//               placeholder="Company Name *"
//               onChange={handleChange}
//               value={form.company}
//               required
//             />

//             <select
//               name="industry"
//               onChange={handleChange}
//               value={form.industry}
//             >
//               <option value="">Select Industry</option>
//               <option>Public Sector</option>
//               <option>Manufacturing</option>
//               <option>Healthcare</option>
//               <option>Retail</option>
//               <option>Logistics</option>
//               <option>Education</option>
//               <option>Oil & Gas</option>
//               <option>Mining</option>
//               <option>SMB / Enterprise</option>
//             </select>
//           </div>

//           {/* SERVICES */}
//           <div className={styles.services}>
//             <p>Services Interested In</p>
//             {[
//               'Microsoft Services',
//               'AWS Services',
//               'IBM Cloud',
//               'Cybersecurity',
//               'Managed IT',
//               'Cloud Enablement',
//             ].map((item) => (
//               <label
//                 key={item}
//                 className={styles.serviceItem}
//               >
//                 <input
//                   type="checkbox"
//                   name="services"
//                   value={item}
//                   onChange={handleChange}
//                   checked={form.services.includes(item)}
//                 />
//                 <span>{item}</span>
//               </label>
//             ))}
//           </div>

//           {/* MESSAGE */}
//           <textarea
//             name="message"
//             placeholder="Message / Requirements *"
//             onChange={handleChange}
//             value={form.message}
//             required
//           />

//           {/* CONSENT */}
//           <label className={styles.consent}>
//             <input
//               type="checkbox"
//               name="consent"
//               onChange={handleChange}
//               checked={form.consent}
//               required
//             />
//             I agree to the Privacy Policy and Terms of Service
//           </label>

//           {/* STATUS MESSAGE */}
//           {status.message && (
//             <motion.div
//               className={`${styles.statusMessage} ${
//                 status.type === 'success' ? styles.success : styles.error
//               }`}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               {status.message}
//             </motion.div>
//           )}

//           {/* BUTTON */}
//           <button
//             type="submit"
//             className={styles.submitBtn}
//           >
//             Submit Request →
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../contact.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    services: [],
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const [active, setActive] = useState(0);

  const contactData = [
    {
      icon: faEnvelope,
      title: 'Reach us via Email',
      value: 'info@teckonnect.com',
    },
    {
      icon: faPhone,
      title: 'Call us directly',
      value: '1800549639',
    },
  ];

  const next = () => setActive((prev) => (prev + 1) % contactData.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + contactData.length) % contactData.length);

  // ✅ FORM LOGIC (UNCHANGED)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'services') {
      setForm((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: '✅ Message sent successfully!',
        });

        setForm({
          name: '',
          email: '',
          company: '',
          industry: '',
          services: [],
          message: '',
          consent: false,
        });

        setTimeout(() => setStatus({ type: '', message: '' }), 2000);
      } else {
        setStatus({
          type: 'error',
          message: `❌ Failed to send message.`,
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: `❌ Error: ${error.message}`,
      });
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.formWrapper}>
        <div className={styles.mainGrid}>
          {/* LEFT SIDE */}
          <div className={styles.leftSection}>
            <div className={styles.leftText}>
              <h2>Get in Touch</h2>
              <p>
                We make it simple for organisations of all sizes to connect with
                our experts. Fill out the form below, and a specialist will
                respond promptly to discuss your needs.
              </p>
            </div>

            {/* CONTACT CARD */}
            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className={styles.infoTop}>
                <span>Other ways to reach us</span>

                <div className={styles.arrows}>
                  <button onClick={prev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button
                    onClick={next}
                    className={styles.activeArrow}
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>

              <motion.div
                key={active}
                className={styles.infoBottom}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FontAwesomeIcon
                  icon={contactData[active].icon}
                  className={styles.infoIcon}
                />

                <h3>{contactData[active].title}</h3>

                <p>
                  Reach out to our team for quick assistance and expert guidance
                  tailored to your business.
                </p>

                <div className={styles.contactLink}>
                  {contactData[active].value}
                  <span>→</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT FORM */}
          <motion.form
            className={styles.formCard}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className={styles.grid}>
              <input
                name="name"
                placeholder="Full Name *"
                onChange={handleChange}
                value={form.name}
                required
              />
              <input
                name="email"
                placeholder="Email Address *"
                onChange={handleChange}
                value={form.email}
                required
              />
              <input
                name="company"
                placeholder="Company Name *"
                onChange={handleChange}
                value={form.company}
                required
              />

              <select
                name="industry"
                onChange={handleChange}
                value={form.industry}
              >
                <option value="">Select Industry</option>
                <option>Public Sector</option>
                <option>Manufacturing</option>
                <option>Healthcare</option>
                <option>Retail</option>
                <option>Logistics</option>
                <option>Education</option>
                <option>Oil & Gas</option>
                <option>Mining</option>
                <option>SMB / Enterprise</option>
              </select>
            </div>

            {/* SERVICES */}
            {/* <div className={styles.services}>
              <p>Services Interested In</p>
              {[
                'Microsoft Services',
                'AWS Services',
                'IBM Cloud',
                'Cybersecurity',
                'Managed IT',
                'Cloud Enablement',
              ].map((item) => (
                <label
                  key={item}
                  className={styles.serviceItem}
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={item}
                    onChange={handleChange}
                    checked={form.services.includes(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div> */}
            <div className={styles.services}>
              <p>Services Interested In</p>

              <div className={styles.servicesGrid}>
                {[
                  'Microsoft Services',
                  'AWS Services',
                  'IBM Cloud',
                  'Cybersecurity',
                  'Managed IT',
                  'Cloud Enablement',
                ].map((item) => (
                  <div
                    key={item}
                    className={`${styles.serviceBox} ${
                      form.services.includes(item) ? styles.activeService : ''
                    }`}
                    onClick={() => {
                      setForm((prev) => ({
                        ...prev,
                        services: prev.services.includes(item)
                          ? prev.services.filter((s) => s !== item)
                          : [...prev.services, item],
                      }));
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message / Requirements *"
              onChange={handleChange}
              value={form.message}
              required
            />

            <label className={styles.consent}>
              <input
                type="checkbox"
                name="consent"
                onChange={handleChange}
                checked={form.consent}
                required
              />
              I agree to the Privacy Policy
            </label>

            {status.message && (
              <div
                className={`${styles.statusMessage} ${status.type === 'success' ? styles.success : styles.error}`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
