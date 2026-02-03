import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-content">
          <h1>AJAI SEKAR</h1>
          <p>Full Stack Developer</p>
          <div className="contact-details">
            <p>ajaiofficial06@gmail.com</p>
            <p>+91 9361685137</p>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Ajaicoder-dot" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="linkedin.com/in/ajai-sekar-6b56a0243" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>

          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            href="https://drive.google.com/file/d/15wqRHJNaVjpEkLUY6NqlMC2DUE8QOPxQ/view?usp=drive_link"
            target="_blank"
            sx={{
              marginBottom: '20px',
            }}
            className="resume-button"
          >
            Download Resume
          </Button>

          <p className="copyright">Designed & Built by Ajai Sekar</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;