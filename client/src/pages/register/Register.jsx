import React, { useRef } from 'react';
import axios from 'axios';
import './register.css'
import { useHistory } from 'react-router';



const Register = () => {

    const username = useRef();
    const name= useRef();
    const email= useRef();
    const password= useRef();
    const passwordAgain= useRef();
    const history = useHistory();

    const handleClick = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password don't match!")
        }else{
            const user = {
                username: username.current.value,
                name: name.current.value,
                email: email.current.value,
                password: password.current.value
            };
            try{
                await axios.post("/auth/register",user);
                history.push("/login");
            }catch(err) {
                console.log('====================================');
                console.log(err);
                console.log('====================================');
            }
        }
    }
    return (
      <div className="help">
        <div className="login">
          <div className="container">
            <div className="login-box">
              <h2>Register</h2>
            <form onSubmit={handleClick}>
              <div className="user-box">
                <input
                  required
                  ref={username}
                />
                <label>Username</label>
              </div>
              <div className="user-box">
              <input
                required
                ref={name}
              />
              <label>Name</label>
              </div>
              <div className="user-box">
              <input
                required
                ref={email}
                type="email"
              />
              <label>Email</label>
              </div>
              <div className="user-box">
              <input
                required
                ref={password}
                type="password"
                minLength="6"
              />
              <label>Password</label>
              </div>
              <div className="user-box">
              <input
                required
                ref={passwordAgain}
                type="password"
                minLength="6"
              />
                <label>passwordAgain</label>
              </div>
             <a style={{marginRight:"28px"}} type="button" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
              </a>
              <a type="button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
              </a>
          </form>
        </div>
      </div>
    </div>
    </div>
    );
}

export default Register;
