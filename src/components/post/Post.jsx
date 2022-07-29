import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from "react";
import axios from "axios";
import {format} from "timeago.js"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {
    const [like,setLike] =useState(post.likes.length);
    const [islike,setIsLiked] =useState(false);
    const [user,setUser] =useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user : currentUser} = useContext(AuthContext);


    const likeHandler =()=>{
        try {
            axios.put("http://localhost:8800/api/posts/"+post._id+"/like",{userId:currentUser._id})
        } catch (err) {
            
        }
        setLike(islike ? like-1 : like+1)
        setIsLiked(!islike)
        
        // what is the use state is liked state  
        // let user = Users.filter((u)=> u.id === post?.userId)[0].name;
    }

     useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
     },[currentUser._id,post.likes])

    useEffect(()=>{
        const fetchUser = async ()=>{
          const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`)
          // const res = await fetch("posts/timeline/62b3fd3aa3b393690cb2b61e");
          setUser(res.data)
        }
    fetchUser();
      },[post.userId])
    
    
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img className="postProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt=""/>
                    </Link>
                    <span className="postUserName">{user.username}

                        </span>
                    
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img  className="postImg" src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                    <img className="likeIcons" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} likes</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
     
    </div>
  )
}
