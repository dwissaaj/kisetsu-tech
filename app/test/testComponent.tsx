'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { Button } from '@nextui-org/react'

type ComponentTypes = {
    handleFunction: () => void
}
export default function TestComps() {
    const formData = new FormData()
    const [isData, setisData] = useState('')
    const mutation = async () => {
        try {
          const data = await axios.post('/api/test/user',{
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                name: isData
            }
          })
          console.log(data)
          return data
        }
        catch(error) {
          console.log(error)
        }
      }
  return (
    <div> 
        <input value={isData} name='name' id='name' type='text' onChange={(e) => setisData(e.target.value)} />
       <Button onClick={mutation}>Fetching</Button>
       </div>
  )
}
