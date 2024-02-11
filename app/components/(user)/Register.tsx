'use client'
import React, { MouseEventHandler, useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { EmailIcon } from '../icon/EmailIcon'
import { PasswordIcon } from '../icon/PasswordIcon';
import { PasswordHideIcon } from '../icon/PasswordHideIcon';
import { PhoneIcon } from '../icon/PhoneIcon';
import { request } from 'graphql-request'
import { account, ID } from '@/app/appwrite'
import useSWR from 'swr'
import axios from 'axios';
import { redirect } from 'next/navigation';
import { Schema, object, string, number, date, InferType, ValidationError } from 'yup';
export type CardState = {
  isEmailError: boolean
  isPasswordError: boolean
  emailErrorMessage: string
  passwordErrorMessage: string
  email: string
  password: string
}


export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  let registerSchema = object({
    name: string().required(),
    email: string().email().required(),
    password: string().min(8).required()
  })
  const [isData, setIsData] = useState({
    password: '',
    email: '',
    name: ''
  })
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
    setIsData({ ...isData, [name]: value })
    console.log(isData)

  }

  const register = async () => {
    console.log('Button not clicked')
    try {
      const user = await registerSchema.validate(isData)
      const isVal = await registerSchema.isValid(isData)
      if (isVal == true) {
        try {
          const user = await account.create(ID.unique(), isData.email, isData.password, isData.name)
          if(user) {
            redirect('/account')
          }

        }
        catch (error) {
          console.log(error)
          console.log(typeof (error))
          setIsError((prev) => ({
            ...prev,
            isNameError: true,
            nameErrorMessage: 'Something Wrong please check your data'
          }))
        }
      }
    }
    catch (e: any) {
      console.log(e)


      if (e.path === 'password') {
        setIsError({ ...isError, isPasswordError: true, passwordErrorMessage: e.message })
      }
      else if (e.path === 'email') {
        setIsError({ ...isError, isEmailError: true, emailErrorMessage: e.message })
      }
      else if (e.path === 'name') {
        setIsError({ ...isError, isNameError: true, nameErrorMessage: e.message })
      }
    }

  }

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
              onChange={handleChange}
              value={isData.name}
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
              onChange={handleChange}
              value={isData.email}
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
              onChange={handleChange}
              value={isData.password}
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
                <Button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <PasswordIcon className="size-4" />
                  ) : (
                    <PasswordHideIcon className="size-4" />
                  )}
                </Button>
              }
            />


            <Button onClick={() => register()} className='mt-4 w-full' color="primary">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>

  )
}
