'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
import { useState, useEffect } from 'react';
import styles from '../Partners.module.css';

/* ========================= */
/* CARD */
/* ========================= */

// const Card = ({ item }) => {
const Card = ({ item, setSelectedPartner }) => {
  return (
    <div className={styles.partnersListCard}>
      <div className={styles.partnersListImgWrap}>
        <img
          src={item.img}
          alt={item.name}
          className={styles.partnersListImg}
        />
      </div>

      <h4 className={styles.partnersListTitle}>{item.name}</h4>

      <p className={styles.partnersListDesc}>{item.desc}</p>

      {/* <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.partnersListLink}
      >
        Read More →
      </a> */}

      <a
        href="#"
        className={styles.partnersListLink}
        onClick={(e) => {
          e.preventDefault();
          setSelectedPartner(item);
        }}
      >
        Read More →
      </a>
    </div>
  );
};

/* ========================= */
/* MAIN */
/* ========================= */

export default function PartnersList() {
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedPartner(null);
      }
    };

    window.addEventListener('keydown', handleEsc);

    // LOCK BODY SCROLL
    if (selectedPartner) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);

      document.body.style.overflow = 'auto';
    };
  }, [selectedPartner]);

  const partners = [
    {
      name: 'Crayon',
      // img: '/partners/crayon.svg',
      img: `${import.meta.env.BASE_URL}log-partners/crayon.svg`,

      link: 'https://www.crayon.com',

      desc: 'A strategic partner helping us simplify software licensing and cloud economics. Together, we enable smarter decisions across cloud, cost optimisation, and governance.',
      popupImg: `${import.meta.env.BASE_URL}logos/Collab Logo/crayon &  tec.svg`,
      bonding:
        'Crayon is a cloud and software licensing partner that helps organisations optimise their licensing strategies and transition to modern consumption models, particularly within the Microsoft ecosystem. It simplifies complex licensing scenarios such as EA to CSP transitions, enabling faster, low-disruption migrations with improved flexibility and cost control. With a strong focus on subscription lifecycle management, Crayon supports organisations in aligning licensing with business needs while improving cost visibility and governance. Its expertise ensures businesses can scale cloud adoption efficiently without operational disruption. With Teckonnect: We help customers define the right licensing strategy, manage onboarding and renewals, and ensure licensing models are aligned with business goals, budget, and long-term scalability',
    },
    {
      name: 'TechData',
      // img: '/partners/TechData.svg',
      img: `${import.meta.env.BASE_URL}log-partners/TechData.svg`,

      link: 'https://www.techdata.com/in',
      desc: 'Our distribution partner supporting scalable technology delivery and reach. They help strengthen our ability to deliver cloud and software solutions efficiently.',
      popupImg: '/logos/Collab Logo/tec & techdata.svg',
      bonding:
        'Tech Data, part of TD SYNNEX, is a global IT distributor and solutions aggregator that provides access to a wide portfolio of infrastructure, cloud, and software solutions. It enables organisations to procure and manage technology efficiently through structured distribution and enablement capabilities. With platforms like StreamOne, Tech Data simplifies cloud provisioning, billing, and lifecycle management, allowing organisations to manage multi-cloud environments with greater control and automation. With Teckonnect: We streamline procurement, manage multi-vendor sourcing, and connect purchasing with deployment and support, ensuring seamless delivery from acquisition to implementation. ',
    },
    {
      name: 'Redington',
      // img: '/partners/Redington.svg',
      img: `${import.meta.env.BASE_URL}log-partners/Redington.svg`,

      link: 'https://www.redingtongroup.com',

      desc: 'A key ecosystem partner extending access to global technology platforms. Redington supports our ability to serve diverse markets with speed and scale.',
      popupImg: '/logos/Collab Logo/tec & redington.svg',
      bonding:
        'Redington is a global technology solutions provider that connects organisations with a wide ecosystem of enterprise technologies across IT, cloud, and digital solutions. It plays a key role in enabling faster technology adoption by improving supply chain efficiency and reducing operational complexity. With strong market presence and extensive vendor partnerships, Redington ensures scalable procurement and reliable fulfilment across industries and geographies, supporting organisations in accessing the right technologies at the right time. With Teckonnect: We align procurement with project execution, manage lifecycle coordination, and ensure seamless delivery, helping customers achieve efficiency, scalability, and governance. ',
    },
    {
      name: 'Ingram Micro',
      // img: '/partners/Ingram MIcro.svg',
      img: `${import.meta.env.BASE_URL}log-partners/Ingram MIcro.svg`,

      link: 'https://www.ingrammicro.com',
      desc: 'A global partner supporting software distribution and lifecycle management. Ingram Micro enables us to simplify licensing and subscription experiences.',
      popupImg: '/logos/Collab Logo/tec & ingram.svg',
      bonding:
        'Ingram Micro is a global technology ecosystem provider that supports organisations with procurement, cloud distribution, and digital platform innovation. It enables efficient access to hardware, software, and cloud services through a strong global partner network. Its Xvantage platform enhances the procurement experience by automating workflows such as quoting, ordering, and tracking, while providing real-time insights for better decision-making and operational efficiency. With Teckonnect: We consolidate sourcing, manage subscriptions, and ensure that procurement is tightly aligned with implementation and ongoing support for consistent business outcomes',
    },
    {
      name: 'Acronis',
      // img: '/partners/acronis.svg',
      img: `${import.meta.env.BASE_URL}log-partners/acronis.svg`,

      link: 'https://www.acronis.com',
      desc: 'A technology partner strengthening cyber protection and data resilience. We work together to help organisations protect, recover, and stay secure.',
      popupImg: '/logos/Collab Logo/Tec & Acro Black.svg',
      bonding:
        'Acronis delivers integrated cyber protection by combining backup, disaster recovery, cybersecurity, and endpoint management into a unified platform. It helps organisations protect workloads across physical, virtual, and cloud environments with simplified operations. Its approach reduces complexity by unifying multiple protection capabilities, enabling organisations to maintain data security, minimise downtime, and improve resilience against cyber threats. With Teckonnect: We design, deploy, and manage Acronis solutions to ensure strong data protection, compliance readiness, and continuous monitoring for business continuity. ',
    },
    {
      name: 'Meier Business Systems',
      // img: '/partners/mbs.svg',
      img: `${import.meta.env.BASE_URL}log-partners/mbs.svg`,

      link: 'https://mbs.net.au',
      desc: 'Our IBM-focused partner supporting enterprise-grade platforms and solutions. Together, we deliver trusted IBM software and data-driven capabilities.',
      popupImg: '/logos/Collab Logo/teckonect & MBS.svg',
      bonding:
        'MBS is a value-added distributor specialising in enterprise software ecosystems, particularly IBM and Rocket Software solutions. It supports organisations through advisory, enablement, and technical expertise for enterprise IT environments. With decades of experience, MBS helps organisations modernise systems, optimise enterprise platforms, and maintain operational continuity through structured support and vendor alignment. With Teckonnect: We translate enterprise solution sourcing into successful implementation, ensuring seamless integration, adoption, and continuous operational support. ',
    },
    {
      name: 'Briskinfosec',
      // img: '/partners/BriskInfosec.svg',
      img: `${import.meta.env.BASE_URL}log-partners/BriskInfosec.svg`,

      link: 'https://www.briskinfosec.com',
      desc: 'A cybersecurity partner enhancing our security and risk management capabilities. Together, we help organisations strengthen their cyber resilience.',
      popupImg: '/logos/Collab Logo/brisk.png',
      bonding:
        'Briskinfosec is a CREST-accredited and CERT-In empanelled cybersecurity firm that helps organisations build strong digital defenses and achieve compliance with global standards. It specialises in offensive security, managed detection, and regulatory frameworks. With experience across 580+ clients in 25+ countries, Briskinfosec delivers services including VAPT, 24/7 SOC, threat detection, red teaming, and compliance consulting aligned to ISO, SOC 2, PCI DSS, GDPR, and DPDPA. With Teckonnect: We align assessments, remediation, and governance to deliver a proactive cybersecurity framework, ensuring continuous monitoring, compliance readiness, and long-term resilience. ',
    },
    {
      name: 'Future',
      // img: '/partners/FCC.svg',
      img: `${import.meta.env.BASE_URL}log-partners/FCC.svg`,

      link: 'https://www.fcc-kuwait.com/',
      desc: 'An innovation-focused partner supporting digital transformation initiatives. They complement our services with forward-looking, technology-driven solutions.',
      popupImg: '/logos/Collab Logo/Tec & Future.svg',
      bonding:
        'Future Communications Company (FCC) is a regional technology provider delivering enterprise IT solutions and infrastructure services across public and private sectors. It supports organisations with scalable and reliable technology solutions aligned to regional requirements. With expertise in large-scale delivery and sector-specific solutions, FCC helps organisations implement and maintain critical infrastructure systems efficiently and securely. With Teckonnect: We extend delivery capabilities by aligning solution planning, implementation, and governance to local requirements, ensuring seamless and consistent execution. ',
    },
    {
      name: 'Pax8',
      // img: '/partners/pax8.svg',
      img: `${import.meta.env.BASE_URL}log-partners/pax8.svg`,

      link: 'https://www.pax8.com',
      desc: 'A specialist partner supporting complementary technology services. Together, we extend our capabilities to deliver complete, integrated outcomes.',
      popupImg: '/logos/Collab Logo/tec & Pax.svg',
      bonding:
        'Pax8 is a cloud commerce marketplace that enables organisations to access, manage, and scale cloud solutions through a unified platform. It simplifies cloud procurement and supports partners in building solution-based offerings. Its marketplace-driven model provides flexibility in provisioning, billing, and lifecycle management while enabling organisations to adopt cloud solutions faster and more efficiently. With Teckonnect: We curate cloud solutions, manage subscriptions, and ensure adoption is aligned with business needs, delivering complete lifecycle support and measurable outcomes. ',
    },
  ];

  const implementationPartners = [
    {
      name: 'SigniFlow',
      // img: '/partners/SigniFlow.svg',
      img: `${import.meta.env.BASE_URL}log-partners/SigniFlow.svg`,

      link: 'https://www.signiflow.com',
      desc: 'A digital signing and workflow partner enabling secure, compliant document processes. Together, we help organisations simplify approvals, reduce manual effort, and maintain trust.',
      popupImg: '/logos/Collab Logo/Tec & signi.svg',
      bonding:
        'SigniFlow is a digital signature and workflow automation platform that enables organisations to securely manage document approvals and transactions. It replaces manual processes with digital workflows that improve efficiency and control. The platform ensures compliance and data integrity through secure digital signatures, enabling organisations to streamline document handling across departments such as HR, legal, and finance. With Teckonnect: We design workflows, integrate systems, and support adoption to ensure faster approvals, improved auditability, and stronger process governance. ',
    },
    {
      name: 'Kissflow',
      // img: '/partners/kissflow.svg',
      img: `${import.meta.env.BASE_URL}log-partners/kissflow.svg`,

      link: 'https://kissflow.com',
      desc: 'A low-code automation partner helping streamline workflows and processes. Together, we enable faster digital transformation with flexibility and control.',
      popupImg: '/logos/Collab Logo/Tec & Kiss Black.svg',
      bonding:
        'Kissflow is a low-code/no-code platform that enables organisations to build applications, automate workflows, and manage operations without heavy development effort. It helps digitise processes and improve efficiency across business functions. Its unified platform allows teams to replace manual workflows with automated systems, improving visibility, collaboration, and performance across departments. With Teckonnect: We identify process gaps, configure workflows, and ensure integration, helping organisations achieve faster digital transformation with measurable results. ',
    },
    {
      name: 'Corporater',
      // img: '/partners/corporater.svg',
      img: `${import.meta.env.BASE_URL}log-partners/corporater.svg`,

      link: 'https://corporater.com',
      desc: 'A governance and performance management partner supporting better decisions. Corporater helps bring strategy, risk, and execution together.',
      popupImg: '/logos/Collab Logo/tec & Corporater.svg',
      bonding:
        'Corporater provides a unified platform for Governance, Performance, Risk, and Compliance (GPRC), enabling organisations to align strategy with risk and compliance management. It helps improve decision-making and organisational visibility. Its integrated approach ensures that governance and compliance are embedded into business operations, allowing organisations to manage risk effectively while achieving performance goals. With Teckonnect: We implement governance frameworks, configure dashboards, and align compliance processes to ensure accountability, visibility, and continuous improvement. ',
    },
    {
      name: 'Employment Hero',
      // img: '/partners/employeement hero.svg',
      img: `${import.meta.env.BASE_URL}log-partners/employeement hero.svg`,

      link: 'https://employmenthero.com',
      desc: 'A people and payroll technology partner supporting workforce management. We simplify HR processes and enhance employee experiences.',
      popupImg: '/logos/Collab Logo/tec & Employeement.svg',
      bonding:
        'Employment Hero is an all-in-one workforce management platform that combines HR, payroll, recruitment, and employee engagement into a single system. It helps organisations streamline workforce operations and reduce administrative effort. The platform enables businesses to manage the entire employee lifecycle efficiently while ensuring compliance and improving overall employee experience. With Teckonnect: We support implementation, configuration, and integration to ensure smooth workforce operations and consistent HR process management. ',
    },
    {
      name: 'Salesforce',
      // img: '/partners/salesforce.svg',
      img: `${import.meta.env.BASE_URL}log-partners/salesforce.svg`,

      link: 'https://salesforce.com',
      desc: 'A CRM partner supporting customer engagement and data-driven growth. Together, we help organisations connect customers, data, and processes.',
      popupImg: '/logos/Collab Logo/tec & Sales.svg',
      bonding:
        'Salesforce is a leading CRM platform that connects sales, service, and marketing into a unified system, enabling organisations to manage customer relationships effectively. It supports data-driven decision-making and improved customer engagement. Its platform allows organisations to streamline operations, improve visibility, and deliver personalised experiences across customer journeys. With Teckonnect: We design and implement Salesforce solutions aligned to business processes, ensuring adoption, optimisation, and measurable growth outcomes. ',
    },
    {
      name: 'Volody',
      // img: '/partners/volody.svg',
      img: `${import.meta.env.BASE_URL}log-partners/volody.svg`,

      link: 'https://volody.com',
      desc: 'A contract lifecycle and legal tech partner improving compliance and visibility. They help strengthen governance and efficiency across agreements.',
      popupImg: '/logos/Collab Logo/tec & volody.svg',
      bonding:
        'Volody is an AI-powered contract lifecycle management platform that helps organisations automate contract drafting, approvals, and management processes. It improves visibility and efficiency across contract operations. The platform enables organisations to reduce manual effort, standardise processes, and maintain better control over contracts across their lifecycle. With Teckonnect: We configure workflows, integrate systems, and support adoption to ensure faster contract cycles, improved compliance, and reduced operational risk. ',
    },
  ];
  return (
    // <section
    //   className={styles.partnersListSection}
    //   ref={ref}
    // >

    <section className={styles.partnersListSection}>
      <div className={styles.partnersListHeader}>
        <h2 className={styles.partnersListH3}>Our Distributors Networks</h2>

        <p className={styles.partnersListSubText}>
          Trusted specialists who enhance our core services with complementary
          expertise and proven capability.
        </p>
      </div>

      <div className={styles.partnersListGrid}>
        {partners.map((item, i) => (
          <Card
            key={i}
            item={item}
            setSelectedPartner={setSelectedPartner}
          />
        ))}
      </div>

      {/* IMPLEMENTATION */}

      <div className={styles.implSection}>
        {/* HEADER */}
        <div className={styles.implHeader}>
          <h3 className={styles.implH3}>Our Extending Partners</h3>

          <p className={styles.implSubText}>
            Trusted specialists who enhance our core services with complementary
            expertise.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.implGrid}>
          {implementationPartners.map((item, i) => (
            <div
              key={i}
              className={styles.implCard}
            >
              <div className={styles.implImgWrap}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles.implImg}
                />
              </div>

              <h4 className={styles.implTitle}>{item.name}</h4>

              <p className={styles.implDesc}>{item.desc}</p>

              <a
                href="#"
                className={styles.implLink}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPartner(item);
                }}
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>

      {selectedPartner && (
        <div
          className={styles.partnerModalOverlay}
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className={styles.partnerModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setSelectedPartner(null)}
            >
              ✕
            </button>

            <div className={styles.modalLogoWrap}>
              <img
                src={selectedPartner.popupImg || selectedPartner.img}
                alt={selectedPartner.name}
                className={styles.modalLogo}
              />
            </div>

            <h2 className={styles.modalTitle}>{selectedPartner.name}</h2>

            <p className={styles.modalText}>{selectedPartner.bonding}</p>

            <a
              href={selectedPartner.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitWebsiteBtn}
            >
              Visit Website
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
