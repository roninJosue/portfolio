import React  from "react";
import { Container } from "react-bootstrap";
import SocialNetwork from "../SocialNetwork";

const Footer = () => {

  return (
    <footer className="footer navbar-static-bottom">
      <Container className='d-flex justify-content-center'>
        <SocialNetwork footer={true} />
      </Container>
    </footer>
  );
};

export default Footer;
