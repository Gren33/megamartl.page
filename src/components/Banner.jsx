import React from 'react'
import watch from '../assets/image/top watch.png'
import { ChevronLeft, ChevronRight, ThreeDots } from 'react-bootstrap-icons'

function Banner() {
  return (
    <div className='banner'>
      <div className='left-banner'>
        <ChevronLeft className='chev-left'/>
        <div className='px-5'>
          <h4 className='px-3 py-2'>Best Deal Online on smart watches</h4>
          <h2 className='px-3 py-2'>SMART WEARABLE.</h2>
          <h4 className='px-3 py-2'>UP to 80% OFF</h4>
          
        </div>
        
      </div>
      <div className='right-banner'>
        <img src={watch} className='watch-img'/>
        <ChevronRight className='chev-right'/>
      </div>
    </div>
  )
}

export default Banner