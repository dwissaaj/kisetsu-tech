import { account } from '@/app/utils/client/appwrite'
import { DeleteSession } from '@/app/utils/user/delete-session'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SignOut() {
  const router = useRouter()
  const logoutHandler = async () => {
    try {
      const deleteSession = await account.deleteSession('current')
      console.log(deleteSession)
      await fetch('/api/user/logout')
      router.push('/')
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='w-full h-1/2'>
      <Card className='h-full'>
        <CardHeader className='text-md lg:text-xl'>Wanna Logout?</CardHeader>
        <Divider />
        <CardBody className=''>
          Thanks for see all details in here, if you think I am a right candidate please let me know
        </CardBody>
        <CardFooter>
          <Button onClick={() => logoutHandler()} className='text-black' color='danger'>Sign Out</Button>
        </CardFooter>
      </Card>
    </div>


  )
}
