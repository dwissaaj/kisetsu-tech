'use client'
import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { EmailIcon } from '@/app/components/icon/EmailIcon'
import { PasswordIcon } from '@/app/components/icon/PasswordIcon';
import { PasswordHideIcon } from '@/app/components/icon/PasswordHideIcon';
import { PhoneIcon } from '@/app/components/icon/PhoneIcon';
import { useFormState } from 'react-dom';
import { RegisterSignUp } from '@/app/actions/signup';

const initialState = {
    message: '',
  }
export function SignUpClient({RegisterSignUp}) {
    const [isVisible, setIsVisible] = useState(false)
 
    const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className='p-4 mt:2 w-full flex flex-col items-center gap-4 justify-center'>
    <div className='text-center '>
        <h1 className='text-2xl lg:text-5xl'>Register an Account</h1>
        <p>To prevent stealing content you need an Account see my Data Visualization, Graphic Design, and UI/UX. If you don't want this please email me.</p>
    </div>
    <div className='max-w-sm -full md:w-1/2 p-8 border-2 border-primary-500 rounded-lg shadow-lg shadow-secondary-400'>
        <div className='flex flex-col gap-4'>
            <form action={RegisterSignUp} >
                <Input
                    type="email"
                    name='username'
                    id='username'
                    description='Add Your Email'
                    // onChange={handleChange}
                    // value={isData.username}
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
                    // onChange={handleChange}
                    // value={isData.phone_number}
                    name='phone_number'
                    id='phone_number'
                    description='Your Phone Number start with (+)'
                    label="Your Phone"
                    variant="bordered"
                    endContent={<PhoneIcon className="size-4" />}
                    labelPlacement="outside"
                    // isInvalid={isPhoneNumberError}
                    // errorMessage={state?.message}
                    isRequired={true}

                    className="max-w-xs"

                />
                {/* <p>{state?.message}</p> */}
                <Input
                    type={isVisible ? "text" : "password"}
                    // onChange={handleChange}
                    // value={isData.password}
                    name='password'
                    id='password'
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
                <Button type='submit' className='mt-4 w-full' color="primary">
                    Sign Up
                </Button>
            </form>
        </div>
    </div>
</div>

  )
}
