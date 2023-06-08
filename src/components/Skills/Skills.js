import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Skills.css';

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
       {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  ]
}
const Skills = () => {
  return (
    <div className='skills container p-3 mt-5' id='skills'>
      <div className='row'>
        <div className='col-12 d-flex flex-column align-items-center'>
            <h2 className='text-white fw-bold mt-4'>Skills</h2>
            <p className='text-white'>you can see my skills here</p>
        </div>
      </div>
      <div className='skills-slider row mt-3 mx-auto'>
        <div className='col-12'>
            <Slider {...settings}>
              <div className='text-white d-flex flex-column align-items-center'>
                <div className='outer'>
                  <div className='inner'>
                     <h4 id='number'>96%</h4>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='skillSvg'>
                    <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#942f71" />
                          <stop offset="100%" stop-color="#5f50bc" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" id='cr1'/>
                </svg>
                <div className='skill'>
                  <h2 className='mt-2'>React.js</h2>
                </div>
              </div>
              <div className='text-white d-flex flex-column align-items-center'>
                <div className='outer'>
                  <div className='inner'>
                     <h4 id='number'>95%</h4>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='skillSvg'>
                    <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#942f71" />
                          <stop offset="100%" stop-color="#5f50bc" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" id='cr2'/>
                </svg>
                <div className='skill'>
                  <h2 className='mt-2'>Javascript</h2>
                </div>
              </div>
              <div className='text-white d-flex flex-column align-items-center'>
                <div className='outer'>
                  <div className='inner'>
                     <h4 id='number'>97%</h4>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px"  className='skillSvg'>
                    <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#942f71" />
                          <stop offset="100%" stop-color="#5f50bc" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" id='cr3'/>
                </svg>
                <div className='skill'>
                  <h2 className='mt-2'>HTML</h2>
                </div>
              </div>
              <div className='text-white d-flex flex-column align-items-center'>
                <div className='outer'>
                  <div className='inner'>
                     <h4 id='number'>97%</h4>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px"  className='skillSvg'>
                    <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#942f71" />
                          <stop offset="100%" stop-color="#5f50bc" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" id='cr4'/>
                </svg>
                <div className='skill'>
                  <h2 className='mt-2'>CSS</h2>
                </div>
              </div>
              <div className='text-white d-flex flex-column align-items-center'>
                <div className='outer'>
                  <div className='inner'>
                     <h4 id='number'>98%</h4>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px"  className='skillSvg'>
                    <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#942f71" />
                          <stop offset="100%" stop-color="#5f50bc" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" id='cr5'/>
                </svg>
                <div className='skill'>
                  <h2 className='mt-2'>Bootstrap</h2>
                </div>
              </div>
            </Slider>
        </div>
      </div>
    </div>
  )
}
export default Skills;