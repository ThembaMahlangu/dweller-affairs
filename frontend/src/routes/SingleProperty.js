import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import Hero from '../components/Hero';

function SingleProperty() {
  const slides = [
    { url: "https://orlandotowers.org/wp-content/themes/orlandotowers_v1/assets/bg_2.jpg", title: "beach" },
    { url: "https://www.moneyweb.co.za/wp-content/uploads/2022/07/29_Orlando-Towers-Estate_4-555x234.jpg", title: "boat" },
    { url: "https://image-prod.iol.co.za/16x9/800/?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/9504d42c-4a1f-5f88-8c09-d968114574f1&operation=CROP&offset=352x0&resize=1390x780", title: "forest" },
    { url: "https://orlandotowers.org/wp-content/themes/orlandotowers_v1/assets/bg_7.jpg", title: "city" },
    { url: "https://img.gumtree.co.za/api/v1/za-ads/images/b1/b1bbf6ca-4fd5-4418-951f-e763839ee880?rule=s-I85.auto", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <>
      <Navbar/>
      <Hero
        cName = "hero-about"
        heroImg = {"https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/306328159_396445859333112_8917872010399731571_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFdC3m0Um_-ql3rvE1NNDteEzt-Xuyq8ioTO35e7KryKsghX6p-yeLLRMdmdyUo6q-4pPooRk4ooVNqn-qLAJ_O&_nc_ohc=mcj1VZIN8vsAX8tk0Is&_nc_ht=scontent-jnb1-1.xx&oh=00_AfComTbFdLNkXnlolLUL50nY_torrBgini93A4m75rn2Gw&oe=6394747E"}
        title = "Elevate"
        text = "Situated in Maboneng, Johannesburg"
      />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <Footer/>
    </>
  )
}

export default SingleProperty