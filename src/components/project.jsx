import React from "react";
import { Card, Badge, Container, Row, Col } from "react-bootstrap";
import './project.css';
import Header from "./Header";
import BottomNav from "./BottomNav";
const projects = [
  {
    title: "AI Career Counsellor Bot",
    tags: ["OpenAI", "Python", "Flask", "ML"],
    description:
      "Chatbot that guides students on career paths based on interests using OpenAI or Scikit-learn.",
  },
  {
    title: "Real-Time Weather Alert System",
    tags: ["Cloud", "Node.js", "API", "AWS Lamba"],
    description:
      "Get SMS or email alerts for severe weather using AWS Lambda, OpenWeatherMap API, and Twilio.",
  },
  {
    title: "Habit Tracker Mobile App",
    tags: ["Flutter", "Firebase", "Dart"],
    description:
      "A beautiful app to track habits with daily goals, push notifications, and dark mode.",
  },
  {
    title: "Smart Recipe Recommender",
    tags: ["Python", "Scikit-learn", "Spoonacular API"],
    description:
      "A app that suggests receiped based on ingredients & dietary preferences",
  },
  {
    title: "Invoice Generator CLI Tool",
    tags: ["Python", "CLI", "PDFKit"],
    description:
      "Terminal-based tool to generate PDF invoices using ReportLab or PDFKit with JSON templates.",
  },
  {
    title: "Number Plate Recognition System",
    tags: ["Python", "OpenCV", "Tesseract"],
    description:
      "Detects license plates and extracts text using a webcam",
  },
  {
    title: "Spotify Song Mood Classifier",
    tags: ["Python" ,"Spotify API", "Streamlit"],
    description:
      "Predicts mood of songs based on metadata and lyrics. Visualized using Streamlit.",
  },
  {
    title: "IoT Smart Plant Monitor",
    tags: ["Blynk", "Arduino", "MQTT"],
    description:
      "Monitors plant moisture and sends updates via Blynk/MQTT. Dashboard via React or Flutter.",
  },
  {
    title: "Notion-like Markdown Editor",
    tags: ["React", "MongoDB", "Tiptap/Draft.js"],
    description:
      "Custom Notion clone with markdown support, block editor, theme switch, and PDF export.",
  },
  {
    title: "Dockerized Resume Parser",
    tags: ["Docker", "FastAPI", "spaCy"],
    description:
      "Parses resumes to structured JSON using spaCy. Deployable with Docker on Heroku or Render.",
  },
  {
    title: "E-commerce Admin Dashboard",
    tags: ["Vue.js/ReactJS", "Charts.js", "Django"],
    description:
      "Shows orders, profits, and inventory with filters and Chart.js visualizations. Supports roles.",
  },
];

export default function TechProjects() {
  return (
    <>
<Header />
    <Container>
      <h1 className="hero-section">Projects I Recommend</h1>
      <Row>
        {projects.map((proj, idx) => (
          <Col key={idx} xs={12} md={6} className="mb-4">
            <Card className="project-card">
  <Card.Body>
    <Card.Title>{proj.title}</Card.Title>
    <Card.Text>{proj.description}</Card.Text>
    <div className="d-flex flex-wrap">
      {proj.tags.map((tag, i) => (
        <Badge key={i} className="badge">
          {tag}
        </Badge>
      ))}
    </div>
  </Card.Body>
</Card>
          </Col>
        ))}
      </Row>
    </Container>
    <BottomNav />
    </>
  );
}
