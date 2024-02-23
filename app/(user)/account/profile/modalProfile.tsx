'use client'
import React, {useState} from 'react'
import { Button, Input } from '@nextui-org/react'
import { ID, database } from '@/app/appwrite'
export default function ModalProfile() {
  const [isData, setIsData] = useState({
    fullName: '',
    org: '',
    occupation : ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setIsData({ ...isData, [name]: value })
   

  }
  const ProfileChange = () => {
    try {
      const promise = database.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_COLLECTION_ID as string,
        ID.unique(),
        {
          isData
        }
      )
    }
    catch(error) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-col gap-3'>
       <form className='flex flex-col gap-3'>
       <Input isDisabled={true} variant='bordered' color='primary' type="text" label="User ID" />
        <Input isDisabled={true} variant='bordered' color='primary' type="text" label="Email" />
         
         <Input 
         name='fullName'
         id='fullName'
         variant='bordered' 
         onChange={handleChange}
         color='primary' 
         type="text" 
         label="Full Name"
         value={isData.fullName} />


        <Input 
         name='occupation '
         id='occupation '
         variant='bordered' 
         onChange={handleChange}
         color='primary' 
         type="text" 
         label="Occupation "
         value={isData.occupation} />


         <Input 
         name='org'
         id='org'
         variant='bordered' 
         onChange={handleChange}
         color='primary' 
         type="text" 
         label="Organization/Company"
         value={isData.org} />

       </form>
       <Button onClick={() => ProfileChange()}>Update</Button>
    </div>
  )
}
