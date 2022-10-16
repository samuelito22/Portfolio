import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import {LogoImage} from '../../index'
import {AiOutlineMenu , AiFillHome } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io';
import { BiNews } from 'react-icons/bi';
import {HiTemplate} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Contact } from '../../index'



function Navbar() {

  const [openSidebar, setOpenSidebar] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);

  let sidebarRef = useRef();
  
  useEffect(() => {
    document.addEventListener("mousedown",(event) => {        
      try {
        if(!sidebarRef.current.contains(event.target)){  
          setOpenSidebar(false)
          
        }
      } catch (e) {
        //pass;
      }
  })
  })
  

  function Sidebar(){
    
    function SidebarItem(props){
      return(
        <Link className='item' to={props.link} onClick={() => setOpenSidebar(false)}><props.icon style={{"transform":"translate(0,-1px) scale(1.2)","paddingRight":"8px"}}/>{props.name}<IoIosArrowForward style={{"position":"absolute","right":"10px"}}/></Link>
      )
    }
  
    return(
      <div className='sidebar' ref={sidebarRef}>
        <div className='container'>
          <SidebarItem name='Home' link='/' icon={AiFillHome}/>
          <SidebarItem name='Projects' link='/Projects' icon={HiTemplate}/>
          <SidebarItem name='About Me' link='/About' icon={BsFillPersonLinesFill}/>
          <SidebarItem name='Skills' link='/Skills' icon={BiNews}/>
        </div>
        
        <div style={{"position":"absolute","bottom":"0"}} id='sidebar-descriptionBox'>
        <div style={{"position":"relative"}}><img style={{"height":"100px", "transform":"translate(-50%,-65%)","position":"absolute","left":"50%"}} src={LogoImage}/></div>
        <p style={{"textAlign":"center"}}>© Copyright 2022 ZoroCut - All Rights Reserved</p>
        </div>
      </div>
    )
  }

  return (
    <div className='navbar'>
        {openSidebar && <Sidebar />}
        {openContactForm && <Contact setOpenContactForm = {setOpenContactForm} />}
        <div className='container'>
            <AiOutlineMenu className="menu" onClick={() => setOpenSidebar(true)}/>
            <Link className='logo' to='/'><img style={{"height":"70px", "transform":"translate(-20px,8px)"}} src={LogoImage}/><span style={{"transform":"translate(-35px,20px)"}}>ZoroCut</span></Link>
            <div className='option'>
                <Link className='link' to='/Projects'>PROJECTS</Link>
                <Link className='link' to='/About'>ABOUT ME</Link>
                <Link className='link' to='/Skills'>SKILLS</Link>
            </div>
            <div className='btn' onClick={() => setOpenContactForm(true)}>Chat</div>
        </div>
    </div>

  )
}


export default Navbar