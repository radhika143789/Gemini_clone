import React, { useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
    return ( 
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev</span></p> {/* Fixed typo from <spam> to <span> */}
                    <p>How can I help you today</p> {/* Capitalized "I" */}
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="Compass Icon" /> {/* Fixed typo from `assests` to `assets` */}
                    </div>
                    <div className="card"> {/* Fixed nested div class names */}
                        <p>Suggest some music</p>
                        <img src={assets.bulb_icon} alt="Bulb Icon" /> {/* Fixed typo from `assests` to `assets` */}
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p> {/* Fixed typo "Brainstrom" to "Brainstorm" */}
                        <img src={assets.message_icon} alt="Message Icon" /> {/* Fixed typo from `assests` to `assets` */}
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="Code Icon" /> {/* Fixed typo from `assests` to `assets` */}
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box"> {/* Fixed typo from `classsName` to `className` */}
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="Gallery Icon" />
                            <img src={assets.mic_icon} alt="Mic Icon" />
                            <img src={assets.send_icon} alt="Send Icon" />
                        </div>   
                    </div>
                    <p className="bottom-info"> {/* Fixed typo from `botton-info` to `bottom-info` */}
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
