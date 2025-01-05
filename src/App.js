import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skillset from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
const App = () =>{
  return(
    
      
        <>
        <div>
          <Navbar/></div>
        
      
        <div id="section1">
        <Home/> </div>
        <div id="">
        <Skillset/></div>
        <div id="section3">
        <Projects/></div>
        <div id="section4">
        <Contact/></div>
        </>
    
  );
}
export default App;