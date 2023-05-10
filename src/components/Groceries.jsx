import React from 'react'
import '../index.css'
import { ChevronRight } from 'react-bootstrap-icons'
import groceries from '../assets/image/groceries.png'
import grocery_2 from '../assets/image/grocery 2.png'
import pineapples from '../assets/image/pineapple.png'
import strawberry from '../assets/image/strawberry.png'
import mango from '../assets/image/mango.png'
import cherry from '../assets/image/cherry.png';

function Groceries() {
  return (
    <div>
        <div className='px-5 groceries'>
            <h5 className='underline px-5'>Daily <span style={{color
            :"rgba(0, 142, 204, 1)"}}>Essentials</span></h5>
            <a href='#' className='view'>View All<ChevronRight className='px-1' style={{color:"rgba(0, 142, 204, 1)"}}/></a>
        </div>
        <div className='grocery'>
            <ul className='groceries-container'>
            <li className='groceries-list'>
                <img src={groceries} style={{width:"120px",position:"relative",left:"30px"}}/>
                <div className='grocery-info' style={{position:"relative",top:"50px",width:"170px"}}>
                  <span className='fw-normal px-4'>Daily Essentials</span>
                  <h6 className='px-4 fw-bold'>UP to 50% OFF</h6>
                </div>
              </li>
              <li className='groceries-list'>
                <img src={grocery_2} style={{position:"relative",left:"45px",top:"0px"}}/>
                <div className='grocery-info' style={{position:"relative",top:"17px",left:"30px"}}>
                  <span className='fw-normal px-4'>Vegetables</span>
                  <h6 className='px-1 fw-bold'>UP to 50% OFF</h6>
                </div>
              </li>
              <li className='groceries-list'>
                <img src={pineapples}/>
                <div className='grocery-info' style={{position:"relative",top:"45px",left:"30px"}}>
                  <span className='fw-normal px-5'>Fruits</span>
                  <h6 className='px-3 fw-bold'>UP to 50% OFF</h6>
                </div>
              </li>
              <li className='groceries-list'>
                <img src={strawberry} style={{width:"140px",position:"relative",top:"30px",left:"30px"}}/>
                <div className='grocery-info' style={{position:"relative",top:"45px", left:"20px"}}>
                  <span className='fw-normal px-4'>Strawberry</span>
                  <h6 className='px-3 fw-bold'>UP to 50% OFF</h6>
                </div>
              </li>
              <li className='groceries-list'>
                <img src={mango} style={{width:"130px",position:"relative",top:"10px",left:"30px"}}/>
                <div className='grocery-info' style={{position:"relative",top:"30px",left:"30px"}}>
                  <span className='fw-normal px-5'>Mango</span>
                  <h6 className='px-3 fw-bold'>UP to 50% OFF</h6>
                </div>
              </li>
              <li className='groceries-list'>
                <img src={cherry} style={{width:"100px",position:"relative",top:"0px",left:"40px"}}/>
                <div className='grocery-info' style={{position:"relative",top:"25px",left:"30px"}}>
                  <span className='fw-normal px-5'>Cherry</span>
                  <h6 className='px-3 fw-bold'>UP to 50% OFF</h6>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Groceries