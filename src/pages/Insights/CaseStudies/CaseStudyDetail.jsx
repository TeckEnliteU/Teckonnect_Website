import { useEffect, useRef, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './CaseStudyDetail.module.css';
import CaseStudyCTA from './CaseStudyCTA';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(null);
  const [relatedStudies, setRelatedStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    if (!caseStudy?.acf?.full_content) return;

    const temp = document.createElement('div');
    temp.innerHTML = caseStudy.acf.full_content;

    const h2s = [...temp.querySelectorAll('h3')];

    const extracted = h2s.map((h, index) => ({
      id: `section-${index}`,
      text: h.textContent,
    }));

    setHeadings(extracted);
  }, [caseStudy]);

  const [activeSection, setActiveSection] = useState('');
  const isClickScrolling = useRef(false);
  useEffect(() => {
    if (!headings.length) return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const offset = 140;
      let currentSection = headings[0]?.id || '';

      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);

        if (!element) return;

        if (element.getBoundingClientRect().top <= offset) {
          currentSection = heading.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);
  useEffect(() => {
    fetchCaseStudy();
  }, [slug]);

  const fetchCaseStudy = async () => {
    try {
      const response = await axios.get(
        `https://cms.teckonnect.com/wp-json/wp/v2/case-studies?slug=${slug}&_embed&t=${Date.now()}`,
      );

      const currentStudy = response.data[0];

      setCaseStudy(currentStudy);

      const currentService = currentStudy.acf?.service_tags || '';

      const relatedResponse = await axios.get(
        `https://cms.teckonnect.com/wp-json/wp/v2/case-studies?_embed&per_page=100&t=${Date.now()}`,
      );

      const related = relatedResponse.data.filter(
        (study) =>
          study.slug !== currentStudy.slug &&
          study.acf?.service_tags
            ?.toLowerCase()
            .includes(currentService.toLowerCase()),
      );

      setRelatedStudies(related.slice(0, 5));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (!caseStudy) {
    return <div className={styles.notFound}>Case Study Not Found</div>;
  }

  const image = caseStudy._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  const acf = caseStudy.acf || {};

  const serviceTag = acf.service_tags || 'Technology';
  return (
    <>
      <section className={styles.caseStudyPage}>
        {/* ================= HEADER ================= */}

        <div className={styles.headerContainer}>
          {/* <Link
            to="/insights/case-studies"
            className={styles.backLink}
          >
            <span className={styles.backIcon}>&#8249;</span>
            <span>Back</span>
          </Link> */}

          <button
            type="button"
            className={styles.backLink}
            onClick={() => navigate(-1)}
          >
            <span className={styles.backIcon}>&#8249;</span>
            <span>Back</span>
          </button>

          <div className={styles.category}>
            {acf.hero_badge || 'Microsoft: EA to CSP Migration'}
          </div>

          <h1 className={styles.title}>{caseStudy.title.rendered}</h1>

          <div className={styles.meta}>
            <span>
              {new Date(caseStudy.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>

            <span>-</span>

            <span>{acf.reading_time || '10:43 AM'}</span>
          </div>

          {/* <img
            src={image}
            alt={caseStudy.title.rendered}
            className={styles.featuredImage}
          /> */}

          <div className={styles.featuredImageWrapper}>
            <img
              src={image}
              alt={caseStudy.title.rendered}
              className={styles.featuredImage}
            />
          </div>
        </div>

        {/* ============== CONTENT ================= */}

        <div className={styles.contentWrapper}>
          <main className={styles.mainContent}>
            <div
              className={styles.articleContent}
              dangerouslySetInnerHTML={{
                __html: (acf.full_content || '').replace(
                  /<h3>/g,
                  (match, offset, string) => {
                    const before = string.substring(0, offset);
                    const count = (before.match(/<h3>/g) || []).length;

                    return `<h3 id="section-${count}">`;
                  },
                ),
              }}
            />
          </main>

          <aside className={styles.sidebar}>
            <div className={styles.toc}>
              {headings.map((item) => (
                // <a
                //   key={item.id}
                //   href={`#${item.id}`}
                //   className={
                //     activeSection === item.id
                //       ? styles.activeTocLink
                //       : styles.tocLink
                //   }
                // >
                //   {item.text}
                // </a>

                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={
                    activeSection === item.id
                      ? styles.activeTocLink
                      : styles.tocLink
                  }
                  onClick={(e) => {
                    e.preventDefault();

                    const element = document.getElementById(item.id);

                    if (!element) return;

                    const offset = 120;

                    const elementPosition =
                      element.getBoundingClientRect().top + window.scrollY;

                    window.scrollTo({
                      top: elementPosition - offset,
                      behavior: 'smooth',
                    });

                    setActiveSection(item.id);
                  }}
                >
                  {item.text}
                </a>
              ))}
            </div>
            <h3 className={styles.sidebarTitle}>
              More Case Studies related to <span>{serviceTag}</span>
            </h3>

            {relatedStudies.map((study) => {
              const sideImage =
                study._embedded?.['wp:featuredmedia']?.[0]?.source_url;

              return (
                <Link
                  key={study.id}
                  to={`/insights/case-studies/${study.slug}`}
                  className={styles.sideCard}
                >
                  <img
                    src={sideImage}
                    alt={study.title.rendered}
                    className={styles.sideImage}
                  />

                  <div className={styles.sideContent}>
                    <span className={styles.sideDate}>
                      Published:{' '}
                      {new Date(study.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>

                    <h4 className={styles.sideTitle}>{study.title.rendered}</h4>

                    <span className={styles.readMore}>Read More →</span>
                  </div>
                </Link>
              );
            })}

            <div className={styles.showMoreWrapper}>
              <Link
                to="/insights/case-studies"
                className={styles.showMoreBtn}
              >
                Show More →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <CaseStudyCTA
          title={
            acf.cta_title ||
            'Bring clarity and confidence to your IT environment'
          }
          description={
            acf.cta_description ||
            'Start a conversation to understand your current environment, risks, and opportunities—and explore a clearer way forward.'
          }
          buttonText={acf.cta_button_text || 'Book for Assesment'}
        />
      </section>
    </>
  );
}
