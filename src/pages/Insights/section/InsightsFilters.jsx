import styles from '../Insights.module.css';

const filters = ['Case Study', 'Blog', 'Newsletter', 'Article', 'White Paper'];

const InsightsFilters = ({
  selectedCategory,
  setSelectedCategory,
  totalRecords = 100,
}) => {
  return (
    <section className={styles.insightsSection}>
      <h2 className={styles.insightsTitle}>All Insights</h2>

      <div className={styles.filterWrapper}>
        {filters.map((item) => (
          <button
            key={item}
            className={`${styles.filterBtn} ${
              selectedCategory === item ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.recordCount}>
        <span>{totalRecords}</span> Record founds
      </div>
    </section>
  );
};

export default InsightsFilters;
