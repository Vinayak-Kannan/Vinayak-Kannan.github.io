import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React, { CSSProperties } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const wrapper: CSSProperties = {
  minHeight: "90vh",
};

const lead_container: CSSProperties = {
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  fontSize: "30px",
  fontWeight: "bold",
};

const name: CSSProperties = {
  fontSize: "50px",
};

const i_am: CSSProperties = {
  fontSize: "20px",
  fontWeight: "normal",
};

const about_me_text = [
  "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.",
  "My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.",
  "When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds",
];

const about_me_style: CSSProperties = {
  ...lead_container,
  fontSize: "20px",
  fontWeight: "normal",
  gap: "30px",
};

const icon_style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "10px",
};

const Lead = () => {
  return (
    <div style={wrapper}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <div style={lead_container}>
            <div style={name}>VINAYAK (VIN) KANNAN</div>
            <div>Machine Learning Engineer @ Columbia</div>
            <div style={i_am}>
              I build ML systems / deployed applications that drive tangible,
              business-backed value
            </div>
            <div style={icon_style}>
              <LinkedInIcon fontSize={"large"} />
              <EmailIcon fontSize={"large"} />
            </div>
          </div>
        </Grid>
        <Grid xs={6}>
          <div style={about_me_style}>
            {about_me_text.map((text, index) => (
              <div key={index}>{text}</div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Lead;
