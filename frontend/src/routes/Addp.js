import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutImg from "../assets/3.jpg";
import api from "../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addp() {
  const [value, setValue] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", {
        name: value.companyName,
        email: value.email,
        password: value.password,
      });
      console.log(res.data);
      navigate("/emailsent");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(value.companyName);

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-contact"
        heroImg={AboutImg}
        title="Add New Partners"
        text="Use the information in the database to register new partners for access to Partner Dashboard"
        btnClass="hide"
      />
      <div className="form-container">
        <form onSubmit={register}>
          <input
            placeholder="Company Name"
            name="companyName"
            onChange={handleChange}
          />
          <input placeholder="Email" name="email" onChange={handleChange} />
          <input
            placeholder="Enter Your Password"
            name="password"
            onChange={handleChange}
            type="password"
          />
          <input
            placeholder="Please Confirm Your Password"
            name="confirmPassword"
            onChange={handleChange}
            type="password"
          />
          <button>Register</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Addp;
