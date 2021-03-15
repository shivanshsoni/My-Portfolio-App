import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.style.css";
import Button from "react-bootstrap/Button";

const FooterPanel = () => {
  return (
    <Container className="footer-style" fluid>
      <Row>
        <Col>
          <div>
            <div className="py-2" >
              <div className= "copyRight">Copyright © {new Date().getFullYear()} Shivansh Soni<br /> Made with 
                ❤️ in Himachal Pradesh, India 
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div id="contact">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mailto:shivanshsoni23@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="shivanshsoni23@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/shivansh-soni-327470135/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://github.com/shivanshsoni" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>

            </Col>
          </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterPanel;
