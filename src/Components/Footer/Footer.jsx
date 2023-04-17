import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>ysoni1802@gmail.com</span>
            <span>+91-9193649245</span>
            <div className="f-icons">
                <a href='https://instagram.com/y_a_s_h_s_0_n_i?igshid=ZDdkNTZiNTM='><Insta color='white' size='3rem'/></a>
                <a href='https://www.linkedin.com/in/yash-soni-38274a221'><LinkedIn color='white' size='3rem'/></a>
                <a href='https://github.com/Yash1171'><Github color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
