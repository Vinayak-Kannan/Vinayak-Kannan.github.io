import { Typography } from "@mui/material";
import { CSSProperties } from "react";

type TimelineContentComponentProps = {
  title: string;
  subtitle: string;
  content: string;
};

const lead_styling: CSSProperties = {
  fontSize: "25px",
  fontWeight: "bold",
};

const sub_styling: CSSProperties = {
  fontSize: "20px",
  fontWeight: "normal",
};

const sub_sub: CSSProperties = {
  fontSize: "15px",
  fontWeight: "normal",
};

const TimelineContentComponent = ({
  title,
  subtitle,
  content,
}: TimelineContentComponentProps) => {
  return (
    <div>
      <div style={lead_styling}>{title}</div>
      <div style={sub_styling}>{subtitle}</div>
      <div style={sub_sub}>{content}</div>
    </div>
  );
};

export default TimelineContentComponent;
