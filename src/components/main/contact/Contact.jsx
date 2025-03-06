import React from "react";
import style from "./Contact.module.css";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

function Contact() {
  return (
    <div className={style.Contact}>
      <h1>Contacts</h1>
      <h3>Contact me by mail or social media:</h3>
      <Row className="justify-content-center mt-3">
        <Col xs="auto">
          <Button variant="warning" href="mailto:i.jaha2010@mail.ru">Email</Button>
        </Col>
        <Col xs="auto">
          <Button variant="dark " href="https://github.com/iamjahongir2010">GitHub</Button>
        </Col>
        <Col xs="auto">
          <Button variant="info" href="https://t.me/real1z">Telegram</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
