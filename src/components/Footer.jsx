import React from 'react'
import '../index.css'
import Logo from '../assets/image/MegaMart.png'
import App from '../assets/image/App-Play store.png'
import { Telephone, Whatsapp } from 'react-bootstrap-icons'

function Footer() {
  return (
    <div className='footer py-5'>
        <div className='footer-container'>
            <div className='contacts'>
                <img src={Logo} />
                <h5 className='py-3'>Contact Us</h5>
                <Whatsapp style={{fontSize:"20px"}}/> <span className='px-3 fw-normal'>Whats App</span>
                <p className='px-4 py-2'>+1 -2920-920-223</p>
                <Telephone style={{fontSize:"20px"}}/> <span className='px-3 fw-normal'>Call Us</span>
                <p className='px-4 py-2'>+1 -2920-920-223</p>
                <h5 className='py-2'>Download App</h5>
                <img src={App} className='py-3'/>
            </div>
            <div className='footer-categories'>
                <h5 className='underline'>Most Popular Categories</h5>
                <ul className='fw normal py-2'>
                    <li className='py-1'>Staples</li>
                    <li className='py-1'>Beverages</li>
                    <li className='py-1'>Beverages</li>
                    <li className='py-1'>Personal Care</li>
                    <li className='py-1'>Home Care</li>
                    <li className='py-1'>Baby Care</li>
                    <li className='py-1'>Vegetables & Fruits</li>
                    <li className='py-1'>Snacks & Foods</li>
                    <li className='py-1'>Diary & Bakery</li>
                </ul>
            </div>
            <div className='footer-customer'>
                <h5 className='underline'>Customer Services</h5>
                <ul className='fw normal py-2'>
                    <li className='py-1'>About us</li>
                    <li className='py-1'>Terms & Conditions</li>
                    <li className='py-1'>FAQ</li>
                    <li className='py-1'>Privacy Policy</li>
                    <li className='py-1'>E-waste Policy</li>
                    <li className='py-1'>Cancellation & Return Policy</li>
                </ul>
            </div> 
            <div className='footer-line px-3'>
                    <hr style={{position:"relative",left:"5s%"}}/>
                    <p style={{position:"relative",left:"40%"}}>&copy;2023 All rights reserved. Reliance Retail Ltd.</p>
                </div>
        </div>
    </div>
  )
}

export default Footer