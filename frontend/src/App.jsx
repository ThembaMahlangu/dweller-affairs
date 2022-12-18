import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Accomodation from "./routes/Accomodation";
import Contact from "./routes/Contact";
import SingleProperty from "./routes/SingleProperty";
import PartnerRegister from "./routes/PartnerRegister";
import PartnerLogin from "./routes/PartnerLogin";
import PartnerDashboard from "./routes/PartnerDashboard";
import AdminDashboard from "./routes/AdminDashboard";
import AdminLogin from "./routes/AdminLogin";
import Addp from "./routes/Addp";
import BookingForm from "./routes/BookingForm";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproperty" element={<SingleProperty />} />
          <Route path="/partnerregister" element={<PartnerRegister />} />
          <Route path="/partnerlogin" element={<PartnerLogin />} />
          <Route path="/partnerdashboard" element={<PartnerDashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/addp" element={<Addp />} />
          <Route path="/bookingform" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}
