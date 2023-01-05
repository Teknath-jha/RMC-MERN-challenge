import React from "react";
import "./LandingPage.css";
import { Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

const LandingPage = () => {



  return (
    <div className="main">
      <Container>
        <Row>
          <div class="intro-text">
            <div>
              <h1 className="title">Welcome to Yatra</h1>
              <p className="subtitle">One safe place for all your yatras.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="primary"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
