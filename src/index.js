import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export {default as Navbar} from './Components/Navbar/Navbar'
export {default as Banner} from './Components/Banner/Banner'
export {default as Figure} from './Components/Figure/figure'
export {default as Footer} from './Components/Footer/Footer'
export {default as Contact} from './Components/Contact/Contact'


export {default as Home} from './Pages/Home/Home'
export {default as Projects} from './Pages/Projects/Projects'
export {default as About} from './Pages/About/About'
export {default as Skills} from './Pages/Skills/Skills'
export {default as NotFound} from './Pages/NotFound/NotFound'




export {default as bannerImage} from './Assets/bannerImage.png'
export {default as LogoImage} from './Assets/logo.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);