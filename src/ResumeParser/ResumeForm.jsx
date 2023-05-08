import React from "react";
// import logo from './logo.png'

function PdfUploader1() {
    const handleSubmit = (event) => {
        event.preventDefault();
      };

  return (
    <body>
        <div className="limiter">
            <div className="container-login">
                <div className="wrap-login">
                    <div className="row flash-message justify-content-center mb-3 mx-auto auto-hide-flash"></div>
                    <div className="div1style">
                        <h3 className="h3style" >Resume Parser</h3>
                    </div>
                    <h5>Extracted data from resume:</h5>
                    <div className="table1">
                        <table className="table2 ">
                            <tbody>
                                <tr>
                                    <td className="tabledata1">Name</td>
                                        <td className="tabledata2">
                                                
                                                    <span className="btn-data btn-data-light details">***</span>
                                                    <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Phone</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">***</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Skills</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">***</span>
                                                
                                            <span className="btn-data btn-data-light details"> ***</span>
                                                
                                            <span className="btn-data btn-data-light details"> ***</span>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Achievements</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">***</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Objective/Career Objective</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">***</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Date of birth</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">***</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Address</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">***</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Email</td>
                                        <td>
                                            {/* <img src={logo} alt="Email" className="email-logo"/> */}
                                            <span className="btn-data btn-data-light details">***</span> 

                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Graduation details</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details"><span className="tabledata1">College :</span>****</span>
                                                
                                            <span className="btn-data btn-data-light details"><span className="tabledata1">Degree :</span> ****</span>
                                                
                                            <span className="btn-data btn-data-light details"><span className="tabledata1">CPI :</span> ***</span>
                                                
                                            <span className="btn-data btn-data-light details"><span className="tabledata1">Duration :</span> ***</span>
                                                
                                        </td>
                                </tr>

                            </tbody>

                        </table>
                        <div className="login-button">
                            <button type="button"  className="btn btn-size btn-outline-secondary" onClick={handleSubmit}>Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </body>
  );
}

export default PdfUploader1;