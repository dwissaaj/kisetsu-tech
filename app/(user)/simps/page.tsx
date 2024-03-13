import { account, database } from '@/app/utils/client/appwrite'
import React from 'react'
async function getProfile () {
  const res = await 
    database.getDocument( 
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID as string,
      '65d98eda2a5c47f833df')
      .then(res => {
        return res
      })
    
      .catch(res => console.log(res))
  return res
}
async function getSession () {
  const res = await 
    account.get()
      .then(res => {
        return res
      })
    
      .catch(res => console.log(res))
  return res
}
export default async function page() {
  // const data = await getProfile()
  // console.log('the data of user', data)
  const datasesssion = await getSession()
  
  console.log('session of', datasesssion)
  return (
    <div>sdfdsdsfdsf</div>
  )
}
