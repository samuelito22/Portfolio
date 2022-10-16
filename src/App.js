import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar, Home, Footer, Projects, About, Skills, NotFound} from './index';
import {projectImage1} from './Assets/Projects/index'
import './App.css';

const projectList = [{
  mal_id : 0,
  projectImage : projectImage1,
  projectTitle: "Personal Project",
  projectDescriptio: "This is a personal project that I have been building, which is still in progess",
  projectType: ["personal","anime","forum"],
  projectCodeLink: "N/A",
  testimony: null
}
]


function App() {
  return (
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route exact path='/' element={<Home data={projectList}/>}/>
        <Route exact path='/Projects' element={<Projects data={projectList}/>}/>
        <Route exact path='/About' element={<About />}/>
        <Route exact path='/Skills' element={<Skills/>}/>
        <Route exact path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
