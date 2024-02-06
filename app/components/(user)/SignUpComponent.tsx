'use client'
import React, { MouseEventHandler, useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { EmailIcon } from '../icon/EmailIcon'
import { PasswordIcon } from '../icon/PasswordIcon';
import { PasswordHideIcon } from '../icon/PasswordHideIcon';
import { PhoneIcon } from '../icon/PhoneIcon';

export type CardState = {
  isEmailError: boolean
  isPasswordError: boolean
  emailErrorMessage: string
  passwordErrorMessage: string
  email: string
  password: string
}
type Regis = {
  handleSignUp: () => void
  isEmailError: boolean
  isPasswordError: boolean
  emailErrorMessage: string
  passwordErrorMessage: string
  isPhoneNumberError: boolean
  phoneNumberMessage: string
}
export default function SignUpComponent({handleSignUp,isPhoneNumberError,phoneNumberMessage, isEmailError, isPasswordError, emailErrorMessage, passwordErrorMessage} : Regis) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isData, setIsData] = useState({
    username : '',
    password: '',
    phone_number
: ''
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
        <p>To prevent stealing content you need an Accountti see my Data Visualization, Graphic Design, and UI/UX</p>
      </div>
      <div className='max-w-sm -full md:w-1/2 p-8 border-2 border-primary-500 rounded-lg shadow-lg shadow-secondary-400'>
        <div className='flex flex-col gap-4'>
        <Input
            type="email"
            name='username'
            description='Add Your Email'
            onChange={handleChange}
            value={isData.username}
            label="Your Majesty Username"
            variant="bordered"
            endContent={<EmailIcon className="size-4" />}
            labelPlacement="outside"
            isInvalid={isEmailError}
            isRequired={true}
            errorMessage={emailErrorMessage}
            className="max-w-xs"
            
          />
        
         <Input
            type="tel"
            onChange={handleChange}
            name='phone_number'
            value={isData.phone_number}
            description='Your Phone Number'
            label="Your Phone"
            variant="bordered"
            endContent={<PhoneIcon className="size-4" />}
            labelPlacement="outside"
            isInvalid={isPhoneNumberError}
            isRequired={true}
            errorMessage={phoneNumberMessage}
            className="max-w-xs"
            
          />
          <Input
            type={isVisible ? "text" : "password"}
            onChange={handleChange}
            value={isData.password}
            name='password'
            description='Minimal 8 Digit'
            variant="bordered"
            label="Your Password"
            labelPlacement="outside"
            isInvalid={isPasswordError}
            isRequired={true}
            errorMessage={passwordErrorMessage}
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
           <Button onClick={async () => {
            await handleSignUp(isData)}}  color="primary">
        Sign Up
      </Button>
        </div>
      </div>
    </div>

  )
}
