import React from "react";
import ResumeUpload from "../Assets/resume-upload.png";
import ResumeParse from "../Assets/resume-parse.png";
import ParsedData from "../Assets/parsed-data.png";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Work = () => {
  const workInfoData = [
    {
      image: ResumeUpload,
      title: "Upload A Resume",
    },
    {
      image: ResumeParse,
      title: "Resume Parsing",
    },
    {
      image: ParsedData,
      title: "Parsed Data",
    },
  ];
  return (
    <div>
      <NavBar/>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Resume parsing begins by uploading a resume automatically or manually.
        Once the applications are uploaded, resume parsing tools scan each document 
        and extract all relevant information based on a recruiter’s needs.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Work;