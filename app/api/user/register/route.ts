import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData  = await request.formData()
  const name = formData.get('email')
  const pass = formData.get('password')
  return NextResponse.json({name,pass})
  }
  catch(error) {
    return NextResponse.json({error: error}, {status: 500})
  }
}