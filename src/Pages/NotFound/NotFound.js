import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{"paddingBottom":"170px", "paddingTop":"50px",textAlign:"center"}}>
        <p><span style={{fontSize:"4.5rem","fontFamily":"Nunito","fontWeight":"700",color:"#73b17a"}}>Hmmm...</span><br/>
        <span style={{fontSize:"1.3rem","fontFamily":"Nunito","fontWeight":"700"}}>404 - Page not found</span><br/>
        <span style={{fontSize:"0.9rem","fontFamily":"Nunito","fontWeight":"700","color":"rgb(57, 56, 56)"}}>It seems the page you are looking
        for does not exist or it might have been removed. Please go back to the homepage.</span><br/></p>
          <Link to="/" className='btn-filter'>Home</Link>
        
    </div>
  )
}
