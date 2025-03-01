import React from 'react'
import style from './About.module.css'
function About() {
  return (
    <div className={style.About}>
      <h1>About me</h1>
      <h3>I am passionate about web development, working with modern technologies such as React, Bootstrap and also understand OOP.</h3>
      <div className={style.mother}>
        <div className={style.daughter}>Creating websites with HTML, CSS, JS</div>
        <div className={style.daughter}>Experience with React.js</div>
        <div className={style.daughter}>Layout with Bootstrap and CSS</div>
        <div className={style.daughter}>OOP</div>
      </div>
      
    </div>
  )
}

export default About