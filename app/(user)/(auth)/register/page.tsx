
import SignUpComponent from '@/app/components/(user)/SignUpComponent'
import { signUp } from 'aws-amplify/auth';
import { Metadata } from 'next'

import { Amplify } from 'aws-amplify';

import { RegisterServer } from '@/app/components/(user)/RegisterServer';

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



export default function Page() {
  
  
  
  
  return (
    <RegisterServer />
    )
}

