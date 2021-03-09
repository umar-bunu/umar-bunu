import React from 'react'
import 'react-bootstrap'
import {Button, NavLink} from 'react-bootstrap'
import {Avatar, IconButton} from '@material-ui/core'
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from 'react-router-dom'
import '../Styles/Style.css'
import experience from '../../images/experience.jpg'
function Home() {

    const ColoredLine = ({color}) => (
        <hr style={
            {
                color: color,
                backgroundColor: color,
                height: '0.2px',
                zIndex: '6',
                width: '100%'
            }
        }/>
    );
    return (
        <div className='home'>

            <div className='home__picture1'>
                <div>Umar Bunu
                    <br/>
                    Mobile and Web Developer<ColoredLine color='white'/>
                   <NavLink to='/contact' >
                   <Button variant='outline-light'>   Contact me
                    </Button>
                       </NavLink>
                     
                </div>
            </div>
          
            <div style={
                {
                    textAlign: 'left',
                    width: '100%',
                    padding:'20px'
                }
            }>
                  <h3 style={
                {
                    textAlign: 'left',
                    width: '100%',
                    marginTop: '10px'
                }
            }>
                Hi!
            </h3>Welcome to my portfolio. I am a student of Information Systems Engineering at Cyprus International University, currently in my final year. I have considerable exeperience in mobile and full-stack web developemnent.
                <br/>
                I do freelance and collect projects from different organizations.
                             Some of which include Desktop applications, mobile and even web apps(which you shall see as you follow along).
                             I am currently in high-honor division and will reveal my CGPA only when I graduate 😉.
                <br/>
                I am familiar with programming languages such as Python, C/C++, Java, PHP, dart and the ultimate Javascript.
                              Also, I have my hands dipped into the popular MERN stack,flutter, and a bit Django.
                <br/>
                I am passionately ready to work anywhere without a scope. Meaning I can thoroughly learn new languages and frameworks that suite a particular organization interested in my work.
                <br/> <br/>
                Feel free to contact me for enquiries
            
                </div>
          

            <div style={
                {
                    backgroundColor: '#ede9e8',
                    width: '100%',
                    color:'#595757'
                }
            }>
<div style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                       marginBottom:'20px'
                    }
                }>
                  <Avatar style={{height:'200px', width:'205px', marginTop:'10px'}} alt="EXEPERIENCE" src={experience}></Avatar>  
                <h4 style={{marginTop:'10px', marginBottom:'20px'}}>Professsional Experience</h4>
Freelancing and Higher Education Experience. <br/>
                        <Button style={{marginTop:'10px'}} variant='outline-secondary'>Learn more</Button>
                    
                </div>

                <div style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                       paddingBottom:'10px'
                    }
                }>
                    <ContactSupportIcon style={
                        {
                            color: '#595757',
                            fontSize: '220px'
                        }
                    }/>
                    <h6>
                        <Button variant='outline-secondary'>Contact me</Button>
                    </h6>
                </div>

            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
           <IconButton>
           <InstagramIcon style={{ color: 'white', fontSize:'35px' }}/>
           </IconButton>
           <IconButton>
           <TwitterIcon style={{ color: 'white', fontSize:'35px' }}/>
           </IconButton>
           <IconButton>
           <LinkedInIcon style={{ color: 'white', fontSize:'35px' }}/>
           </IconButton>
         
           <IconButton>
           <FacebookIcon style={{ color: 'white', fontSize:'35px' }}/>
           </IconButton>
           
</div>

           
        </div>


    )
}

export default Home
