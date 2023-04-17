import React from 'react'
import "./Intro.css"
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import yash from '../../img/Yash.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext } from 'react';
import {themeContext} from '../../Context'



const Intro = () => {
  const transition = {duration :2, type: 'spring' }

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white':'', letterSpacing:".04rem"}}>Hey! I Am</span>
                <span style={{letterSpacing:".4rem"}}>Yash Soni</span>
                <span style={{letterSpacing:".04rem"}}>Frontend Developer with high
                    level of experience in web designing
                    and development, producing the 
                    Quality work</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a href='https://github.com/Yash1171'>
                 <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/yash-soni-38274a221'>
                 <img src={LinkedIn} alt="" />
                </a>
                <a href='https://instagram.com/y_a_s_h_s_0_n_i?igshid=ZDdkNTZiNTM='>
                 <img src={Instagram} alt="" />                    
                </a>
                
            </div>
        </div>
        <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img
        initial={{left: '-36%'}}
        whileInView= {{left: '-24%'}}
        transition={transition}
        
        
        style={{borderRadius:'20px'}} src={yash} alt="" />
        <img src={glassesimoji} alt=''/>
        <div style={{top:'-4%', left:"68%"}}
        className='floatingdiv'>
          <FloatingDiv style={{color: darkMode? 'white':''}} image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top:'14.2rem', left:"-5.7rem"}} className='floatingdiv'>
          <FloatingDiv style={{color: darkMode? 'white':''}} image={thumbup} txt1='Amazing Design ' txt2='Expertise'/>
        </div>
        {/*blur divs*/}
        <div className="blur" style={{ background:"rgb(238 210 255)"}}></div>
        <div className="blur" 
        style={{
          background: '#C1F5FF',          
          top: '14rem',
          width:'21rem',
          height:'14rem',
          left: '-10rem',
         }}></div>
        </div>
    </div>
  )

  }
export default Intro
