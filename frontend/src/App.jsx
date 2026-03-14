
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"
import DigitalMarketing from "./pages/DigitalMarketing";
import Seo from "./pages/Seo";
import SocialMedia from "./pages/SocialMedia";
import ContentStrategy from "./pages/ContentStrategy";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import OutdoorPrint from "./pages/OutdoorPrint";
import BillboardAdvertising from "./pages/BillboardsAdvertising";
import RetailFabrication from "./pages/RetailAndFabrication";
import EventAndManagement from "./pages/EventAndManagement";
import Portfolio from "./pages/Portfolio";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsAndCondition";
import WebDevelopment from "./pages/WebDevelopment";
import GraphicDesign from "./pages/GraphicDesign";

export default function App() {
  
  return (

    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Digital Marketing */}
        <Route
          path="/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/digital-marketing/seo"
          element={<Seo />}
        />
        <Route
          path="/digital-marketing/social-media"
          element={<SocialMedia />}
        />
        <Route
          path="/digital-marketing/content-strategy"
          element={<ContentStrategy />}
        />
        <Route
          path="/digital-marketing/performance-marketing"
          element={<PerformanceMarketing />}
        />
        <Route
          path="/digital-marketing/web-development"
          element={<WebDevelopment />}
        />
        <Route
          path="/digital-marketing/graphic-design"
          element={<GraphicDesign />}
        />

        {/* Outdoor And Print */}
        <Route path="/outdoor-print" element={<OutdoorPrint />} />
        <Route path="/retail&fabrication" element={<RetailFabrication />} />
        <Route path="/event&management" element={<EventAndManagement />} />
        
  
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsConditions />} />
        {/* <Route path="/outdoor-print" element={<OutdoorPrint />} />
        <Route path="/events-retail" element={<EventsRetail />} /> */}
      </Routes>
    </Router>
    </>
    
  );
}
