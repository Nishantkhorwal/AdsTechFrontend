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

export default function App() {
  return (
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

        {/* Outdoor And Print */}
        <Route path="/outdoor-print" element={<OutdoorPrint />} />
        <Route path="/outdoor-print/billboard-design" element={<BillboardAdvertising />} />


        {/* <Route path="/outdoor-print" element={<OutdoorPrint />} />
        <Route path="/events-retail" element={<EventsRetail />} /> */}
      </Routes>
    </Router>
  );
}
