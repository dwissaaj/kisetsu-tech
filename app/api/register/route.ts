import { signUp } from "@aws-amplify/auth";
import { NextResponse } from "next/server";
import config from '../../../src/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
Amplify.configure(config);
export async function POST(username,password) {

        try {
            const { isSignUpComplete, userId, nextStep } = await signUp({
                username,
                password,
    
            });
            return userId
 
        } catch (error) {
              console.log(error)
              return 'failed'     
            }
            return 'failed'        
    
            return 'failed'     

}