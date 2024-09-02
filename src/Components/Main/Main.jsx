import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
    retun(
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=" " />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><spam>Hello, Dev</spam></p>
                    <p>How can i help you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assests.compass_icon} alt="" />

                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest some music</p>
                            <img src={assests.bulb_icon} alt="" />

                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Brainstrom team bonding activities for our work retreat</p>
                                <img src={assests.message_icon} alt="" />

                            </div>
                            <div className="cards">
                                <div className="card">
                                    <p>Improve the readability of the following code</p>
                                    < img src={assests.code_icon} alt="" />
                                </div>

                            </div>
                            <div className="main-bottom">
                                <div classsName="search-box">
                                    <input type="text" placeholder='Enter a prompt here' />
                                    <div>
                                        <img src={assets.gallery_icon} alt="" />
                                        <img src={assets.mic_icon} alt="" />
                                        <img src={assets.send_icon} alt="" />
                                    </div>   
                                    </div>
                                    <p className="botton-info"></p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Main