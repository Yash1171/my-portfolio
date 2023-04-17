import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import lenskart from '../../img/lenskartclone.jpeg'
import Netflix from '../../img/netflixclone.jpeg'
import Admin from '../../img/Admin.jpeg'
import portfolio from '../../img/portfolio.png'
import 'swiper/css'
import { useContext } from 'react';
import {themeContext} from '../../Context'

const Portfolio = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>

        <span style={{color: darkMode? 'white':''}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={25}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={lenskart} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Netflix} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Admin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={portfolio} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
