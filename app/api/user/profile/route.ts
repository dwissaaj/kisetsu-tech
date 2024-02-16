import { ID, account, database } from '@/app/appwrite'
import { NextResponse } from 'next/server'
export async function POST(request: Request){
    const res = await request.json()
    try {
        const data =  await database.createDocument(
            process.env.NEXT_DATABASE_ID as string,
            process.env.NEXT_COLLECTION_ID as string,
            ID.unique(),
            {
                res
            }
        )
        console.log(res)
        console.log('success')
        return NextResponse.json({message: data}, {status: 200})
    }
    catch(error){
        console.log(error)
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