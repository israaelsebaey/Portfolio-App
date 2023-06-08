import React, { useEffect, useRef, useState } from 'react';
import {faLinkedinIn,faGithubAlt,faBehance} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sling as Hamburger } from 'hamburger-react';
import './Header.css';

const Header = () => {
  const [activeLink,setActiveLink]=useState('home');
  const updateActiveLink=(e)=>{
     setActiveLink(e.target.name)
  }
  const navRef=useRef(null);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
       const scrollVallue=window.scrollY;
       if(scrollVallue<10){
         navRef.current.classList.remove('navBar-bg')
       }
       else{
        navRef.current.classList.add('navBar-bg')
       }
    })
  },[])
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" ref={navRef} >
        <div className="container-lg container-fluid  p-3">
            <a className="navbar-brand text-white fw-bold" href="#">ESRAA ELSEBAEY</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <Hamburger color="#fff" className='icon'/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                    <li className="nav-item">
                    <a className={activeLink==='home'? 'active nav-link':'nav-link text-white'} 
                    name='home'
                    href='#home'
                    onClick={updateActiveLink}
                    >
                    Home
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className={activeLink==='skills'? 'active nav-link':'nav-link text-white'} 
                    name='skills'
                    href='#skills'
                    onClick={updateActiveLink}
                    >
                    Skills
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className={activeLink==='projects'? 'active nav-link':'nav-link text-white'} 
                    name='projects'
                    href='#projects'
                    onClick={updateActiveLink}
                    >
                    Projects
                    </a>
                    </li>
                    <li className="nav-item social-media d-flex mt-1">
                        <a className='social-media-link text-white d-flex justify-content-center align-items-center'
                        href='https://www.linkedin.com/in/israa-elsebaey-367052234/' target='_blank'
                        >
                        <FontAwesomeIcon icon={faLinkedinIn} className='icons'/>
                        </a>
                        <a className='social-media-link text-white d-flex justify-content-center align-items-center'
                        href='https://github.com/israaelsebaey?tab=repositories' target='_blank'
                        >
                        <FontAwesomeIcon icon={faGithubAlt} className='icons'/>
                        </a>
                        <a className='social-media-link text-white d-flex justify-content-center align-items-center'
                        href='https://www.behance.net/israaalsebaey' target='_blank'
                        >
                        <FontAwesomeIcon icon={faBehance} className='icons'/>
                        </a>
                    </li>
                    <li className="nav-item mt-1">
                        <button className='btn btn-primary connect-btn ms-lg-3'
                        onClick={()=>window.location.href='#connect'}
                        >Let's Connect</button>
                    </li>   
                </ul>
            </div>
        </div>
    </nav>
  )
}
export default Header;
