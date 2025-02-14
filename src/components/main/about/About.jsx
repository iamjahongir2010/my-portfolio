import React from 'react'
import style from './About.module.css'
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
function About() {
  return (
    <div className={style.About}>
      <h1>About me</h1>
      <h3>I am passionate about web development, working with modern technologies such as React, Bootstrap and also understand OOP.</h3>
      <Table striped variant='dark' className={style.Table}>
        <tbody>
          <tr>
            <td>
              Creating websites with HTML, CSS, JS
            </td>
          </tr>
          <tr>
            <td>Experience with React.js</td>
          </tr>
          <tr>
            <td>Layout with Bootstrap and CSS</td>
          </tr>
          <tr>
            <td>OOP</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default About