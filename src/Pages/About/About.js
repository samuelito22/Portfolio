import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about">
      <div className='container'>
        <h1>Background</h1>
        <p >I'm a young Italian, with african origin who has been working as a frontend
          developer. I currently read Computer Science at Durham University, and I am looking to
          specialize as a Machine Learning Scientist. In Durham Univeristy I was entitled the Durham
           Inspired Computer Science scholarship, due to my hard work and persistence in my studies.
        </p>
      </div>
      <div className='container'>
        <h1>Professional Summary</h1>
        <p>Self-motivated Web Developer with comprehensive experience managing multiple 
            clients. Passionate and hardworking to deliver on deadlines. Strong HTML, CSS, 
            and JavaScript programmer. Extensive knowledge on a JavaScript framework 
            called React JS, with experience in using MERN. Excellent in using GitHub in order 
            to be able to work with multiple web-developer.
        </p>
      </div>
      <div className='container'>
        <h1>What I Offer</h1>
        <p>My main priority is experience, hence I can build a website free of charge with a nice template provided.
        </p>
      </div>
      <div className='container'>
        <h1>Work Experience</h1>
        <p><span style={{"color":"black"}}>Web Developer - Software and more solutions:</span>
        <ul>
          <li>Created custom websites by harnessing HTML, CSS and JavaScript skills.</li>
          <li>Facilitated code reviews and pair programming to produce clean, high-quality 
          code.</li>
          <li>Enhanced front-end performance through image optimisation and clean coding 
          practices, accelerating load times.</li>
        </ul>
        </p>
      </div>
      
    </div>
  )
}

export default About