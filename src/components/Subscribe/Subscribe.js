import React ,{useState,useRef} from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Subscribe.css';

const Subscribe = () => {
   const form = useRef();
   const [spinner,setSpinner]=useState(false);
   const {handleSubmit,reset}=useForm({
       mode:'onTouched'
     });
   const success=()=>{
       toast('Email Sent Wait For Updates !', {
           position: toast.POSITION.TOP_RIGHT,
           theme:'dark',
       });
   }
   const error=()=>{
       toast.error('something went wrong, send email again !', {
           position: toast.POSITION.TOP_RIGHT,
           theme:'dark',
       });
   }
   const onSubmit=()=>{
      setSpinner(true);
      emailjs.sendForm('service_jssi34k', 'template_w9x8ahl', form.current, 'wxzhsWor1lTgaN2Mj')
        .then((result) => {
            setSpinner(false)
            success();
            console.log(result.text);
        }, (err) => {
            setSpinner(false)
            error()
            console.log(err.text);
        });
     reset();
  }
  return (
    <div className='subscribe container'>
       <div className='row'>
            <div className='col-lg-6 col-md-12 d-flex justify-content-center align-items-center'>
               <h3 className='fw-bold'>See My Projects At Once <br/> & Never miss latest updates</h3>
            </div>
            <div className='col-lg-6 col-md-12 d-flex justify-content-xl-start justify-content-center align-items-center subs-box'>
             <form className='subs-input d-flex justify-content-between' onSubmit={handleSubmit(onSubmit)} ref={form}>
                <input type='text' placeholder='Email Address' name='email'/>
                <button className='btn position-relative d-flex justify-content-center align-items-center'><span className={spinner?'d-none':'d-block'}>Submit</span>
                     <div className={spinner?'spinner-border text-ligh position-absolute':'d-none'} role="status"></div>
                </button>
             </form>
          </div>
       </div>
       <ToastContainer />
    </div>
  )
}
export default Subscribe;
