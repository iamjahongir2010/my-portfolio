import React from 'react'
import style from './Home.module.css'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from '../projects/Projects';
function Home() {
  return (
    <div className={style.Home}>
      <h1>HI, <b>I'M</b> Jahongir</h1>
      <h3>Frontend-developer | React.js | Bootstrap</h3>
      <Button href="/project" variant="dark">MY PROJECTS</Button>

    </div>
  )
}

export default Home