import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubAlt,faBehance} from '@fortawesome/free-brands-svg-icons';
import './Projects.css';

const Projects = ({data,filterData}) => {
 const[isActive,setIsActive]=useState('all');
 const handleFilter=(e)=>{
    setIsActive(e.target.value);
    filterData(e.target.value);
 } 
  return (
    <div className='projects container-fluid mt-5' id='projects'>
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-12'>
                    <div className='title'>
                        <h2 className='text-white text-center fw-bold'>My Projects</h2>
                        <div className='intro  mt-3'>
                            <p className='text-white text-center'>I work on different projects using React, React redux, Javascript, 
                            static pages using HTML, CSS and Responsive Design using Bootstrap
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='myProj col-12 d-flex justify-content-center'>
                    <div className='projName mb-3'>
                      <button className={isActive==='all'?'pactive btn btn-first':'btn btn-first'}
                      value='all'  onClick={handleFilter}
                      >All</button>
                    </div>
                    <div className='projName mb-3'>
                      <button className={isActive==='react'?'pactive btn':'btn'}
                      value='react'  onClick={handleFilter}
                      >React</button>
                    </div>
                    <div className='projName mb-3'>
                      <button className={isActive==='javascript'?'pactive btn':'btn'}
                      value='javascript' onClick={handleFilter}
                      >Javascript</button>
                    </div>
                    <div className='projName mb-3'>
                      <button className={isActive==='css'?'pactive btn':'btn'}
                      value='css' onClick={handleFilter}
                      >HTML</button>
                    </div>
                    <div className='projName mb-3'>
                      <button className={isActive==='bootstrap'?'pactive btn btn-last':'btn btn-last'}
                      value='bootstrap' onClick={handleFilter}
                      >Bootstrap</button>
                    </div>
                </div>
            </div>
            <div className='row mt-3 mb-5 projList'>
               {
                data.length?(
                  data.map((item,index)=>{
                     if(index<6){
                      return(
                        <div className='col-xl-4 col-lg-6 col-12 mb-4 d-flex flex-column align-items-center' key={item.id}>
                          <div className='projContainer position-relative'>
                              <div className='projImg  position-absolute'>
                                <img src={item.img}/>
                              </div>
                              <div className='links'>
                                <a href={item.github}  target='_blank'><FontAwesomeIcon icon={faGithubAlt} className='icons ln'/></a>
                                <a href={item.behance} target='_blank'><FontAwesomeIcon icon={faBehance} className='icons gt'/></a>
                              </div>
                          </div>
                        </div>
                      )
                     }
                  })
                ):null
               }
            </div>
        </div>
    </div>
  )
}
export default Projects;
