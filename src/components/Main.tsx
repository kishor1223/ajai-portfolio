import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';
import ParticleBackground from "./ParticleBackground";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <ParticleBackground />
        {/* <div className="image-wrapper">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Avatar" />
        </div> */}
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Ajaicoder-dot" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="linkedin.com/in/ajai-sekar-6b56a0243" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>AJAI SEKAR</h1>
          <p>Full Stack Developer</p>

          <div className="resume-btn">
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href="https://drive.google.com/file/d/15wqRHJNaVjpEkLUY6NqlMC2DUE8QOPxQ/view?usp=drive_link"
              target="_blank"
              sx={{
                marginTop: '15px',
              }}
              className="resume-button"
            >
              Download Resume
            </Button>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Ajaicoder-dot" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="linkedin.com/in/ajai-sekar-6b56a0243" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;