import axios from 'axios';
import { useRef } from 'react';
import './register.css'
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const Navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault()
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("password dont match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try {

        await axios.post("http://localhost:8800/api/auth/register", user);
        Navigate('/login');

      } catch (err) {
        console.log(err)
      }
    }


  }

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>Chatsocial</h3>
          <span className="loginDesc">Connection between peoples around the World on Chatsocial.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required type="email" ref={email} className="loginInput" />
            <input placeholder="Password" required minLength="6" type="password" ref={password} className="loginInput" />
            <input placeholder="Password Again" type="password" minLength="6" required ref={passwordAgain} className="loginInput" />
            <button className="loginButton" type='submit'>Sign up</button>
            <button className="loginRegisterButton">Log into Account </button>
          </form>
        </div>


      </div>
    </div>
  )
}
