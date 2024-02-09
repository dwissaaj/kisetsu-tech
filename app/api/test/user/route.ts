import { NextResponse } from "next/server"

export async function GET(){
  return NextResponse.json({message: 'aCCEPTED'})
}

export async function POST(request: Request) {
  const res = await request.json()
  return Response.json({ res })
}