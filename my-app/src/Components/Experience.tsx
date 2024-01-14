import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { CSSProperties } from "react";
import TimelineContentComponent from "./TimelineContentComponent";

const lead_styling: CSSProperties = {
  fontSize: "30px",
  fontWeight: "bold",
};

const wrapper = {
  minHeight: "100vh",
};

const Experience = () => {
  return (
    <div style={wrapper} id={"experience"}>
      <div style={lead_styling}>Experience</div>
      <div style={{ fontStyle: "italic", fontSize: "15px" }}>
        For more information, please reach out to me at my social media handles
        above!
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineContentComponent
              title={"INfACT (Research with Dr. d'Almeida)"}
              subtitle={"Machine Learning Engineer"}
              content={
                "Deployed fine-tuned BERTopic pipeline to label course syllabi / descriptions in order to help educators quantify market demand for skills taught in curriculum"
              }
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineContentComponent
              title={"StartProto"}
              subtitle={"Software Engineer"}
              content={
                "Led a team of 5 developers to deliver core product features (e.g., PLG) for a ERP SaaS startup. Partnered with designers / sales to iterate on features and execute roadmap"
              }
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineContentComponent
              title={"McKinsey & Company"}
              subtitle={"Junior Engagement Manager / Business Analyst"}
              content={
                "Led teams of technical experts to drive Cloud / Cybersecurity transformations for Fortune 500 companies. Partnered with QuantumBlack MLE's / Data Scientists to deploy Machine Learning models for major telecommunication clients"
              }
            />

            <TimelineContentComponent
              title={"Okane"}
              subtitle={"Founder"}
              content={
                "Developed Chrome Extension leveraging Plaid API, Google Firestore, and Google Functions to visualize user's budget / impact of potential purchase during online shopping journey"
              }
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Graduated from The University of Michigan 〽️
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Interned at P&G as a Brand Manager</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2016
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Graduated from The American School in Japan 🇯🇵
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experience;
