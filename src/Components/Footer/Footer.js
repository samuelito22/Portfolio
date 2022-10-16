import React from 'react'
import './Footer.css'
import {LogoImage} from '../../index'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
        <div style={{"display":"flex","flexDirection":"row","margin":"0 auto","transform":"translateX(-19px)"}}><img style={{"height":"70px", "width":"70px", "transform":"translate(15px,4px)"}} src={LogoImage}/><h3 style={{"color":"white","fontSize":"1.2rem"}}>ZoroCut</h3></div>
        <p style={{"textAlign":"center","margin":"0 auto","fontSize":"0.9rem","color":"white"}}>Hi, I'm a frontend developer,<br/>Welcome to my personal portfolio</p>
        <p style={{"color":"white","textAlign":"center","marginBottom":"auto"}}>© Copyright 2022 ZoroCut - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer