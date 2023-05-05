  /* .App {
  text-align: center;
} 

.App-header {
  background-color: whitesmoke;
  height: 450px;
  margin: 200px 250px 250px 400px;
  width: 800px; 
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  border-radius: 10px;
} 

.pdfupload {
  font-size: 20px;
  border: gray 1px dashed;
  border-radius: 7px;
}

input[type="file" ] {
  appearance: none;
  background-color: grey;
  cursor: default;
  text-overflow: ellipsis;
  text-align: start;
}

.btn {
  font-family:'Courier New', Courier, monospace;
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
  width: 50%;
  height: 50px;
  border-radius: 25px;
  background: #57b846;
}

.btn:hover {
  background-color: black;
  cursor: pointer;
}

h1{
  font-family:'Courier New', Courier, monospace;
  padding: 20px;
  color: rgba(0, 0, 0, 0.668);
  display: block;
  text-align: center;
}

 body {
  width: 100%;
  height: 100vh;
  background-image: url('./ResumeParser/dark-gray-wooden-surface-texture-wallpaper.jpg');
  background-repeat: no-repeat;
} 

label {
  color: black;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}    

------------------------------------------------------------------------------------------------------------------------------
  body, html {
  height: 100%;
  font-family: Poppins-Regular, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  text-align: left;
  margin: 0;
} 
--------------------------------------------------------------------------------------------------------------------------------
.limiter{
  width: 100%;
  margin: 0 auto;
}
.container-login{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: linear-gradient(-135deg, #c850c0, #4158d0);
}

.wrap-login{
  padding: 50px 117px 33px 95px;
  min-height: 500px;
  width: 960px;
  background:whitesmoke;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.mx-auto {
  margin-left: auto!important;
  margin-right: auto!important;
}

.mb-3 {
  margin-bottom: 1rem!important;
}

.justify-content-center {
  -webkit-box-pack: center!important;
  justify-content: center!important;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.div1style{
  width: 100%;
}

.h3style{
  line-height: 1.2;
  text-align: center;
  margin-bottom: 35px;
}

.sideheading{
  line-height: 1.2;
  text-align: left;
  margin-bottom: 10px;
  display: block;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 0px;
}

.table1{
  line-height: 1.9;
  overflow-x: auto;
}

.table2{
  border: 0px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;
  text-indent: initial;
  border-spacing: 2px;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}

.table2 td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

td {
  display: table-cell;
  vertical-align: inherit;
}

.tabledata1{
  font-weight: bold;
}

.tabledata2{
  word-wrap: break-word;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
  color: #212529;
  
}

.btn-light {
  background-color: #edf4fb !important;
  border-radius: 15px !important;
  border-color: #68b0f8;
  margin: 5px 2px 5px 2px;
  color: #212529;
  text-shadow: #75befa;
}

.btn-light:hover {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #75befa;
  text-decoration: none;
}

.btn {
  display: inline-block;
  font-weight: 400;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.details{
  font-size: small;
}


element.style {
  line-height: 1.2 !important;
  text-align: center;
  margin-bottom: 35px;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0px;
}

.h3, h3 {
  font-size: 1.75rem;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

h5{
  display: block;
  font-size: 1em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-family: sans-serif;
  margin: 15px;
}  
*/


/*---------------------------------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
function PdfUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can handle the selected file, such as uploading it to a server or displaying it in the UI.
    console.log(selectedFile);
  };

  return (
    <div className="App">
      <body>
      <header className="App-header">
        <h1>Resume Parser</h1>
        <label for="upload_resume">Upload Resume</label>
        <br/>
        <input className="pdfupload"
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        />
        <br/>
        <br/>
        <button type="button"  className="btn btn-outline-secondary" onClick={handleSubmit}>Submit</button>
        
      </header>
      </body>
    </div>
    
  );
}

export default PdfUploader;*/
