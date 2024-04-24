import React, { useEffect, useRef } from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OsmoLogo from '../Images/OsmoLogo.png'
import SeiLogo from '../Images/SeiLogo.png'
import UsdcLogo from '../Images/UsdcLogo.png'
import Logo from '../Images/Logo.png'
import AtomLogo from '../Images/AtomLogo.png'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material'
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import copied from '../Images/material-symbols_content-copy-rounded.png'
import { useNavigate } from 'react-router-dom';

function Createpool() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleButtonClick = (value) => {
        if (value === 'Max') {
            setPercent(1)
        } else {
            setPercent(parseFloat(value) / 100)
        }

    }

    const [percent, setPercent] = useState(0);
    const [creatorLpFeePercentage, setCreatorLpFeePercentage] = useState(0);
    const [color, setColor] = useState('whitesmoke')

    const [isClickedNextBtn, setIsClickedNextBtn] = useState(false)

    const [firstToken, setFirstToken] = useState('');
    const [secondToken, setSecondToken] = useState('');

    const lpFeePercentage = 100 - creatorLpFeePercentage;


    const handleMenuItemClick = (event) => {
        setFirstToken(event.target.innerText)

    }
    const handleSecondMenuItemClick = (event) => {
        setSecondToken(event.target.innerText);
    }

    const creatingPoolNext = () => {
        console.log(firstToken);
        console.log(secondToken);
        setIsClickedNextBtn(true);
    }
    const creatingPoolBack = () => {

        setIsClickedNextBtn(false);
        setIsClickedNextBtnAgain(false);
    }

    const [isClickedNextBtnAgain, setIsClickedNextBtnAgain] = useState(false);

    const creatingPoolNextAgain = () => {
        setIsClickedNextBtnAgain(true);
    }

    const [DialogContentTextInputValue, setDialogContentTextInput] = useState('');
    const addressOnChange = (event) => {

        event.preventDefault();
        console.log(event.target.value)
        setDialogContentTextInput(event.target.value)

    }


    const copy = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(DialogContentTextInputValue)
    }

    const navigate = useNavigate();
    const goToPoolClick = () => {
        localStorage.setItem('firstToken', JSON.stringify(firstToken));
        localStorage.setItem('secondToken', JSON.stringify(secondToken));
        const tokenAddress = document.getElementById('TokenAddress').value
        const creatingTokenName = document.getElementById('TokenName').value
        const creatingTicker = document.getElementById('TickerInput').value
        const creatingMaxSupply = document.getElementById('MaxSupply').value
        localStorage.setItem('tokenAddress', JSON.stringify(tokenAddress));
        localStorage.setItem('creatingTokenName', JSON.stringify(creatingTokenName));
        localStorage.setItem('creatingTicker', JSON.stringify(creatingTicker));
        localStorage.setItem('creatingMaxSupply', JSON.stringify(creatingMaxSupply));
        const totalSwapFeePercentage = document.getElementById('percentPercentageInput').value
        const creatorFeePercentageValue = document.getElementById('creatorFeePercentage').value;
        const lpFeePercentageValue = document.getElementById('lpFeePercentage').value;
        localStorage.setItem('totalSwapFeePercentage', JSON.stringify(totalSwapFeePercentage));
        localStorage.setItem('creatorFeePercentageValue', JSON.stringify(creatorFeePercentageValue));
        localStorage.setItem('lpFeePercentageValue', JSON.stringify(lpFeePercentageValue));
        navigate('/pool')
    }

    return (
        <div className='CreatePool'>
            <div className='CreatePoolContainer'>
                <div className='CreatePoolFirstDiv'>
                    <div className='CreatePoolFirstDivTopDiv'>
                        <h2>Token Settings</h2>
                    </div>

                    <div className='CreatePoolFirstDivMidDiv'>
                        {isClickedNextBtn ? (<div id='isClickedNextBtnDiv'>
                            <div className='TokenContractAddressDiv'><input id='TokenAddress' placeholder='Enter Token Contract Address Here' /></div>
                            <div className='TokenNameDiv'><span>Token Name</span><input id='TokenName' type="text" /></div>
                            <div className='TickerDiv'><span>Ticker</span><input id='TickerInput' /></div>
                            <div className='MaxSupplyDiv'><span>Max Supply</span><input id='MaxSupply' type="number" /></div>
                            <div className='CreatePoolFirstDivBtn'>
                                <button onClick={creatingPoolBack} id='creatingPoolBackBtn'>Back</button>
                                <button onClick={creatingPoolNextAgain} id='creatingPoolNextBtn'>Next</button>
                            </div>
                        </div>


                        )
                            : (<div id='isNotClickedNextBtnDiv'>
                                <Accordion id='Accordion' defaultActiveKey="0">
                                    <Accordion.Item id='AccordionItem' eventKey="0">
                                        <Accordion.Header id='AccordionHeader' style={{
                                            width: 560
                                        }}><span id='Token1'>Token 1</span></Accordion.Header>
                                        <Accordion.Body style={{ backgroundColor: 'whitesmoke' }}>
                                            <MenuItem onClick={handleMenuItemClick} id='fire' sx={{ border: "none", boxShadow: "none", width: 500, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" }, "&:active": { backgroundColor: "whitesmoke", color: "black" } }}><img id='SingleLogo' src={Logo} alt=''></img>FIRE</MenuItem>
                                            <MenuItem onClick={handleMenuItemClick} id='sei' sx={{ border: "none", boxShadow: "none", width: 500, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }}>
                                                <img id='SingleLogo' src={SeiLogo} alt=''></img>   SEI
                                            </MenuItem>
                                            <MenuItem onClick={handleMenuItemClick} id='atom' sx={{ border: "none", boxShadow: "none", width: 500, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }}><img id='SingleLogo' src={AtomLogo} alt=''></img>ATOM</MenuItem>
                                            <MenuItem onClick={handleMenuItemClick} id='juno' sx={{ border: "none", boxShadow: "none", width: 500, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} >JUNO</MenuItem>
                                            <MenuItem onClick={handleMenuItemClick} id='osmo' sx={{ border: "none", boxShadow: "none", width: 500, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }}><img id='SingleLogo' src={OsmoLogo} alt=''></img>OSMO</MenuItem>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header style={{ width: 560 }}><span id='Token2'>Token 2</span></Accordion.Header>
                                        <Accordion.Body>
                                            <MenuItem onClick={handleSecondMenuItemClick} id='fire' sx={{ border: "none", boxShadow: "none", width: 500, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" }, "&:active": { backgroundColor: "whitesmoke", color: "black" } }}><img id='SingleLogo' src={Logo} alt=''></img>FIRE</MenuItem>
                                            <MenuItem onClick={handleSecondMenuItemClick} id='sei' sx={{ border: "none", boxShadow: "none", width: 500, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} >
                                                <img id='SingleLogo' src={SeiLogo} alt=''></img>   SEI
                                            </MenuItem>
                                            <MenuItem onClick={handleSecondMenuItemClick} id='atom' sx={{ border: "none", boxShadow: "none", width: 500, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} ><img id='SingleLogo' src={AtomLogo} alt=''></img>ATOM</MenuItem>
                                            <MenuItem onClick={handleSecondMenuItemClick} id='juno' sx={{ border: "none", boxShadow: "none", width: 500, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} >JUNO</MenuItem>
                                            <MenuItem onClick={handleSecondMenuItemClick} id='osmo' sx={{ border: "none", boxShadow: "none", width: 500, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} ><img id='SingleLogo' src={OsmoLogo} alt=''></img>OSMO</MenuItem>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className='CreatePoolFirstDivBtn'>
                                    <button onClick={creatingPoolBack} id='creatingPoolBackBtn'>Back</button>
                                    <button onClick={creatingPoolNext} id='creatingPoolNextBtn'>Next</button>
                                </div>
                            </div>

                            )}

                    </div>


                </div>
                {isClickedNextBtnAgain ? (
                    <div className='CreatePoolSecondDiv'>
                        <h1 id='PoolSettings'>Pool Settings</h1>
                        <div className='TotalSwapFeePercentageDiv'>
                            <h2>Total Swap Fee Percentage</h2>
                            <input id='percentPercentageInput' value={`${percent}%`} type="text" />
                        </div>
                        <div className='TotalSwapFreePercentageSliderDiv'>
                            <Box sx={{ width: 505 }}>

                                <Slider aria-label="Default" valueLabelDisplay="off" sx={{ width: "100%", height: 15, backgroundImage: 'linear-gradient(to right, black, rgb(195, 30, 40))', color: 'whitesmoke' }} value={percent * 100} onChange={(e, newValue) => {
                                    setPercent(newValue / 100);
                                }} />
                                <Box sx={{ width: "100%", marginTop: "1rem", border: 0, display: 'flex', justifyContent: 'center', color: 'whitesmoke' }}>
                                    <Button sx={{
                                        width: 100, border: 1, marginBottom: 1, marginRight: 1, color: 'whitesmoke', '&:hover': {
                                            backgroundImage: 'linear-gradient(to left, black, rgb(195, 30, 40))'
                                        },
                                    }} onClick={() => handleButtonClick(25)}>0.25</Button>
                                    <Button sx={{
                                        width: 100, border: 1, marginBottom: 1, marginRight: 1, color: 'whitesmoke', '&:hover': {
                                            backgroundImage: 'linear-gradient(to left, black, rgb(195, 30, 40))'
                                        },
                                    }} onClick={() => handleButtonClick(50)}>0.50</Button>
                                    <Button sx={{
                                        width: 100, border: 1, marginBottom: 1, marginRight: 1, color: 'whitesmoke', '&:hover': {
                                            backgroundImage: 'linear-gradient(to left, black, rgb(195, 30, 40))'
                                        },
                                    }} onClick={() => handleButtonClick(75)}>0.75</Button>
                                    <Button sx={{
                                        width: 100, border: 1, marginBottom: 1, marginRight: 1, color: 'whitesmoke', '&:hover': {
                                            backgroundImage: 'linear-gradient(to left, black, rgb(195, 30, 40))'
                                        },
                                    }} onClick={() => handleButtonClick("Max")}>1</Button>
                                </Box>
                            </Box>
                        </div>
                        <div className='CreatorFeePercentageDiv'>
                            <h2>Creator Fee Percentage</h2>
                            <input id='creatorFeePercentage' value={`${lpFeePercentage}%`} type="type" />
                        </div>
                        <div className='LpFeePercentageDiv'>
                            <h2>LP Fee Percentage</h2>
                            <input id='lpFeePercentage' value={`${creatorLpFeePercentage}%`} type="type" />
                        </div>
                        <div className='LPCreatorFreePercentageDiv'>
                            <div className='LPCreatorFreePercentageDivFirstDiv'>
                                <h6>LP Fee Percentage</h6>
                                <h6>Creator Fee Percentage</h6>
                            </div>
                            <Slider aria-label="Default" valueLabelDisplay="off" sx={{ width: "100%", height: 15, backgroundImage: 'linear-gradient(to right, black, rgb(195, 30, 40))', color: 'whitesmoke' }} value={creatorLpFeePercentage} onChange={(e, newValue) => {
                                setCreatorLpFeePercentage(newValue);
                            }} />
                        </div>
                        <button id='CreatePoolBtn' onClick={handleClickOpen}>Create Pool</button>
                        <Dialog sx={{ width: 1500, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                component: 'form',
                                onSubmit: (event) => {
                                    event.preventDefault();
                                    handleClose();
                                },
                            }}
                        >
                            <DialogTitle sx={{ color: 'whitesmoke', backgroundColor: 'black' }}>Pool Contract Address</DialogTitle>
                            <div className='inputAndCopyDiv'>
                                <DialogContent>
                                    <DialogContentText sx={{ width: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <input onChange={addressOnChange} value={DialogContentTextInputValue} id='DialogContentTextInput' style={{ width: 500, marginRight: 20, borderRadius: 8 }} /> <div className='copyDiv'><button onClick={copy} id='copyBtn'>Copied!</button> <button onClick={copy} id='copiedBtn'><img id='copied' src={copied} alt="" /></button></div>
                                    </DialogContentText>

                                </DialogContent>

                            </div>
                            <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                                <Button sx={{ color: 'black', fontSize: 20, border: 0, width: 300, backgroundImage: 'linear-gradient(to right, rgb(174, 106, 25), rgb(195, 30, 30))', color: 'whitesmoke', borderRadius: 5, fontFamily: 'Arial, Helvetica, sans-serif', textTransform: 'inherit' }} onClick={goToPoolClick}>Go to Pool</Button>

                            </DialogActions>

                        </Dialog>
                    </div>) : (<div className='CreatePoolSecondDisplayDiv'>
                        {/* <div className='CreatePoolSecondDiv'>
                        <h1 id='PoolSettings'>Pool Settings</h1>
                        <div className='TotalSwapFeePercentageDiv'>
                            <h2>Total Swap Free Percentage</h2>
                            <input type="number" />
                        </div>
                        <div className='TotalSwapFreePercentageSliderDiv'>
                            <Box sx={{ width: 505 }}>

                                <Slider aria-label="Default" valueLabelDisplay="auto" sx={{ width: "100%", height: 15, backgroundImage: 'linear-gradient(to right, black, rgb(195, 30, 40))', color: 'whitesmoke' }} value={percent.toString()} onChange={(e, newValue) => {
                                    setPercent(newValue);
                                }} />
                                <Box sx={{ width: "100%", marginTop: "1rem", border: 0, display: 'flex', justifyContent: 'center', color: 'whitesmoke' }}>
                                    <Button sx={{
                                        width: 100, border: 1, marginBottom: 1, marginRight: 1, color: 'whitesmoke', '&:hover': {
                                            backgroundImage: 'linear-gradient(to left, black, rgb(195, 30, 40))'
                                        },
                                    }} onClick={() => handleButtonClick(25)}>25%</Button>
                                    <Button sx={{
                                        width: 100, border: 1, marginBottom: 1, marginRight: 1, color: 'whitesmoke', '&:hover': {
                                            backgroundImage: 'linear-gradient(to left, black, rgb(195, 30, 40))'
                                        },
                                    }} onClick={() => handleButtonClick(50)}>50%</Button>
                                    <Button sx={{
                                        width: 100, border: 1, marginBottom: 1, marginRight: 1, color: 'whitesmoke', '&:hover': {
                                            backgroundImage: 'linear-gradient(to left, black, rgb(195, 30, 40))'
                                        },
                                    }} onClick={() => handleButtonClick(75)}>75%</Button>
                                    <Button sx={{
                                        width: 100, border: 1, marginBottom: 1, marginRight: 1, color: 'whitesmoke', '&:hover': {
                                            backgroundImage: 'linear-gradient(to left, black, rgb(195, 30, 40))'
                                        },
                                    }} onClick={() => handleButtonClick("Max")}>Max</Button>
                                </Box>
                            </Box>
                        </div>
                        <div className='CreatorFeePercentageDiv'>
                            <h2>Creator Fee Percentage</h2>
                            <input type="number" />
                        </div>
                        <div className='LpFeePercentageDiv'>
                            <h2>LP Fee Percentage</h2>
                            <input type="number" />
                        </div>
                        <div className='LPCreatorFreePercentageDiv'>
                            <div className='LPCreatorFreePercentageDivFirstDiv'>
                                <h6>LP Fee Percentage</h6>
                                <h6>Creator Fee Percentage</h6>
                            </div>
                            <Slider aria-label="Default" valueLabelDisplay="auto" sx={{ width: "100%", height: 15, backgroundImage: 'linear-gradient(to right, black, rgb(195, 30, 40))', color: 'whitesmoke' }} value={percent.toString()} onChange={(e, newValue) => {
                                setPercent(newValue);
                            }} />
                        </div>
                        <button id='CreatePoolBtn'>Create Pool</button>
                    </div> */}
                    </div>)}

            </div>
        </div>
    )
}

export default Createpool