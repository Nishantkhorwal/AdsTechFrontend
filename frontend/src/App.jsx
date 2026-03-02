import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"
import SingleService from "./pages/SingleService";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services/:category/:service"
          element={<SingleService />}
        />

        {/* <Route path="/outdoor-print" element={<OutdoorPrint />} />
        <Route path="/events-retail" element={<EventsRetail />} /> */}
      </Routes>
    </Router>
  );
}
