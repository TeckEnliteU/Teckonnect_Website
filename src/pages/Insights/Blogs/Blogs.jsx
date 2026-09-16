// import { useEffect, useMemo, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import styles from './Blogs.module.css';

// const POSTS_PER_PAGE = 9;

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [filteredBlogs, setFilteredBlogs] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState('');

//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get(
//         `https://cms.teckonnect.com/wp-json/wp/v2/blogs?_embed&per_page=100&t=${Date.now()}`,
//       );

//       setBlogs(response.data);
//       setFilteredBlogs(response.data);
//     } catch (err) {
//       console.error('Error fetching blogs:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const keyword = search.toLowerCase();

//     const filtered = blogs.filter((item) => {
//       const title = item.title.rendered.toLowerCase();

//       const excerpt = item.acf?.short_description?.toLowerCase() || '';

//       const category = item.acf?.blog_category?.toLowerCase() || '';

//       return (
//         title.includes(keyword) ||
//         excerpt.includes(keyword) ||
//         category.includes(keyword)
//       );
//     });

//     setFilteredBlogs(filtered);
//     setCurrentPage(1);
//   }, [search, blogs]);

//   const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);

//   const currentData = useMemo(() => {
//     const start = (currentPage - 1) * POSTS_PER_PAGE;

//     return filteredBlogs.slice(start, start + POSTS_PER_PAGE);
//   }, [filteredBlogs, currentPage]);

//   if (loading) {
//     return <div className={styles.loader}>Loading Blogs...</div>;
//   }

//   return (
//     <section className={styles.blogs}>
//       {/* ======================================
//           HERO
//       ======================================= */}

//       <section className={styles.hero}>
//         <img
//           src="/images/blogs/blog-hero.png"
//           alt="Blogs"
//           className={styles.heroImage}
//         />

//         <div className={styles.heroOverlay}></div>

//         <div className={styles.heroContent}>
//           <h1>Blogs</h1>
//         </div>
//       </section>

//       {/* ======================================
//           INTRO
//       ======================================= */}

//       <section className={styles.introSection}>
//         <div className={styles.introContainer}>
//           <h2>
//             Insights, Trends & Expert Perspectives
//             <br />
//             Explore technology trends, practical guidance, industry insights,
//             and expert opinions that help businesses innovate and grow.
//           </h2>
//         </div>
//       </section>

//       {/* ======================================
//           SEARCH
//       ======================================= */}

//       <section className={styles.searchSection}>
//         <div className={styles.searchContainer}>
//           <label className={styles.searchLabel}>Explore Blogs by Keyword</label>

//           <input
//             type="text"
//             placeholder="Search by keyword, topic, technology, industry..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className={styles.searchInput}
//           />

//           <button className={styles.searchBtn}>Apply Filter</button>
//         </div>
//       </section>

//       {/* ======================================
//           GRID START
//       ======================================= */}

//       <section className={styles.gridSection}>
//         <div className={styles.grid}>
//           {currentData.length === 0 ? (
//             <div className={styles.noResults}>No blogs found.</div>
//           ) : (
//             currentData.map((blog) => {
//               const image =
//                 blog._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
//                 '/images/default-blog.jpg';

//               const badge = blog.acf?.blog_category || 'Technology';

//               const description =
//                 blog.acf?.short_description ||
//                 blog.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, '') ||
//                 '';

//               return (
//                 <article
//                   key={blog.id}
//                   className={styles.card}
//                 >
//                   <Link
//                     to={`/insights/blogs/${blog.slug}`}
//                     className={styles.cardLink}
//                   >
//                     <div className={styles.imageWrapper}>
//                       <img
//                         src={image}
//                         alt={blog.title.rendered}
//                         className={styles.cardImage}
//                       />

//                       <span className={styles.badge}>{badge}</span>
//                     </div>

//                     <div className={styles.cardBody}>
//                       <span className={styles.date}>
//                         Published:{' '}
//                         {new Date(blog.date).toLocaleDateString('en-US', {
//                           month: 'long',
//                           day: 'numeric',
//                           year: 'numeric',
//                         })}
//                       </span>

//                       <h3 className={styles.cardTitle}>
//                         {blog.title.rendered}
//                       </h3>

//                       <p className={styles.description}>{description}</p>

