import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from "./Yash Soni Resume.pdf"
import { useContext } from 'react';
import {themeContext} from '../../Context'

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
      
      <div className="awesome">
        <span style={{color: darkMode? 'white':''}}>My Awesome</span>
        <span>services</span>
        <span>
        Optimizing the user experience.
        Using HTML, JavaScript and CSS <br/>to bring concepts to life.
        <br/>Developing and maintaining the user interface.
        <br/>Implementing design on mobile websites.
        <br/>Creating tools that improve site interaction regardless of the browser.<br/>
        Fixing bugs and testing for usability.
            
        </span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
        </a>
      </div>
      <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>

      <div className="cards">
        <div style={{left:'15rem'}}>
        <Card
            emoji={HeartEmoji}
            heading = {'Design'}
            detail = {'Figma, Photoshop, Adobe Xe, Video Editing'}/>
        </div>

        <div style={{top:'14rem', left:'-4rem'}}>
        <Card
            emoji={Glasses}
            heading = {'Developer'}
            detail = {'Html, Css, Javascript, Reactjs, Java'}/>
        </div>

        <div style={{top:'20rem', left:'12rem'}}>
        <Card
            emoji={Humble}
            heading = {'UI/UX'}
            detail = {'Just beginner in UI and UX Designing'}/>
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
      </div>
    </div>
  )
}

export default Services
