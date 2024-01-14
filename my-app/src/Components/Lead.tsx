import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React, { CSSProperties, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PianoIcon from "@mui/icons-material/Piano";
import { IconButton, Snackbar } from "@mui/material";
// @ts-ignore
import cool_again from "../Audio/CoolAgain.wav";
// @ts-ignore
import little_talks from "../Audio/Little Talks.wav";
// @ts-ignore
import save_dat_money from "../Audio/save_dat_money.m4a";
// @ts-ignore
import thousand_miles from "../Audio/Thousand Miles.wav";
// @ts-ignore
import tonight_tonight from "../Audio/Tonight Tonight.wav";
// @ts-ignore
import combined from "../Audio/Combined.wav";
// @ts-ignore
import HeadShot from "../Audio/Headshot.jpeg";

const wrapper: CSSProperties = {
  minHeight: "70vh",
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
  "In 2019, I got the chance to taste Machine Learning through a Marketing Analytics course at The University of Michigan. Ever since, I tumbled head first into technology and have never looked back.",
  "After graduating from The University of Michigan, I joined McKinsey & Company as a consultant in Cloud / Cybersecurity. After leaving, I developed my own startup, worked as a SWE, and am now pursuing my Masters in Computer Science at Columbia University.",
  "My main focus these days is research in NLP. In particular, I'm interested in building scalable, performant ML systems.",
  "When I’m not at the computer, I’m usually playing the piano, working out, or enjoying international cuisine (I used to live in Japan for 4 years, and South Africa for 6 years)!",
];

const about_me_style = {
  ...lead_container,
  fontSize: "20px",
  fontWeight: "normal",
  gap: "30px",
  borderRadius: "1%",
  padding: "20px",
  "&:hover": {
    border: "0.2px solid black",
  },
};

const icon_style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "10px",
};

const piano_style: CSSProperties = {
  fontSize: "20px",
  textAlign: "left",
};

const headshot_style: CSSProperties = {
  width: "300px",
  height: "300px",
  borderRadius: "1%",
  border: "1px solid white",
  zIndex: 10,
  padding: "0px",
};

const Lead = () => {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const [open, setOpen] = React.useState(false);
  const [song, setSong] = useState("");
  const [playing, setPlaying] = useState(false);

  const play = async () => {
    if (playing) {
      return;
    }
    setSong("Now Playing: Vin's Deep Learning Jams");
    let audio = new Audio(combined);
    await audio.play();
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{ minHeight: "90vh" }}>
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
                <LinkedInIcon
                  fontSize={"large"}
                  onClick={async () => {
                    // Open LinkedIn
                    window.open(
                      "https://www.linkedin.com/in/vinayakkannan/",
                      "_blank",
                    );
                  }}
                  sx={{ cursor: "pointer" }}
                />
                <EmailIcon
                  fontSize={"large"}
                  onClick={async () => {
                    // Open Email
                    window.open("mailto: vinayak.kannan.1998@gmail.com");
                  }}
                  sx={{ cursor: "pointer" }}
                />
              </div>
              <img
                src={HeadShot}
                className={"section"}
                style={headshot_style}
              />
            </div>
          </Grid>
          <Grid xs={6}>
            <div style={about_me_style} className={"section"}>
              {about_me_text.map((text, index) => (
                <div key={index}>{text}</div>
              ))}
              <div style={piano_style}>
                In my free time, I'm exploring methods combining deep learning
                with music. Click the piano to hear a personalization project
                I'm working on, where I've transformed some of my favorite songs
                on Spotify into jazzy cafe piano tunes!
              </div>
              <PianoIcon
                fontSize={"large"}
                onClick={async () => {
                  setPlaying(true);
                  await play();
                }}
                sx={{ cursor: "pointer" }}
              />
            </div>
          </Grid>
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={1000 * 140}
          onClose={handleClose}
          message={song}
        />
      </div>
    </div>
  );
};

export default Lead;
