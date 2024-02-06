import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import Navigations from './components/nav/Navigations'
import NavFooter from "@/app/components/nav/NavFooter";
const roboto = Roboto({ weight: ["100","300","500","700"] , subsets: ['latin']});
import config from '../src/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'ap-southeast-1_PUfKRleGU',
      userPoolClientId: 'rs94l4tetkatan1pgc24sb25o',
    
    },
  }
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  className='dark ? ' lang="en">
      <body  className={roboto.className}>
      <Providers>
        <Navigations />
          {children}
          <NavFooter />
        </Providers></body>
    </html>
  );
}
