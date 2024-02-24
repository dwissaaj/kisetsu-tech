'use client'
import { account, database } from '@/app/appwrite'
import { Snippet } from "@nextui-org/react"
import { EmailIcon } from '@/app/components/icon/EmailIcon';
import { PersonIcon } from '@/app/components/icon/account/PersonIcon';
import { AgeIcon } from '@/app/components/icon/account/AgeIcon';
import { JobIcon } from '@/app/components/icon/account/JobIcon';
import { NameIcon } from '@/app/components/icon/account/NameIcon'
import { useState } from 'react';
import useSWR from 'swr';
import { Databases } from 'appwrite';
type profile = {
    fullName: string,
    email: string,
    company: string,
    occupation: string
}
export default function ProfileCard({ fullName, email, company, occupation,}: profile) {
    let [isUser, setUser] = useState<Databases["getDocument"]>()
    const datas = async () => {
        try {
            const getDocs = await database.getDocument( 
                process.env.NEXT_PUBLIC_DATABASE_ID as string,
                process.env.NEXT_PUBLIC_COLLECTION_ID as string,
                '65d98eda2a5c47f833df')
            .then(getDocs => setUser(getDocs))  
            .then(getDocs => getDocs)
            console.log(isUser)  
            console.log(getDocs)
        }
        catch(error) {
            console.log(error)
        }
    }
      const fetcher = () => {
        database.getDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_COLLECTION_ID as string,
            '65d98eda2a5c47f833df'
        )
        .then((res => console.log(res)))
        .then((res => {
            return res
        }))
        
        
        
      }
      const { data, isLoading} = useSWR('profile', fetcher)
      console.log('console log data', data)
      console.log(isUser)
    return (
        <>
        
        <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Email" disableCopy={true} copyIcon={<PersonIcon />} >
                {data?.email}
            </Snippet>
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Name" disableCopy={true} copyIcon={<NameIcon />} >
                {fullName}
            </Snippet>
    
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Comp" disableCopy={true} copyIcon={<AgeIcon />} >
                {company}
            </Snippet>
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Occu" disableCopy={true} copyIcon={<JobIcon />} >
                {occupation}
            </Snippet>
        </>
    )
}
