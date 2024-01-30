import React from 'react'
import { Link } from '@nextui-org/react'
export default function HomeTitle() {
  return (
    <div className="flex flex-col gap-2">
        <div>
          <h1 className={`text-3xl lg:text-6xl`}> DWI SETYO AJI</h1>
          <p className="">New Version of Kisetsu Tech Built with</p>

        </div>
        <div className="flex flex-row gap-2 space-x-4 text-sm lg:text-md">
          <Link isBlock showAnchorIcon href="#" color="primary">
            Next UI
          </Link>
        
          <Link isBlock showAnchorIcon href="#" color="primary">
            Tailwind
          </Link>
          <Link isBlock showAnchorIcon href="#" color="secondary">
            Vercel
          </Link>
          <Link isBlock showAnchorIcon href="#" color="secondary">
            AWS
          </Link>
        </div>
      </div>
  )
}
