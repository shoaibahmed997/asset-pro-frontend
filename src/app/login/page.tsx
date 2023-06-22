'use client';
import Link from "next/link";
import './page.css'
import '../globals.css'
import '../../../public/Illustration.svg'
import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faEye, faEyeSlash)
export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = (e: any) => {
        e.preventDefault();
        setPasswordVisible(!passwordVisible);
    };


    return (
        <div className="container">
            <div className="left-panel">
                <div className="logo-container">
                    <img className="logo" src='/Logo.svg' />
                    <h1 className="heading">Log In</h1>
                </div>
                <form className="main-form">
                    <div>
                        <label className="labels">Email Address</label>
                        <input type="text"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="password-toggle">
                        <label className="labels">Password</label>
                        <input
                            type={passwordVisible ? 'password' : 'text'}
                            placeholder="password"
                        />
                        <span className="toggle-icon" onClick={togglePasswordVisibility}>
                            {
                                <FontAwesomeIcon
                                    icon={passwordVisible ? "eye-slash" : "eye"}
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                />
                            }
                        </span>
                    </div>
                    <div className="rememberMe-checkbox">
                        <input
                            type="checkbox"
                        // checked={checked}
                        // onChange={handleChange}
                        />
                        <span className="message-tag">Remember Me</span>
                    </div>
                    <button className="page-btn">Login</button>
                    <Link className="reset-btn link-btn" href={'/'}>Reset Password?</Link>
                </form>
                <span className="line-message">Don't have a account yet ?<Link className="link-btn" href={'/signup'}>New Account</Link></span>
            </div>
            <div className="right-panel">
                <img className="illustrate" src='/illustration.svg' />
            </div>
        </div>
    )
}