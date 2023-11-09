// import React from "react";
import './login.css'
import img1 from '../assets/img-bg.jpg';
const Login = () => {
    return (
        <div className="main">
            <div className="main_box">
                <div className='head'>
                    <div>
                        <h2>Login</h2>
                    </div>
                </div>
                <div className='input_main'>
                    <div className='label'>
                        <label htmlFor="">UserName</label>
                        <input type="text" required />
                    </div>
                    <div className='label'>
                        <label htmlFor="">Email</label>
                        <input type="email" required />
                    </div>
                    <div className='label'>
                        <label htmlFor="">Password</label>
                        <input type="password" required />
                    </div>
                </div>
                <div className='btn'>
                    <div>
                        <button type='submit'>Login </button>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Login;