import React, { useEffect, useRef, useState} from 'react'

import {Button} from 'react-bootstrap'
import { IconButton} from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import emailjs from 'emailjs-com';
import {TextField} from '@material-ui/core'

import '../Styles/Style.css'
import { Alert } from 'react-bootstrap';
function Contact() {
const nameRef = useRef()
const emailRef = useRef()
const phoneRef = useRef()
const messageRef = useRef()
const [myAlert, setmyAlert] = useState()
const [myError, setmyError] = useState()
const [loading, setloading] = useState(false)
    useEffect(() => {
        emailjs.init("user_AjekzCVNdE0U3FKzrkT2v"); 
        
    }, [])


    const handleSubmit = (e)=>{
        e.preventDefault()
        setloading(false)
        emailjs.send('service_g450evc','template_0n9s9nd',{to_name:'Umar Bunu',
         from_name:emailRef.current.value.toString(), message: messageRef.current.value,}, 'user_AjekzCVNdE0U3FKzrkT2v')
         .then().catch((error)=>{setmyError('error trying to contact umar bunu'); setloading(true)})
         setTimeout(() => {
            
         }, 3000);

         emailjs.send('service_g450evc', 'template_eo5pbtk',
            {to_name:nameRef.current.value.toString(), to_email: emailRef.current.value.toString(),
             from_name:'Umar Bunu',
             
        },'user_AjekzCVNdE0U3FKzrkT2v').then(()=>{
            setmyAlert('Success! Will be in touch as soon as possible.')
        setmyError()
        }).catch((error)=>{
            console.log(error)
            setmyError('Error occured. Please try again later');
            setmyAlert()
            setloading(true)
        });
        setloading(true)
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
                {myAlert && <div style={{width:'100%',textAlign:'center', display:'flex', 
                flexDirection:'row',alignItems:'center',justifyContent:'center'}}><Alert style={{width:'70%'}} variant='success'>{myAlert}</Alert></div>}
                {myError && <div style={{width:'100%',textAlign:'center', display:'flex', 
                flexDirection:'row',alignItems:'center',justifyContent:'center'}}><Alert style={{width:'70%'}} variant='danger'>{myError}</Alert></div>}
          <form onSubmit={handleSubmit}>
          <div className='contact__home1'>
              
           <div className='contact__home'><TextField className='contact__home__input' InputProps={
                    {className: 'about__textfield'}
                }
                InputLabelProps={{
style:{color:'white'}
                }}
                style={
                    {
                        color: 'white !important',
                        fontSize: '50px', minWidth:'350px', marginTop:"10px"
                    }
                }
                required
                id="standard-required"
                label="Name" color='primary' inputRef={nameRef}
                />
<TextField className='contact__home__input' InputProps={
                    {className: 'about__textfield'}
                }
                InputLabelProps={{
style:{color:'white'}
                }}
                style={
                    {
                        color: 'white !important',
                        fontSize: '50px', minWidth:'350px', marginTop:"10px"
                    }
                }
                required
                id="standard-required"
                 color='primary' type='email' size='medium' inputRef={emailRef}
                label='Email'/> <TextField className='contact__home__input' InputProps={
                    {className: 'about__textfield'}
                }
                InputLabelProps={{
style:{color:'white'}
                }}
                style={
                    {
                        color: 'white !important',
                        fontSize: '50px', minWidth:'350px', marginTop:"10px"
                    }
                }
                required
                id="standard-required"
                 color='primary' inputRef={phoneRef}
                label='Phone'/>
               </div>
          <div style={{textAlign:'center'}}> <TextField className='contact__home__input' InputProps={
                    {className: 'about__textfield'}
                } multiline={true} inputRef={messageRef}
                InputLabelProps={{
style:{color:'white'}
                }}
                style={
                    {
                        color: 'white !important',
                        fontSize: '50px',
                        minWidth:'350px'
                    }
                }
                required
                id="standard-required"
                 color='primary' rows='5' size='medium' maxrows='5'
                label='Message'/>
                   </div>
            
                   </div>
                   <Button enabled={loading.toString()} type='submit' variant="outlined" style={{fontSize:'18px',marginTop:'30px',width:'350px', backgroundColor:'rgb(59, 59, 68)', boxShadow:'none'
                , color:'white',}} color="primary"> Send</Button>      
                   </form>
                   <div style={{display:'flex',justifyContent:'center'}}>
           <IconButton>
           <a href="https://www.instagram.com/_.icode">
               <InstagramIcon style={{ color: 'white', fontSize:'35px' }}/></a>
           </IconButton>
           <IconButton>
           <a href="https://www.twitter.com/umar_bunuu"> <TwitterIcon style={{ color: 'white', fontSize:'35px' }}/></a>
           </IconButton>
           <IconButton>
           <a href="https://www.linkedin.com/https://www.linkedin.com/in/umar-bunu-784168156">
                <LinkedInIcon style={{ color: 'white', fontSize:'35px' }}/>
               </a>
           </IconButton>
         
           <IconButton>
               <a href="https://www.facebook.com/profile.php?id=1000085781129686"> <FacebookIcon style={{ color: 'white', fontSize:'35px' }}/></a>
          
           </IconButton>
           
</div>
        </div>
    )
}

export default Contact
