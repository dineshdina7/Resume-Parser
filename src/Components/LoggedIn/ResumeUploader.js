import React, { useState } from "react";
import LoggedInNavbar from "./LoggenInNavbar";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";
import "./LoggedIn.css";
import axios from "axios";

function ResumeUploader() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:5000/parse_resume",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      setIsLoading(false);
      setResponseData(response.data);
      setError(null);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    if (responseData) {
      navigate("/ResumeExtracter", { state: { responseData } });
    } else {
      setError("Please upload a resume file first.");
    }
  };

  return (
    <div>
      <LoggedInNavbar />
      <div className="resume-body">
        <div className="App1">
          <div className="limiter">
            <div className="container-login">
              <div className="wrap-login">
                <div className="row flash-message justify-content-center mb-3 mx-auto auto-hide-flash">
                  <form className="login100-form validate-form">
                    <h3>Resume Parser</h3>
                    <label htmlFor="upload_resume">Upload Resume</label>
                    <br />

                    <input
                      className="pdfupload"
                      type="file"
                      accept=".pdf, .doc, .docx"
                      placeholder="Please upload resume.[doc,pdf]"
                      onChange={handleFileUpload}
                    />
                    <br />
                    <br />
                    {isLoading ? (
                      <div>Loading...</div>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-size"
                        onClick={handleSubmit}
                      >
                        Parse Resume
                      </button>
                    )}
                    {error && <div className="error_msg">{error}</div>}
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResumeUploader;