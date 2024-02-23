'use client'
import { Snippet } from "@nextui-org/react"
import { EmailIcon } from '@/app/components/icon/EmailIcon';
import { PersonIcon } from '@/app/components/icon/account/PersonIcon';
import { AgeIcon } from '@/app/components/icon/account/AgeIcon';
import { JobIcon } from '@/app/components/icon/account/JobIcon';
import { NameIcon } from '@/app/components/icon/account/NameIcon'
type profile = {
    fullName: string,
    age: number,
    email: string,
    org: string,
    job: string
}
export default function ProfileCard({fullName,age, email, org, job,}: profile) {
    return (
        <>
        <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Email" disableCopy={true} copyIcon={<PersonIcon />} >
                {email}
            </Snippet>
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Name" disableCopy={true} copyIcon={<NameIcon />} >
                {fullName}
            </Snippet>
            
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Org" disableCopy={true} copyIcon={<AgeIcon />} >
                {org}
            </Snippet>
            <Snippet variant='flat' color='primary' className='w-full text-lg lg:text-3xl' symbol="Job" disableCopy={true} copyIcon={<JobIcon />} >
                {job}
            </Snippet>
        </>
    )
}
