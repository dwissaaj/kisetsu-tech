'use server'
import { signUp } from '@aws-amplify/auth'
import config from '../../src/amplifyconfiguration.json'
import { Amplify } from 'aws-amplify'
Amplify.configure(config)
export async function RegisterSignUp(formData: FormData) {


    const rawFormData = {
        customerId: formData.get('username'),
        
      }
      console.log(rawFormData)
    // try {
    //     const {userId} = await signUp({
    //         username,
    //         password,
    //         options: {
    //             userAttributes: {
    //                 email,
    //                 phone_number
    //             }
    //         }
    //     })
    //     return userId
    // }
    // catch(error ) {
    //     console.log(error)
    //     return {
    //         message: error['name'] as string,
    //         stating: true
    //     }
    // }
}