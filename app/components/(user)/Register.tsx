'use client'
import React, { MouseEventHandler, useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { EmailIcon } from '../icon/EmailIcon'
import { PasswordIcon } from '../icon/PasswordIcon';
import { PasswordHideIcon } from '../icon/PasswordHideIcon';
import { PhoneIcon } from '../icon/PhoneIcon';
import { request } from 'graphql-request'
import {account, ID} from '@/app/appwrite'
import useSWR from 'swr'
import axios from 'axios';
import { redirect } from 'next/navigation';
export type CardState = {
  isEmailError: boolean
  isPasswordError: boolean
  emailErrorMessage: string
  passwordErrorMessage: string
  email: string
  password: string
}
type registerType = {
  password: string
  email: string
}
// isPhoneNumberError,phoneNumberMessage, isEmailError, isPasswordError, emailErrorMessage, passwordErrorMessage
export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isData, setIsData] = useState({
    password: '',
    email: '',
    name: ''
  })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isError, setIsError] = useState({
    isEmailError: false,
    isPasswordError: false,
    isNameError: false,
    emailErrorMessage: '',
    passwordErrorMessage: '',
    nameErrorMessage: ''
  })
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setIsData((prev) => ({
      ...prev,
      [name]: value
    }))
    console.log(isData)
  }
  
  const register = async () => {
    console.log('Button not clicked')
    try {
      await account.create(ID.unique(),email, password, name )
      console.log('Button clicked')
      
    }
    catch (error) {
      console.log(error)
      console.log(typeof(error))
      setIsError((prev) => ({
        ...prev,
        isEmailError: true,
        emailErrorMessage: 'Wrong Error'
      }) )
    }
  }
  const {data, error} = useSWR('register', register)
  return (

    <div className='p-4 mt:2 w-full flex flex-col items-center gap-4 justify-center'>
      <div className='text-center '>
        <h1 className='text-2xl lg:text-5xl'>Register an Account</h1>
        <p>To prevent stealing content you need an Account see my Data Visualization, Graphic Design, and UI/UX. If you don't want this please email me.</p>
      </div>
      <div className='max-w-sm -full md:w-1/2 p-8 border-2 border-primary-500 rounded-lg shadow-lg shadow-secondary-400'>
        <div className='flex flex-col gap-4'>
          
          <form >
          <Input
              type="text"
              name='name'
              description='Your Name Majesty'
              onChange={(e) => setName(e.target.value)}
              value={name}
              label="Your Majesty Name"
              variant="bordered"
              endContent={<EmailIcon className="size-4" />}
              labelPlacement="outside"
              isInvalid={isError.isNameError}
              errorMessage={isError.nameErrorMessage}
              isRequired={true}

              className="max-w-xs"

            />
            <Input
              type="email"
              name='email'
              description='Your Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="Your Majesty Email"
              variant="bordered"
              endContent={<EmailIcon className="size-4" />}
              labelPlacement="outside"
              isInvalid={isError.isEmailError}
              errorMessage={isError.emailErrorMessage}
              isRequired={true}

              className="max-w-xs"

            />


            <Input
              type={isVisible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name='password'
              description='Minimal 8 Digit with Lowercase, a numeric and Symbol'
              variant="bordered"
              label="Your Secret"
              labelPlacement="outside"
              isInvalid={isError.isPasswordError}
              errorMessage={isError.passwordErrorMessage}
              isRequired={true}

              className="max-w-xs"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <PasswordIcon className="size-4" />
                  ) : (
                    <PasswordHideIcon className="size-4" />
                  )}
                </button>
              }
            />
            <Button onClick={register} className='mt-4 w-full' color="primary">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>

  )
}
