import React from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'
import Logo from '../../src/assets/image/MegaMart.svg'
import '../index.css'
import TopNav from './TopNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faCartShopping, faList, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { ChevronDown } from 'react-bootstrap-icons'

function NavBar() {
  return (
    <div>
    <TopNav/>
    <Navbar style={{background: "rgba(255, 255, 255, 1)"
}}>
      <Container>
        <Navbar.Brand href="#"><FontAwesomeIcon icon={faBarsStaggered} className='icon'/><img src={Logo} className='mx-2'/></Navbar.Brand>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
        <Form className='form'>
            <Form.Control
              type="search"
              placeholder="Search essentials, groceries and more.."
              aria-label="Search"
              className='search'
            />
          </Form>
          <FontAwesomeIcon icon={faList} className='list-icon'/>
          <Nav className='px-2'>
            <Nav.Link ><FontAwesomeIcon icon={faUser} className='user-icon'/>Sign In/Sign Up</Nav.Link>
            <Nav.Link><FontAwesomeIcon icon={faCartShopping} className='cart-icon'/>Cart</Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>
    <div className='list py-4'>
      <ul>
        <li><a href='#' className='btn btn-sm btn-primary'>Groceries <ChevronDown className='chev-1'/></a></li>
        <li><a href='#' className='btn btn-sm '>Premieum Fruits <ChevronDown className='chev'/></a></li>
        <li><a href='#' className='btn btn-sm '>Home & Kitchen <ChevronDown className='chev'/></a></li>
        <li><a href='#' className='btn btn-sm '>Fashion <ChevronDown className='chev'/></a></li>
        <li><a href='#' className='btn btn-sm '>Electronics <ChevronDown className='chev'/></a></li>
        <li><a href='#' className='btn btn-sm '>Beauty <ChevronDown className='chev'/></a></li>
        <li><a href='#' className='btn btn-sm '>Home Improvement <ChevronDown className='chev'/></a></li>
        <li><a href='#' className='btn btn-sm '>Sports, Toys & Luggage <ChevronDown className='chev'/></a></li>
        
      </ul>
    </div>
    </div>
  )
}

export default NavBar