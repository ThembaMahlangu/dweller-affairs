import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Hero from "../components/Hero";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

function SingleProperty() {
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
    {
      url: "https://img.gumtree.co.za/api/v1/za-ads/images/b1/b1bbf6ca-4fd5-4418-951f-e763839ee880?rule=s-I85.auto",
      title: "italy",
    },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  const styles = {
    wrapper: {
      height: "100vh",
    },
    imgCon: {
      // border: "2px solid red",
      height: `70vh`,
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
      border: `2px solid yellow`,
      width: `70%`,
      height: "150px",
      margin: `auto`,
      position: `absolute`,
      bottom: `-70px`,
      borderRadius: "20px",
      padding: "20px",
      display: "flex",
      gap: "20px",
      zIndex: "2",
      background: "pink",
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
      border: "2px solid red",
      borderRadius: "10px",
      width: "200px",
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
      margin:'20px',
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
      marginBottom:'5em',
      color:'white',
      fontSize:'20px'
    },
    icon:{
      color:'white',
      fontSize:'30px',
      // padding:'20px'
    },
    iconCon:{
      // border:'2px solid red',
      width:'100px',
      display:'flex',
      justifyContent:'space-around'
    }
  };

  return (
    <>
      {/* <Navbar/> */}
      <div style={styles.wrapper}>
        <section style={styles.section}>
          <div style={styles.imgCon}>
            <img style={styles.image} src={slides[0].url} alt="main" />
            <div style={styles.textOverlay}>
              <h1 style={styles.largeText}>Modern House</h1>
              <p style={styles.span}>3 bedrooms,1 kitchen and 2 bathrooms</p>
              <span style={styles.iconCon}>
                <BsFillArrowLeftSquareFill style={styles.icon} />
                <BsFillArrowRightSquareFill style={styles.icon} />
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
            <div style={styles.innerOverlay}>overlay</div>
            <div style={styles.innerOverlay}>overlay</div>
            <div style={styles.innerOverlay}>overlay</div>
            <div style={styles.innerOverlay}>overlay</div>
          </div>
        </section>
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
