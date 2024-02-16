import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({error: 'aCCEPTED'}, {status: 200})
}
export async function POST(NextRequest: Request) {
    const formData = await NextRequest.formData()
    const data = {
        name : formData.get('name')
    }
    return NextResponse.json({data})
}