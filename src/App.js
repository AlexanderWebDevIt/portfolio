import './App.css';
import React from 'react'
import Header from "./Components/Header/Header";
import { Route} from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Navbar from "./Components/Navbar/Navbar";
import Works from "./Components/Works/Works";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
      <div className="wrapper">
        <div className="Header" >
            <Header />
        </div>
        <div className="Navbar" >
          <Navbar/>
        </div>
        <div className="Container" >
            <Route path='/skills' render={ () => <Skills />}/>
            <Route path='/blog' render={ () => <Blog/>}/>
            <Route path='/works' render={ () => <Works/>}/>
        </div>
      </div>
  );
}

export default App;
