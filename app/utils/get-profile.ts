import { account } from "../appwrite";

export async function getProfile() {
    try {
        const currentUser = await account.get()
        var data = currentUser
        console.log(data)
        return data
    }
    catch(error) {
        return error
    }
    
}