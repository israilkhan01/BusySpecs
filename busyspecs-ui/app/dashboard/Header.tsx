import React from 'react'
import "./layout.css"
function Header() {
  return (
   
    <div className="topNav">
        <div className="logoContainer">
             <div className="logo">
                 <img src="/attachments/layoutColor.png"/>
             </div>
        </div>
        <div className="mainLinks">
            <a className="active" href="#">
                <div className="img">
                    <img className="color" src="/attachments/layoutColor.png"/>
                    <img  className="nocolor" src="/attachments/layout.png"/>
                </div>
            </a>
            <a href="#">
                 <div className="img">
                     <img className="nocolor" src="/attachments/feed.png"/>
                     <img className="color" src="/attachments/feedColor.png"/>
                 </div>
            
            </a>
        </div>
        <div className="rightLinks">
            <div className="search">
                 <img src="/attachments/searchColor.png" />
            </div>
            <div className="notification">
                 <img src="/attachments/notificationColor.png" />
            </div>
            <div  className="profile">
                 <div className="img">
                     <img src="/attachments/azhar_profile.jpeg"/>
                 </div>
                 <div className="arrow down">
 
                 </div>
                 <div className="linkArrow">
 
                 </div>
                 <div className="profileLinks">
                     <div className="main">
                         <a href="#">Dashboard</a>
                     </div>
                     <ul>
                         <li><a href="#"><img src="/attachments/profileColor.png"/> View Profile</a></li>
                         <li><a href="#"><img src="/attachments/settingsColor.png"/>Settings</a></li>
                         <li><a href="#"><img src="/attachments/savedColor.png"/>Saved</a></li>
                         <li><a href="#"><img src="/attachments/searchColor.png"/>Logout</a></li>
                        
                     </ul>
                 </div>
            </div>
 
        </div>
    </div>
  )
}

export default Header