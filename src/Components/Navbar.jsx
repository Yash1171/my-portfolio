import React from 'react'
import './Navbar.css'
import Toggle from './Toggle/Toggle'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Yash</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:"none"}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                      <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                        
                    <li>Services</li> </Link>
                    <Link spy={true} to='Experiences' smooth={true} activeClass='activeClass'>
                        
                    <li>Experience</li> </Link>
                    <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                        
                    <li>Portfolio</li> </Link>
                    <Link spy={true} to='Testinomials' smooth={true} activeClass='activeClass'>
                        
                    <li>Project</li> </Link>
                </ul>
            </div>
            <button className="button">
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                Contact
            </Link>    
            </button>
        </div>
    </div>
  )
}

export default Navbar
