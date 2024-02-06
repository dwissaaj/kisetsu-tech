'use client'
import React, { MouseEventHandler, useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { EmailIcon } from '../icon/EmailIcon'
import { PasswordIcon } from '../icon/PasswordIcon';
import { PasswordHideIcon } from '../icon/PasswordHideIcon';
import { Registering } from './registering';
export type CardState = {
  isEmailError: boolean
  isPasswordError: boolean
  emailErrorMessage: string
  passwordErrorMessage: string
  handleSignUp: MouseEventHandler
  email: string
  password: string
}
export default function SignUpComponent({email, password,isEmailError,isPasswordError,emailErrorMessage
,passwordErrorMessage,handleSignUp}: CardState  ) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (

    <div className='p-4 mt:2 w-full flex flex-col items-center gap-4 justify-center'>
      <div className='text-center '>
        <h1 className='text-2xl lg:text-5xl'>Register an Account</h1>
        <p>To prevent stealing content you need an Accountti see my Data Visualization, Graphic Design, and UI/UX</p>
      </div>
      <div className='max-w-sm -full md:w-1/2 p-8 border-2 border-primary-500 rounded-lg shadow-lg shadow-secondary-400'>
        <div className='flex flex-col gap-8'>
          <Input
            type="email"
            value={email}
            label="Email"
            variant="bordered"
            endContent={<EmailIcon className="size-4" />}
            placeholder='Your Magesty Email'
            labelPlacement="outside"
            isInvalid={isEmailError}
            isRequired={true}
            errorMessage={emailErrorMessage}
            className="max-w-xs"
          />
          <Input
            type={isVisible ? "text" : "password"}
            value={password}
            label="Password"
            variant="bordered"
            placeholder='8 Digit Pass'
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
           <Button onClick={handleSignUp}  color="primary">
        Sign Up
      </Button>
        </div>
      </div>
    </div>

  )
}
