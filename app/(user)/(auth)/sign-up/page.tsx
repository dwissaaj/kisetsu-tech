import React from 'react'
import { SignUpClient } from './SignUpClient'
import { signUp } from '@aws-amplify/auth'
import config from '../../../../src/amplifyconfiguration.json'
import { Amplify } from 'aws-amplify'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
Amplify.configure(config)
type SignUpParameters = {
    username: string;
    password: string;
    email: string;
    phone_number: string;

  };
export default async function SignUp() {
    async function RegisterSignUp(formData: FormData) {
        'use server'

        const rawFormData = {
            username: formData.get('username') as string,
            password: formData.get('password') as string,
            phone_number: formData.get('phone_number') as string,
          }
          console.log(rawFormData)
        try {
            const {userId} = await signUp(rawFormData)
            console.log(userId)
            if(userId) {
                return redirect('/account')
            }
        }
        catch(error ) {
            console.log(error)
            return {
                message: error['name'] as string,
                stating: true
            }
        }
    }
    return (
        <SignUpClient RegisterSignUp={RegisterSignUp} />

    )
}
