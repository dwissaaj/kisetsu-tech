'use client'
import React, { MouseEventHandler, useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { EmailIcon } from '../icon/EmailIcon'
import { PasswordIcon } from '../icon/PasswordIcon';
import { PasswordHideIcon } from '../icon/PasswordHideIcon';
import { PhoneIcon } from '../icon/PhoneIcon';
import {RegisterAccount } from '@/app/actions/registering'
 export type CardState = {
  isEmailError: boolean
  isPasswordError: boolean
  emailErrorMessage: string
  passwordErrorMessage: string
  email: string
  password: string
}
type Regis = {

  isEmailError: boolean
  isPasswordError: boolean
  emailErrorMessage: string
  passwordErrorMessage: string
  isPhoneNumberError: boolean
  phoneNumberMessage: string
}
// isPhoneNumberError,phoneNumberMessage, isEmailError, isPasswordError, emailErrorMessage, passwordErrorMessage
export default function SignUpComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isData, setIsData] = useState({
    username : '',
    password: '',
    phone_number: '',
    email: ''
  })
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setIsData((prev) => ({
      ...prev,
      [name]: value
    }))
    console.log(isData)
  }
  return (

    <div className='p-4 mt:2 w-full flex flex-col items-center gap-4 justify-center'>
      <div className='text-center '>
        <h1 className='text-2xl lg:text-5xl'>Register an Account</h1>
        <p>To prevent stealing content you need an Account see my Data Visualization, Graphic Design, and UI/UX. If you don't want this please email me.</p>
      </div>
      <div className='max-w-sm -full md:w-1/2 p-8 border-2 border-primary-500 rounded-lg shadow-lg shadow-secondary-400'>
        <div className='flex flex-col gap-4'>
<form action={async () => await RegisterAccount(isData)}>
<Input
            type="email"
            name='username'
            description='Add Your Email'
            onChange={handleChange}
            value={isData.username}
            label="Your Majesty Email"
            variant="bordered"
            endContent={<EmailIcon className="size-4" />}
            labelPlacement="outside"
            // isInvalid={isEmailError}
            // errorMessage={emailErrorMessage}
            isRequired={true}
            
            className="max-w-xs"
            
          />
        
         <Input
            type="tel"
            onChange={handleChange}
            name='phone_number'
            value={isData.phone_number}
            description='Your Phone Number start with (+)'
            label="Your Phone"
            variant="bordered"
            endContent={<PhoneIcon className="size-4" />}
            labelPlacement="outside"
            // isInvalid={isPhoneNumberError}
            // errorMessage={phoneNumberMessage}
            isRequired={true}
          
            className="max-w-xs"
            
          />
          <Input
            type={isVisible ? "text" : "password"}
            onChange={handleChange}
            value={isData.password}
            name='password'
            description='Minimal 8 Digit with Lowercase, a numeric and Symbol'
            variant="bordered"
            label="Your Password"
            labelPlacement="outside"
            // isInvalid={isPasswordError}
            // errorMessage={passwordErrorMessage}
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
           <Button type='submit' className='mt-4 w-full'  color="primary">
        Sign Up
      </Button>
</form>
        </div>
      </div>
    </div>

  )
}
