'use client'
import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { EmailIcon } from '../../../components/icon/EmailIcon'
import { PasswordIcon } from '../../../components/icon/PasswordIcon';
import { PasswordHideIcon } from '../../../components/icon/PasswordHideIcon';
import { account, ID } from '@/app/appwrite'
import {  object, string } from 'yup';
import { PersonIcon } from '../../../components/icon/account/PersonIcon';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function RegisterClient() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter()
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
    nameErrorMessage: '',
    isLoading: false
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setIsData({ ...isData, [name]: value })
    console.log(isData)

  }

  const register = async () => {
    console.log('Try to Register....')
    
    try {
      setIsError({...isError, isLoading: true})
      const user = await registerSchema.validate(isData)
      const isVal = await registerSchema.isValid(isData)
      if (isVal == true) {
        try {
          const user = await account.create(ID.unique(), isData.email, isData.password, isData.name)
          if(user) {
            router.push('/account')
          }

        }
        catch (error: any) {
          setIsError({...isError, isLoading: false})
          console.log(error)
          if(error.code === 409) {
            setIsError((prev) => ({
              ...prev,
              isNameError: true,
              nameErrorMessage: 'You Have an Account Please Login'
            }))
          }
          
        }
      }
    }
    catch (e: any) {
      console.log(e)
      setIsError({...isError, isLoading: false})

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
      <div className='max-w-sm w-full md:w-1/2 p-8 border-2 border-primary-500 rounded-lg shadow-lg shadow-secondary-400'>
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
              endContent={<PersonIcon className="size-4" />}
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
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <PasswordIcon className="size-4 text-default-400 pointer-events-none" />
                  ) : (
                    <PasswordHideIcon className="size-4 text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />


            <Button isLoading={isError.isLoading} onClick={() => register()} className='mt-4 w-full' color="primary">
              Sign Up
            </Button>
          </form>
          <p>Already have an Account? <Link className='hover:text-secondary-500' href='/login'> Login Here</Link></p>
         
        </div>
        
      </div>
     
    </div>

  )
}
