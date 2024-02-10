import { Metadata } from 'next'
import Register from '@/app/components/(user)/Register';

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



export default async function Page() {
  

  
  
  return (
    <Register />
    )
}

