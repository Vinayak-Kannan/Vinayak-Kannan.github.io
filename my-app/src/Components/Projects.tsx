import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  minHeight: "100vh",
};

const lead_styling: CSSProperties = {
  fontSize: "30px",
  fontWeight: "bold",
};

const Projects = () => {
  return (
    <div style={wrapper} id={"project"}>
      <div style={lead_styling}>Projects</div>
    </div>
  );
};

export default Projects;
