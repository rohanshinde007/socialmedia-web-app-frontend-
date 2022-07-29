import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () =>{
    return(
      <>
        <div className="birthdayContainer">
          <img  className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Rohan Shinde</b> and <b> 3 other friends</b> have a birthday today.
          </span>
        </div>
        <img  className="rightbarAd" src="/assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u =>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar =() =>{
return(<>
<h4 className="rightbarTitle">User information</h4>
<div className="rightbarInfo">
  <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">City:</span>
    <span className="rightbarInfoValue">{user.city}</span>
  </div>
  <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">From:</span>
    <span className="rightbarInfoValue">{user.from}</span>
  </div>
  <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">Relationship:</span>
    <span className="rightbarInfoValue">{user.relationship===1?"Single":user.relationship===2?"Married":"-"}</span>
  </div>
</div>

<h4 className="rightbarTitle">User Friends </h4>
<div className="rightbarFollowings">
  <div className="rightbarFollowing">
    <img className="rightbarFollowingImg" src={`${PF}person/1.jpg`} alt="" />
    <span className="rightbarFollowingName">Rohin gai</span>
  </div>
  <div className="rightbarFollowing">
    <img className="rightbarFollowingImg" src={`${PF}person/2.jpg`} alt="" />
    <span className="rightbarFollowingName">roge mark</span>
  </div>
  <div className="rightbarFollowing">
    <img className="rightbarFollowingImg" src={`${PF}person/4.jpg`} alt="" />
    <span className="rightbarFollowingName">tanya stark</span>
  </div>
  <div className="rightbarFollowing">
    <img className="rightbarFollowingImg" src={`${PF}person/5.jpg`} alt="" />
    <span className="rightbarFollowingName">alexa albert</span>
  </div>
  <div className="rightbarFollowing">
    <img className="rightbarFollowingImg" src={`${PF}person/6.jpg`} alt="" />
    <span className="rightbarFollowingName">monat par</span>
  </div>
  <div className="rightbarFollowing">
    <img className="rightbarFollowingImg" src={`${PF}person/7.jpg`} alt="" />
    <span className="rightbarFollowingName">susmet sehh</span>
  </div>
  <div className="rightbarFollowing">
    <img className="rightbarFollowingImg" src={`${PF}person/8.jpg`} alt="" />
    <span className="rightbarFollowingName">kam nam</span>
  </div>
  <div className="rightbarFollowing">
    <img className="rightbarFollowingImg" src={`${PF}person/9.jpg`} alt="" />
    <span className="rightbarFollowingName">kipin domer</span>
  </div>
</div>
</> )
  }
  return (
    <div className="rightbar">
      <div className="rightBarWrapper">
      { user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
