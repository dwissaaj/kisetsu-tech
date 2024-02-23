import { account } from "@/app/appwrite";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookiesStore = cookies()
    try {
        const removeCookies = cookiesStore.delete('userId')
        console.log(removeCookies)
        return NextResponse.json({statusCode: 204},{statusText: 'Delete Logout User'})
    }
    catch(err) {
        return NextResponse.json({statusCode: 400}, {statusText: 'Error at Log Out User'})
    }
}