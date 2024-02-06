import { Register } from '@/app/components/(user)/Register';
import SignUpComponent from '@/app/components/(user)/SignUpComponent'
import { Registering } from '@/app/components/(user)/registering';
import { signUp } from 'aws-amplify/auth';
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Sign Up | Kisetsu ',
    description: 'Kisetsu Tech Dwi Aji Personal Website',
    applicationName: 'Kisetsu Sakura App ',
    referrer: 'origin-when-cross-origin',
    keywords: ['Dwis Aji', 'Front End Developer','indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
    authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://kisetsu.tech' }],
    creator: 'Dwis Aji',
    publisher: 'Dwis Aji',
   
  }

export default function SignupPage() {
  
  
  
  
  return (
    <Register />
    )
}


// <SignUp email={isSignUp.email} password={isSignUp.password}
//       isEmailError={isSignUp.isEmailError} isPasswordError={isSignUp.isPasswordError} 
//       emailErrorMessage={isSignUp.emailErrorMessage} passwordErrorMessage={isSignUp.passwordErrorMessage}
//       handleSignUp={handleSignUp} />


// const [isSignUp, setSignUp] = useState({
//   email: '',
//   password : '',
//   isEmailError: false,
//   isPasswordError: false,
//   emailErrorMessage: '',
//   passwordErrorMessage: '',
//   handleSignUp : handleSignUp()
// })