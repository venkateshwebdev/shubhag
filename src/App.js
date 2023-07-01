import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import MiniNavbar from './components/MiniNavbar';
import MainNavbar from './components/MainNavbar';
import ScrollContext from './context/scrollContext';
import { useState } from 'react';
import Footer from './components/Footer';
import Product from './containers/Product';
import UseCard from './containers/UseCard';
import About from './containers/About';
import Contact from './containers/Contact';

function App() {
  const [pos,setPos] = useState(false)
  return (
    <div className="App">
      <ScrollContext.Provider value={{pos,setPos}}>
        <Navbar />
        <Home />
        <About/>
        <Product first={"DIY ICI With"} button={"V-CONCEIVE"} des={"Easy, Smooth & Simple​" } src={"https://subhag.in/wp-content/uploads/2021/02/p1-e1588752477662.png"} id={"3hYh9-RBpo0"}  video={"Here's How to use our Product"}/>
        <UseCard f={true}/>
        <Product first={"Further Increase Chances By"} button={"ANDROWASH"} des={"Economical, Smart & Automated"} src={"	https://subhag.in/wp-content/uploads/2022/05/p2-e15887524306041.png"} id={"gdKAlF_XuxA"} idd={"r5ZkGcuAW_c"} second={true} video={"Here's How to use our Product (English)"} videoo={"हमारे उत्पाद का उपयोग कैसे करें (हिन्दी)"}/>
        <Contact />
        <Footer/>
      </ScrollContext.Provider>
    </div>
  );
}

export default App;
