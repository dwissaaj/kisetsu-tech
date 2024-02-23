'use server'
import { account } from "@/app/appwrite";

import { NextResponse } from "next/server";
export async function DeleteSession() {
    try {
        const sessionDelete = await  account.deleteSessions()
        console.log(sessionDelete)
        return NextResponse.json({statusCode: 204},{statusText: 'Delete Logout User'})
    }
    catch(err) {
        return NextResponse.json({statusCode: 400}, {statusText: 'Error at Log Out User'})
    }
}