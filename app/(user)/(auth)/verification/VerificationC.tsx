'use client'
import { account } from '@/app/utils/client/appwrite'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

export default function VerificationC() {
    const [isState, setisState] = useState({
        isLoading: false,
        isDisabled: false,
        isTextShow: false
    })
    const sendVerify = async () => {

        try {
            setisState({ ...isState, isLoading: true })
            const promise = await account.createVerification('http://localhost:3000/thanks')
            console.log('success at send verification', promise)
            setisState({ ...isState, isLoading: false, isDisabled: true, isTextShow: true })
        }
        catch (error) {
            console.log('error at send verify', error)
        }
        setisState({ ...isState, isLoading: false, isDisabled: true })
    }
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div>
                <div className='mt-8 text-lg'>
                    <Button isDisabled={isState.isDisabled} isLoading={isState.isLoading} onClick={() => sendVerify()} className='w-full' variant='solid' color='primary'>Send Confirmation</Button>
                </div>
                <div>
                    {
                        isState.isTextShow ? (
                            <h1>Check Your Email for Confirmation</h1>
                        ) : (
                            <h1></h1>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
