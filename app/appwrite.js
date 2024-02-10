import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c465ad230eb448403c');

export const account = new Account(client);
export { ID } from 'appwrite';
