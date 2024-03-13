import { ID, account, database } from '@/app/utils/client/appwrite'
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

export async function GET() {
    try {
        const user = await database.getDocument( process.env.NEXT_PUBLIC_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_COLLECTION_ID as string,
            '65d98eda2a5c47f833df')
            .then(user => console.log('log in user api', user))
            .then(user => {
                return NextResponse.json({user})
            })
            .then((res) => {
                return res
            })
            .catch(error => console.log(error))
    return NextResponse.json({user})
      
    }
    
    catch(error) {
        console.log(error)
    }
}