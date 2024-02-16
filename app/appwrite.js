import { Client, Account, Databases, Storage } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1').setProject('65c465ad230eb448403c');

export const account = new Account(client);
const promise = account.get();
promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
export const database =  new Databases(client)
export const storage = new Storage(client)
export { ID } from 'appwrite';
