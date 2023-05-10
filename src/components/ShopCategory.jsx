import React from 'react'
import '../index.css'
import { ChevronRight } from 'react-bootstrap-icons'
import phonesmall from '../assets/image/phone_small.png'
import cosmetic from '../assets/image/cosmetic.png';
import electronics from '../assets/image/Electronics.png';
import furniture from '../assets/image/furniture.png'
import smallwatch from '../assets/image/smallwatch.png'
import decor from '../assets/image/Decor.png'
import accesories from '../assets/image/accessories.png'

function ShopCategory() {
  return (
    <div>
        <div className='shop-category px-5 py-5'>
            <h5 className='underline px-5'>Shop From <span style={{color
            :"rgba(0, 142, 204, 1)"}}>Top Categories</span></h5>
            <a href='#' className='view'>View All<ChevronRight className='px-1' style={{color:"rgba(0, 142, 204, 1)"}}/></a>
        </div>
        <div className='categories'>
            <ul className='category-container'>
              <li className='category-list'>
                <img src={phonesmall} style={{position:"relative",left:"43px",top:"18px"}}/>
                <div className='py-5 px-5'>
                  <p className='fw-normal'>Mobile</p>
                </div>
              </li>
              <li className='category-list'>
                <img src={cosmetic} style={{position:"relative",left:"37px",top:"10px"}}/>
                <div className='py-5 px-5'>
                  <p className='fw-normal' style={{position:"relative",left:"-15px", top:"-13px"}}>Cosmetics</p>
                </div>
              </li>
              <li className='category-list'>
                <img src={electronics} style={{position:"relative",left:"0px",top:"7px"}}/>
                <div className='py-5 px-5'>
                  <p className='fw-normal' style={{position:"relative",left:"-15px",top:"-30px"}}>Electronics</p>
                </div>
              </li>
              <li className='category-list'>
                <img src={furniture} style={{position:"relative",left:"5px",top:"9px"}}/>
                <div className='py-5 px-5'>
                  <p className='fw-normal' style={{position:"relative",left:"-15px",top:"-20px"}}>Furnitures</p>
                </div>
              </li>
              <li className='category-list'>
                <img src={smallwatch} style={{position:"relative",left:"20px",top:"18px"}}/>
                <div className='py-5 px-5'>
                  <p className='fw-normal' style={{position:"relative",left:"-15px",top:"12px"}}>Watches</p>
                </div>
              </li>
              <li className='category-list'>
                <img src={decor} style={{position:"relative",left:"5px",top:"9px"}}/>
                <div className='py-5 px-5'>
                  <p className='fw-normal' style={{position:"relative",left:"-15px",top:"-11px"}}>Decor</p>
                </div>
              </li>
              <li className='category-list'>
                <img src={accesories} style={{position:"relative",left:"5px",top:"9px"}}/>
                <div className='py-5 px-5'>
                  <p className='fw-normal' style={{position:"relative",left:"-15px",top:"-18px"}}>Accessories</p>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default ShopCategory