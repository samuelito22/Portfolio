import React, { useEffect, useState } from 'react'
import { Banner, Figure} from '../../index'
import './Home.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {SiIndeed} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io';
import CV from '../Home/SEdoCV.pdf'


function Home(props) {
  
  const [showProjParag, setShowProjParag] = useState(() => {
    if(window.innerWidth>450){return true}
    else{return false}
  })
  useEffect(()=>{
    window.addEventListener('resize', (event) => {
      if(window.innerWidth>450){setShowProjParag(true)}
      else{return setShowProjParag(false)}
    });
  })
  return (
    <div style={{"paddingBottom":"200px"}}>
        <Banner/>
        <div style={{"display":"flex","flexDirection":"column","justifyContent":"center","paddingTop":"30px"}}>
          <div style={{"display":"flex","flexDirection":"row","justifyContent":"center","flexWrap":"wrap"}}> 
            <div className='card'>
              <div className='container' style={{"zIndex":"4"}}>
                <a href='https://www.linkedin.com/in/samuel-edorodion-96a65b250' rel="noreferrer" target='_blank' className='imgBx'><FaLinkedinIn className='img'/></a>
                <a href='https://www.linkedin.com/in/samuel-edorodion-96a65b250' rel="noreferrer" target='_blank' className='btn'>Visit<IoIosArrowForward style={{"right":"7px", "top":"8px","position":"absolute"}}/></a>
              </div>
            </div>
            <div className='card'>
              <div className='container' style={{"zIndex":"3"}}>
                <a href='https://my.indeed.com/p/samuele-dkbk4tz' rel="noreferrer" target="_blank" className='imgBx' style={{"transform":"translateX(-5%)"}}><SiIndeed className='img'/></a>
                <a href='https://my.indeed.com/p/samuele-dkbk4tz' rel="noreferrer" target="_blank" className='btn'>Visit<IoIosArrowForward style={{"right":"7px", "top":"8px","position":"absolute"}}/></a>
              </div>
            </div>
            <div className='card'>
              <div className='container' style={{"zIndex":"2"}}>
                <a href='https://github.com/samuelito22' rel="noreferrer" target="_blank" className='imgBx'><AiFillGithub className='img'/></a>
                <a href='https://github.com/samuelito22' rel="noreferrer" target="_blank" className='btn'>Visit<IoIosArrowForward style={{"right":"7px", "top":"8px","position":"absolute"}}/></a>
              </div>
            </div>
          </div>
          <a style={{"textAlign":"center","color":"rgb(86, 86, 86)","marginTop":"10px","fontSize":"0.95rem"}} href={CV} download>More information? Download my CV</a>
        </div>
        <div style={{"display":"flex","flexDirection":"column","width":"80%","margin":"30px auto 0 auto","minHeight":"300px"}}>
          <div style={{"display":"flex","flexDirection":"row","alignItems":"center"}}>
          <h1 style={{"color":"black","fontSize":"1.5rem"}}>Projects</h1>
          {
            showProjParag &&<p style={{"color":"rgb(86, 86, 86)","marginLeft":"1%","transform":"translateY(1px)","fontSize":"0.9rem"}}>- A taste of all my works</p>
          }          <a href="/Projects" id='more'>More?</a>
          </div>
          {props.data.map( project => (
            <Figure key={project.mal_id} projectData={project}/>
            ))}
        </div>
    </div>
  )
}

export default Home