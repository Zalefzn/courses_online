import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Edspert.id</h5>
              <p>
                Edspert.id adalah sebuah tempat belajar online yang dapat
                membantu kamu dalam mengembangkan keahlian kamu
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Open Time</h5>
            <ListGroup className="open__time-list">
              <ListGroupItem className=" open__time-item border-0 ps-0">
                <span>Sunday - Friday</span>
                <p>9:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" open__time-item border-0 ps-0">
                <span>Saturday-Monday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="open__time-list">
              <ListGroupItem className=" open__time-item border-0 ps-0">
                <p>Location: Bandung, Jawa Barat</p>
              </ListGroupItem>
              <ListGroupItem className=" open__time-item border-0 ps-0">
                <span>Phone: 08129003440</span>
              </ListGroupItem>

              <ListGroupItem className=" open__time-item border-0 ps-0">
                <span>Email: Rizalfzn@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, website made by Rizal Fauzan. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://github.com/Zalefzn">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="https://www.instagram.com/rizal.fzn">
                  <i class="ri-instagram-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to="https://www.linkedin.com/in/rizal-fauzan-36785623b/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
