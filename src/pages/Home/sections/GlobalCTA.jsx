'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../home.module.css';

function Globe() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <Sphere
      ref={ref}
      args={[2, 64, 64]}
    >
      <meshBasicMaterial
        wireframe
        color="#3b82f6"
      />
    </Sphere>
  );
}

function Particles() {
  const group = useRef();
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.elapsedTime * 0.1;
  });

  return (
    <group ref={group}>
      {Array.from({ length: 120 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 6,
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>
      ))}
    </group>
  );
}

const countries = [
  { name: 'UAE', flag: '/flags/uae.png', pos: [2.3, 0.8, 0] },
  { name: 'UK', flag: '/flags/uk.png', pos: [-2.3, 0.6, 0] },
  { name: 'India', flag: '/flags/india.png', pos: [0, -1.9, 0] },
  { name: 'Australia', flag: '/flags/australia.png', pos: [1.6, -0.9, 0] },
];

function Labels() {
  return countries.map((c, i) => (
    <Html
      key={i}
      position={c.pos}
      center
    >
      {/* <div className={styles.flagCard}> */}
      <div className={styles.globalctcFlagCard}>
        <img
          src={c.flag}
          alt={c.name}
        />
        <span>{c.name}</span>
      </div>
    </Html>
  ));
}

/* 🌊 FLOAT */
function Floating({ children }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.1;
  });
  return <group ref={ref}>{children}</group>;
}

export default function GlobalCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  // Framer Motion variants
  const sideVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <section className={styles.globalctcSection}>
      {/* LEFT */}
      <motion.div
        className={`${styles.globalctcSide} ${styles.globalctcLeft}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sideVariant}
      >
        <h2>Go Global, Grow Faster</h2>
        <p>
          Expand your business across continents. We connect your brand to
          global markets with seamless digital presence.
        </p>
      </motion.div>

      {/* CENTER */}
      <div className={styles.globalctcGlobeBox}>
        {show && (
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} />
            <Globe />
            <Particles />
            <Floating>
              <Labels />
            </Floating>
            <OrbitControls enableZoom={false} />
          </Canvas>
        )}
      </div>

      {/* RIGHT */}
      <motion.div
        className={`${styles.globalctcSide} ${styles.globalctcRight}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut' },
          },
        }}
      >
        <h2>Scale Without Limits</h2>
        <p>
          Whether entering new markets or growing globally, we help you scale
          faster with powerful digital solutions.
        </p>
      </motion.div>
    </section>
  );
}
