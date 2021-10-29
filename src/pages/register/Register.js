import React from 'react'
import './register.css'

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Maheshsocial</h3>
                    <span className="loginDesc">connect with your friends with Mahesh Social</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder="Username" />
                        <input className="loginInput" placeholder="Email" />
                        <input className="loginInput" placeholder="Password" />
                        <input className="loginInput" placeholder="Password Again" />
                        <button className="loginButton">Sign Up</button>

                        <button className="loginRegisterButton">Log Into Account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register
