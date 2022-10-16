import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './figure.css'

function Figure(props) {
  const [explore, setExplore] = useState(false);  
  

  return (
    <div className='figure'>
      <div className='container'>
        <div className='imgBx' onMouseOver={() => {setExplore(true)}} onMouseLeave={() => {setExplore(false)}} >
          <img src={props.projectData.projectImage} className="skeleton"/>
          {explore && <div className='btn-visit' style={{
            "position":"absolute",
            "top":"0%",
            "left":"50%",
            "transform":"translate(-50%,-4%) scale(0.9)",
            display:"flex",
            justifyContent:"center"
          }}
          >Overview</div>}
        </div>
      </div>
    </div>
  )
}

export default Figure