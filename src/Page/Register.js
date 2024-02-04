import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userSchema } from '../Utils/RegisterValidation';
import { UserRegister } from '../Server/userRegister';
import { useDispatch } from 'react-redux';
import { ValidationError } from 'yup';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()


    // user registration function
    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: email,
            password: password,
        }

        if (
           email,password
        ) {
            try {
                await userSchema.validate(formData)
                const registrationResponse = await UserRegister(
                     email, password
                )
                if (registrationResponse.message === 'Your Account Registered Successfully') {
                   
                    navigate('/')
                } else if (registrationResponse === 'Email already exists') {
                    setError('Email already exists')
                } else if (registrationResponse === 'Username already exists') {
                    setError('Username already exists')
                } else {
                    setError('Registration Failed, please check all details and try again')
                }
            } catch (error) {
                if (error instanceof ValidationError) {
                    setError(error.message)
                } else {
                    setError('Something went wrong, please try again');
                }
            }
        } else {
            setError("Please fill all details")
        }
    }

    return (
        <div >
            <div
                className="h-screen flex flex-col items-center justify-center"
            >
                <div>
                    <h1
                        className='m-8 font-extrabold text-4xl'>
                        Password
                    </h1>
                </div>
                <form
                    className=" bg-black/30 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/12 
                sm:w-11/12 md:w-8/12 lg:w-6/12 "
                >
                    
                    
                    <div className="mb-2">
                        <input
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border 
                            rounded w-full py-2 px-3 text-gray-700 
                            leading-tight focus:outline-none 
                            focus:shadow-outline  mt-2" id="email" type="email"
                            placeholder="email" required
                        />
                    </div>
                    
                    <div className="mb-2">
                        <input
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border 
                            rounded w-full py-2 px-3 text-gray-700 mb-3
                             leading-tight focus:outline-none 
                             focus:shadow-outline mt-2" id="password"
                            type="password" placeholder='password'
                        />
                    </div>
                    
                    <div className="mb-2">
                        <p className='text-[#952e2e]'>{error}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleRegistrationSubmit}
                            className="bg-[#000000]  text-white 
                            font-bold py-2 px-4 rounded 
                            focus:outline-none focus:shadow-outline "
                            type="button" >
                            Regsiter
                        </button>
                       
                    </div>
                </form>
                <p >Already member?
                    <Link className='text-[#9C528B] font-bold' to='/'>
                        Login here
                    </Link></p>
                <p className="text-center  text-xs">
                    &copy;2023 TaskyFlow. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Register