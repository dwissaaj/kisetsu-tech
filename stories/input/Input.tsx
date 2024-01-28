import React from 'react'
import { Input } from '@nextui-org/react'
import { SearchIcon } from '../icon/SearchIcon'
export default function InputUI() {
  return (
    <Input className="min-w-full" defaultValue="Find in Blogs" isDisabled endContent={<SearchIcon />} type="text" color="primary" variant="bordered" />

  )
}
