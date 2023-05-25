import React from "react";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const GetStarted =()=>{
  const navigate = useNavigate();

  const handleChange = (event) => navigate('/LoginForm')

    return(
      <div>
        <div className="home-container" id="Home">
          <div className="home-banner-container">
          <div className="home-text-section">
          <h1 className="primary-heading">
            Resume parsers designed to scan the document
          </h1>
          <p className="primary-text">
          Many HR Professionals use CV and Resume Parsing tools to automate the storage, import and analysis of data and text on CVs and resume
          </p>
          <button className="secondary-button" onClick={handleChange} >
            GET STARTED <FiArrowRight />{" "}
          </button>
        </div>
       
        
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        

          
          </div>
        </div>
        </div>
        
    )
}

export default GetStarted;