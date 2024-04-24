import React from 'react'
import { useNavigate } from 'react-router-dom';
import Stake from './Stake';
function Overview() {
     

    const navigate=useNavigate();
    
    const decreasedAmountValue=JSON.parse(localStorage.getItem("decreasedAmountValue"))
    const stakingDay=JSON.parse(localStorage.getItem("stakingDay"))
    const apr=20
  return (
    <div className='Overview'>
        <div className='Overview-Container'>
                <div className='Overview-Container-Information'>
                    <div><p>LP Amount:</p> <p>{decreasedAmountValue}</p></div>
                    {/* (100x(lqFireValue/lqSeiValue))*(percent/100) */}
                    <div><p>Daily FIRE Reward:</p><p>15</p></div>
                    <div><p>Time Period:</p><p>{stakingDay}</p></div>
                    {/* stakeDayValue değişkeni değeri  */}
                    <div><p>APR:</p><p>{apr}%</p></div>

                </div>
               
                {/* <input disabled type="Number" placeholder='Days' value={inputValue} onChange={e => setInputValue(e.target.value)} /> */}
                {/* <TextField id='TextField' variant='filled' color='white' disabled InputProps={{startAdornment:(<InputAdornment position="end">{inputValue}Days</InputAdornment>),}}/> */}
                {/* <div className='Days'><p>{inputValue}</p> <p>Days</p></div> */}
                <div className='Overview-Container-Bottom'>
                    <button onClick={()=>navigate('/pool/lqamount/stake')} id='BackBtn'>Back</button>
                    <button onClick={()=>navigate('/pool')} id='StakeBtn'>Stake</button>
                    {/* stake butonuna tıklandığında pool daki 4.kutucuktaki değerlere gönderilecek */}
                </div>
            </div>
    </div>
  )
}
export default Overview;
