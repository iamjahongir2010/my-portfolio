import React from "react";
import style from "./Contact.module.css";
import Button from "react-bootstrap/Button";
import { Col, Row, Container } from "react-bootstrap";

function Contact() {
  return (
    <div className={style.Contact}>
        <h1>Contacts</h1>
        <h3>Свяжитесь со мной по почте или через соцсети:</h3>
        <Row className="justify-content-center mt-3">
          <Col xs="auto">
            <Button variant="danger" href="mailto:i.jaha2010@mail.ru">Email</Button>
          </Col>
          <Col xs="auto">
            <Button variant="dark" href="https://github.com/iamjahongir2010">GitHub</Button>
          </Col>
          <Col xs="auto">
            <Button variant="primary" href="https://t.me/jaha2010">Telegram</Button>
          </Col>
        </Row>
    </div>
  );
}

export default Contact;
