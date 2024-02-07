'use server'
import { signUp } from '@aws-amplify/auth'
import config from '../../src/amplifyconfiguration.json'
import { Amplify } from 'aws-amplify'
Amplify.configure(config)
type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};

export async function RegisterSignUp({
  username,
  password,
  email,
  phone_number
}: SignUpParameters) {



  try {
    const { userId } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          phone_number // E.164 number convention
        },

      }

    })
    console.log(userId)
    return { userId }
  }
  catch (error: any) {
    console.log(error)
    return {
      message: error['name'] as string,
      stating: true
    }
  }
}