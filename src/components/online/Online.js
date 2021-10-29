import React from 'react';
import './online.css';
function Online(props){
return(
<li className="rightbarFriend">
          <div className="rightbarProifleImgContainer">
           <img src={props.user.profilePicture} className="rightbarProifleImg" alt=""/>
           <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername" >{props.user.username}</span>
          </li>
	)
}
export default Online