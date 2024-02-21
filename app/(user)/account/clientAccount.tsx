'use client'
import React from 'react'
import useSWR from 'swr'
import { request } from 'graphql-request'
import { account } from '@/app/appwrite'
import { getProfile } from '@/app/utils/get-profile'

// const getUserhandle = async () => {
//   try {
//     const user = await account.get()
//     console.log(user)
//     return user
//   }
//   catch(error) {
//     console.log(error)
//   }
// }
export default function ClientAccunt() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const response = getProfile()
  console.log('the user client', response)

  return (
    <div className='w-full flex flex-col mt-8 justify-center items-center'>
      <section>
        {/* <h1>Welcome {data?.userS?.email?.value}</h1> */}
      </section>
      <div className='flex flex-col gap-2 justify-start items-start'>
        <div>
          <p>Your Name</p>
          <p>Dwis</p>
        </div>
      </div>
    </div>
  )
}
