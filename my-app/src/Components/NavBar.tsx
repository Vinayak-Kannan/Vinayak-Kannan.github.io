import { Chip } from "@mui/material";
import { CSSProperties } from "react";

const nav_bar_style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  justifyContent: "center",
};

const NavBar = () => {
  return (
    <div style={nav_bar_style}>
      <Chip label="About Me!" />
      <Chip label="Experiences" variant="outlined" />
      <Chip label="Projects" variant="outlined" />
    </div>
  );
};

export default NavBar;
