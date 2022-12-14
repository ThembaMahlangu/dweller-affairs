import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { AuthContext } from "../Context/authContext";
import { useEffect, useRef, useContext } from "react";
import { loginCall } from "../utils/loginApiCall";

function PartnerLogin() {
  const email = useRef();
  const password = useRef();

  const { dispatch, isLoading, user, error } = useContext(AuthContext);

  const submitHnadler = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    ),
      dispatch;
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={
          "https://www.xtraspace.co.za/sites/default/files/the-leonardo.jpg"
        }
        title="Partner Login"
        text="Welcome back Partner! Please login below"
      />
      <div className="form-container">
        <form onSubmit={submitHnadler}>
          <input
            placeholder="Email"
            ref={email}
            type="email"
            disabled={isLoading}
          />
          <input
            placeholder="Enter Your Password"
            ref={password}
            type="password"
            disabled={isLoading}
          />
          <button disabled={isLoading}>Login</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default PartnerLogin;
