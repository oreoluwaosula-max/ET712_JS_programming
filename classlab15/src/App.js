import './App.css';
import imgpinkflower from './images/pinkflower.jpg'
import Navbars from './components/navbars'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const username ="user123"
  return (
    <>
    <div className="App">
      <BrowserRouter> 
      <Navbars />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes> 
      </BrowserRouter>
    </div>

    <div className="App">
     <h1 style={{color: "darkblue", textAlign: "center"}}>Ore-Oluwa Osula</h1>
     <h2> Welcome to React JS</h2>
     <p>Embedded variable</p>
     <p>{username} user had id number {10+5}</p>

     <figure>
       <img src={imgpinkflower} alt="Pink Flower" style={{width: "100%", borderRadius: "1rem"}} />
     </figure>
    </div>
    </>
  );
}

export default App;
