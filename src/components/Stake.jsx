import { TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputAdornment } from '@mui/material';
import { Box } from '@mui/material'
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
function Stake() {


    function handleButtonClick(percentage, inputValue) {
        if (value === 'Max') {
            setPercent(100)

        } else {
            setPercent(parseFloat(value))

        }
        setPercent(percentage);
        // setInputValue(inputValue);
    }
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate('/pool/lqamount/stake/overview')
        localStorage.setItem("stakingDay",JSON.stringify(stakeDayValue))
    }
    const [percent, setPercent] = useState(0);
    const [stakeDayValue, setStakeDayValue] = useState(0);
        


    return (
        <div className='Stake'>
            <div className='Lqamount-Container'>
                <div className='Lqamount-TopDiv'>
                    <h1>Choose Staking Day</h1>
                </div>
                <div style={{ height: 200 }} className='Lqamount-Container-Stake'>
                    <h1 style={{ fontSize: 30 }}>{stakeDayValue} Days</h1>
                </div>
                <div style={{ width: 600 }} className='Lqamount-Percent-Div'>
                    {/* <div className='Content' style={{ width: `${percent}%` }}></div>
                    <button id='percentBtn' value={60} className='Button' onClick={() => handleButtonClick(50, 60)}>60 D</button>
                    <button id='percentBtn' value={90} className='Button' onClick={() => handleButtonClick(75, 90)}>90 D</button>
                    <button id='percentBtn' value={100} className='Button' onClick={() => handleButtonClick(100, 100)}>100 D</button>
                    <button id='percentBtn' value={30} className='Button' onClick={() => handleButtonClick(25, 30)}>30 D</button>
                    <button className='Button' onClick={() => handleButtonClick(1, 1)}>1 D</button> */}
                    <Box sx={{ width: 550 }}>

                        <Slider aria-label="Default" valueLabelDisplay="auto"
                            sx={{
                                width: "100%",
                                height: 15,
                                backgroundImage: 'linear-gradient(to right, black, rgb(195, 30, 40))',
                                color: 'whitesmoke'
                            }}
                            value={percent.toString()} onChange={(e, newValue) => {
                                setPercent(newValue);
                                setStakeDayValue(newValue);
                            }} />
                        
                    </Box>
                </div>
                {/* <input disabled type="Number" placeholder='Days' value={inputValue} onChange={e => setInputValue(e.target.value)} /> */}
                {/* <TextField id='TextField' variant='filled' color='white' disabled InputProps={{startAdornment:(<InputAdornment position="end">{inputValue}Days</InputAdornment>),}}/> */}
                <div className='Days'><p>{stakeDayValue}</p> <p>Days</p></div>
                <div className='Lqamount-Container-Bottom'>
                    <button onClick={() => navigate('/pool')} id='BackBtn'>Back</button>
                    <button onClick={handleNextClick} id='NextBtn'>Next</button>
                </div>
            </div>
        </div>
    )
}
export default Stake;
