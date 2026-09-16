import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogCTA from './BlogCTA';
import styles from './BlogDetail.module.css';

export default function BlogDetail() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://cms.teckonnect.com/wp-json/wp/v2/blogs?slug=${slug}&_embed&t=${Date.now()}`,
      );

      if (response.data.length > 0) {
        setBlog(response.data[0]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className={styles.loader}>Loading Blog...</div>;
  }

  if (!blog) {
    return <div className={styles.loader}>Blog not found.</div>;
  }

  const image =
    blog._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    '/images/default-blog.jpg';

  return (
    <>
      <section className={styles.blogDetail}>
        {/* ===========================
          HERO
      ============================ */}

        <section className={styles.hero}>
          <img
            src={image}
            alt={blog.title.rendered}
            className={styles.heroImage}
          />

          <div className={styles.overlay}></div>

          <div className={styles.heroContent}>
            <h1>{blog.title.rendered}</h1>

            {/* <span className={styles.date}>
              {new Date(blog.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}{' '}
              ·{' '}
              {new Date(blog.date).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
              })}
            </span> */}
            <span className={styles.date}>
              {new Date(blog.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </section>

        {/* ===========================
          ARTICLE
      ============================ */}

        <section className={styles.articleSection}>
          <div className={styles.container}>
            {' '}
            <article className={styles.article}>
              {blog.acf?.short_description && (
                <p className={styles.shortDescription}>
                  {blog.acf.short_description}
                </p>
              )}

              <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{
                  __html:
                    blog.acf?.full_content || blog.content?.rendered || '',
                }}
              />
            </article>
          </div>
        </section>
      </section>

      <section className={styles.ctaSection}>
        <BlogCTA
          title={
            blog.acf?.cta_title ||
            'Ready to Accelerate Your Digital Transformation?'
          }
          description={
            blog.acf?.cta_description ||
            'Whether you are planning a cloud migration, modernizing your infrastructure, or exploring innovative technology solutions, our experts are here to help.'
          }
          buttonText={blog.acf?.cta_button_text || 'Contact Our Experts'}
        />
      </section>
    </>
  );
}
