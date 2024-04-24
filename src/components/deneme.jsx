<div className='Pool-Container-Top'>
                    {/* <h1>Liquidity Amount</h1> */}
                    <h1>Add Liquidity</h1>
                    <div className='Pool-Container-Information'>
                        <div className='Pool-Container-Information-top'><p>FIRE:{fire}</p><button><input id='firstInput' value={(fire*(percent/100))} type="number" /></button>
                        </div>
                        <div className='Pool-Container-Information-bottom'>
                            <p>SEI:{sei}</p><button><input value={((fire*(percent/100)))/0.9} type="number" /></button>
                        </div>
                    </div>

                </div>
                {/* <div className='Pool-Container-Stake'>
                    <p>Amount to Stake: 0</p>
                </div> */}
                <p>{percent}</p>
                <div className='Pool-Percent-Div'>
                    {/* <div className='Content' style={{ width: `${percent}%` }}></div>
                    <button className='Button' onClick={() => handleButtonClick(50)}>50%</button>
                    <button className='Button' onClick={() => handleButtonClick(75)}>75%</button>
                    <button className='Button' onClick={() => handleButtonClick('Max')}>Max</button>
                    <button className='Button' onClick={() => handleButtonClick(25)}>25%</button> */}

                    <Box sx={{ width: 550 }}>

                        <Slider  aria-label="Default" valueLabelDisplay="auto" sx={{ width: "100%", height: 15 }} value={percent} onChange={(e, newValue) => {
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
                    <button>Add Liquidity</button>
                </div>