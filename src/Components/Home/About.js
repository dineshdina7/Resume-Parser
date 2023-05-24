import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";



const About = () => {
  return (
    <div>
      <NavBar/>
    
    <div className="about-section-container" id="About">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">

        </h1>
        <p className="primary-text">
          A Resume parsing technology converts an unstructured form of resume data into a structured format.
        </p>
        <p className="primary-text">
          A Resume parser helps automatically store, organize, and analyze resume data to find the best candidate.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About