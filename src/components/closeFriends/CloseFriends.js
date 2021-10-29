import React from 'react';
import './closefriends.css'
const CloseFriends = (props) => {
  return (
     <li className="sidebarFriend">
            <img
              src={props.user.profilePicture}
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">{props.user.username}</span>
          </li>
  )
}

export default CloseFriends;