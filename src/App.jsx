import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Smartphones from './components/Smartphones'
import ShopCategory from './components/ShopCategory'
import ElectronicsBrand from './components/ElectronicsBrand'
import Groceries from './components/Groceries'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Smartphones/>
      <ShopCategory/>
      <ElectronicsBrand/>
      <Groceries/>
      <Footer/>
    </div>
  )
}

export default App