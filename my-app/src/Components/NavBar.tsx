import { Chip } from "@mui/material";
import { CSSProperties } from "react";

const nav_bar_style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  justifyContent: "center",
  position: "sticky",
};

const NavBar = () => {
  return (
    <div style={nav_bar_style}>
      <Chip label="About Me!" variant="outlined" />
      <Chip
        label="Experiences"
        variant="outlined"
        onClick={() => {
          // Scroll to the experience section
          const element = document.getElementById("experience");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Chip
        label="Projects"
        variant="outlined"
        onClick={() => {
          // Scroll to the experience section
          const element = document.getElementById("project");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default NavBar;
