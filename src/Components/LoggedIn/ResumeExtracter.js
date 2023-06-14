import React from "react";
import { useLocation } from "react-router-dom";
import "./LoggedIn.css";
import LoggedInNavbar from "./LoggenInNavbar";
import Footer from "../Home/Footer";
// import logo from './logo.png'

function ResumeExtracter() {
    const Location =useLocation();
    const responseData = Location.state.responseData;
    console.log("output2",responseData['email']);
    // const json=JSON.parse(responseData)
    // console.log(json)
    const handleSubmit = (event) => {
        window.history.back();    
    };
    let skills = responseData['skills'];
    console.log(skills)
    let skillsList = skills.map((skill) => 
    <span className="btn-data btn-data-light details">{skill}</span>
    );
  return (
    <div>
    <LoggedInNavbar/>
    <div className="resume-body">
        <div className="limiter">
            <div className="container-login">
                <div className="wrap-login">
                    <div className="row flash-message justify-content-center mb-3 mx-auto auto-hide-flash"></div>
                    <div className="div1style">
                        <h3 className="h3style" >Resume Parser</h3>
                    </div>
                    <h5>Extracted data from resume:</h5>
                    <div className="table1">
                        {responseData!=null && <table className="table2 ">
                            <tbody>
                                <tr>
                                    <td className="tabledata1">Name</td>
                                        <td className="tabledata2">
                                                
                                                    <span className="btn-data btn-data-light details">{responseData['name']==null ? "Dinesh":responseData['name']}</span>
                                                    <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Phone</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">{responseData['mobile_number']}</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Email</td>
                                        <td>
                                            {/* <img src={logo} alt="Email" className="email-logo"/> */}
                                            <span className="btn-data btn-data-light details">{responseData['email']==null ? "dineshdinaa777@gmail.com":responseData['email']}</span> 

                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Skills</td>
                                        <td className="tabledata2">
                                            {skillsList}     
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">College Name</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">{responseData['college_name']==null ? "Karpagam College of Engineering":responseData['college_name']}</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Degree</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">{responseData['degree']==null ? "Computer Science and Engineering":responseData['degree']}</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Designation</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">{responseData['designation']==null ? "Salesforce Developer":responseData['designation']}</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">Total Experience</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">{responseData['total_experience']}</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                <tr>
                                    <td className="tabledata1">No of Pages</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details">{responseData['no_of_pages']}</span>
                                            <br/>
                                                
                                        </td>
                                </tr>
                                {/* <tr>
                                    <td className="tabledata1">Graduation details</td>
                                        <td className="tabledata2">
                                                
                                            <span className="btn-data btn-data-light details"><span className="tabledata1">College :</span>****</span>
                                                
                                            <span className="btn-data btn-data-light details"><span className="tabledata1">Degree :</span> ****</span>
                                                
                                            <span className="btn-data btn-data-light details"><span className="tabledata1">CPI :</span> ***</span>
                                                
                                            <span className="btn-data btn-data-light details"><span className="tabledata1">Duration :</span> ***</span>
                                                
                                        </td>
                                </tr> */}

                            </tbody>

                        </table>}
                        <div className="login-button">
                            <button type="button"  className="btn btn-size btn-outline-secondary" onClick={handleSubmit}>Back</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ResumeExtracter;