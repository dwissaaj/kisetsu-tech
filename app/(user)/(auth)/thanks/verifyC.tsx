'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button, Spinner } from '@nextui-org/react'
import { account } from '@/app/appwrite'
import { useRouter } from 'next/navigation';
export default function CallBackVerify() {
    const searchParams = useSearchParams()
    const userId = searchParams.get('userId')
    const secret = searchParams.get('secret')
    const [isState, setIsState] = useState({
      label : '',
      spinner: true,
      isSuccess: false
    })
    const handleVerify = async () => 
    {
      
    try {
      setIsState({...isState, spinner: true, label:' Try To Confirm'})
        const verify = account.updateVerification(
            userId!,
            secret!
        )
        console.log('Finished to verify',verify )
        
    }
    catch(error) {
        console.log('Error at verify')
  }

    }
  
  return (
    <div className='w-full my-60 flex flex-col justify-center items-center'>
        <div>
           <Button onClick={() => handleVerify()}>Click To verify</Button>
        </div>
        <div>
            {
              isState.isSuccess ? (
                <p>Thanks For Confirm</p>
   
              ) :
              (
                <Spinner label={isState.label} color='primary' size='lg' />
              )
              
            }
        </div>
    </div>
  )
}
