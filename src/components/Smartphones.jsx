import React from 'react'
import '../index.css'
import { ChevronRight } from 'react-bootstrap-icons'
import phone1 from '../assets/image/phone_1.png'
import phone2 from '../assets/image/phone_2.png'
import phone3 from '../assets/image/phone_3.png'
import phone4 from '../assets/image/phone_4.png'
import phone5 from '../assets/image/phone_5.png'


function Smartphones() {
  return (
    <div>
        <div className='smartphone px-5 py-5'>
            <h5 className='underline px-5'>Grab the best deal on <span style={{color
            :"rgba(0, 142, 204, 1)"}}>Smartphones</span></h5>
            <a href='#' className='view'>View All<ChevronRight className='px-1' style={{color:"rgba(0, 142, 204, 1)"}}/></a>
        </div>
        <div className='phones'>
          <ul className='phone-group'>
              <li className='phone-list'>
                <h6 className='discount'>56% OFF</h6>
                <img src={phone1} style={{position: "relative", left:"70px",top:"-45px"}}/>
                <div className='offer-info'>
                  <h6 className='px-3 fw-bold'>Galaxy S22 Ultra</h6>
                  <span className='px-3 fw-bold'>$1120</span>
                  <span className='discounted fw-normal'>$2000<hr/></span>
                  <p className='px-3 text-success fw-bold'>Save - $820</p>
                </div>
              </li>
              <li className='phone-list'>
                <h6 className='discount'>56% OFF</h6>
                <img src={phone2} style={{position: "relative", left:"33px",top:"-45px"}}/>
                <div className='offer-info' style={{position:"relative", top:"-15px"}}>
                  <h6 className='px-3 fw-bold'>Galaxy M13 (4GB | 64GB)</h6>
                  <span className='px-3 fw-bold'>$1120</span>
                  <span className='discounted fw-normal'>$2000<hr/></span>
                  <p className='px-3 text-success fw-bold'>Save - $820</p>
                </div>
              </li>
              <li className='phone-list'>
                <h6 className='discount'>56% OFF</h6>
                <img src={phone3} style={{position: "relative", left:"25px",top:"-45px"}}/>
                <div className='offer-info' style={{position:"relative", top:"-29px"}}>
                  <h6 className='px-3 fw-bold'>Galaxy M33 (4GB | 64GB)</h6>
                  <span className='px-3 fw-bold'>$1120</span>
                  <span className='discounted fw-normal'>$2000</span><hr/>
                  <p className='px-3 text-success fw-bold'>Save - $820</p>
                </div>
              </li>
              <li className='phone-list'>
                <h6 className='discount'>56% OFF</h6>
                <img src={phone4} style={{position: "relative", left:"24px",top:"-45px"}}/>
                <div className='offer-info' style={{position:"relative", top:"-29px"}}>
                  <h6 className='px-3 fw-bold'>Galaxy M53 (4GB | 64GB)</h6>
                  <span className='px-3 fw-bold'>$1120</span>
                  <span className='discounted fw-normal'>$2000</span><hr/>
                  <p className='px-3 text-success fw-bold'>Save - $820</p>
                </div>
              </li>
              <li className='phone-list'>
                <h6 className='discount'>56% OFF</h6>
                <img src={phone5} style={{position: "relative", left:"33px",top:"-55px"}}/>
                <div className='offer-info' style={{position:"relative", top:"-53px"}}>
                  <h6 className='px-3 fw-bold'>Galaxy S22 Ultra</h6>
                  <span className='px-3 fw-bold'>$1120</span>
                  <span className='discounted fw-normal'>$2000</span><hr/>
                  <p className='px-3 text-success fw-bold'>Save - $820</p>
                </div>
              </li>
          </ul>
         
        </div>
    </div>
  )
}

export default Smartphones