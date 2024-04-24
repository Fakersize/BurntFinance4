import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackgroundImage from '../src/Images/BackgroundImage.png'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Swap from './components/Swap';
import Pool from './components/Pool';
import Stake from './components/Stake';
import Overview from './components/Overview'
import Lqamount from './components/Lqamount'
import Createpool from './components/Createpool'


function App() {


  return (

    <div className='App'>
      <div className='App-Default'>
        <div className='App-container'>
          <Navbar />
          <Routes>
            {/* <Route path="*" exact element={<App />} /> */}
            <Route path='/swap' exact element={<Swap />} />
            <Route path='/pool' exact element={<Pool />} />
            <Route path='/pool/lqamount' exact element={<Lqamount />} />
            <Route path='/pool/lqamount/stake' exact element={<Stake />} />
            <Route path='/pool/lqamount/stake/overview' exact element={<Overview />} />
            <Route path='/pool/createpool' exact element={<Createpool/>} />
          </Routes>
        </div>
      </div>


    </div>


  )
}

export default App
