import SignUpComponent from "./SignUpComponent";
import { signUp } from "@aws-amplify/auth";
export let errorType = {
    emailErrorMessage: '',
    isEmailError: false
}
type SignUpParameters = {
    username: string;
    password: string;
    email: string;
    phone_number: string;
};
async function handleSignUp({
    username,
    password,
    email,
    phone_number
}: SignUpParameters) {
    'use server';
    try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username,
            password,

        });
        return userId
        console.log(username, password)
        console.log(email, phone_number)
    } catch (error) {
            errorType.isEmailError === true
            errorType.emailErrorMessage === 'Username should be an email.'
            console.log(errorType.emailErrorMessage)
        }


        
        
    }


export async function RegisterServer() {

    
    return (
        <SignUpComponent
            handleSignUp={handleSignUp} emailErrorMessage={errorType.emailErrorMessage} isEmailError={errorType.isEmailError} />
    )
}