//                       <span className={styles.readMore}>Read More</span>
//                     </div>
//                   </Link>
//                 </article>
//               );
//             })
//           )}
//         </div>

//         {/* ======================================
//             PAGINATION
//         ======================================= */}

//         {totalPages > 1 && (
//           <div className={styles.paginationWrapper}>
//             {' '}
//             {/* LEFT */}
//             <div className={styles.pagination}>
//               <button
//                 className={styles.pageArrow}
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage((prev) => prev - 1)}
//               >
//                 &#8249;
//               </button>

//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <button
//                   key={index}
//                   className={`${styles.pageBtn} ${
//                     currentPage === index + 1 ? styles.activePage : ''
//                   }`}
//                   onClick={() => setCurrentPage(index + 1)}
//                 >
//                   {index + 1}
//                 </button>
//               ))}

//               <button
//                 className={styles.pageArrow}
//                 disabled={currentPage === totalPages}
//                 onClick={() => setCurrentPage((prev) => prev + 1)}
//               >
//                 &#8250;
//               </button>
//             </div>
//             {/* RIGHT */}
//             <div className={styles.gotoPage}>
//               <span>
//                 Go to <strong>page:</strong>
//               </span>

//               <select
//                 value={currentPage}
//                 onChange={(e) => setCurrentPage(Number(e.target.value))}
//               >
//                 {Array.from({ length: totalPages }).map((_, index) => (
//                   <option
//                     key={index}
//                     value={index + 1}
//                   >
//                     {index + 1}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         )}
//       </section>
//     </section>
//   );
// }
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Blogs.module.css';

const POSTS_PER_PAGE = 9;

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `https://cms.teckonnect.com/wp-json/wp/v2/blogs?_embed&per_page=100&t=${Date.now()}`,
      );

      setBlogs(response.data);
      setFilteredBlogs(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const keyword = search.toLowerCase();

    const filtered = blogs.filter((item) => {
      const title = item.title.rendered.toLowerCase();

      const description = item.acf?.short_description?.toLowerCase() || '';

      const category = item.acf?.blog_category?.toLowerCase() || '';

      return (
        title.includes(keyword) ||
        description.includes(keyword) ||
        category.includes(keyword)
      );
    });

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [search, blogs]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;

    return filteredBlogs.slice(start, start + POSTS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  if (loading) {
    return <div className={styles.loader}>Loading Blogs...</div>;
  }

  return (
    <section className={styles.blogs}>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <img
          src="/images/blogs/bloghero.jpg"
          alt="Blogs"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <h1>Blogs</h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <h2>
            Helping organisations make smartertechnology cloud, security, and
            <br />
            business transformation decisions.cloud, security, and business
            transformation decisions.
          </h2>
        </div>
      </section>

      {/* ================= SEARCH ================= */}

      <section className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <label className={styles.searchLabel}>Explore Blogs by Keyword</label>

          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by keyword, category, technology, topic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* <button className={styles.searchBtn}>Apply Filter</button> */}
        </div>
      </section>

      {/* ================= GRID ================= */}

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {currentData.length === 0 ? (
            <div className={styles.noResults}>No blogs found.</div>
          ) : (
            currentData.map((blog) => {
              const image =
                blog._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                '/images/default-blog.jpg';

              const badge = blog.acf?.blog_category || 'Technology';

              const description =
                blog.acf?.short_description ||
                blog.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, '') ||
                '';
              return (
                <article
                  key={blog.id}
                  className={styles.card}
                >
                  <Link
                    to={`/insights/blogs/${blog.slug}`}
                    className={styles.cardLink}
                  >
                    <div className={styles.imageWrapper}>
                      <img
                        src={image}
                        alt={blog.title.rendered}
                        className={styles.cardImage}
                      />

                      <span className={styles.badge}>{badge}</span>
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.date}>
                        Published:{' '}
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>

                      <h3 className={styles.cardTitle}>
                        {blog.title.rendered}
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

        {/* ================= PAGINATION ================= */}

        {totalPages > 1 && (
          <div className={styles.paginationWrapper}>
            <div className={styles.pagination}>
              <button
                className={styles.pageArrow}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                &#8249;
              </button>

              {Array.from({
                length: totalPages,
              }).map((_, index) => (
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
                className={styles.pageArrow}
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
                {Array.from({
                  length: totalPages,
                }).map((_, index) => (
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
