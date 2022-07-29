import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] =useState({});
  const username = useParams().username

  useEffect(()=>{
    const fetchUser = async ()=>{
      const res = await axios.get(`http://localhost:8800/api/users?username=${username}`)
      // const res = await fetch("posts/timeline/62b3fd3aa3b393690cb2b61e");
      setUser(res.data)
    }
fetchUser();
  },[username])

  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src={user.coverPicture || PF+"person/coverPicture.png"} alt="" />
            <img className="profileUserImg" src={user.profilePicture || PF+"person/noAvatar.png"} alt="" />
            </div>
        </div>
        <div className="profileInfo">
            <div className="profileInfoName">{user.username}</div>
            <span className="profileInfoDesc">{user.desc}</span>
           
        </div>
        <div className="profileRightBottom">

   
    <Feed username={username}/>
    <Rightbar user={user}/>
    </div>
    </div>
    </div>
    
    </>
  )
}
