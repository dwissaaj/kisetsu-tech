import { ID, account, database } from '@/app/appwrite'
import { Permission, Role } from 'appwrite'
import { NextResponse } from 'next/server'
export async function POST(request: Request){
    const res = await request.json()
    console.log('try to register profile in api', res)
    try {
        const data =  await database.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_COLLECTION_ID as string,
            ID.unique(),
            {
                fullName: res.names,
                email: res.emails,
                userId: res.userIds
            },
            [
                Permission.create(Role.user(`${res?.userId}`)),
                Permission.read(Role.user(`${res?.userId}`)),
                Permission.delete(Role.user(`${res?.userId}`)),
                Permission.update(Role.user(`${res?.userId}`)),
            ]
        )
        console.log(res)
        console.log(data)
        console.log('success')
        return NextResponse.json({message: data}, {status: 200})
    }
    catch(error){
        console.log(res)

        return NextResponse.json({message: error}, {status: 400})
    }
}
