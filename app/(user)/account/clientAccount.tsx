'use client'
import React from 'react'
import useSWR from 'swr'
import { request } from 'graphql-request'
import { account, database } from '@/app/appwrite'
import { getProfile } from '@/app/utils/get-profile'
import { Tab, Tabs } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import Profile from './profile/clientProfile'
import SignOut from './signout/clientSignOut'
export default function ClientAccunt() {

  return (
    <div className='w-full h-lvh flex flex-col mt-8 mb-42 items-center'>
      <Tabs color='primary' variant='bordered' aria-label='options account'>
        <Tab className='w-3/4 h-full' key={'account'}  title='Account'>
          <Profile />
        </Tab>
        <Tab className='w-3/4  h-full' key={'signout'} title='Sign Out' >
          <SignOut />
        </Tab>
        <Tab className='w-3/4' isDisabled key={'preference'} title='Preference'>
          Preference
        </Tab>
      </Tabs>
    </div>
  )
}
