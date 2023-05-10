import React from 'react'
import '../index.css';
import { ChevronRight } from 'react-bootstrap-icons';
import group1 from '../assets/image/Group 50.png'
import group2 from '../assets/image/Group 51.png'
import group3 from '../assets/image/Group 52.png'

function ElectronicsBrand() {
  return (
    <div>
        <div className='brands px-5 py-5'>
        <h5 className='underline px-5'>Top <span style={{color
            :"rgba(0, 142, 204, 1)"}}>Electronics Brands</span></h5>
            <a href='#' className='view'>View All<ChevronRight className='px-1' style={{color:"rgba(0, 142, 204, 1)"}}/></a>
        </div>
        <div className='brands-group'>
            <ul className='brands-container'>
                <li className='brands-list'>
                    <img src={group1}/>
                </li>
                <li className='brands-list'>
                    <img src={group2}/>
                </li>
                <li className='brands-list'>
                    <img src={group3}/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ElectronicsBrand