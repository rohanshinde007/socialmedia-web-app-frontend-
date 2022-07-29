import  './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext, useRef, useState } from 'react';
import {AuthContext} from "../../context/AuthContext"
import { Link } from "react-router-dom";
import axios from "axios"

export default function Share() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef();
    const {file,setFile} = useState(null);

    const submitHandler = async(e)=> {
        // when we submited form in empty situtation it woud not reaload the page 
        e.preventDeafult();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if(file){
            const data = new FormData();
            const fileName =Date.now()+file.name;  
            data.append("file", file);
            data.append("name", fileName);
            newPost.img = fileName;
            try {
                await axios.post("http://localhost:8800/api/upload",data);
                // await axios.post("http://localhost:8800/api/upload",data)
            } catch (err) {
                console.log("err")
                
            }
        }
        try {
          await axios.post("http://localhost:8800/api/posts", newPost)
            
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <Link to={`/profile/${user.username}`} >
                <img className='shareProfileImg' src={user.profilePicture ? PF+user.profilePicture: PF+"/person/noAvatar.png"} alt="" />
                </Link>
                <input placeholder={"what's in your mind "+user.username+"?"} className='shareInput' ref={desc} />

            </div>
            <hr className='shareHr'/>
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                        <PermMediaIcon  htmlColor='Tomato' className='shareIcon'/>
                        <span className='shareOptionText'>photo or video</span>
                        <input style={{display:"none"}} type="file" id="file" accept='.png,.jpeg,.jpg' onChange={(e)=>setFile(e.target.files[0])} />
                    </label>
                    <div className="shareOption">
                        <LabelIcon htmlColor='blue'  className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon  htmlColor='green' className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon  htmlColor='goldenrod'className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton' type='submit' >Share</button>
            </form>
        </div>
    </div>
  )
}
