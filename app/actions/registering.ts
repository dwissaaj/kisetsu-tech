'use server'
import { signUp } from "@aws-amplify/auth";
import { Amplify } from "aws-amplify";
import config from '../../src/amplifyconfiguration.json'
import { NextResponse } from "next/server";
import { user } from "@nextui-org/react";
import { redirect } from "next/navigation";
Amplify.configure(config)
type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};
export async function RegisterAccount({
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

    }

    );
    console.log(userId)
    
    redirect('/account')

  } catch (error) {
    console.log(error)
    return{
              message: error['name'] as string,
              stating: true
          }




  }
}
