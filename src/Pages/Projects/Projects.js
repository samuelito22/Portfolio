import React, { useEffect, useState } from 'react'
import './Projects.css'
import { Figure } from '../../index'
import {HiOutlineFilter} from 'react-icons/hi'


function Projects(props) {
  const [showProjParag, setShowProjParag] = useState(() => {
    if(window.innerWidth>476){return true}
    else{return false}
  })
  useEffect(()=>{
    window.addEventListener('resize', (event) => {
      if(window.innerWidth>476){setShowProjParag(true)}
      else{return setShowProjParag(false)}
    });
  })
  return (
    <div style={{"paddingBottom":"170px", "paddingTop":"50px"}}>
        <div style={{"display":"flex","flexDirection":"column","width":"80%","margin":"0 auto","minHeight":"300px"}}>
        <div style={{"display":"flex","flexDirection":"column"}}>
            <div style={{"display":"flex","flexDirection":"row","alignItems":"center"}}>
            <h1 style={{"color":"black","fontSize":"1.5rem"}}>Projects</h1>
            {
              showProjParag &&<p style={{"color":"rgb(86, 86, 86)","marginLeft":"1%","transform":"translateY(1px)","fontSize":"0.9rem"}}>- A taste of all my works</p>
            }
            <div className='btn-filter' style={{"cursor":"no-drop"}}><HiOutlineFilter style={{"color":"white","transform":"translate(-5px,3px) scale(1.3)"}}/>Filter</div>
            </div>
            <div style={{"display":"flex","flexWrap":"wrap"}}>
            {props.data.map( project => (
            <Figure key={project.mal_id} projectData={project}/>
            ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects