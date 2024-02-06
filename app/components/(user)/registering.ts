'use server'
import { signUp } from 'aws-amplify/auth';
type SignUpParameters = {
    username: string;
    password: string;

  };
export async function Registering({username,password}: SignUpParameters) {
    try{
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username,
          password
        })
        console.log('Success for SignUp')
        return { isSignUpComplete, userId, nextStep}
      }
      
      catch(error) {
        console.log(error)
      }
}