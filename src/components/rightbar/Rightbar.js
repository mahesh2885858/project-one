import React from "react";
import "./rightbar.css";
import { Users } from '../../dummyData'
import Online from "../online/Online";


function Rightbar() {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" className="birthdayImg" alt="" />
          <span className="birthdayTest">
            <b>Mahesh</b>and <b>other 3 other friends</b> have{" "}
          </span>
        </div>
        <img src="/assets/ad.png" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">user information title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Khammam</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Telangana</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationsihp:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Holksad</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Holksad</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Holksad</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Holksad</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Holksad</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Holksad</span>
          </div>
        </div>

      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}

export default Rightbar;
