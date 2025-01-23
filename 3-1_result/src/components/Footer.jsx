import React from "react";
import "../App.css";

function Footer() {
  return (
    <div>
      <div className="foot1 footer">
        <div className="f1">
          <span className="fh"> Download</span>
          <ul>
            <li>Procedure for Organizing Graduation day</li>

            <li>Guidelines for Donation</li>

            <li>Research & Development</li>

            <li>Syllabus</li>

            <li>Annual Reports</li>

            <li>Affiliated Colleges</li>

            <li>News Letters</li>
          </ul>
        </div>

        <div className="f1">
          <span className="fh">Postal Contacts </span>
          <ul>
            <li>The Registrar</li>

            <li>JNT University Anantapur</li>

            <li>Ananthapuramu - 515002</li>

            <li>Andhra Pradesh</li>
          </ul>
        </div>

        <div className="f1">
          <span className="fh">Other Links </span>
          <ul>
            <li>Registered Ph.D Scholars</li>

            <li>RTI-Act</li>

            <li>NSS Cell</li>

            <li>Events</li>

            <li>Archive</li>
            <li>Anti Ragging</li>

            <li>List of Suggested Books Indian Authors Publishers</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className="f1">
          <span className="fh">GATE Online Classes</span>
          <ul>
            <li>CSE</li>

            <li>ECE</li>

            <li>MECH</li>
          </ul>
        </div>
      </div>
      <center>
        <div className="fend p-5 bg-blue-100 text-sm">
          All © 2022 Jawaharlal Nehru Technological University, Anantapur. All
          Rights Reserved.
          <p className="text-blue-400 pt-3">
            {" "}
            Disclaimer | Copyright | Privacy Policy | Web Master | Feedback
          </p>
        </div>
      </center>
    </div>
  );
}

export default Footer;
