import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/icon.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
  LET ME <span className="purple"> INTRODUCE </span> MYSELF
</h1>
<p className="home-about-body">
  I’m a dedicated software developer with over a decade of experience, always driven by the desire to solve complex problems and build impactful solutions.
  <br />
  <br />I am highly proficient in 
  <i>
    <b className="purple"> Java, Kotlin, Swift, and Objective-C </b>
  </i> 
  with extensive knowledge across languages such as
  <i>
    <b className="purple"> Python, C, Dart, PHP, and JavaScript.</b>
  </i>
  <br />
  <br />
  My areas of expertise span a wide range of software development practices, including 
  <i>
    <b className="purple"> CI/CD, automation, and infrastructure management. </b>
  </i> 
  I am passionate about building robust, scalable, and efficient solutions that are tailored to meet evolving industry demands.
  <br />
  <br />
  My approach combines technical precision with a commitment to best practices, ensuring that every project I take on is designed for lasting impact and optimal performance.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fedesenmartin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fedesenmartin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/fedesenmartin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
