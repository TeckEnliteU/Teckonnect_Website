import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';

import './components/layout/Footer/Footer';
// Pages
import Home from './pages/Home/Home';
import Industries from './pages/Industries/Industries';
import Services from './pages/Services/Services';
import Partners from './pages/Partners/Partners';
import About from './pages/About/About';
import Footer from './components/layout/Footer/Footer';
import Contact from './pages/Contact/Contact';
import './APP.css';
function App() {
  return (
    <BrowserRouter>
      {/* Global Layout */}
      <Navbar />

      <main>
        <Routes>
          {/* Home (Landing Page with Sections) */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Other Pages (Each has its own sections) */}

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
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
