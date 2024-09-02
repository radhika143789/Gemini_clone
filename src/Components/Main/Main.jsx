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
                        <p>Suggest some music</p>
                        <img src={assests.compass_icon} alt="" />

                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest some music</p>
                            <img src={assests.compass_icon} alt="" />

                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest some music</p>
                                <img src={assests.compass_icon} alt="" />

                            </div>
                            <div className="cards">
                                <div className="card">
                                    <p>Suggest some music</p>
                                    < img src={assests.compass_icon} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Main