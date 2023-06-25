'use client';
import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
            <div className="flex flex-col sm:flex-row">
                <div className="flex-[1_1_0%] text-center bg-white p-8 flex flex-col justify-center items-center lg:w-1/2">
                    <div className="text-center">
                        <img className="mx-auto mb-8 w-30" src="/Logo.svg" alt="Logo" />
                        <h1 className=" text-black text-2xl font-semibold">Sign Up</h1>
                    </div>
                    <form className="w-full max-w-[300px] mx-auto">
                        <div className="mb-4">
                            <label className="block text-left text-gray-700 font-semibold mb-2">Full Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-left text-gray-700 font-semibold mb-2">Email Address</label>
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {!isEmailValid && email !== '' && (
                                <span className="error-message">
                                    Please enter a valid email address.
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-left text-gray-700 font-semibold mb-2">Username</label>
                            <input
                                type="text"
                                placeholder="Username"
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-left text-gray-700 font-semibold mb-2">Password</label>
                            <input
                                type={passwordVisible ? 'password' : 'text'}
                                placeholder="Password"
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            />
                            <span className="absolute top-1/2 right-3 transform -translate-y-[-20%] cursor-pointer" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={passwordVisible ? 'eye-slash' : 'eye'} />
                            </span>
                        </div>
                        <div className="mb-2 flex items-start">
                            <input type="checkbox" className="checkbox" />
                            <span className="pb-2 text-sm mt-[-3px]">
                                By creating an account you agree to the{' '}
                                <Link className="mb-1 text-blue-600 text-sm" href={'/'}>
                                    terms of use
                                </Link>
                                and our
                                <Link className="mb-1 text-blue-600 text-sm" href={''}>
                                    privacy policy.
                                </Link>
                            </span>
                        </div>
                        <button className="bg-[#605BFF] hover:bg-blue-700 hover:bg-opacity-75 text-white font-semibold py-2 px-4 rounded-lg w-full">
                            Create Account
                        </button>
                    </form>

                    <span className="text-sm mt-2">
                        Already have an account?
                        <Link className="mb-1 text-blue-600 text-sm" href={'/login'}>
                            Login
                        </Link>
                    </span>
                </div>
                <div className=" bg-gray-100 p-8 flex flex-[2_2_0%] justify-center items-center lg:w-1/2">
                    <img
                        className="max-w-sm mx-auto"
                        src="/signUp.svg"
                        alt="Signup Illustration"
                    />
                </div>
            </div>
        </div>

    )
}