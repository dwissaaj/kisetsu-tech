'use client'
import React from 'react'
import useSWR  from 'swr'
import { request } from 'graphql-request'
export default function ClientAccunt() {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const {data, error, isLoading} = useSWR("/api/user/profile", fetcher)
  // console.log(data)
  return (
    <div className='w-full flex justify-center items-center'>
      <h1>Welcome </h1>
    </div>
  )
}
