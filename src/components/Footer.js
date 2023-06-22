import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo/PortfolioLogo5.svg';
import navIcon1 from "../assets/img/nav-icons/nav-icon1.svg";
import navIcon2 from '../assets/img/nav-icons/nav-icon7.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img className="center" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/oswaldojsotog/" target="_blank"><img src={navIcon1} alt="" /></a>
              {/* <a href="#"><img src={navIcon2} alt="" /></a> */}
              <a href="https://github.com/OswalDev" target="_blank"><img src={navIcon2} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
