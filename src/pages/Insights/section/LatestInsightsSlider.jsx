import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from '../Insights.module.css';

const LatestInsightsSlider = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetchFeaturedInsights();
  }, []);

  // const fetchFeaturedInsights = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://cms.teckonnect.com/wp-json/wp/v2/case-studies?_embed&per_page=5&t=${Date.now()}`,
  //     );

  //     setInsights(response.data);
  //   } catch (error) {
  //     console.error('Error fetching insights:', error);
  //   }
  // };
  const fetchFeaturedInsights = async () => {
    try {
      const [caseRes, blogRes] = await Promise.all([
        axios.get(
          `https://cms.teckonnect.com/wp-json/wp/v2/case-studies?_embed&per_page=5&t=${Date.now()}`,
        ),
        axios.get(
          `https://cms.teckonnect.com/wp-json/wp/v2/blogs?_embed&per_page=5&t=${Date.now()}`,
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

      const latest = [...caseStudies, ...blogs]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

      setInsights(latest);
    } catch (error) {
      console.error(error);
    }
  };
  if (!insights.length) return null;

  return (
    <section className={styles.latestInsightsSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Latest Insights</h2>

          <p>
            Discover the latest insights, thought leadership, and customer
            success stories from Teckonnect. Explore how organizations are
            leveraging technology to solve complex challenges and achieve
            measurable outcomes
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {insights.map((item) => {
            const image =
              item?._embedded?.['wp:featuredmedia']?.[0]?.source_url;

            return (
              // <SwiperSlide key={item.id}>
              //   <div className={styles.featuredCard}>
              //     <div className={styles.featuredContent}>
              //       {/* <span className={styles.category}>Case Study</span> */}
              //       <span className={styles.category}>{item.type}</span>
              //       {/* <h3>{item.title.rendered}</h3> */}
              //       <Link
              //         to={item.url}
              //         className={styles.titleLink}
              //       >
              //         <h3>{item.title.rendered}</h3>
              //       </Link>
              //       <div className={styles.meta}>
              //         {new Date(item.date).toLocaleDateString('en-US', {
              //           month: 'long',
              //           day: 'numeric',
              //           year: 'numeric',
              //         })}
              //       </div>
              //     </div>

              //     <div className={styles.featuredImage}>
              //       <img
              //         src={image}
              //         alt={item.title.rendered}
              //       />
              //     </div>
              //   </div>
              // </SwiperSlide>

              <SwiperSlide key={item.id}>
                <Link
                  to={item.url}
                  className={styles.featuredCardLink}
                >
                  <div className={styles.featuredCard}>
                    <div className={styles.featuredContent}>
                      <span className={styles.category}>{item.type}</span>

                      <h3>{item.title.rendered}</h3>

                      <div className={styles.meta}>
                        {new Date(item.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </div>

                    <div className={styles.featuredImage}>
                      <img
                        src={image}
                        alt={item.title.rendered}
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestInsightsSlider;
