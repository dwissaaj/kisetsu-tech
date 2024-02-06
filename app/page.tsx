 import { Metadata } from "next";
import { Amplify } from 'aws-amplify';
import config from '../src/amplifyconfiguration.json';
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'ap-southeast-1_PUfKRleGU',
      userPoolClientId: 'rs94l4tetkatan1pgc24sb25o',
    
    },
  }
});
export const metadata: Metadata = {
  title: 'Sakura | Kisetsu | ',
  description: 'Kisetsu Tech Dwi Aji Personal Website',
  applicationName: 'Kisetsu Sakura App ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dwis Aji', 'Front End Developer','indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
  authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://kisetsu.tech' }],
  creator: 'Dwis Aji',
  publisher: 'Dwis Aji',
 
}
export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
