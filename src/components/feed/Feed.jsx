import { useContext, useEffect } from "react";
import { useState } from "react";
import Share from "../share/Share"
import "./feed.css"
import axios from "axios"
import Post from "../post/Post";
import { AuthContext } from "../../context/AuthContext";




export default function Feed({username}) {
  const [posts,setPosts]= useState([]);
  const {user} = useContext(AuthContext);
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res =username ? await axios.get("http://localhost:8800/api/posts/profile/"+username) : await axios.get("http://localhost:8800/api/posts/timeline/"+user._id)
      // const res = await fetch("posts/timeline/62b3fd3aa3b393690cb2b61e");
      setPosts(res.data)
    }
fetchPosts();
  },[username, user._id])


  return (
    <div className="feed">
     <div className="feedWrapper">
       <Share/>
       {
         posts.map((p)=>(
           <Post key={p._id} post={p}/>
         ))
         }
      
     </div>
    </div>
  )
}

