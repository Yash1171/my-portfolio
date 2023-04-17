import React from 'react'
import './Testinomials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/pagination';
import 'swiper/css'

import Pic1 from '../../img/Vmapcrime.png'
import Pic2 from '../../img/Bitsbytes.png'
import { Pagination } from 'swiper';

const Testinomials = () => {
  const clients=[
    {
      img: Pic1,
      desc:
      "Project aims to develop an efficient system for geological mapping of crimes. The system is designed to assist police personnel in making informed decisions on the allocation of time and resources by providing a user-friendly dashboard with features such as adding FIRs with geological coordinates, mapping them on the map, and identifying hotspots based on filters such as crime type, date, and penal code. We're excited to share how our project can enhance public safety and help law enforcement respond to incidents quickly and effectively. "
    }]
    const certify=[
      {
        img: Pic2,
        desc: "The course teaches about the binary numbering system, the OSI model, and network configuration and troubleshooting, and prepares them for careers in network administration, cybersecurity, and software engineering. Significance of networking and digital communication in modern times and practical applications on this course material."
      },
    ]
    
      
    
    
  
  return (
    <div className="t-wrapper" id='Testinomials'>
      <div className="t-heading">
        <span>My Major<br/></span>
        <span>Project: </span>
        <span>VMapCrimes<br/></span>
        <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background: "skyblue"}}></div>
      </div>
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}>
        {clients.map((client, index) =>{
          return(
            <SwiperSlide key={index}>
              <div className="testinomial">
              <img src={client.img} alt="" />
              <span style={{fontFamily:"sans-serif", textAlign:"center" }}>{client.desc}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="t-heading-2">
        <span>My<br/></span>
        <span>Certification: <br/></span>
        
        <span>Bits and Bytes of Computer Networking<br/></span>
        <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background: "skyblue"}}></div>
      </div>
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}>
        {certify.map((certify, index) =>{
          return(
            <SwiperSlide key={index}>
              <div className="testinomial">
              <img src={certify.img} alt="" />
              <span style={{fontFamily:"sans-serif", textAlign:"center" }}>{certify.desc}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testinomials
