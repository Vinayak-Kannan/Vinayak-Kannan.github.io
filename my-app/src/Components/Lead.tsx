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
  "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.",
  "My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.",
  "When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds",
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
    setSong("Now Playing: Little Talks - Of Monsters and Men (Jazzified)");
    let audio = new Audio(little_talks);
    await audio.play();
    setOpen(true);
    await sleep(31000);
    setSong("Now Playing: Save Dat Money - Lil Dicky (Jazzified)");
    audio = new Audio(save_dat_money);
    await audio.play();
    setOpen(true);
    await sleep(31000 * 2);
    setSong("Thousand Miles - Vanessa Carlton (Jazzified)");
    audio = new Audio(thousand_miles);
    await audio.play();
    setOpen(true);
    await sleep(31000 * 3);
    setSong("Tonight Tonight - Hot Chelle Rae (Jazzified)");
    audio = new Audio(tonight_tonight);
    await audio.play();
    setOpen(true);
    await sleep(31000 * 4);
    setSong("Cool Again - Shoffy (Jazzified)");
    audio = new Audio(cool_again);
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
              <img src={HeadShot} style={headshot_style} />
            </div>
          </Grid>
          <Grid xs={6}>
            <div style={about_me_style} className={"section"}>
              {about_me_text.map((text, index) => (
                <div key={index}>{text}</div>
              ))}
              <div style={piano_style}>
                I also used to be a competitive pianist. In my free time, I'm
                exploring methods combining deep learning with music
              </div>
              <div style={piano_style}>
                Click the piano to hear a personalization project I'm working
                on, where I've transformed some of my favorite songs on Spotify
                into jazzy cafe piano tunes!
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
          autoHideDuration={25000}
          onClose={handleClose}
          message={song}
        />
      </div>
    </div>
  );
};

export default Lead;
