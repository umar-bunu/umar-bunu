import React, { useEffect, useRef, useState} from 'react'
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import {Form,TextField, Button} from '@material-ui/core'

import '../Styles/Style.css'
import { Alert } from 'react-bootstrap';
function Contact() {
const nameRef = useRef()
const emailRef = useRef()
const phoneRef = useRef()
const messageRef = useRef()
const [myAlert, setmyAlert] = useState()
const [myError, setmyError] = useState()
    useEffect(() => {
        emailjs.init("user_AjekzCVNdE0U3FKzrkT2v"); 
        
    }, [])


    const handleSubmit = (e)=>{
        e.preventDefault()
        emailjs.send('service_g450evc','template_0n9s9nd',{to_name:'Umar Bunu',
         from_name:emailRef.current.value.toString(), message: messageRef.current.value,}, 'user_AjekzCVNdE0U3FKzrkT2v')
         .then().catch((error)=>{console.log(error.message)})
         setTimeout(() => {
            
         }, 3000);

         emailjs.send('service_g450evc', 'template_eo5pbtk',
            {to_name:nameRef.current.value.toString(), to_email: emailRef.current.value.toString(),
             from_name:'Umar Bunu',
             
        },'user_AjekzCVNdE0U3FKzrkT2v').then(()=>{
            setmyAlert('Success! Will be in touch in a while.')
        setmyError()
        }).catch((error)=>{
            setmyError('Error occured. Please try again later');
            setmyAlert()
        });
    } 
    return (
        <div style={
                {
                    marginTop: '55px',
                    color: 'white'
                }
            }
            className='home new__home'>
                <h2>Please fill out the below form and I'll contact you shortly.</h2>
                {myAlert && <Alert variant='success'>{myAlert}</Alert>}
                {myError && <Alert variant='danger'>{myError}</Alert>}
          <form onSubmit={handleSubmit}>
          <div className='contact__home1'>
              
           <div className='contact__home'><TextField InputProps={
                    {className: 'about__textfield'}
                }
                InputLabelProps={{
style:{color:'white'}
                }}
                style={
                    {
                        color: 'white !important',
                        fontSize: '50px', minWidth:'250px', marginTop:"10px"
                    }
                }
                required
                id="standard-required"
                label="Required" color='primary' inputRef={nameRef}
                label='Name'/>
<TextField InputProps={
                    {className: 'about__textfield'}
                }
                InputLabelProps={{
style:{color:'white'}
                }}
                style={
                    {
                        color: 'white !important',
                        fontSize: '50px', minWidth:'250px', marginTop:"10px"
                    }
                }
                required
                id="standard-required"
                label="Required" color='primary' type='email' size='medium' inputRef={emailRef}
                label='Email'/> <TextField InputProps={
                    {className: 'about__textfield'}
                }
                InputLabelProps={{
style:{color:'white'}
                }}
                style={
                    {
                        color: 'white !important',
                        fontSize: '50px', minWidth:'250px', marginTop:"10px"
                    }
                }
                required
                id="standard-required"
                label="Required" color='primary' inputRef={phoneRef}
                label='Phone'/>
               </div>
          <div style={{textAlign:'center'}}> <TextField InputProps={
                    {className: 'about__textfield'}
                } multiline= 'true' inputRef={messageRef}
                InputLabelProps={{
style:{color:'white'}
                }}
                style={
                    {
                        color: 'white !important',
                        fontSize: '50px',
                        minWidth:'250px'
                    }
                }
                required
                id="standard-required"
                label="Required" color='primary' rows='5' size='medium' maxrows='5'
                label='Message'/>
                   </div>
            
                   </div>
                   <Button type='submit' variant="contained" style={{fontSize:'18px',marginTop:'30px',width:'250px', backgroundColor:'rgb(59, 59, 68)', boxShadow:'none'}} color="primary"> Submit</Button>      
                   </form>
        </div>
    )
}

export default Contact
