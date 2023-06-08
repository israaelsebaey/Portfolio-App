import React from 'react';
import Typed from 'react-typed';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => { 
  return (
    <div className='container home' id='home'>
        <div className='row'>
            <div className='home-content col-lg-6 col-md-12 d-flex flex-column justify-content-center'>
                <div className='title'>
                    <h4>welcome all in my portfolio</h4>
                </div>
                <div className='wrapper mt-3'>
                    <div className='static-txt'>
                        <h3>Hi! I'm Esraa ELsebay</h3>
                    </div>
                    <div className='dynamic-txts'>
                    <h3>
                    <Typed
                        strings={[
                        'FrontEnd Developer',
                        'UI Designer',
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop 
                    />
                    </h3>
                    </div>
                </div>
                <div className='desc mt-3'>
                    <p>Passionate FrontEnd developer || ITI Graduate with 1+ years of experience, I have a deep understanding of front-end technologies
                       with strong proficiency in React.js, Redux & Redux toolkit, Javascript, Advanced Javascript, ES6, HTML & HTML5,
                       CSS & CSS3, responsive design using Bootstrap5 aiming to develop myself, leverage my skills and working on projects
                       to get a better understanding of the industry to gain more experience and grow in a collaborative team environment.
                    </p>
                    <div className='resume'>
                        <a className='btn'
                        href='EsraaELsebaey.pdf ' download
                        >Resume</a>
                        <a className='btn  mx-3'
                        target='_blank' href='https://drive.google.com/drive/u/0/folders/1r3_EZY5-Y8f8f39Ok9K7vby7XgH27Ze3'
                        >Certificates</a>
                    </div>
                </div>
                <div className='connect mt-3 d-flex'>
                   <h4>Let's Connect</h4>
                   <h4>
                     <a href='#connect'><FontAwesomeIcon icon={faArrowCircleRight} className='arrow-icon'/></a>
                   </h4>
                </div>
            </div>
           <div className='col-lg-6 d-lg-flex  d-none justify-content-end'>
                <img src='images/header-img.svg' />
            </div>
        </div>
    </div>
  )
}
export default Home;
