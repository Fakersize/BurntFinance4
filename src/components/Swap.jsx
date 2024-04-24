import React from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button, DialogTitle } from '@mui/material';
import Exchange from '../Images/Exchange.png'
import { useEffect } from 'react';
import OsmoLogo from '../Images/OsmoLogo.png'
import SeiLogo from '../Images/SeiLogo.png'
import UsdcLogo from '../Images/UsdcLogo.png'
import Logo from '../Images/Logo.png'
import AtomLogo from '../Images/AtomLogo.png'
// import backgroundSwap from '../Images/backgroundSwap.png'




function Swap() {

    const [random, setRandom] = useState(0);
    const [prevRandom, setPrevRandom] = useState(0);
    // const [half,setHalf]=useState(0);
    // const [inputValue, setInputValue] = useState("");
    const [firstValue, setFirstValue] = useState(0);
    const [label, setLabel] = useState("");
    const [secondLabel, setSecondLabel] = useState("")
    const [secondInputValue, setSecondInputValue] = useState();
    const [reversedfirstInput, setReversedFirstInput] = useState();
    const [placeholder, setPlaceHolder] = useState("")
    // const placeholder=`1 ${label} = ${secondLabel}`
    const handleMenuItemClickReversed = (event) => {
        const id = event.target.id;
        setSecondLabel(id);
        const firstInputValue = document.getElementById("Swap-Box-Second-input").value;
        // console.log(firstInputValue)
        // console.log(reversedfirstInput);
        const reversedfirstInput = document.getElementById("Swap-Box-First-Box-Bottom-input").value;

        if (label === "fire" && secondLabel === "fire/sei") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 1);
            setPlaceHolder(`1 ${label} =1 ${secondLabel}`)
        }
        if (label === "sei" && secondLabel === "fire/sei") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 1.5);
            setPlaceHolder(`1 ${label} =1.5 ${secondLabel}`)
        }
        if (label === "atom" && secondLabel === "fire/sei") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 2);
            setPlaceHolder(`1 ${label} =2 ${secondLabel}`)
        }
        if (label === "juno" && secondLabel === "fire/sei") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 2.5);
            setPlaceHolder(`1 ${label} =2.5 ${secondLabel}`)
        }
        if (label === "osmo" && secondLabel === "fire/sei") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 3);
            setPlaceHolder(`1 ${label} =3 ${secondLabel}`)
        }
        if (label === "fire" && secondLabel === "fire/atom") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 1);
            setPlaceHolder(`1 ${label} =1 ${secondLabel}`)
        }
        if (label === "sei" && secondLabel === "fire/atom") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 1.5);
            setPlaceHolder(`1 ${label} =1.5 ${secondLabel}`)
        }
        if (label === "atom" && secondLabel === "fire/atom") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 2);
            setPlaceHolder(`1 ${label} =2 ${secondLabel}`)
        }
        if (label === "juno" && secondLabel === "fire/atom") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 2.5);
            setPlaceHolder(`1 ${label} =2.5 ${secondLabel}`)
        }
        if (label === "osmo" && secondLabel === "fire/atom") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 3);
            setPlaceHolder(`1 ${label} =3 ${secondLabel}`)
        }
        if (label === "fire" && secondLabel === "fire/juno") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 1);
            setPlaceHolder(`1 ${label} =1 ${secondLabel}`)
        }
        if (label === "sei" && secondLabel === "fire/juno") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 1.5);
            setPlaceHolder(`1 ${label} =1.5 ${secondLabel}`)
        }
        if (label === "atom" && secondLabel === "fire/juno") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 2);
            setPlaceHolder(`1 ${label} =2 ${secondLabel}`)
        }
        if (label === "juno" && secondLabel === "fire/juno") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 2.5);
            setPlaceHolder(`1 ${label} =2.5 ${secondLabel}`)
        }
        if (label === "osmo" && secondLabel === "fire/juno") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 3);
            setPlaceHolder(`1 ${label} =3 ${secondLabel}`)
        }
        if (label === "fire" && secondLabel === "fire/osmo") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 1);
            setPlaceHolder(`1 ${label} =1 ${secondLabel}`)
        }
        if (label === "sei" && secondLabel === "fire/osmo") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 1.5);
            setPlaceHolder(`1 ${label} =1.5 ${secondLabel}`)
        }
        if (label === "atom" && secondLabel === "fire/osmo") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 2);
            setPlaceHolder(`1 ${label} =2 ${secondLabel}`)
        }
        if (label === "juno" && secondLabel === "fire/osmo") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 2.5);
            setPlaceHolder(`1 ${label} =2.5 ${secondLabel}`)
        }
        if (label === "osmo" && secondLabel === "fire/osmo") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 3);
            setPlaceHolder(`1 ${label} =3 ${secondLabel}`)
        }
        if (label === "fire" && secondLabel === "fire/usdc") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 1);
            setPlaceHolder(`1 ${label} =1 ${secondLabel}`)
        }
        if (label === "sei" && secondLabel === "fire/usdc") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 1.5);
            setPlaceHolder(`1 ${label} =1.5 ${secondLabel}`)
        }
        if (label === "atom" && secondLabel === "fire/usdc") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 2);
            setPlaceHolder(`1 ${label} =2 ${secondLabel}`)
        }
        if (label === "juno" && secondLabel === "fire/usdc") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 2.5);
            setPlaceHolder(`1 ${label} =2.5 ${secondLabel}`)
        }
        if (label === "osmo" && secondLabel === "fire/usdc") {
            // setReversedFirstInput(0);
            setReversedFirstInput(parseInt(firstInputValue) * 3);
            setPlaceHolder(`1 ${label} =3 ${secondLabel}`)
        }
    }

    const handleSecondMenuItemClick = (event) => {

        const id = event.target.id
        setSecondLabel(id);

        const firstInputValue = document.getElementById("Swap-Box-First-Box-Bottom-input").value;
        const secondInputValue = document.getElementById("Swap-Box-Second-input").value;
        if (label === "fire/sei" && secondLabel === "fire") {
            setSecondInputValue(parseInt(firstInputValue) * 1);
            setPlaceHolder(`1 ${label} =1 ${secondLabel}`)
        }
        if (label === "fire/sei" && secondLabel === "sei") {
            setSecondInputValue(parseInt(firstInputValue) * 1.5);
            setPlaceHolder(`1 ${label} =1.5 ${secondLabel}`)
        }
        if (label === "fire/sei" && secondLabel === "atom") {
            setSecondInputValue(parseInt(firstInputValue) * 2);
            setPlaceHolder(`1 ${label} =2 ${secondLabel}`)
        }
        if (label === "fire/sei" && secondLabel === "juno") {
            setSecondInputValue(parseInt(firstInputValue) * 2.5);
            setPlaceHolder(`1 ${label} =2.5 ${secondLabel}`)
        }
        if (label === "fire/sei" && secondLabel === "osmo") {
            setSecondInputValue(parseInt(firstInputValue) * 3);
            setPlaceHolder(`1 ${label} =3 ${secondLabel}`)
        }
        if (label === "fire/atom" && secondLabel === "fire") {
            setSecondInputValue(parseInt(firstInputValue) * 1);
            setPlaceHolder(`1 ${label} =1 ${secondLabel}`)
        }
        if (label === "fire/atom" && secondLabel === "sei") {
            setSecondInputValue(parseInt(firstInputValue) * 1.5);
            setPlaceHolder(`1 ${label} =1.5 ${secondLabel}`)
        }
        if (label === "fire/atom" && secondLabel === "atom") {
            setSecondInputValue(parseInt(firstInputValue) * 2);
            setPlaceHolder(`1 ${label} =2 ${secondLabel}`)
        }
        if (label === "fire/atom" && secondLabel === "juno") {
            setSecondInputValue(parseInt(firstInputValue) * 2.5);
            setPlaceHolder(`1 ${label} =2.5 ${secondLabel}`)
        }
        if (label === "fire/atom" && secondLabel === "osmo") {
            setSecondInputValue(parseInt(firstInputValue) * 3);
            setPlaceHolder(`1 ${label} =3 ${secondLabel}`)
        }
        if (label === "fire/juno" && secondLabel === "fire") {
            setSecondInputValue(parseInt(firstInputValue) * 1);
            setPlaceHolder(`1 ${label} =1 ${secondLabel}`)
        }
        if (label === "fire/juno" && secondLabel === "sei") {
            setSecondInputValue(parseInt(firstInputValue) * 1.5);
            setPlaceHolder(`1 ${label} =1.5 ${secondLabel}`)
        }
        if (label === "fire/juno" && secondLabel === "atom") {
            setSecondInputValue(parseInt(firstInputValue) * 2);
            setPlaceHolder(`1 ${label} =2 ${secondLabel}`)
        }
        if (label === "fire/juno" && secondLabel === "juno") {
            setSecondInputValue(parseInt(firstInputValue) * 2.5);
            setPlaceHolder(`1 ${label} =2.5 ${secondLabel}`)
        }
        if (label === "fire/juno" && secondLabel === "osmo") {
            setSecondInputValue(parseInt(firstInputValue) * 3);
            setPlaceHolder(`1 ${label} =3 ${secondLabel}`)
        }
        if (label === "fire/osmo" && secondLabel === "fire") {
            setSecondInputValue(parseInt(firstInputValue) * 1);
            setPlaceHolder(`1 ${label} =1 ${secondLabel}`)
        }
        if (label === "fire/osmo" && secondLabel === "osmo") {
            setSecondInputValue(parseInt(firstInputValue) * 1.5);
            setPlaceHolder(`1 ${label} =1.5 ${secondLabel}`)
        }
        if (label === "fire/osmo" && secondLabel === "atom") {
            setSecondInputValue(parseInt(firstInputValue) * 2);
            setPlaceHolder(`1 ${label} =2 ${secondLabel}`)
        }
        if (label === "fire/osmo" && secondLabel === "juno") {
            setSecondInputValue(parseInt(firstInputValue) * 2.5);
            setPlaceHolder(`1 ${label} =2.5 ${secondLabel}`)
        }
        if (label === "fire/osmo" && secondLabel === "osmo") {
            setSecondInputValue(parseInt(firstInputValue) * 3);
            setPlaceHolder(`1 ${label} =3 ${secondLabel}`)
        }
        if (label === "fire/usdc" && secondLabel === "fire") {
            setSecondInputValue(parseInt(firstInputValue) * 1);
            setPlaceHolder(`1 ${label} =1 ${secondLabel}`)
        }
        if (label === "fire/usdc" && secondLabel === "sei") {
            setSecondInputValue(parseInt(firstInputValue) * 1.5);
            setPlaceHolder(`1 ${label} =1.5 ${secondLabel}`)
        }
        if (label === "fire/usdc" && secondLabel === "atom") {
            setSecondInputValue(parseInt(firstInputValue) * 2);
            setPlaceHolder(`1 ${label} =2 ${secondLabel}`)
        }
        if (label === "fire/usdc" && secondLabel === "juno") {
            setSecondInputValue(parseInt(firstInputValue) * 2.5);
            setPlaceHolder(`1 ${label} =2.5 ${secondLabel}`)
        }
        if (label === "fire/usdc" && secondLabel === "osmo") {
            setSecondInputValue(parseInt(firstInputValue) * 3);
            setPlaceHolder(`1 ${label} =3 ${secondLabel}`)
        }
    }
    const handleSecondMenuItemClickReversed = (event) => {
        const id = event.target.id;
        setLabel(id);
        document.getElementById("Swap-Box-Second-input").value = 0;
        setSecondInputValue(0);
        // setLabel(label);
        if (id === "fire") {
            // document.getElementById("Swap-Box-First-Box-Bottom-input").value=0;
            setRandom(1000);
            setFirstValue(1000);
            // setInputValue(0);
        }
        if (id === "sei") {
            // document.getElementById("Swap-Box-First-Box-Bottom-input").value=0;
            setRandom(2000);
            setFirstValue(2000);
            // setInputValue(0);
        }
        if (id === "atom") {
            // document.getElementById("Swap-Box-First-Box-Bottom-input").value=0;
            setRandom(3000);
            setFirstValue(3000);
            // setInputValue(0);
        }
        if (id === "juno") {
            // document.getElementById("Swap-Box-First-Box-Bottom-input").value=0;
            setRandom(4000);
            setFirstValue(4000);
            // setInputValue(0);
        }
        if (id === "osmo") {
            // document.getElementById("Swap-Box-First-Box-Bottom-input").value=0;
            setRandom(5000);
            setFirstValue(5000);
            // setInputValue(0);
        }
    }


    const handleMenuItemClick = (event, half) => {
        const id = event.target.id;
        setLabel(id);
        document.getElementById("Swap-Box-First-Box-Bottom-input").value = 0;
        // setLabel(label);
        if (id === "fire/sei") {
            // document.getElementById("Swap-Box-First-Box-Bottom-input").value=0;
            setRandom(10000);
            setFirstValue(10000);
            // setInputValue(0);
        }
        if (id === "fire/atom") {
            // document.getElementById("Swap-Box-First-Box-Bottom-input").value=0;
            setRandom(20000);
            setFirstValue(20000);
            // setInputValue(0);
        }
        if (id === "fire/juno") {
            // document.getElementById("Swap-Box-First-Box-Bottom-input").value=0;
            setRandom(30000);
            setFirstValue(30000);
            // setInputValue(0);
        }
        if (id === "fire/osmo") {
            // document.getElementById("Swap-Box-First-Box-Bottom-input").value=0;
            setRandom(40000);
            setFirstValue(40000);
            // setInputValue(0);
        }
        if (id === "fire/usdc") {
            // document.getElementById("Swap-Box-First-Box-Bottom-input").value=0;
            setRandom(50000);
            setFirstValue(50000);
            // setInputValue(0);
        }
    }
    const halfRandom = (label) => {
        if (random == 0) {
            alert('Miktar bulunmamaktadır')
        }
        if (label === "fire/sei" && random == 10000) {

            const half = random / 2;
            const inputElement = document.getElementById("Swap-Box-First-Box-Bottom-input");
            const currentValue = inputElement.value;
            currentValue = 0;
            inputElement.value = parseInt(currentValue) + half;
            setRandom(random / 2);
        }
        if (label === "fire/sei" && random == 10000) {
            const half = random / 2;
            const inputElement = document.getElementById("Swap-Box-First-Box-Bottom-input");
            const currentValue = inputElement.value;
            currentValue = 0;
            inputElement.value = parseInt(currentValue) + half;
            setRandom(random / 2);
        }
        if (label === "fire/atom" && random == 20000) {
            const half = random / 2;
            const inputElement = document.getElementById("Swap-Box-First-Box-Bottom-input");
            const currentValue = inputElement.value;
            currentValue = 0;
            inputElement.value = parseInt(currentValue) + half;
            setRandom(random / 2);
        }
        if (label === "fire/juno" && random == 30000) {
            const half = random / 2;
            const inputElement = document.getElementById("Swap-Box-First-Box-Bottom-input");
            const currentValue = inputElement.value;
            currentValue = 0;
            inputElement.value = parseInt(currentValue) + half;
            setRandom(random / 2);
        }
        if (label === "fire/osmo" && random == 40000) {
            const half = random / 2;
            const inputElement = document.getElementById("Swap-Box-First-Box-Bottom-input");
            const currentValue = inputElement.value;
            currentValue = 0;
            inputElement.value = parseInt(currentValue) + half;
            setRandom(random / 2);
        }
        if (label === "fire/usdc" && random == 50000) {
            const half = random / 2;
            const inputElement = document.getElementById("Swap-Box-First-Box-Bottom-input");
            const currentValue = inputElement.value;
            currentValue = 0;
            inputElement.value = parseInt(currentValue) + half;
            setRandom(random / 2);
        }
        if (reversed) {

            const inputElement = document.getElementById("Swap-Box-Second-input");
            const currentValue = inputElement.value;
            const half = random / 2;
            setRandom(random / 2)
            // document.getElementById("Swap-Box-Second-input").value = parseInt(currentValue) + random / 2;
            setSecondInputValue(parseInt(currentValue) + half)

        }
        else {
            const inputElement = document.getElementById("Swap-Box-First-Box-Bottom-input");
            const currentValue = inputElement.value;
            const half = random / 2;
            setRandom(random / 2)
            document.getElementById("Swap-Box-First-Box-Bottom-input").value = parseInt(currentValue) + random / 2;

        }
    }
    const inputChange = (event, label) => {
        let value = event.target.value;
        const inputElementValue = document.getElementById("Swap-Box-First-Box-Bottom-input").value
        if (value > firstValue) {
            alert("Miktarı geçmiştir")
        }
        if (reversed) {
            // const inputElementValue = document.getElementById("Swap-Box-Second-input").value
            setRandom(firstValue);
            // console.log(firstValue);
            setRandom(firstValue - value);
            setSecondInputValue(value);
            // setSecondInputValue(firstValue-random);
            // inputElementValue=firstValue-random
        }
        else {
            setRandom(firstValue)
            setRandom(firstValue - inputElementValue);
        }
    }
    const inputKeyDown = (event) => {
        if (event.key === "Backspace") {
            setRandom(random);
        }
        if (reversed && event.key === "Backspace") {
            setRandom(random)
        }
    }
    const maximazed = () => {
        if (random == 0) {
            alert('Tüm miktar kullanıldı')
        }
        if (reversed) {
            setRandom(0)
            const inputElement = document.getElementById("Swap-Box-Second-input");
            const currentValue = inputElement.value;
            setSecondInputValue(parseInt(currentValue) + random)
            // inputElement.value = parseInt(currentValue) + random

        }
        else {
            setRandom(0)
            const inputElement = document.getElementById("Swap-Box-First-Box-Bottom-input");
            const currentValue = inputElement.value;
            inputElement.value = parseInt(currentValue) + random
        }

    }
    const [reversed, setReversed] = useState(false);

    const reverse = () => {
        // const firstInputValue = document.getElementById("Swap-Box-First-Box-Bottom-input").value;
        // const secondInputValue = document.getElementById("Swap-Box-Second-input").value;
        // set edilerek sıfırlanacak

        setSecondInputValue(0);
        setReversed(!reversed);
    }

    useEffect(() => {
        setRandom(0);
        document.getElementById("Swap-Box-Second-input").value = 0;
        document.getElementById("Swap-Box-First-Box-Bottom-input").value = 0;
    }, [reversed])


    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <div className='Swap'>
            <div className='Swap-Container'>
                <div className='Swap-Box'>

                    <div className='Swap-Box-Top'>
                        <h1>Swap</h1>
                        <Button id='SlippageBtn' onClick={() => setDialogOpen(true)}>Slippage</Button>
                        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                            <DialogTitle sx={{ fontSize: 20 }}>Settings</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Slippage</DialogContentText>
                                <DialogActions>
                                    <Button sx={{ color: "rgb(255, 0, 0)", "&:hover": { backgroundImage: "linear-gradient(to right, black, rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} onClick={() => setDialogOpen(false)}>1%</Button>
                                    <Button sx={{ color: "rgb(255, 0, 0)", "&:hover": { backgroundImage: "linear-gradient(to right, black, rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} onClick={() => setDialogOpen(false)}>3%</Button>
                                    <Button sx={{ color: "rgb(255, 0, 0)", "&:hover": { backgroundImage: "linear-gradient(to right, black, rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} onClick={() => setDialogOpen(false)}>5%</Button>
                                    <Button sx={{ color: "rgb(255, 0, 0)", "&:hover": { backgroundImage: "linear-gradient(to right, black, rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} onClick={() => setDialogOpen(false)}>2,5%</Button>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>
                    </div>
                    {reversed ? (<div className='Swap-Box-Mid'>


                        <div className='Swap-Box-First'>
                            <span>From</span>
                            <div className='Swap-Box-First-Box'>
                                <div className='Swap-Box-First-Box-Top'>
                                    <div><span>Avaible</span>

                                        <label id='firstValue' style={{ marginLeft: 10 }} htmlFor="">{random}</label>
                                    </div>

                                    <div className='Swap-Box-First-Box-Top-BtnDiv' ><button onClick={halfRandom} id='HalfBtn'>HALF</button>
                                        <button onClick={maximazed} id='MaxBtn'>MAX</button></div>

                                </div>
                                <div className='Swap-Box-First-Box-Bottom'>
                                    <FormControl sx={{ m: 1, minWidth: 120, border: "none", boxShadow: "none", "&:focus": { border: "none" } }}>
                                        <Select sx={{ border: "none", boxShadow: "none", marginLeft: 0 }}

                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >

                                            <MenuItem onClick={handleSecondMenuItemClickReversed} id='fire' sx={{ border: "none", boxShadow: "none", width: 370, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" }, "&:active": { backgroundColor: "whitesmoke", color: "black" } }}><img id='SingleLogo' src={Logo} alt=''></img>FIRE</MenuItem>
                                            <MenuItem onClick={handleSecondMenuItemClickReversed} id='sei' sx={{ border: "none", boxShadow: "none", width: 370, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value="">
                                            <img id='SingleLogo' src={SeiLogo} alt=''></img>   SEI
                                            </MenuItem>
                                            <MenuItem onClick={handleSecondMenuItemClickReversed} id='atom' sx={{ border: "none", boxShadow: "none", width: 370, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={10}><img id='SingleLogo' src={AtomLogo} alt=''></img>ATOM</MenuItem>
                                            <MenuItem onClick={handleSecondMenuItemClickReversed} id='juno' sx={{ border: "none", boxShadow: "none", width: 370, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={20}>JUNO</MenuItem>
                                            <MenuItem onClick={handleSecondMenuItemClickReversed} id='osmo' sx={{ border: "none", boxShadow: "none", width: 370, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={30}><img id='SingleLogo' src={OsmoLogo} alt=''></img>OSMO</MenuItem>
                                        </Select>

                                    </FormControl>
                                    <input value={secondInputValue} onInput={inputChange} onKeyDown={inputKeyDown} onChange={inputChange} id='Swap-Box-Second-input' type="number" />
                                </div>
                            </div>
                        </div>

                        <div id='ToDiv'><span id='To'>To</span><img onClick={reverse} src={Exchange} alt="" /></div>
                        <div className='Swap-Box-Second'>
                            <FormControl sx={{ m: 1, minWidth: 120, border: "none", boxShadow: "none", "&:focus": { border: "none" } }}>

                                <Select id='select' sx={{ border: "none", boxShadow: "none", marginLeft: 0 }}

                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <input id='SearchAsset' type="text" placeholder='Search Asset' style={{ width: 150, height: 30, marginLeft: 30.5, marginBottom: 10, borderRadius: 12, borderTop: 0, borderRight: 0, borderLeft: 0, textAlign: 'left', }} />
                                    <button id='SwitchToLpAssetsBtn'>Switch to LP Assets</button>
                                    <MenuItem onClick={handleMenuItemClickReversed} id='fire/sei' sx={{ marginLeft: 1, border: "none", boxShadow: "none", width: 350, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" }, "&:active": { backgroundColor: "whitesmoke", color: "black" } }}><div className='LogosDiv'><img id='Logo' src={Logo} alt=''></img><img id='SeiLogo' src={SeiLogo} alt="" /></div> FIRE/SEI</MenuItem>
                                    <MenuItem onClick={handleMenuItemClickReversed} id='fire/atom' sx={{ marginLeft: 1, border: "none", boxShadow: "none", width: 350, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value=""><div className='LogosDiv'> <img id='Logo' src={Logo} alt=''></img><img id='AtomLogo' src={AtomLogo} alt="" /></div>FIRE/ATOM</MenuItem>
                                    <MenuItem onClick={handleMenuItemClickReversed} id='fire/juno' sx={{ marginLeft: 1, border: "none", boxShadow: "none", width: 350, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={10}><div className='LogosDiv'><img id='Logo' src={Logo} alt=''></img><img id='JunoLogo' src='' alt="" /></div>FIRE/JUNO</MenuItem>
                                    <MenuItem onClick={handleMenuItemClickReversed} id='fire/osmo' sx={{ marginLeft: 1, border: "none", boxShadow: "none", width: 350, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={20}><div className='LogosDiv'><img id='Logo' src={Logo} alt=''></img><img id='OsmoLogo' src={OsmoLogo} alt="" /></div>FIRE/OSMO</MenuItem>
                                    <MenuItem onClick={handleMenuItemClickReversed} id='fire/usdc' sx={{ marginLeft: 1, border: "none", boxShadow: "none", width: 350, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={30}><div className='LogosDiv'><img id='Logo' src={Logo} alt=''></img><img id='UsdcLogo' src={UsdcLogo} alt="" /></div>FIRE/USDC</MenuItem>
                                </Select>

                            </FormControl>
                            <input value={reversedfirstInput} type="number" id='Swap-Box-First-Box-Bottom-input' />


                        </div>
                        {/* döndürülmüş kısım burada bitecek */}
                    </div>
                    ) : (
                        <div className='Swap-Box-Mid'>


                            <div className='Swap-Box-First'>
                                <span>From</span>
                                <div className='Swap-Box-First-Box'>
                                    <div className='Swap-Box-First-Box-Top'>
                                        <div><span>Avaible</span>

                                            <label id='firstValue' style={{ marginLeft: 10 }} htmlFor="">{random}</label>
                                        </div>

                                        <div className='Swap-Box-First-Box-Top-BtnDiv' ><button onClick={halfRandom} id='HalfBtn'>HALF</button>
                                            <button onClick={maximazed} id='MaxBtn'>MAX</button></div>

                                    </div>
                                    <div className='Swap-Box-First-Box-Bottom'>

                                        <FormControl sx={{ m: 1, minWidth: 120, border: "none", boxShadow: "none", "&:focus": { border: "none" } }}>

                                            <Select id='select' sx={{ border: "none", boxShadow: "none", marginLeft: 0 }}

                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <input id='SearchAsset' type="text" placeholder='Search Asset' style={{ width: 150, height: 30, marginLeft: 30.5, marginBottom: 10, borderRadius: 12, borderTop: 0, borderRight: 0, borderLeft: 0, textAlign: 'left', }} />
                                                <button id='SwitchToLpAssetsBtn'>Switch to LP Assets</button>
                                                <MenuItem onClick={handleMenuItemClick} id='fire/sei' sx={{ marginLeft: 1, border: "none", boxShadow: "none", width: 350, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" }, "&:active": { backgroundColor: "whitesmoke", color: "black" } }}><div className='LogosDiv'><img id='Logo' src={Logo} alt=''></img><img id='SeiLogo' src={SeiLogo} alt="" /></div>FIRE/SEI</MenuItem>
                                                <MenuItem onClick={handleMenuItemClick} id='fire/atom' sx={{ marginLeft: 1, border: "none", boxShadow: "none", width: 350, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value="">
                                                <div className='LogosDiv'><img id='Logo' src={Logo} alt=''></img><img id='SeiLogo' src={AtomLogo} alt="" /></div>  FIRE/ATOM
                                                </MenuItem>
                                                <MenuItem onClick={handleMenuItemClick} id='fire/juno' sx={{ marginLeft: 1, border: "none", boxShadow: "none", width: 350, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={parseInt(10)}>FIRE/JUNO</MenuItem>
                                                <MenuItem onClick={handleMenuItemClick} id='fire/osmo' sx={{ marginLeft: 1, border: "none", boxShadow: "none", width: 350, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={20}><div className='LogosDiv'><img id='Logo' src={Logo} alt=''></img><img id='SeiLogo' src={OsmoLogo} alt="" /></div>FIRE/OSMO</MenuItem>
                                                <MenuItem onClick={handleMenuItemClick} id='fire/usdc' sx={{ marginLeft: 1, border: "none", boxShadow: "none", width: 350, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={30}><div className='LogosDiv'><img id='Logo' src={Logo} alt=''></img><img id='SeiLogo' src={UsdcLogo} alt="" /></div>FIRE/USDC</MenuItem>
                                            </Select>

                                        </FormControl>
                                        <input type="number" onInput={inputChange} onKeyDown={inputKeyDown} onChange={inputChange} id='Swap-Box-First-Box-Bottom-input' />
                                    </div>
                                </div>
                            </div>

                            <div id='ToDiv'><span id='To'>To</span><img onClick={reverse} src={Exchange} alt="" /></div>
                            <div className='Swap-Box-Second'>

                                <FormControl sx={{ m: 1, minWidth: 120, border: "none", boxShadow: "none", "&:focus": { border: "none" } }}>
                                    <Select sx={{ border: "none", boxShadow: "none", marginLeft: 0 }}

                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >

                                        <MenuItem onClick={handleSecondMenuItemClick} id='fire' sx={{ border: "none", boxShadow: "none", width: 370, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" }, "&:active": { backgroundColor: "whitesmoke", color: "black" } }}><img id='SingleLogo' src={Logo} alt=''></img>FIRE</MenuItem>
                                        <MenuItem onClick={handleSecondMenuItemClick} id='sei' sx={{ border: "none", boxShadow: "none", width: 370, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value="">
                                        <img id='SingleLogo' src={SeiLogo} alt=''></img> SEI
                                        </MenuItem>
                                        <MenuItem onClick={handleSecondMenuItemClick} id='atom' sx={{ border: "none", boxShadow: "none", width: 370, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={10}><img id='SingleLogo' src={AtomLogo} alt=''></img>ATOM</MenuItem>
                                        <MenuItem onClick={handleSecondMenuItemClick} id='juno' sx={{ border: "none", boxShadow: "none", width: 370, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={20}>JUNO</MenuItem>
                                        <MenuItem onClick={handleSecondMenuItemClick} id='osmo' sx={{ border: "none", boxShadow: "none", width: 370, color: "black", "&:hover": { backgroundImage: "linear-gradient(to right, black,rgb(174, 106, 25), rgb(195, 30, 30))", transition: "0.2s", color: "whitesmoke" } }} value={30}><img id='SingleLogo' src={OsmoLogo} alt=''></img>OSMO</MenuItem>
                                    </Select>

                                </FormControl>
                                <input value={secondInputValue} id='Swap-Box-Second-input' type="number" />
                            </div>
                            {/* döndürülmüş kısım burada bitecek */}
                        </div>)}
                    <div className='Swap-Box-Bottom'>
                        <input type="Number" placeholder={placeholder} style={{ WebkitAppearance: "textfield" }} />
                        <button>Swap</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Swap
