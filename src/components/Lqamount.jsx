import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

function Lqamount() {
    const [percent, setPercent] = useState(0);
    const handleNextClick = () => {
        navigate('/pool/lqamount/stake')
        const amountToStake=document.getElementById('amount').value;
        localStorage.setItem('decreasedAmountValue',JSON.stringify(amountToStake))
    }
    const handlePrevClick=()=>{
        navigate('/pool')
    }
    const handleButtonClick = (value) => {
        if (value === 'Max') {
            setPercent(100)
        } else {
            setPercent(parseFloat(value))
        }

    }
    const lqAmountValue=JSON.parse(localStorage.getItem("lpAmountValue"));
    const navigate = useNavigate();
    return (
        <div className='Lqamount'>
            <div className='Lqamount-Container'>
                <div className='Lqamount-TopDiv'>
                    <h1>Liquidity Amount</h1>
                </div>
                <div className='Lqamount-Container-Stake'>
                    <p>Amount to Stake: <input value={lqAmountValue*(percent/100)} id='amount' type="number" /></p>
                    {/* (lqFireValue/lqSeiValue)/100 yazılacak */}
                   
                </div>
                <p id='percent'>%{percent}</p>
                <div className='Lqamount-Percent-Div'>

                    <Box sx={{ width: 550 }}>

                        <Slider aria-label="Default" valueLabelDisplay="auto" sx={{ width: "100%", height: 15, backgroundImage: 'linear-gradient(to right, black, rgb(195, 30, 40))', color: 'whitesmoke' }} value={percent.toString()} onChange={(e, newValue) => {
                            setPercent(newValue);
                        }} />
                        <Box sx={{ width: "100%", marginTop: "1rem",border:0 ,display:'flex',justifyContent:'center',color:'whitesmoke' }}>
                            <Button onClick={() => handleButtonClick(25)}>25%</Button>
                            <Button onClick={() => handleButtonClick(50)}>50%</Button>
                            <Button onClick={() => handleButtonClick(75)}>75%</Button>
                            <Button onClick={() => handleButtonClick("Max")}>Max</Button>
                        </Box>
                    </Box>
                </div>
                <div className='Lqamount-Container-Bottom'>
                    <button onClick={handlePrevClick} id='BackBtn'>Back</button>
                    <button onClick={handleNextClick} id='NextBtn'>Next</button>

                </div>
            </div>

        </div>

    )
}
export default Lqamount;