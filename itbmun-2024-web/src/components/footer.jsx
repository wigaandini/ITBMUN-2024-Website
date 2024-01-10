import React from "react";
import "../styles/footer.css";
import Instagram from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  const igURL = "https://www.instagram.com/itbmun/";
  return (
    <div className="Footer">
      <div className="SocMed">
        <p>
          <a href={igURL} target="_blank" rel="noopener noreferrer">
          <Instagram /> </a>
          <a href="mailto:itbmun2024@gmail.com">
          <EmailIcon /> </a>
        </p>
        <p className="Copyright"> &copy; ITBMUN 2024 </p>
      </div>
    </div>
  );
}

export default Footer;
