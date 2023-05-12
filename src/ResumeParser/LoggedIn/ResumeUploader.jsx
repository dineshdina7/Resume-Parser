import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoggedIn.css";

function PdfUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => navigate('/PdfUploader1')

  return (
    <body>
    <div className="App">

    <div className="limiter">

      <div className="container-login">

        <div className="wrap-login">

          <div className="row flash-message justify-content-center mb-3 mx-auto auto-hide-flash">

            <form className="login100-form validate-form">

              <h3>Resume Parser</h3>

              <label for="upload_resume">Upload Resume</label>
              <br/>

              <input className="pdfupload"
               type="file"
               accept=".pdf, .doc, .docx"
               placeholder="Please upload resume.[doc,pdf]"
               onChange={handleFileUpload}
              />

              <br/>
              <br/>
              
              <button type="button"  className="btn btn-size" onClick={handleSubmit}>Parse Resume</button>
              <br/>

            </form>

          </div>

        </div>

      </div>

    </div>
    </div>
    </body>

  );
}

export default PdfUploader;