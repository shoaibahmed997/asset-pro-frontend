'use client';
import Link from "next/link";
import '../globals.css'
import './signup.css';
import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faEye, faEyeSlash)

export default function SignUp() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [email, setEmail] = useState('');
    const togglePasswordVisibility = (e: any) => {
        e.preventDefault();
        setPasswordVisible(!passwordVisible);
    };

    function handleEmailChange(e: any) {
        e.preventDefault();
        setEmail(e.target.value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(email));
    }
    return (
        <div>
            {/* <h1>SignUp page</h1>
            <Link href={'/'}>Home</Link> */}
            <div className="container">
                <div className="left-panel">
                    <div className="logo-container">
                        <img className="logo" src='/Logo.svg' />
                        <h1 className="heading">Sign Up</h1>
                    </div>
                    <form className="main-form">
                        <div>
                            <label className="labels">Full Name</label>
                            <input type="text"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label className="labels">Email Address</label>
                            <input type="text"
                                placeholder="Email Address"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {!isEmailValid && email !== '' && (
                                <span className="error-message">Please enter a valid email address.</span>
                            )}
                        </div>
                        <div>
                            <label className="labels">Username</label>
                            <input type="text"
                                placeholder="Username"
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
                        <div className="inline-checkbox">
                            <input
                                type="checkbox"
                            // checked={checked}
                            // onChange={handleChange}
                            />
                            <span className="message-style">
                                By creating an account you agree to the <Link className="link-btn" href={''}>terms of use</Link> and our <Link className="link-btn" href={''}>privacy policy.</Link>
                            </span>
                        </div>
                        <button className="page-btn">Create Account</button>
                    </form>
                    <span className="line-message">Already have an account? <Link className="link-btn" href={'/login'}>Login</Link></span>
                </div>
                <div className="right-panel">
                    <img className="signup-illustrate" src='/signUp.svg' />
                </div>
            </div>
        </div>
    )
}