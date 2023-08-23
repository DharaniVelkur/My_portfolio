import React, { useState } from "react";
import "./resume.css";
import htmlimage from "./images/html.png";
import cssimage from "./images/css.png";
import reactimage from "./images/react.png";
import javascriptimage from "./images/javascript.png";
import bootstrapimage from "./images/bootstrap.png";
import sqlimage from "./images/sql.png";
import mongoimage from "./images/mongo.png";
import nodeimage from "./images/nodejs.png";  
import cvPDF from "./images/Resume.pdf";
import { saveAs } from "file-saver";
import UpArrowButton from "./UpArrowButton";
const Resume = () => {
  // const handleDownloadCV = () => {
  //   const newWindow = window.open();
  //   newWindow.document.open();
  //   newWindow.document.write("<html><body>");
  //   newWindow.document.write(
  //     `<embed src="${cvPDF}" width="100%" height="100%" type="application/pdf">`
  //   );
  //   newWindow.document.write("</body></html>");
  //   newWindow.document.close();

  // Trigger a download of the PDF file
  //   saveAs(cvPDF, "VelkurDharani'sResume.pdf");
  // };
  const openLink =()=>{
    window.open('https://drive.google.com/file/d/1Z8t0wn2KxTvNWkxVNeH4xoiaC7YrQkt6/view?usp=sharing',"_blank");
  }
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-around align-items-center pt-5">
          <div className="d-flex  align-items-center">
            <span className="list"></span>&nbsp;&nbsp;
            <h1 style={{ margin: 0, fontSize: "35px", fontWeight: "bolder" }}>
              Resume
            </h1>
          </div>
          <button
            className="btn btn-primary"
            style={{ borderRadius: "25px" }}
            onClick={openLink}
          >View CV
          </button>
        </div>
        <br />
        <br />
        <div>
          <p
            style={{ fontSize: "25px", fontWeight: "bold" }}
            className="text-center"
          >
            Education
          </p>
          <div className="d-flex justify-content-center">
            <div className="card">
              <div className="card-body ">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  2017-2021 &nbsp; (Graduation)
                </h5>
                <div className="card-text row">
                  <div className="col col-12 col-sm-6 col-lg-6">
                    <h5>Bangalore Institute Of Technology</h5>
                    <i class="fa-solid fa-location-dot"></i> Krishna Rajendra
                    Rd, Parvathipuram, Vishweshwarapura, Basavanagudi,
                    Bengaluru, Karnataka 560004
                  </div>
                  <div className="col col-12 col-sm-6 col-lg-6 pt-2">
                    <p className="text-center">
                      Completed graduation in the field of civil Engineering
                      with an overall percentage of{" "}
                      <span style={{ fontWeight: "bold" }}>86.20</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div>
          <div className="d-flex justify-content-center">
            <div className="card">
              <div className="card-body ">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  2014-2016 &nbsp; (Higher Secondary Education)
                </h5>
                <div className="card-text row">
                  <div className="col col-12 col-sm-6 col-lg-6">
                    <h5>Narayana Junior College</h5>
                    <i class="fa-solid fa-location-dot"></i> Madhapur ,Hyderabad
                    ,Telangana.
                  </div>
                  <div className="col col-12 col-sm-6 col-lg-6 pt-1">
                    <p>Secured percentage of 97.6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div>
          <div className="d-flex justify-content-center">
            <div className="card">
              <div className="card-body ">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  2013-2014 &nbsp; ( Secondary School Education)
                </h5>
                <div className="card-text row">
                  <div className="col col-12 col-sm-6 col-lg-6">
                    <h5>Narayana E.M High School</h5>
                    <i class="fa-solid fa-location-dot"></i>{" "}
                    Mittoor,Chittoor,Andhra Pradesh.
                  </div>
                  <div className="col col-12 col-sm-6 col-lg-6 pt-1">
                    <p>Secured overall Aggregate of 9.7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <p
          style={{ fontSize: "25px", fontWeight: "bold" }}
          className="text-center"
        >
          Skillset
        </p>
        <div className="d-flex justify-content-center">
          <div className="card ">
            <div className="card-body d-flex flex-wrap justify-content-center">
              <img className="px-2" src={htmlimage} alt="html" />
              <img className="px-2" src={cssimage} alt="css" />
              <img className="px-2" src={javascriptimage} alt="js" />
              <img className="px-2" src={reactimage} alt="react" />
              <img className="px-2" src={bootstrapimage} alt="bootstrap" />
              <img className="px-2" src={sqlimage} alt="sql" />
              <img className="px-2" src={mongoimage} alt="mongo" />
              <img className="px-2" src={nodeimage} alt="node" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <p
          style={{ fontSize: "25px", fontWeight: "bold" }}
          className="text-center"
        >
          Certifications
        </p>
        <div className="d-flex justify-content-center">
          <div className="card">
            <div className="card-body text-center">
            <p>Certified from an IIMA & IITM Incubated Company <b>GUVI</b> for the successful completion of <b>FULL STACK DEVELOPMENT PROGRAM.</b></p>
            <a className="certificatestyle" href="https://www.guvi.in/certificate?id=1569DM70T0PKS194O3&download=false" target="_blank">View Html certification </a><br/>
            <a className="certificatestyle" href="https://www.guvi.in/certificate?id=9vu87V126003K4j569&download=false" target="_blank">View CSS certification</a><br/>
            <a className="certificatestyle" href="https://www.guvi.in/certificate?id=p5lNv499msZ1u03076&download=false" target="_blank">View JAVASCRIPT certification</a><br/>
            <a className="certificatestyle" href="https://www.guvi.in/certificate?id=5Y77Q30490019Fj86v&download=false" target="_blank">View BOOTSTRAP certification</a><br/>
            <a className="certificatestyle" href="https://www.guvi.in/certificate?id=0ys0LQC17493605hp9&download=false" target="_blank">View MONGODB certification</a><br/>
            <a className="certificatestyle" href="https://www.guvi.in/certificate?id=74302106P9qze1g9l5&download=false" target="_blank">View MYSQL certification</a><br/>
            <a className="certificatestyle" href="https://www.guvi.in/certificate?id=7Y13g9q00S4v5j6V9e&download=false" target="_blank">View NODEJS certification</a><br/>
            <a className="certificatestyle" href="https://www.guvi.in/certificate?id=5k84b93KQa79r60G01&download=false" target="_blank">View REACT certification</a><br/>
            <a className="certificatestyle" href="https://www.guvi.in/certificate?id=09K34c0Z19g56NEJi7&download=false" target="_blank">View FSD certification</a><br/>
            </div>
          </div>
        </div>
      </div>
      <UpArrowButton/>
    </>
  );
};

export default Resume;
