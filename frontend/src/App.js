import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Accomodation from "./routes/Accomodation";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Register from "./routes/Register";
import SingleProperty from "./routes/SingleProperty";
import PartnerRegister from "./routes/PartnerRegister";
import PartnerLogin from "./routes/PartnerLogin";
import PartnerDashboard from "./routes/PartnerDashboard";
import AdminDashboard from "./routes/AdminDashboard";
import AdminLogin from "./routes/AdminLogin";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/accomodation" element={<Accomodation/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/singleproperty" element={<SingleProperty/>}/>
        <Route path="/partnerregister" element={<PartnerRegister/>}/>
        <Route path="/partnerlogin" element={<PartnerLogin/>}/>
        <Route path="/partnerdashboard" element={<PartnerDashboard/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
      </Routes>
    </div>
  );
}
