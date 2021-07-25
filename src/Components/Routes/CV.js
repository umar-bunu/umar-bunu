import React from 'react'
import 'react-bootstrap'
import {Avatar} from '@material-ui/core'

import {IconButton} from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../Styles/Style.css'
import image from '../../images/gradpic.jpeg'

function CV() {

    return (
        <div className='home'>
<h2 style={{marginLeft:'20px'}}>CV</h2>
            <div className='cv__topDiv'
                style={
                    {marginTop: '55px', marginBottom:'20px'}
            }>
                <Avatar src={image}
                    style={
                        {
                            width: '200px',
                            height: '200px'
                        }
                    }/>
                <div className='CV__h4__div'>
                    <h4>Umar Bunu Wali</h4>
                    <div>Bsc, Information Systems Engineering</div>
                    <div>Email:  umar.bunu73@gmail.com</div>
                    <div>Nicosia, North Cyprus
                        <hr style={
                            {
                                color: 'white',
                                backgroundColor: 'white'
                            }
                        }/></div>
                </div>
            </div>
            <div className='cv__classDiv'>
                <div>
                    <div className='cv__header'>
                        ABOUT ME
                    </div>
                    <div>
                        As a beginner developer, I have dedicated most of my time to research, learning and putting new things in to practice.

                    </div>
                </div>
                <div>

                    <div className='cv__header'>
                        ACADEMIC QUALIFICATIONS
                    </div>
                    <div>
                        <strong>Bsc. Information Systems Engineering.
                        </strong>
                        <br/>
                        Bachelor in Information Systems Engineering,
                        
                        Cyprus International University, Nicosia, Cyprus.
                        <br/>
                        Graduated June 2021.
                    </div>
                </div>

                <div>
                    <div className='cv__header'>
                        MAJOR SKILLS
                    </div>
                    <div>
                        <strong>languages:</strong>
                        <br/>

                        - C# (Asp.net)
                        <br/>
                        - Java
                        <br/>
                        - Python
                        <br/>
                        - Javascript <br/>
                        - Dart
                        <br/>
                        <strong>Frameworks:</strong>
                        <br/>
                        - Flutter <br/>
                        - React <br/>
                        - Django
                    </div>
                </div>
            </div>
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

export default CV
