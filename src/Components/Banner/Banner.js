import React from 'react'
import './Banner.css'
import {bannerImage} from '../../index'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Banner() {
  
  return (
    <div className='banner'>
        <div className='container'>
            <div className='imgBx'><img src={bannerImage}/></div>
            <div className='descriptive'>
                <h1 style={{"color":"white","fontSize":"2rem", "fontFamily":"Assistant", "fontWeight":"bold"}}>Unsheathe your sword, <br/>Sculpture the unimaginable</h1>
                <p style={{"color":"white","fontSize":"0.87rem", "fontWeight":"bold", "fontFamily":"Assistant"}}>Here is where I archive all the website designs I have previously built for my and other people's usage, with reference include.</p>
                <Link to='/Projects' className='btn'>Projects <IoIosArrowForward style={{"right":"10px", "top":"7px","position":"absolute"}}/></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Banner