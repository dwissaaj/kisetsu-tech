import { account } from "@/app/utils/client/appwrite";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(){
 const getAccount = await account.get()
 return NextResponse.json({getAccount},{status: 200})
}
  
