import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { useRef } from 'react'
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OsmoLogo from '../Images/OsmoLogo.png'
import SeiLogo from '../Images/SeiLogo.png'
import UsdcLogo from '../Images/UsdcLogo.png'
import Logo from '../Images/Logo.png'
import AtomLogo from '../Images/AtomLogo.png'
function Pool() {
    const handleButtonClick = (value) => {
        if (value === 'Max') {
            setPercent(100)
        } else {
            setPercent(parseFloat(value))
        }

    }
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate('/pool/stake')
    }
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const sendLq = () => {
        setLqFireValue(document.getElementById("firstInput").value)
        setLqSeiValue(document.getElementById("secondInput").value)
        localStorage.setItem("lqFireValue", JSON.stringify(lqFireValue));
        localStorage.setItem("lqSeiValue", JSON.stringify(lqSeiValue));
        handleClose();
    }

    //-----Koşullu logo bastırma bölümü(çözülemedi)-----
    //Pool Name geçici olarak verildi,koşullu isim yazdırılacak

    // const firstTokenRef = useRef(null);
    // const secondTokenRef = useRef(null);

    // const firstTokenDisplay = () => {
    //     if (localStorage.getItem('firstToken') !== null) {
    //         const firstToken = document.getElementById('SingleFirstPoolLogo')
    //         const firstTokenImg = firstToken.getAttribute("src")
    //         // const firstTokenImg = document.getElementById('SingleFirstPoolLogo').src
    //         if (localStorage.getItem('firstToken') === 'FIRE') {
    //             return firstTokenImg = require("../Images/Logo.png")
    //         }
    //         if (localStorage.getItem('firstToken') === 'SEI') {
    //             return firstTokenImg = require("../Images/SeiLogo.png")
    //         }
    //         if (localStorage.getItem('firstToken') === 'ATOM') {
    //             return firstTokenImg = require("../Images/AtomLogo.png")
    //         }
    //         if (localStorage.getItem('firstToken') === 'OSMO') {
    //             return firstTokenImg = require("../Images/OsmoLogo.png")
    //         }
    //     }

    // }
    // const secondTokenDisplay = () => {
    //     if (localStorage.getItem('firstToken') !== null) {
    //         const secondToken = document.getElementById('SingleSecondPoolLogo')
    //         const secondTokenImg = secondToken.getAttribute("src")
    //         // const secondTokenImg = document.getElementById('SingleSecondPoolLogo').src
    //         if (localStorage.getItem('secondToken') === 'FIRE') {
    //             return secondTokenImg = require("../Images/Logo.png")
    //         }
    //         if (localStorage.getItem('secondToken') === 'SEI') {
    //             return secondTokenImg = require("../Images/SeiLogo.png")
    //         }
    //         if (localStorage.getItem('secondToken') === 'ATOM') {
    //             return secondTokenImg = require("../Images/AtomLogo.png")
    //         }
    //         if (localStorage.getItem('secondToken') === 'OSMO') {
    //             return secondTokenImg = require("../Images/OsmoLogo.png")
    //         }
    //     }

    // }




    const toCreatePool = () => {
        navigate('/pool/createpool');
    }
    const toStakeNavigate = () => {
        navigate('/pool/lqamount')
        const lpAmountValue = document.getElementById("lpAmountValue").value;
        localStorage.setItem("lpAmountValue", JSON.stringify(lpAmountValue))
    }
    const [open, setOpen] = useState(false);
    const [percent, setPercent] = useState(0);
    const [fire, setFire] = useState(5000);
    const [addLFire, setAddLFire] = useState(0);
    const [sei, setSei] = useState(4000)
    const [firstInput, setFirstInput] = useState(0)
    const [lqFireValue, setLqFireValue] = useState(0);
    const [lqSeiValue, setLqSeiValue] = useState(0);


    const decreasedAmountValue = JSON.parse(localStorage.getItem("decreasedAmountValue"));
    const stakingDay = JSON.parse(localStorage.getItem("stakingDay"));


    return (
        <div className='Pool'>
            <div className='creatingNewPool'>
                <div className='creatingNewPoolFirstDiv'>
                    <h2>Fire Price</h2>
                    <h1>$10</h1>
                </div>
                <div className='creatingNewPoolSecondDiv'>
                    <button onClick={toCreatePool} className='createPoolBtn'>Create New Pool</button>
                </div>
            </div>
            <div className='Pool-Container'>

                <div className='firstDiv'>
                    <div className='firstDiv-Top'>
                        <h1>Pool Data</h1> <p>Swap Fee:0.3% Reward: <img src="" alt="" />FIRE</p>
                    </div>
                    <div className='firstDiv-Bottom'>
                        <div className='firstDiv-Bottom-First'>
                            <div><img id='SinglePoolLogo' src={Logo} alt="" /><p>FIRE: <input readOnly type="number" value={15000} /></p> </div>
                            <div><img id='SinglePoolLogo' src={SeiLogo} alt="" /><p>SEI: <input readOnly type="number" value={10000} /></p> </div>
                        </div>
                        <div className='firstDiv-Bottom-Second'>
                            <div className='firstDiv-Bottom-Second-Container'>
                                <p id='MaxApr'>Max APR: </p><input value={20} type="number" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='secondDiv'>
                    <div className='secondDiv-Top'><h1>My Liquidity Data</h1></div>
                    <div className='secondDiv-Bottom'>
                        <div className='secondDiv-Bottom-First'>
                            <img id='SinglePoolLogo' src={Logo} alt="" />
                            <p>FIRE: <input readOnly value={lqFireValue} type="number" /></p>
                            <img id='SinglePoolLogo' src={SeiLogo} alt="" />
                            <p>SEI: <input readOnly value={lqSeiValue} type="number" />
                            </p>
                        </div>
                        <div className='secondDiv-Bottom-Second'><button onClick={handleClickOpen}>Add Liquidity</button> <button>Remove Liquidity</button></div>
                        <Dialog sx={{
                            "& .MuiDialog-paper": {
                                width: "80%",
                                maxWidth: "80%",
                                // backgroundColor:'rgb(174, 106, 95)',
                                backgroundImage: 'linear-gradient(to right, black, rgb(195, 30, 40))',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: 0.9,
                                borderRadius: 10
                            },
                        }} open={open} onClose={handleClose}>
                            <div className='Pool-Container-Top'>
                                {/* <h1>Liquidity Amount</h1> */}
                                <h1>Add Liquidity</h1>
                                <div className='Pool-Container-Information'>
                                    <div className='Pool-Container-Information-top'>
                                        <p>FIRE:{fire}</p>
                                        <button>
                                            <input readOnly id='firstInput' value={(fire * (percent / 100))} type="number" />
                                        </button>
                                    </div>
                                    <div className='Pool-Container-Information-bottom'>
                                        <p>SEI:{sei}</p>
                                        <button>
                                            <input readOnly id='secondInput' value={((fire * (percent / 100))) / 0.9} type="number" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                            {/* <div className='Pool-Container-Stake'>
                    <p>Amount to Stake: 0</p>
                </div> */}
                            <p id='percent'>%{percent}</p>
                            <div className='Pool-Percent-Div'>
                                {/* <div className='Content' style={{ width: `${percent}%` }}></div>
                    <button className='Button' onClick={() => handleButtonClick(50)}>50%</button>
                    <button className='Button' onClick={() => handleButtonClick(75)}>75%</button>
                    <button className='Button' onClick={() => handleButtonClick('Max')}>Max</button>
                    <button className='Button' onClick={() => handleButtonClick(25)}>25%</button> */}

                                <Box sx={{ width: 550 }}>

                                    <Slider aria-label="Default" valueLabelDisplay="auto" sx={{ width: "100%", height: 15, backgroundImage: 'linear-gradient(to right, black, rgb(195, 30, 40))', color: 'whitesmoke' }} value={percent} onChange={(e, newValue) => {
                                        setPercent(newValue);
                                        // setSliderWidth(`${newValue}`)
                                    }} />
                                    <Box sx={{ width: "100%", marginTop: "1rem" }}>
                                        <Button onClick={() => handleButtonClick(25)}>25%</Button>
                                        <Button onClick={() => handleButtonClick(50)}>50%</Button>
                                        <Button onClick={() => handleButtonClick(75)}>75%</Button>
                                        <Button onClick={() => handleButtonClick("Max")}>Max</Button>
                                    </Box>
                                </Box>
                            </div>
                            <div className='Pool-Container-Bottom'>
                                {/* <button disabled id='BackBtn'>Back</button>
                    <button onClick={handleNextClick} id='NextBtn'>Next</button> */}
                                <button onClick={sendLq} id='addLqBtn'>Add Liquidity</button>
                            </div>
                        </Dialog>
                    </div>
                </div>
                <div className='thirdDiv'>
                    <div className='thirdDiv-Top'><h1>Staking</h1></div>
                    <div className='thirdDiv-Bottom'>
                        <p>Avaible LP Amount: <input id='lpAmountValue' readOnly value={(lqFireValue / lqSeiValue) * 100} type="number" /></p>
                        <button onClick={toStakeNavigate}>Stake</button>

                    </div>
                </div>
                <div id='firstFourthDiv' className='fourthDiv'>
                    <div className='fourthDiv-Top'>
                        <h1 id='MyStakedPositions'>My Staked Positions</h1>
                    </div>
                    <div className='fourthDiv-Second'>
                        <div className='fourthDiv-Second-Container'>
                            <p>Pool Name</p>
                            <p>LP Amount</p>
                            <p>Unstaking Period</p>
                            <p>APR</p>
                        </div>
                    </div>
                    <div className='fourthDiv-Third'>
                        <div className='fourthDiv-Third-Left'>
                            <div className='LogoDiv'><img id='SinglePoolLogo' src={Logo} alt="" /><img className='SeiMyStaked' id='SinglePoolLogo' src={SeiLogo} alt="" /></div> <p id='Poolname'>FIRE-SEI</p>
                        </div>
                        <div><input id='dav' value={decreasedAmountValue} readOnly type="number" /></div>
                        <div><input value={stakingDay} readOnly type="number" /></div>
                        <div><input value={20} readOnly type="number" /></div>
                    </div>
                    <div className='fourthDiv-fourth'>
                        <button id='UnstakeBtn'>Unstake</button>
                    </div>
                </div>
                <div className='fifthDiv'>
                    <div className='fifthDiv-Top'>
                        <h1>My Reward Data</h1>
                    </div>
                    <div className='fifthDiv-Bottom'>
                        <div><img src="" alt="" /><p>FIRE: <input readOnly type="number" /></p></div>
                        <div className=''><button id='ClaimBtn'>Claim</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* component oluşturulacak * yada/}
           {/* LocalStorage tan getItem methoduyla veriler alınacak */}
            {localStorage.getItem('firstToken') !== null ? (
                <div className='MyPoolsDiv'>
                    <div className='MyPoolsContainerDiv'>
                        <div className='fourthDiv-Top'>
                            <h1 id='MyPools'>My Pools</h1>
                        </div>
                        <div className='fourthDiv-Second'>
                            <div className='fourthDiv-Second-Container'>
                                <p id='PoolName'>Pool Name</p>
                                <p id='undefined'>XXXXXX</p>
                                <p id='undefined'>XXXXXX</p>
                                <p id='undefined'>XXXXXX</p>
                                <p id='undefined'>APR</p>
                            </div>
                        </div>
                        <div id='MyPoolsInformation' className='fourthDiv-Third'>
                            <div className='fourthDiv-Third-Left'>
                                <div className='LogoDiv'><img id='SingleFirstPoolLogo' alt="" /><img id='SingleSecondPoolLogo' alt="" /></div> <p id='Poolname'>FIRE-SEI</p>
                            </div>
                            <div><input id='MyPoolsInput' value={`$${1000000}`} readOnly type="type" /></div>
                            <div><input id='MyPoolsInput' value={`${3.90}%`} readOnly type="type" /></div>
                            <div><input id='MyPoolsInput' value={20} readOnly type="number" /></div>
                            <div><input id='MyPoolsInput' value={55} type="text" /></div>
                        </div>
                    </div>

                </div>
            ) : (
                <div></div>
            )}
            <div className='DiscoverPools'>
                <div className='fourthDiv'>
                    <div className='fourthDiv-Top'>
                        <h1>Discover Pools</h1>
                    </div>
                    <div className='fourthDiv-Second'>
                        <div className='fourthDiv-Second-Container'>
                            <p id='PoolName'>Pool Name</p>
                            <p id='PoolName' >Reward Token</p>
                            <p id='PoolName'>Total Liquidity</p>
                            <p id='PoolName'>APR</p>
                        </div>
                    </div>
                    <div id='FirstDiscoverPool' className='fourthDiv-Third'>
                        <div className='fourthDiv-Third-Left'>
                            <div className='LogoDiv'><img id='SinglePoolLogo' src={Logo} alt="" /><img className='SeiMyStaked' id='SinglePoolLogo' src={SeiLogo} alt="" /></div> <p id='Poolname'>FIRE/SEI</p>
                        </div>
                        <div><input id='DiscoverPoolsInput' value={'-'} readOnly type="type" /></div>
                        <div><input id='DiscoverPoolsInput' value={`${0.00}$`} readOnly type="type" /></div>
                        <div><input id='DiscoverPoolsInput' value={`${0}%`} readOnly type="type" /></div>
                    </div>
                    <div id='SecondDiscoverPool' className='fourthDiv-Third'>
                        <div className='fourthDiv-Third-Left'>
                            <div className='LogoDiv'><img id='SinglePoolLogo' src={AtomLogo} alt="" /><img className='SeiMyStaked' id='SinglePoolLogo' src={Logo} alt="" /></div> <p id='Poolname'>ATOM/FIRE</p>
                        </div>
                        <div><input id='DiscoverPoolsInput' value={'-'} readOnly type="type" /></div>
                        <div><input id='DiscoverPoolsInput' value={`${0.00}$`} readOnly type="type" /></div>
                        <div><input id='DiscoverPoolsInput' value={`${0}%`} readOnly type="type" /></div>
                    </div>
                    <div id='ThirdDiscoverPool' className='fourthDiv-Third'>
                        <div className='fourthDiv-Third-Left'>
                            <div className='LogoDiv'><img id='SinglePoolLogo' src={SeiLogo} alt="" /><img className='SeiMyStaked' id='SinglePoolLogo' src={OsmoLogo} alt="" /></div> <p id='Poolname'>SEI/OSMO</p>
                        </div>
                        <div><input id='DiscoverPoolsInput' value={'-'} readOnly type="type" /></div>
                        <div><input id='DiscoverPoolsInput' value={`${0.00}$`} readOnly type="type" /></div>
                        <div><input id='DiscoverPoolsInput' value={`${0}%`} readOnly type="type" /></div>
                    </div>
                    <div id='FourthDiscoverPool' className='fourthDiv-Third'>
                        <div className='fourthDiv-Third-Left'>
                            <div className='LogoDiv'><img id='SinglePoolLogo' src={Logo} alt="" /><img className='SeiMyStaked' id='SinglePoolLogo' src={OsmoLogo} alt="" /></div> <p id='Poolname'>FIRE/OSMO</p>
                        </div>
                        <div><input id='DiscoverPoolsInput' value={'-'} readOnly type="type" /></div>
                        <div><input id='DiscoverPoolsInput' value={`${0.00}$`} readOnly type="type" /></div>
                        <div><input id='DiscoverPoolsInput' value={`${0}%`} readOnly type="type" /></div>
                    </div>

                </div>
            </div>

        </div>

    )
}
export default Pool;
