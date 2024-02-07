'use server'
import { signUp } from "@aws-amplify/auth";
import { Amplify } from "aws-amplify";
import config from '../../../src/amplifyconfiguration.json'
import { NextResponse } from "next/server";
import { user } from "@nextui-org/react";
Amplify.configure(config)
type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};
export async function POST({
  username,
  password,
  email,
  phone_number
}: SignUpParameters) {
  try {
      const { isSignUpComplete, userId, nextStep  } = await signUp({
          username,
          password,
          options: {
              userAttributes: {
                  email,
                  phone_number // E.164 number convention
                },
        
          }

      }
      
      );
      let users = userId?.toString()
      console.log({isSignUpComplete,userId,nextStep})
      return Response.json({users})
  } catch (error) {
    return Response.json({statusCode: 500, message: 'Error'})
    
      
      
      
  }
}
