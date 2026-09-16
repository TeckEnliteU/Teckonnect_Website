import { useEffect, useRef } from 'react';
import styles from '../contact.module.css';

export default function ContactInfo() {
  const sectionRef = useRef(null);

  const offices = [
    {
      region: 'Australia',
      locations: [
        {
          name: 'NSW',
          address: '1 Denison St, North Sydney NSW 2060, Australia',
          map: 'https://www.google.com/maps/place/1+Denison+St,+North+Sydney+NSW+2060,+Australia/@-33.8380959,151.2055504,17z/data=!3m2!4b1!5s0x6b12af179a6885e1:0x446947b8c3e5c0e7!4m6!3m5!1s0x6b12aef29b26a2c1:0x2362e906542ac705!8m2!3d-33.8380959!4d151.2081307!16s%2Fg%2F11ywpcnzk7?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
          // image: '/images/country/sydney.jpeg',
          image: '/images/country/sydney.webp',
        },
        {
          name: 'Queensland',
          address: 'Level 1, 470 St Pauls Terrace, QLD 4006',
          map: 'https://www.google.com/maps/place/Lvl+1%2F470+St+Pauls+Ter,+Fortitude+Valley+QLD+4006,+Australia/@-27.4536523,153.0310444,17z/data=!3m1!4b1!4m6!3m5!1s0x6b9159edec6d7e99:0x2d86180db355853f!8m2!3d-27.4536523!4d153.0336247!16s%2Fg%2F11m6cdqx8r?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
          // image: '/images/country/queensland.jpeg',
          image: '/images/country/queensland.webp',
        },
        {
          name: 'Western Australia',
          address:
            'Level 29, 221 St Georges Terrace, 6000 Perth, Western Australia, Australia',
          map: 'https://www.google.com/maps/place/221+St+Georges+Terrace,+Perth+WA+6000,+Australia/@-31.9536672,115.8495942,17z/data=!3m1!4b1!4m6!3m5!1s0x2a32bad4cb347e49:0xe3dc311ae22abb8b!8m2!3d-31.9536672!4d115.8521745!16s%2Fg%2F11f0kvyvq9?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
          x: '68%',
          y: '72%',
          // image: '/images/country/western australia.jpg',
          image: '/images/country/western australia.webp',
        },
        {
          name: 'NT',
          address: 'Level 1, 1 Palmerston Circuit, Palmerston City NT 0830',
          map: 'https://www.google.com/maps/place/Shop+1%2F1+Palmerston+Cct,+Palmerston+City+NT+0830,+Australia/@-12.4784536,130.982467,17z/data=!3m1!4b1!4m6!3m5!1s0x2cc0bd313f84a779:0x31933815014ab5fd!8m2!3d-12.4784536!4d130.9850473!16s%2Fg%2F11kqwx1054?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
          // image: '/images/country/nt.jpg',
          image: '/images/country/NT.webp',
        },
        {
          name: 'Melbourne',
          address: 'L19 180 Lonsdale St, Melbourne Vic 3000',
          map: 'https://www.google.com/maps/place/L19%2F180+Lonsdale+St,+Melbourne+VIC+3000,+Australia/@-37.8106794,144.9640206,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad642cbd8f2c445:0x9732846bd3065d77!8m2!3d-37.8106794!4d144.9666009!16s%2Fg%2F11qpkj66w6?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
          x: '80%',
          y: '75%',
          // image: '/images/country/Victoria.jpeg',
          image: '/images/country/Victoria.webp',
        },
        {
          name: 'Ballarat',
          address:
            'Unit 82, Level 1, 17 Armstrong Street South, Ballarat Central, 3350 Victoria',
          map: 'https://www.google.com/maps/place/Armstrong+House,+Unit+82,+Level+1%2F17+Armstrong+St+S,+Ballarat+Central+VIC+3350,+Australia/@-37.5628743,143.8537409,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad144f7627f7ed7:0x41b26c29c1e8936d!8m2!3d-37.5628743!4d143.8563212?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
          // image: '/images/country/ballartat.jpg',
          image: '/images/country/ballartat.webp',
        },
        {
          name: 'ACT',
          address: 'Levels 4 & 5, 15 Moore Street, Canberra ACT 2601',
          map: 'https://www.google.com/maps/search/Levels+4+%26+5,+15+Moore+Street,+Canberra+ACT+2601/@-35.2761519,149.1251926,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
          x: '81%',
          y: '73%',
          // image: '/images/country/canberra.jpg',
          image: '/images/country/canberra.webp',
        },
        {
          name: 'Adelaide',
          address: 'Level 3, 169 Fullarton Road, Dulwich, Adelaide, SA 5065',
          map: 'https://www.google.com/maps/place/3%2F169+Fullarton+Rd,+Dulwich+SA+5065,+Australia/@-34.9347055,138.6219295,17z/data=!3m1!4b1!4m6!3m5!1s0x6ab0ceb0d9da8b69:0xa521ddedb81f4659!8m2!3d-34.9347055!4d138.6245098!16s%2Fg%2F11qpkm1h0l?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
          x: '77%',
          y: '74%',
          // image: '/images/country/Adelaide.jpg',
          image: '/images/country/Adelaide.webp',
        },

        {
          name: 'Gold Coast',
          address: '2/14 Edgewater Court, Robina 4226',
          map: 'https://www.google.com/maps/place/Suite+78%2F14+Edgewater+Ct,+Robina+QLD+4226,+Australia/@-28.0768356,153.3784452,17z/data=!3m1!4b1!4m6!3m5!1s0x6b911cb771a52819:0x3cdb2b74aee7c16!8m2!3d-28.0768404!4d153.3810201!16s%2Fg%2F11xflp1m_q?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D',

          // image: '/images/country/Gold coast.jpg',
          image: '/images/country/Gold coast.webp',
        },
      ],
    },
    {
      region: 'United Kingdom',
      locations: [
        {
          name: 'London',
          address: '167-169 Great Portland Street, London W1W 5PF',
          map: 'https://www.google.com/maps/place/167+169+Great+Portland+St,+London+W1W+5PF,+UK/@51.5215551,-0.1462164,17z/data=!3m1!4b1!4m6!3m5!1s0x48761ad65de83cb7:0x654d1aa971b4d814!8m2!3d51.5215551!4d-0.1436361!16s%2Fg%2F11x68xxwq_?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
          // image: '/images/country/UK.jpg',
          image: '/images/country/UK.webp',
        },
      ],
    },
    {
      region: 'India',
      locations: [
        {
          name: 'Chennai',
          address:
            'New No.44/165/A, VGK Akriti, Munusamy Nagar, 2nd Street, Medavakkam, Chennai - 600 100',
          map: 'https://www.google.com/maps/place/VGK+AKRITI/@12.9161505,80.1886419,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525dc595a3ae8f:0x45059518147ebafa!8m2!3d12.9161505!4d80.1912222!16s%2Fg%2F11hhs3b2bv?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
          x: '62%',
          y: '50%',
          // image: '/images/country/india.jpg',
          image: '/images/country/india.webp',
        },
      ],
    },
  ];

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.show);
          }, i * 120);
        }
      });
    });

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      className={styles.addressSection}
      ref={sectionRef}
    >
      {/* HEADER */}
      <div className={`${styles.addressHeader} ${styles.reveal}`}>
        <h2 className={styles.addressh2}>Where We Operate</h2>
        <p>
          Our multi‑location presence supports seamless service delivery, close
          client
          <br />
          engagement, and consistent quality across all projects
        </p>
      </div>

      {/* ===== AUSTRALIA ===== */}
      <div className={styles.addressCountrySection}>
        <h4 className={styles.countryTitle}>TECKONNECT-AUSTRALIA</h4>

        <div className={styles.addressGrid}>
          {offices[0].locations.map((loc, i) => (
            <div
              key={i}
              className={`${styles.addressCard} ${styles.reveal}`}
              // onClick={() => window.open(loc.map, '_blank')}

              onClick={() => {
                const selectedText = window.getSelection()?.toString().trim();

                if (selectedText) return; // Allow copy/select without opening map

                window.open(loc.map, '_blank', 'noopener,noreferrer');
              }}
            >
              <div className={styles.addressImage}>
                <img
                  src={loc.image}
                  alt={loc.name}
                  // loading="lazy"
                  // decoding="async"
                  // fetchPriority="high"
                />
              </div>

              <div className={styles.addressInfo}>
                <h3>{loc.name}</h3>
                <p>{loc.address}</p>
              </div>

              <span className={styles.addressBottomLine}></span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== INDIA ===== */}

      <div className={styles.addressCountryWrapper}>
        {/* INDIA */}
        {offices[2].locations.map((loc, i) => (
          <div
            key={i}
            className={styles.addressWideCard}
            onClick={() => {
              const selectedText = window.getSelection()?.toString().trim();

              if (selectedText) return;

              window.open(loc.map, '_blank', 'noopener,noreferrer');
            }}
          >
            <div className={styles.addressWideImage}>
              <img
                src={loc.image}
                alt={loc.name}
              />
            </div>

            <div className={styles.addressWideInfo}>
              <span className={styles.countryLabel}>TECKONNECT-INDIA</span>

              <h3>{loc.name}</h3>

              <p>{loc.address}</p>
            </div>
          </div>
        ))}

        {/* UK */}
        {offices[1].locations.map((loc, i) => (
          <div
            key={i}
            className={styles.addressWideCard}
            onClick={() => {
              const selectedText = window.getSelection()?.toString().trim();

              if (selectedText) return;

              window.open(loc.map, '_blank', 'noopener,noreferrer');
            }}
          >
            <div className={styles.addressWideImage}>
              <img
                src={loc.image}
                alt={loc.name}
              />
            </div>

            <div className={styles.addressWideInfo}>
              <span className={styles.countryLabel}>TECKONNECT-UK</span>

              <h3>{loc.name}</h3>

              <p>{loc.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
