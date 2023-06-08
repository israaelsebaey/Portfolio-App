import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-reveal';
import './Contact.css';

const Connect = () => {
    const form = useRef();
    const [spinner,setSpinner]=useState(false);
    const {register,handleSubmit,formState:{errors},reset}=useForm({
        mode:'onTouched'
      });
    const success=()=>{
        toast('Message Sent !', {
            position: toast.POSITION.TOP_RIGHT,
            theme:'dark',
        });
    }
    const error=()=>{
        toast.error('something went wrong, send message again !', {
            position: toast.POSITION.TOP_RIGHT,
            theme:'dark',
        });
    }
    const onSubmit=()=>{
        setSpinner(true);
        emailjs.sendForm('service_jssi34k', 'template_9s3r53g', form.current, 'wxzhsWor1lTgaN2Mj')
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
    <div className='contact container-fluid' id='connect'>
        <div className='container  mb-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-12'>
                    <div className='contact-img d-flex justify-content-center align-items-center'>
                        <Zoom>
                           <img src='images/contact-img.svg'/>
                        </Zoom>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='title'>
                                <h2 className='fw-bold text-white'>Get In Touch</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}  ref={form} className='row'>
                            <div className='col-lg-6 col-md-12 contact-inpt'>
                                <input type='text' placeholder='First Name' name='firstname'
                                {...register('firstname',{required:'first name is required',
                                minLength:{value:3,message:'first name min length is 3'}})}
                                />
                                <div className='errors text-start mt-2'>
                                <p>{errors.firstname && <p style={{color:'#e2ded3'}}>{errors.firstname.message}</p>}</p>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 contact-inpt'>
                                <input type='text' placeholder='Last Name' name='lastname'
                                {...register('lastname',{required:'last name is required',
                                minLength:{value:3,message:'last name min length is 3'}})}
                                />
                                <div className='errors text-start mt-2'>
                                <p>{errors.lastname && <p style={{color:'#e2ded3'}}>{errors.lastname.message}</p>}</p>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 contact-inpt'>
                                <input type='text' placeholder='Email Address' name='email'
                                {...register('email',{required:'email is required',
                                pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message:'email should be user@gmail.com'}})}
                                />
                                <div className='errors text-start mt-2'>
                                   <p>{errors.email && <p style={{color:'#e2ded3'}}>{errors.email.message}</p>}</p>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 contact-inpt'>
                                <input type='text' placeholder='Phone No.' name='phone'
                                {...register('phone',{required:'phone is required'})}
                                />
                                <div className='errors text-start mt-2'>
                                   <p>{errors.phone && <p style={{color:'#e2ded3'}}>{errors.phone.message}</p>}</p>
                                </div>
                            </div>
                            <div className='col-12 contact-inpt'>
                                <textarea placeholder='Message' name='message'
                                 {...register('message',{required:'message is required'})}
                                ></textarea>
                                <div className='errors text-start mt-2'>
                                   <p>{errors.message && <p style={{color:'#e2ded3'}}>{errors.message.message}</p>}</p>
                                </div>
                            </div>
                            <div className='col-12 send-btn '>
                                <button className='btn position-relative d-flex justify-content-center align-items-center' ><span className={spinner?'d-none':'d-block'}>Send</span>
                                   <div className={spinner?'spinner-border text-dark position-absolute':'d-none'} role="status"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
        <ToastContainer />
    </div>
  )
}
export default Connect;
