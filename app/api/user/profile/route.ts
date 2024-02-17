import { ID, account, database } from '@/app/appwrite'
import { Permission, Role } from 'appwrite'
import { NextResponse } from 'next/server'
export async function POST(request: Request){
    const res = await request.json()
    console.log(res)
    try {
        const data =  await database.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_COLLECTION_ID as string,
            ID.unique(),
            {
                name: res.name,
                email: res.email
            },
            [
                Permission.create(Role.any()),
                Permission.read(Role.any()),
                Permission.delete(Role.any()),
                Permission.update(Role.any()),
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
// export async function GET(){
//     try {
//         const user = await account.get()
//         console.log(user)
//     return NextResponse.json({user})    
//     }
//     catch(error) {
//         console.log("Error at fetching account", error)
//         return NextResponse.json({status: 400},{statusText: 'Error Profile Fetching'})
//     }
// }