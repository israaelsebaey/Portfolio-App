import React from 'react';
import {faLinkedinIn,faGithubAlt,faBehance} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer container-fluid'>
       <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <h4 className='text-white fw-bold'>ESRAA ELSEBAEY</h4>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <div className='social-media d-flex justify-content-sm-end mt-1'>
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
                    </div>
                    <div className='copy-rights d-flex justify-content-sm-end mt-2'>
                        <p className='text-white'>Copyright 2023 - All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer;
