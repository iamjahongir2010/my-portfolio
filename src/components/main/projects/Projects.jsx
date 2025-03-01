import React from 'react'
import style from './Projects.module.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Shucran from '../../../assets/img/projects/shucran.png'
import Portfolio from '../../../assets/img/projects/portfolio.png'
import Cornelia from '../../../assets/img/projects/cornelia.png'
function Projects() {
  return (
    <div className={style.Projects}>
      <Container>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card bg="dark" text='white' className='mt-3 mb-3'>
              <Card.Img variant="top" src={Shucran} />
              <Card.Body>
                <Card.Title>Shucran Ibrahim</Card.Title>
                <Card.Text>
                  Portfolio site for a well-known psychologist from Khujand, Tajikistan<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" text='white' className='mt-3 mb-3'>
              <Card.Img variant="top" src={Portfolio} />
              <Card.Body>
                <Card.Title>Portfolio Agency</Card.Title>
                <Card.Text>
                  One-page portfolio website for portfolio creation agency
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" text='white' className='mt-3 mb-3'>
              <Card.Img variant="top" src={Cornelia} />
              <Card.Body>
                <Card.Title>Cornelia</Card.Title>
                <Card.Text>
                  "Cornelia" game site with information, tips and reviews
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Projects