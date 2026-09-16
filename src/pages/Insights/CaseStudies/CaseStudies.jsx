// import { useEffect, useMemo, useState } from 'react';
import { useEffect, useMemo, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './CaseStudies.module.css';

const POSTS_PER_PAGE = 9;

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [filteredStudies, setFilteredStudies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  // pagination shift to top on page change

  const gridRef = useRef(null);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);

  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: gridRef.current.offsetTop - 120,
  //       behavior: 'smooth',
  //     });
  //   }, 100);
  // };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const response = await axios.get(
        `https://cms.teckonnect.com/wp-json/wp/v2/case-studies?_embed&per_page=100&t=${Date.now()}`,
      );

      setCaseStudies(response.data);
      setFilteredStudies(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const keyword = search.toLowerCase();

    const filtered = caseStudies.filter((item) => {
      const title = item.title.rendered.toLowerCase();

      const excerpt = item.acf?.short_description?.toLowerCase() || '';

      const tag = item.acf?.service_tags?.toLowerCase() || '';

      return (
        title.includes(keyword) ||
        excerpt.includes(keyword) ||
        tag.includes(keyword)
      );
    });

    setFilteredStudies(filtered);
    setCurrentPage(1);
  }, [search, caseStudies]);

  const totalPages = Math.ceil(filteredStudies.length / POSTS_PER_PAGE);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;

    return filteredStudies.slice(start, start + POSTS_PER_PAGE);
  }, [filteredStudies, currentPage]);
  useEffect(() => {
    requestAnimationFrame(() => {
      if (gridRef.current) {
        const top =
          gridRef.current.getBoundingClientRect().top + window.scrollY - 120;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    });
  }, [currentPage]);
  if (loading) {
    return <div className={styles.loader}>Loading Case Studies...</div>;
  }

  return (
    <section className={styles.caseStudies}>
      {/* ======================================
          HERO
      ======================================= */}

      <section className={styles.hero}>
        <img
          src="/images/Case studies/case study.png"
          alt="Case Studies"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <h1>Case Study</h1>
        </div>
      </section>

      {/* ======================================
          INTRO
      ======================================= */}

      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <h2>
            Every Business Challenge Tells a Story
            <br />
            Discover the Strategies, Solutions, and Measurable Results Behind
            Successful Transformations.
          </h2>
        </div>
      </section>

      {/* ======================================
          SEARCH
      ======================================= */}

      <section className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <label className={styles.searchLabel}>
            Explore Case Studies by Keyword
          </label>

          <input
            type="text"
            placeholder="Search by keyword, industry, challenge, technology, or solution..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />

          {/* <button className={styles.searchBtn}>Apply Filter</button> */}
        </div>
      </section>

      {/* ======================================
          GRID START
      ======================================= */}

      {/* <section className={styles.gridSection}> */}
      <section
        ref={gridRef}
        className={styles.gridSection}
      >
        <div className={styles.grid}>
          {currentData.length === 0 ? (
            <div className={styles.noResults}>No case studies found.</div>
          ) : (
            currentData.map((study) => {
              const image =
                study._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                '/images/default-case-study.jpg';

              const badge = study.acf?.service_tags || 'Technology';

              const description =
                study.acf?.short_description ||
                study.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, '') ||
                '';

              return (
                <article
                  key={study.id}
                  className={styles.card}
                >
                  {/* <Link
                    to={`/case-studies/${study.slug}`}
                    className={styles.cardLink}
                  > */}
                  <Link
                    to={`/insights/case-studies/${study.slug}`}
                    className={styles.cardLink}
                  >
                    <div className={styles.imageWrapper}>
                      <img
                        src={image}
                        alt={study.title.rendered}
                        className={styles.cardImage}
                      />

                      <span className={styles.badge}>{badge}</span>
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.date}>
                        Published:{' '}
                        {new Date(study.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>

                      <h3 className={styles.cardTitle}>
                        {study.title.rendered}
                      </h3>

                      <p className={styles.description}>{description}</p>
                      <span className={styles.readMore}>Read More</span>
                    </div>
                  </Link>
                </article>
              );
            })
          )}
        </div>
        {/* ======================================
    PAGINATION
====================================== */}

        {totalPages > 1 && (
          <div className={styles.paginationWrapper}>
            {/* LEFT */}
            <div className={styles.pagination}>
              <button
                className={styles.pageArrow}
                disabled={currentPage === 1}
                // onClick={() => setCurrentPage((prev) => prev - 1)}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                &#8249;
              </button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`${styles.pageBtn} ${
                    currentPage === index + 1 ? styles.activePage : ''
                  }`}
                  // onClick={() => setCurrentPage(index + 1)}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className={styles.pageArrow}
                disabled={currentPage === totalPages}
                // onClick={() => setCurrentPage((prev) => prev + 1)}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &#8250;
              </button>
            </div>

            {/* RIGHT */}
            <div className={styles.gotoPage}>
              <span>
                Go to <strong>page:</strong>
              </span>

              <select
                value={currentPage}
                // onChange={(e) => setCurrentPage(Number(e.target.value))}
                onChange={(e) => handlePageChange(Number(e.target.value))}
              >
                {Array.from({ length: totalPages }).map((_, index) => (
                  <option
                    key={index}
                    value={index + 1}
                  >
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}
