import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from '../Partners.module.css';

export default function KeyPartnership() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  // ✅ Controlled spread (not too wide)
  const x1 = useTransform(scrollYProgress, [0, 0.4], [0, -380]);
  const x2 = useTransform(scrollYProgress, [0, 0.4], [0, 0]);
  const x3 = useTransform(scrollYProgress, [0, 0.4], [0, 380]);

  // ✅ Smooth scale + opacity
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // ✅ Blur FIX (correct way)
  const blur = useTransform(scrollYProgress, [0, 0.3], [10, 0]);
  const blurValue = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <section
      ref={ref}
      className={styles.keyPartnerSection}
    >
      <h2 className={styles.keypartnerh2}>Key Technology Partners</h2>

      <p className={styles.subText}>Driving Performance Across Platforms</p>

      <div className={styles.stickyWrapper}>
        {/* Microsoft */}
        <motion.div
          style={{ x: x1, scale, opacity, filter: blurValue }}
          className={styles.card}
        >
          <img
            src="/icons/microsoft.png"
            alt="Microsoft"
          />
          <h3>Microsoft</h3>
          <p>
            As a trusted Microsoft partner, Teckonnect delivers modern workplace
            solutions, Azure cloud services, security, business applications,
            and data analytics. Our expertise ensures organizations fully
            leverage Microsoft technologies to drive productivity and
            innovation.
          </p>
          <span>Microsoft Gold Partner • MCSE • Azure Expert MSP</span>
        </motion.div>

        {/* AWS */}
        <motion.div
          style={{ x: x2, scale, opacity, filter: blurValue }}
          className={styles.card}
        >
          <img
            src="/icons/amazon.png"
            alt="AWS"
          />
          <h3>AWS</h3>
          <p>
            Through our AWS partnership, we provide scalable cloud solutions,
            managed services, migration support, and cost-optimized
            architectures. Our clients benefit from secure, flexible, and
            high-performing cloud environments.
          </p>
          <span>
            AWS Advanced Consulting Partner • Solutions Architect • MSP
          </span>
        </motion.div>

        {/* IBM */}
        <motion.div
          style={{ x: x3, scale, opacity, filter: blurValue }}
          className={styles.card}
        >
          <img
            src="/icons/ibm.png"
            alt="IBM"
          />
          <h3>IBM</h3>
          <p>
            Partnering with IBM allows Teckonnect to support enterprise-grade
            workloads, hybrid cloud strategies, and mission-critical
            applications. Our services ensure performance, compliance, and
            reliability for complex IT environments.
          </p>
          <span>IBM Gold Partner • Cloud Provider • Certified Specialist</span>
        </motion.div>
      </div>
    </section>
  );
}
