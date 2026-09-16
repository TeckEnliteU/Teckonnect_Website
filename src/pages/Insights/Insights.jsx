import React, { useState } from 'react';
import styles from './Insights.module.css';

import LatestInsightsSlider from './section/LatestInsightsSlider';
import InsightsFilters from './section/InsightsFilters';
import InsightsGrid from './section/InsightsGrid';

// import InsightsPagination from './sections/InsightsPagination';

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [page, setPage] = useState(1);

  return (
    <main className={styles.insightsPage}>
      <LatestInsightsSlider />

      <InsightsGrid
        selectedCategory={selectedCategory}
        page={page}
      />
      {/* <InsightsFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      /> */}

      {/* <InsightsFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <InsightsGrid
        selectedCategory={selectedCategory}
        page={page}
      />

      <InsightsPagination
        page={page}
        setPage={setPage}
      /> */}
    </main>
  );
};

export default Insights;
