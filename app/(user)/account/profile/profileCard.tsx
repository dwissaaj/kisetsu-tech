'use client'
import { account, database } from '@/app/utils/client/appwrite'
import { Snippet } from "@nextui-org/react"
import { EmailIcon } from '@/app/components/icon/EmailIcon';
import { PersonIcon } from '@/app/components/icon/account/PersonIcon';
import { AgeIcon } from '@/app/components/icon/account/AgeIcon';
import { JobIcon } from '@/app/components/icon/account/JobIcon';
import { NameIcon } from '@/app/components/icon/account/NameIcon'
import { useState } from 'react';
import useSWR from 'swr';
import { Databases, Models } from 'appwrite';
type profile = {
    fullName: string,
    email: string,
    company: string,
    occupation: string
}
export default function ProfileCard({ fullName, email, company, occupation,}: profile) {
    let [isUser, setUser] = useState({
        fullName: '',
        email: '',
        occupation: '',
        company: '',
        userId: ''
    })
    const getProfile = () => {
        try {
            // const cookies = fetch('/api/user/session') 
                account.get()
            .then(data => setUser({...isUser,userId: data.$id}))
            .catch(err => console.log(err))
            try {
                database.getDocument( 
                    process.env.NEXT_PUBLIC_DATABASE_ID as string,
                    process.env.NEXT_PUBLIC_COLLECTION_ID as string,
                    isUser.userId)
                    .then(data => setUser({...isUser,fullName: data.fullName, email: data.email,
                    occupation: data.occupation, company: data.company}))
                    .catch(err => console.log(err))
            }
            catch(err) {
                console.log(err)
            }
        }
        catch(err) {
            console.log(err)
        }
            
               
    }
    
    const { data} = useSWR('/api/user/profile',getProfile)
    console.log('swrdata', data)
    return (
        <>
        
        <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Email" disableCopy={true} copyIcon={<PersonIcon />} >
                {isUser?.email}
            </Snippet>
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Name" disableCopy={true} copyIcon={<NameIcon />} >
                {isUser?.fullName}
            </Snippet>
    
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Comp" disableCopy={true} copyIcon={<AgeIcon />} >
                {isUser?.company}
            </Snippet>
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Occu" disableCopy={true} copyIcon={<JobIcon />} >
                {isUser?.occupation}
            </Snippet>
        </>
    )
}
