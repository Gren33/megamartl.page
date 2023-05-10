import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationDot, faTruck } from '@fortawesome/free-solid-svg-icons'

function TopNav() {
  return (
    <Navbar style={{backgroundColor: "rgba(245, 245, 245, 1)"}}>
      <Container>
        <Navbar href="#home">Welcome to worldwide Megamart!</Navbar>
          <Nav className="mx-5">
            <Nav.Link  className='mx-3'><FontAwesomeIcon icon={faLocationDot} className='icon'/>Deliver to <span>423651</span></Nav.Link>
            <Nav.Link  className='mx-3'><FontAwesomeIcon icon={faTruck} className='icon'/>Track your order</Nav.Link>
            <Nav.Link  className='mx-3'><FontAwesomeIcon icon={faClock} className='icon'/>All Offers</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default TopNav