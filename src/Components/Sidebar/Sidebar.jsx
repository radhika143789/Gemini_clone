import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets.js';
import { Context } from '../../context/context.jsx';

const Sidebar = () => {
    const [extended, setExtended] = useState(false); 
    const {onSent,prevPrompts,setRecentPrompt} = useContext(Context)

    return (
        <div className='sidebar'>
            <div className="top">
                <img
                    onClick={() => setExtended(prev => !prev)}
                    className='menu'
                    src={assets.menu_icon}
                    alt="Menu"
                />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="New Chat" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? 
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item,index)=>{
                            return (
                                <div className="recent-entry">
                            <img src={assets.message_icon} alt="Recent Message" />
                            <p>{item}...</p>
                        </div> 
                    
                            )
                        })}
                        </div>
                        
                : null}
            </div>
        
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="Activity" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Setting" />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
