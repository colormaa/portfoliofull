import React,{useState} from 'react'
import './App.css';
import NavBar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App=()=>{
  const [active, setActive]=useState('home')
  const handleActive=(itemname)=>{
    setActive(itemname)
  }
  return (
    <div>
      <NavBar active={active} handleSetActive={handleActive}/>
      <Home />
      <Gallery/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
