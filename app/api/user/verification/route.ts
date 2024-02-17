import { account } from "@/app/appwrite";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const verify = account.createVerification('http://localhost:3000/verification')
        console.log(verify)
        return NextResponse.json({verify})
    }
    catch(error) {
        console.log('Error at Verify Serverless Function')
        return NextResponse.json({message: error}, {status: 400})
    }
}