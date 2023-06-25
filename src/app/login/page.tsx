'use client';
import Link from "next/link";
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
        <div className="flex flex-col sm:flex-row">
            <div className="flex-[1_1_0%] flex justify-center items-center bg-white w-full sm:w-1/2 py-16 px-8">
                <div className="text-center">
                    <img className="mx-auto mb-8 w-30" src="/Logo.svg" alt="Logo" />
                    <h1 className="text-2xl font-bold mb-4">Log In</h1>
                    <form className="w-full max-w-sm">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-left text-gray-700 font-semibold mb-2">Email Address</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Email Address"
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block text-left text-gray-700 font-semibold mb-2">Password</label>
                            <input
                                type={passwordVisible ? 'password' : 'text'}
                                id="password"
                                placeholder="Password"
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            />
                            <span className=" absolute top 1/2 right-3 transform -translate-y-[-40%] cursor-pointer" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={passwordVisible ? "eye-slash" : "eye"} />
                            </span>
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Remember Me</span>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#605BFF] hover:bg-blue-700 hover:bg-opacity-75 text-white font-semibold py-2 px-4 rounded-lg w-full"
                        >
                            Login
                        </button>
                        <Link href="/" className="block mb-1 text-blue-600 text-sm text-right mt-2">Reset Password?</Link>
                        <span className="block mt-2 text-sm">
                            Don't have an account yet? <Link href="/signup" className=" text-blue-500">New Account</Link>
                        </span>
                    </form>
                </div>
            </div>
            <div className="bg-gray-100 flex-[2_2_0%] w-full sm:w-1/2 py-16 px-8">
                <img className="mx-auto" src="/illustration.svg" alt="Illustration" />
            </div>
        </div>
    )
}