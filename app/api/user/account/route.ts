import { account } from "@/app/appwrite";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request: Request){
 const cookiesStore = cookies()
const session = cookiesStore.get('a_session_console')
 console.log(session)
 return NextResponse.json({session})
}
  
