'use server'
import { signUp } from 'aws-amplify/auth';
async function handleSignUp(username: string, password:string) {
  'use server';
  try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
  
      });

      console.log(userId);
    } catch (error) {
      console.log('error signing up:', error);
      return error
    }
   
} 