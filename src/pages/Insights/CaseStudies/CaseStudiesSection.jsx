import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './CaseStudiesSection.module.css';

export default function CaseStudiesSection() {
  const [caseStudies, setCaseStudies] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const response = await axios.get(
        `https://cms.teckonnect.com/wp-json/wp/v2/case-studies?_embed&per_page=12&t=${Date.now()}`,
      );

      setCaseStudies(response.data);
    } catch (error) {
      console.error('Error fetching case studies:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className={styles.loader}>Loading Case Studies...</div>;
  }

  return (
    <section className={styles.caseStudies}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <span className={styles.subHeading}>Our Impact</span>
          <h2 className={styles.heading}>in Actions</h2>
        </div>

        <div className={styles.grid}>
          {caseStudies.slice(0, 3).map((study) => {
            const image =
              study._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
              'https://via.placeholder.com/400x300';

            return (
              <div
                key={study.id}
                className={styles.card}
              >
                <img
                  src={image}
                  alt={study.title.rendered}
                  className={styles.image}
                />

                <div className={styles.overlay}></div>

                <div className={styles.cardContent}>
                  {/* <span className={styles.date}>
                    {new Date(study.date).toLocaleDateString()}
                  </span> */}

                  <h3 className={styles.title}>{study.title.rendered}</h3>

                  <Link
                    to={`/insights/case-studies/${study.slug}`}
                    className={styles.learnMore}
                  >
                    Learn More
                    <span className={styles.arrow}>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.buttonWrapper}>
          <Link
            to="/insights/case-studies"
            className={styles.viewMore}
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
