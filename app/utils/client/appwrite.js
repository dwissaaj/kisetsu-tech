import { Client, Account, Databases, Storage } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT);

export const account = new Account(client);

export const database =  new Databases(client)
export const storage = new Storage(client)
export { ID } from 'appwrite';
