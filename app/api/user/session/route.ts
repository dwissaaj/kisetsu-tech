
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

// export async function GET() {
//     try {
//     const cookiesStore = cookies()
//     const userId = cookiesStore.get('userId')
//     const email  = cookiesStore.get('email')
//     let userS  ={
//         userId: userId,
//         email: email
//     }
//     return NextResponse.json({userS})
//     }
//     catch(error) {
//         return NextResponse.json({message: 'Error at get cookies user and email'})
//     }
// }

export async function GET() {
    const cookiesStore = cookies()
    const sessionId = cookiesStore.get('')
    console.log(sessionId) 
    return sessionId
}