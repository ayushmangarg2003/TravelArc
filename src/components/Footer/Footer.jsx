import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div className="upper-left">
          <h1 className="NavbarLogo2">
            TRAVEL<span className="red">arc.</span>
          </h1>
          <p>Choose Your Favourite Destination</p>
        </div>
        <div className="upper-right">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
      <div className="lower">
        <div className="grp">
          <h4>Project</h4>
          <p>Changlog</p>
          <p>Status</p>
          <p>Licence</p>
          <p>All Versions</p>
        </div>
        <div className="grp">
          <h4>Community</h4>
          <p>Github</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Instagram</p>
        </div>
        <div className="grp">
          <h4>Help</h4>
          <p>Support</p>
          <p>Troubleshooting</p>
          <p>Contact us</p>
        </div>
        <div className="grp">
          <h4>Others</h4>
          <p>Terms & Cond.</p>
          <p>Privacy Policy</p>
          <p>Services</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
