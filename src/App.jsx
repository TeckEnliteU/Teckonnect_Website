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

//inner pages
import Microsoft from './pages/Services/Microsoft/Microsoft';

// import Microsoft from './pages/Services/Microsoft/Microsoft';

import Azure from './pages/Services/Microsoft/Azure/Azure';

import Dynamics365 from './pages/Services/Microsoft/Dynamics365/Dynamics365';

import Microsoft365 from './pages/Services/Microsoft/Microsoft365/Microsoft365';
import './App.css';
import Aws from './pages/Services/Aws/Aws';
import Adobe from './pages/Services/Adobe/Adobe';
import IBM from './pages/Services/Ibm/ibm';
import CyberSecurity from './pages/Services/CyberSecurity/Cybersecurity';
import PublicSector from './pages/Industries/PublicSector/PublicSector';
import Healthcare from './pages/Industries/Healthcare/Healthcare';
import Manufacturing from './pages/Industries/Manufacturing/Manufacturing';
import NonProfit from './pages/Industries/NonProfit/NonProfit';
import Retail from './pages/Industries/Retail/Retail';

import Mining from './pages/Industries/Mining/Mining';
import Logistics from './pages/Industries/Logistics/Logistics';
import SmallEnterpriseBusiness from './pages/Industries/SmallEnterpriseBusiness/SmallEnterpriseBusiness';
import Education from './pages/Industries/Education/Education';
import MicrosoftPartner from './pages/Partners/Microsoft/MicrosoftPartner';
import AWSPartner from './pages/Partners/Aws/AwsPartner';
import AdobePartner from './pages/Partners/Adobe/AdobePartner';
import IBMPartner from './pages/Partners/Ibm/IBMPartner';
import Utilities from './pages/Industries/OilGas/Utilities';
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

          {/* INNER PAGES */}

          <Route
            path="/services/microsoft"
            element={<Microsoft />}
          />

          {/* NestedINNER PAGES */}

          <Route
            path="/services/microsoft/dynamics-365"
            element={<Dynamics365 />}
          />
          <Route
            path="/services/microsoft/azure"
            element={<Azure />}
          />

          <Route
            path="/services/microsoft/microsoft-365"
            element={<Microsoft365 />}
          />

          <Route
            path="/services/aws"
            element={<Aws />}
          />
          <Route
            path="/services/ibm"
            element={<IBM />}
          />

          <Route
            path="/services/adobe"
            element={<Adobe />}
          />
          <Route
            path="/services/cybersecurity"
            element={<CyberSecurity />}
          />

          {/* inner pages end  */}
          <Route
            path="/partners"
            element={<Partners />}
          />

          {/* partner inner page  */}

          <Route
            path="/partners/microsoft"
            element={<MicrosoftPartner />}
          />

          <Route
            path="/partners/aws"
            element={<AWSPartner />}
          />

          <Route
            path="/partners/Adobe"
            element={<AdobePartner />}
          />

          <Route
            path="/partners/ibm"
            element={<IBMPartner />}
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

          {/* {inner page of INdustries} */}
          <Route
            path="/Industries/publicSector"
            element={<PublicSector />}
          />
          <Route
            path="/Industries/healthcare"
            element={<Healthcare />}
          />
          <Route
            path="/Industries/manufacturing"
            element={<Manufacturing />}
          />

          <Route
            path="/Industries/nonprofit"
            element={<NonProfit />}
          />

          <Route
            path="/Industries/retail"
            element={<Retail />}
          />
          <Route
            path="/Industries/utilities"
            element={<Utilities />}
          />
          <Route
            path="/Industries/Mining"
            element={<Mining />}
          />

          <Route
            path="/Industries/Logistics"
            element={<Logistics />}
          />
          <Route
            path="/Industries/SmallEnterpriseBusiness"
            element={<SmallEnterpriseBusiness />}
          />

          <Route
            path="/Industries/Education"
            element={<Education />}
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
