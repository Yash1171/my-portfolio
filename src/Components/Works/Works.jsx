import React from 'react'
import './Works.css'
import Java from "../../img/java.png"
import Html from "../../img/html.png"
import Css from "../../img/css.png"
import Cpp from "../../img/cpp.png"
import Python from "../../img/python.jpg"
import { useContext } from 'react';
import {themeContext} from '../../Context'
import Resume from "./Yash Soni Resume.pdf"
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
        <div className="awesome">
        <span style={{color: darkMode? 'white':''}}>The Languages</span>
        <span>Expertise</span>
        <span style={{paddingRight:'16rem', letterSpacing:'.21rem'}}>
            HTML, CSS, SCSS
            <br/>Python, Java, C++ <br/>
            
        </span>
        <a href={Resume} download></a>
        <button className='button s-button'>Hire Me</button>
        <div className="blur s-blur3" style={{background:'#ABF1FF94'}}></div>
        
      </div>
      
      <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Html} style={{width:'85%'}} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Css} style={{width:'85%'}} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Python} style={{width:'90%'}} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Java} style={{width:'110%'}}alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Cpp} style={{width:'90%'}} alt="" />
            </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
