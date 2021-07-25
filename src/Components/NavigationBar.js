import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import './Styles/Style.css'

function NavigationBar() {
    
    return (   <Container fixed='top' style={{display:'flex',padding:'0px', justifyContent:'center', alignItems:'center', minWidth:'100%',flexDirection:'row'}}>
        <Navbar fixed='top' className='Navbar' fluid='md'    expand="md" variant="dark">
  <Navbar.Brand href="/home">UMAR BUNU</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto w-100 mininavbar__container">
      <Nav.Link className='NavigationBar__navlink' href="/home">ME</Nav.Link>
      <Nav.Link className='NavigationBar__navlink' href="/cv">CV</Nav.Link>
      <Nav.Link  className='floatRigth NavigationBar__navlink' href="/contact">CONTACT ME</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</Container>   
      
    )
}

export default NavigationBar
