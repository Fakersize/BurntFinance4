import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/Logo.png'
// import {fire} from '../src/Images/el_fire.png'
function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Navbar-Container'>
                <div className='Navbar-Container-Left'>
                   <div className='Logo'><img src={Logo} alt="" /><Link to="/"><span>BurntFinance</span></Link></div> 
                </div>
                <div className='Navbar-Container-Mid'>
                   
                        <Link id='SwapLink' to="/swap"><button className='SwapLinkBtn'>Swap</button></Link>
                    
                    
                        <Link id='PoolsLink' to="/pool"><button className='PoolsBtn'>Pools</button></Link>
                    

                </div>
                <div className='Navbar-Container-Right'>
                    <button>Connect Wallet</button>
                </div>


            </div>
        </div>
    )
}

export default Navbar