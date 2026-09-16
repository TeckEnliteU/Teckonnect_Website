import styles from '../NDIS.module.css';

export default function Hero() {
  return (
    <section className={styles.publicHero}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>NDIS SERVICES</span>

          <h1>
            Keep participants protected
            <span>Give your team their time back</span>
          </h1>

          <p>
            Teckonnect helps Australian disability support providers secure
            participant data, meet compliance expectations, and cut the admin
            load on support coordinators without needing an in house IT team..
          </p>
        </div>
      </div>
    </section>
  );
}
