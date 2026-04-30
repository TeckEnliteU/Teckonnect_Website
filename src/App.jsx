// 'use client';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // Layout
// import Navbar from './components/layout/Navbar';

// import './components/layout/Footer/Footer';
// // Pages
// import Home from './pages/Home/Home';
// import Industries from './pages/Industries/Industries';
// import Services from './pages/Services/Services';
// import Partners from './pages/Partners/Partners';
// import About from './pages/About/About';
// import Footer from './components/layout/Footer/Footer';
// import Contact from './pages/Contact/Contact';
// import './APP.css';
// function App() {
//   return (
//     <BrowserRouter>
//       {/* Global Layout */}
//       <Navbar />

//       <main>
//         <Routes>
//           {/* Home (Landing Page with Sections) */}
//           <Route
//             path="/"
//             element={<Home />}
//           />

//           {/* Other Pages (Each has its own sections) */}

//           <Route
//             path="/services"
//             element={<Services />}
//           />
//           <Route
//             path="/partners"
//             element={<Partners />}
//           />
//           <Route
//             path="/about"
//             element={<About />}
//           />

//           <Route
//             path="/contact"
//             element={<Contact />}
//           />

//           <Route
//             path="/industries"
//             element={<Industries />}
//           />
//         </Routes>
//         <Footer />
//       </main>
//     </BrowserRouter>
//   );
// }

// export default App;
// 'use client';

// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useEffect } from 'react';
// import Lenis from '@studio-freight/lenis';

// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer/Footer';
// import './APP.css';
// // Pages
// import Home from './pages/Home/Home';
// import Industries from './pages/Industries/Industries';
// import Services from './pages/Services/Services';
// import Partners from './pages/Partners/Partners';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';

// /* ========================= */
// /* 🔥 SMOOTH SCROLL (FIXED) */
// /* ========================= */
// function SmoothScroll() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.1,
//       smooth: true,
//       lerp: 0.08, // smoother feel
//     });

//     let rafId;

//     function raf(time) {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     }

//     rafId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy(); // 🔥 prevent lag on route change
//     };
//   }, []);

//   return null;
// }

// /* ========================= */
// /* 🔥 SCROLL RESET */
// /* ========================= */
// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// /* ========================= */
// /* 🔥 PAGE TRANSITION */
// /* ========================= */
// const PageWrapper = ({ children }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -40 }}
//     transition={{
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1], // Apple easing
//     }}
//     style={{
//       background: '#f8fafc', // 🔥 prevents white flash
//       minHeight: '100vh',
//     }}
//   >
//     {children}
//   </motion.div>
// );

// /* ========================= */
// /* 🔥 ROUTES */
// /* ========================= */
// function AnimatedRoutes() {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="sync">
//       {' '}
//       {/* 🔥 IMPORTANT FIX */}
//       <Routes
//         location={location}
//         key={location.pathname}
//       >
//         <Route
//           path="/"
//           element={
//             <PageWrapper>
//               <Home />
//             </PageWrapper>
//           }
//         />
//         <Route
//           path="/services"
//           element={
//             <PageWrapper>
//               <Services />
//             </PageWrapper>
//           }
//         />
//         <Route
//           path="/partners"
//           element={
//             <PageWrapper>
//               <Partners />
//             </PageWrapper>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <PageWrapper>
//               <About />
//             </PageWrapper>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <PageWrapper>
//               <Contact />
//             </PageWrapper>
//           }
//         />
//         <Route
//           path="/industries"
//           element={
//             <PageWrapper>
//               <Industries />
//             </PageWrapper>
//           }
//         />
//       </Routes>
//     </AnimatePresence>
//   );
// }

// /* ========================= */
// /* 🔥 APP */
// /* ========================= */
// function App() {
//   return (
//     <BrowserRouter>
//       <SmoothScroll />
//       <ScrollToTop /> {/* 🔥 prevents jump lag */}
//       <Navbar />
//       <main>
//         <AnimatedRoutes />
//         <Footer />
//       </main>
//     </BrowserRouter>
//   );
// }

// export default App;

// new version ////

// 'use client';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ScrollToTop from './components/layout/ScrollToTop';
// // Layout
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer/Footer';

// // Pages
// import Home from './pages/Home/Home';
// import Industries from './pages/Industries/Industries';
// import Services from './pages/Services/Services';
// import Partners from './pages/Partners/Partners';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navbar always visible */}
//       <ScrollToTop />
//       <Navbar />

//       {/* Page Content */}
//       <Routes>
//         <Route
//           path="/"
//           element={<Home />}
//         />
//         <Route
//           path="/services"
//           element={<Services />}
//         />
//         <Route
//           path="/partners"
//           element={<Partners />}
//         />
//         <Route
//           path="/about"
//           element={<About />}
//         />
//         <Route
//           path="/contact"
//           element={<Contact />}
//         />
//         <Route
//           path="/industries"
//           element={<Industries />}
//         />
//       </Routes>

//       {/* Footer always visible */}
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

////new version with page transitions and smooth scroll

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import Industries from './pages/Industries/Industries';
import Services from './pages/Services/Services';
import Partners from './pages/Partners/Partners';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import './App.css';

function App() {
  return (
    // <BrowserRouter>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Navbar />

      <div className="page">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/partners"
            element={<Partners />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/industries"
            element={<Industries />}
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
