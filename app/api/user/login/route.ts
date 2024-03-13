import { createAdminClient} from '@/app/lib/server/appwrite'
import { NextResponse } from 'next/server'
export async function POST(request: Request) {
    const { account } = await createAdminClient()
    const {email, password} = await request.json()
    const session = await account.createEmailPasswordSession()
    return NextResponse.json({account})
}