import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../Insights.module.css';

// const filters = ['Case Study', 'Blog', 'News', 'Article', 'White Paper'];
const filters = ['Case Study', 'Blog'];
const InsightsGrid = () => {
  const [selectedFilter, setSelectedFilter] = useState('Case Study');

  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const gridSectionRef = useRef(null);
  const cardsPerPage = 9;

  useEffect(() => {
    fetchInsights();
  }, []);

  // const fetchInsights = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://cms.teckonnect.com/wp-json/wp/v2/case-studies?_embed&per_page=100&t=${Date.now()}`,
  //     );

  //     const caseStudies = response.data.map((item) => ({
  //       ...item,
  //       type: 'Case Study',
  //     }));

  //     setInsights(caseStudies);
  //   } catch (error) {
  //     console.error('Error fetching insights:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchInsights = async () => {
    try {
      // const [caseRes, blogRes] = await Promise.all([
      //   axios.get(
      //     `https://cms.teckonnect.com/wp-json/wp/v2/case-studies?_embed&per_page=100&t=${Date.now()}`,
      //   ),
      //   axios.get(
      //     `https://cms.teckonnect.com/wp-json/wp/v2/blogs?_embed&per_page=100&t=${Date.now()}`,
      //   ),
      // ]);

      const [caseRes, blogRes] = await Promise.all([
        axios.get(
          `https://cms.teckonnect.com/wp-json/wp/v2/case-studies?_embed&per_page=20&t=${Date.now()}`,
        ),
        axios.get(
          `https://cms.teckonnect.com/wp-json/wp/v2/blogs?_embed&per_page=20&t=${Date.now()}`,
        ),
      ]);

      const caseStudies = caseRes.data.map((item) => ({
        ...item,
        type: 'Case Study',
        url: `/insights/case-studies/${item.slug}`,
      }));

      const blogs = blogRes.data.map((item) => ({
        ...item,
        type: 'Blog',
        url: `/insights/blogs/${item.slug}`,
      }));

      const allInsights = [...caseStudies, ...blogs].sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );

      setInsights(allInsights);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //   const filteredInsights = insights.filter(
  //     (item) => item.type === selectedFilter,
  //   );
  const filteredInsights = insights.filter(
    (item) => item.type === selectedFilter,
  );

  const totalPages = Math.ceil(filteredInsights.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = filteredInsights.slice(
    indexOfFirstCard,
    indexOfLastCard,
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      if (gridSectionRef.current) {
        const top =
          gridSectionRef.current.getBoundingClientRect().top +
          window.scrollY -
          120;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    });
  }, [currentPage]);
  if (loading) {
    return <div className={styles.loader}>Loading Insights...</div>;
  }

  return (
    <section
      ref={gridSectionRef}
      className={styles.insightsGridSection}
    >
      <div className={styles.insightsHeader}>
        <h2>All Insights</h2>

        <div className={styles.filterWrapper}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${
                selectedFilter === filter ? styles.activeFilter : ''
              }`}
              //   onClick={() => setSelectedFilter(filter)}
              onClick={() => {
                setSelectedFilter(filter);
                setCurrentPage(1);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.divider}></div>

        <div className={styles.recordCount}>
          <span>{filteredInsights.length}</span> Records Found
        </div>
      </div>

      <div className={styles.grid}>
        {/* {filteredInsights.map((item) => { */}
        {currentCards.map((item) => {
          const image =
            item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
            '/images/default-insight.jpg';

          return (
            <div
              key={item.id}
              className={styles.card}
            >
              <img
                src={image}
                alt={item.title.rendered}
                className={styles.image}
              />

              <div className={styles.overlay}></div>

              <div className={styles.badge}>{item.type}</div>

              <div className={styles.cardContent}>
                <h3>{item.title.rendered}</h3>

                {/* <Link to={`/insights/case-studies/${item.slug}`}>
                  Read More →
                </Link> */}
                <Link to={item.url}>Read More →</Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.paginationWrapper}>
        <div className={styles.pagination}>
          <button
            className={styles.arrowBtn}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            &#8249;
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${styles.pageBtn} ${
                currentPage === index + 1 ? styles.activePage : ''
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={styles.arrowBtn}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            &#8250;
          </button>
        </div>

        <div className={styles.gotoPage}>
          <span>
            Go to <strong>page:</strong>
          </span>

          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          >
            {Array.from({ length: totalPages }, (_, index) => (
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
    </section>
  );
};

export default InsightsGrid;
