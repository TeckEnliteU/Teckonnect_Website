'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const sectionAnim = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

export default function MotionSection({ children, className }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionAnim}
    >
      <motion.div variants={stagger}>{children}</motion.div>
    </motion.section>
  );
}
