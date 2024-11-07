import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fede Senmartin</span> from <span className="purple">Buenos Aires, Argentina</span>.
            <br />
            With over 10 years in the software development industry, I specialize in delivering high-quality, performance-driven solutions. My expertise spans a wide range of languages, frameworks, and infrastructure knowledge, making me adaptable and driven by a commitment to excellence.
            <br />
            <br />
            Outside of work, I’m passionate about staying active through sports, sharing insights and experiences through blogging, and exploring new places while traveling. I find inspiration in connecting with diverse cultures and people who share these interests.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovation distinguishes between a leader and a follower."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
