import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import passbox from "../../Assets/Projects/passbox.png";
import fakereviews from "../../Assets/Projects/fakereviews.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakereviews}
              isBlog={false}
              title="Fake Reviews"
              description="A web-based system that uses Natural Language Processing to analyze customer reviews on Amazon products, detect sentiment patterns, and classify them as genuine or fake to ensure trustworthy shopping experiences."
              ghLink="https://github.com/Faizhassaan/Fake-Reviews-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passbox}
              isBlog={false}
              title="Passbox-Your Password Manager"
              description="PassBox is a simple and secure password manager that allows you to save, view, and manage your personal passwords for different websites—all in one place."
              ghLink="https://github.com/Faizhassaan/PassBox-Password-Manager"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
