import React from 'react'
import style from './About.module.css'
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
function About() {
  return (
    <div className={style.About}>
      <h1>About me</h1>
      <h3>Я увлекаюсь веб-разработкой, работаю с современными технологиями, такими как React, Node.js, Bootstrap.</h3>
        <Table striped variant='dark' className={style.Table}>
          <tbody>
            <tr>
              <td>
                Создаение сайтов с HTML, CSS, JS
              </td>
            </tr>
            <tr>
              <td>Опыт работы с React.js</td>
            </tr>
            <tr>
              <td>Верстка с Bootstrap и CSS</td>
            </tr>
          </tbody>
        </Table>
    </div>
  )
}

export default About