import { account } from "@/app/utils/client/appwrite"
import { NextResponse } from "next/server"

export async function GET(){
  try {
    const user = await account.get()
    console.log('currently logged in ', user)
    return NextResponse.json({data: user})
  }
  catch(err){
    return NextResponse.json({statusText: 'Error'}, {statusText: 'Err'})
  }
}

export async function POST(request: Request) {
  const res = await request.json()
  return Response.json({ res })
}