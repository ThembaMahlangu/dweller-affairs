import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Hero from "../components/Hero";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import ContactForm from "../components/ContactForm";

function SingleProperty() {
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_mk5j6fc",
            "template_tyl9ufr",
            form.current,
            "alhwLOSp2yLNOem4D"
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("booking sent");
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
      };
  
  const slides = [
    {
      url: "https://orlandotowers.org/wp-content/themes/orlandotowers_v1/assets/bg_2.jpg",
      title: "beach",
    },
    {
      url: "https://www.moneyweb.co.za/wp-content/uploads/2022/07/29_Orlando-Towers-Estate_4-555x234.jpg",
      title: "boat",
    },
    {
      url: "https://image-prod.iol.co.za/16x9/800/?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/9504d42c-4a1f-5f88-8c09-d968114574f1&operation=CROP&offset=352x0&resize=1390x780",
      title: "forest",
    },
    {
      url: "https://orlandotowers.org/wp-content/themes/orlandotowers_v1/assets/bg_7.jpg",
      title: "city",
    },
    // {
    //   url: "https://img.gumtree.co.za/api/v1/za-ads/images/b1/b1bbf6ca-4fd5-4418-951f-e763839ee880?rule=s-I85.auto",
    //   title: "italy",
    // },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  const [num, setNum] = useState(0);
  const next = () => {
    console.log("next");
    if (num < slides.length - 1) {
      setNum((prev) => prev + 1);
      console.log(num);
      console.log(slides.length);
    } else {
      setNum(0);
    }
  };
  const prev = () => {
    console.log("prev");
    if (num > 0 && num < slides.length - 1) {
      setNum((prev) => prev - 1);
      console.log(`num is ${num}`);
    } else {
      setNum(0);
    }
  };
  // const autoscroll = () => {
  //   console.log("scrolling");

  //   if (num < slides.length - 1) {
  //     setNum((prev) => prev + 1);
  //     console.log(num);
  //     // return;
  //     // console.log(slides.length);
  //   } else {
  //     setNum(prev=>prev*0);
  //     console.log("this is");
  //     return;
  //   }
  //   // if (num > slides.length - 1) {
  //   // }
  // };
  // setInterval(autoscroll, 5000);
  const styles = {
    wrapper: {
      height: "100vh",
    },
    imgCon: {
      // border: "2px solid red",
      height: `65vh`,
      width: "80%",
      margin: "auto",
      position: "relative",
      margin: "20px",
      borderRadius: "20px",
      overflow: "hidden",
    },
    section: {
      // border: "2px solid blue",
      position: `relative`,
      display: "flex",
      justifyContent: "center",
      // position:'relative'
    },
    overlay: {
      // border: `2px solid yellow`,
      width: `70%`,
      height: "150px",
      margin: `auto`,
      position: `absolute`,
      bottom: `-70px`,
      borderRadius: "20px",
      padding: "15px",
      display: "flex",
      // gap: "20px",
      zIndex: "2",
      background: "white",
      justifyContent: "space-between",
    },
    imgSelect: {
      // border: `2px solid blue`,
      position: `absolute`,
      width: "5em",
      height: "12em",
      right: "1em",
      top: "4em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      // padding: "5px",
      zIndex: "2",
    },
    innerOverlay: {
      border: "1px solid gray",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      padding: "10px",
      alignItems: "flex-start",

      minWidth: "220px",
    },
    imgSmall: {
      margin: "6px",
      // border: "2px solid red",
      padding: "4px",
      height: `3.5em`,
      borderRadius: "10px",
      overflow: "hidden",
      background: "white",
    },
    image: {
      borderRadius: "10px",
    },
    textOverlay: {
      // border: "2px solid red",
      position: `absolute`,
      top: "0",
      width: "25em",
      height: "25em",
      left: "2em",
      margin: "20px",
      // zIndex:'3',
      display: "flex",
      flexDirection: "column",
    },
    largeText: {
      fontSize: "4em",
      lineHeight: "1.1em",
      textAlign: "left",

      // justifySelf:'flex-start',
    },
    span: {
      // border: "2px solid red",
      marginBottom: "5em",
      marginTop: "1em",
      color: "white",
      fontSize: "20px",
      textAlign: "left",
    },
    temp: {
      // border: "2px solid red",
      // marginBottom: "5em",
      // marginTop: "1em",
      color: "white",
      // fontSize: "20px",
      textAlign: "left",
    },
    icon: {
      color: "white",
      fontSize: "30px",
      // padding:'20px'
    },
    iconCon: {
      // border:'2px solid red',
      width: "100px",
      display: "flex",
      justifyContent: "space-around",
    },
    map: {
      border: `2px solid red`,
      height: "35vh",
      zIndex: "4",
    },
    livemap: {
      overflow: "hidden",
      // width:'100%',
    },
    title: {
      fontSize: "20px",
    },
    titleDesc: {
      color: "gray",
    },
  };

  return (
    <>
      {/* <Navbar/> */}
      <div style={styles.wrapper}>
        <section style={styles.section}>
          <div style={styles.imgCon}>
            <img style={styles.image} src={slides[num].url} alt="main" />
            <div style={styles.textOverlay}>
              <h1 style={styles.largeText}>Modern House</h1>
              <p style={styles.span}>3 bedrooms,1 kitchen and 2 bathrooms</p>
              <p style={styles.temp}>42&deg;C Very Cool</p>
              <span style={styles.iconCon}>
                <BsFillArrowLeftSquareFill onClick={prev} style={styles.icon} />
                <BsFillArrowRightSquareFill
                  onClick={next}
                  style={styles.icon}
                />
              </span>
            </div>
            <div style={styles.imgSelect}>
              <div style={styles.imgSmall}>
                <img style={styles.image} src={slides[1].url} />
              </div>{" "}
              <div style={styles.imgSmall}>
                <img style={styles.image} src={slides[2].url} />
              </div>{" "}
              <div style={styles.imgSmall}>
                <img style={styles.image} src={slides[0].url} />
              </div>
            </div>
          </div>
          <div style={styles.overlay}>
            <div style={styles.innerOverlay}>
              <span>City</span>
              <h3 style={styles.title}>Dubai</h3>
              <p style={styles.titleDesc}>United Arab Emirates</p>
            </div>{" "}
            <div style={styles.innerOverlay}>
              <span>City</span>
              <h3 style={styles.title}>Dubai</h3>
              <p style={styles.titleDesc}>United Arab Emirates</p>
            </div>{" "}
            <div style={styles.innerOverlay}>
              <span>City</span>
              <h3 style={styles.title}>Dubai</h3>
              <p style={styles.titleDesc}>United Arab Emirates</p>
            </div>{" "}
            <div style={styles.innerOverlay}>
              <span>City</span>
              <h3 style={styles.title}>Dubai</h3>
              <p style={styles.titleDesc}>United Arab Emirates</p>
            </div>
          </div>
        </section>
        <section style={styles.map}>
          {/* <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={styles.livemap}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer> */}
          {/* <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker> */}
        </section>
      </div>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input name="name" placeholder="What is your Full Name?" />
          <label>Partner</label>
          <input
            name="partner"
            placeholder="Please type the Building Partner Name"
          />
          <label>Building</label>
          <input
            name="building"
            placeholder="Name of the building being booked?"
          />
          <label>Email</label>
          <input name="email" placeholder="What is your Email?" />
          <label>Contact Number</label>
          <input name="contact" placeholder="What is your contact number?" />
          <label>WhatsApp</label>
          <input name="whatsapp" placeholder="What is your WhatsApp Number?" />
          <button type="submit">Submit Booking</button>
        </form>
      </div>
      {/* <Hero
        cName = "hero-about"
        heroImg = {"https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/306328159_396445859333112_8917872010399731571_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFdC3m0Um_-ql3rvE1NNDteEzt-Xuyq8ioTO35e7KryKsghX6p-yeLLRMdmdyUo6q-4pPooRk4ooVNqn-qLAJ_O&_nc_ohc=mcj1VZIN8vsAX8tk0Is&_nc_ht=scontent-jnb1-1.xx&oh=00_AfComTbFdLNkXnlolLUL50nY_torrBgini93A4m75rn2Gw&oe=6394747E"}
        title = "Elevate"
        text = "Situated in Maboneng, Johannesburg"
      />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div> */}
      <Footer />
    </>
  );
}

export default SingleProperty;
