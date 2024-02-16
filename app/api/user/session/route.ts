
import { account } from '@/app/appwrite'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
export async function POST(request: Request) {
    const cookiesStore = cookies()
    const res = await request.json()
    try {
        cookiesStore.set({
            name: 'userId',
            value: res?.userId,
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7
        })
        console.log(res)
    return NextResponse.json({message: 'success'} , {status: 200})

    }
    catch(err) {
        return NextResponse.json({message: 'Failed to store in cookies'} , {status: 400})
    }

  }

export async function GET() {
    try {
    const user = await account.get()
    return NextResponse.json({user})
    }
    catch(error) {
        return NextResponse.json({message: 'eror'})
    }
}