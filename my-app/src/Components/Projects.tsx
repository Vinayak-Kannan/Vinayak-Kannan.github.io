import { CSSProperties } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import test from "./ProjectImages/report_2.png";

const wrapper: CSSProperties = {
  minHeight: "100vh",
};

const lead_styling: CSSProperties = {
  fontSize: "30px",
  fontWeight: "bold",
};

const wrapper_cards: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "30px",
  justifyContent: "center",
  padding: "20px",
};

const Projects = () => {
  return (
    <div style={wrapper} id={"project"}>
      <div style={lead_styling}>Projects</div>
      <div style={wrapper_cards}>
        <Card
          className={"section"}
          sx={{
            maxWidth: 345,
            background: "none",
            border: "0.2px solid rgba(0, 0, 0, 0)",
          }}
        >
          <CardMedia sx={{ height: 140 }} image={test} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Primary Diagnosis Medical NER Prediction Pipeline
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Developed ScispaCy pipeline to parse unstructured clinician notes
              using ensemble technique to extract primary medical diagnosis and
              underlying conditions. Deployed models for inference to FastAPI
              endpoint and React application hosted on AWS
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
