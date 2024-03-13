// src/lib/server/appwrite.js
import { Client, Account } from "node-appwrite";



export const SESSION_COOKIE = "cookie_session";

// Admin client, used to create new accounts
const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT)
    .setKey(process.env.NEXT_PUBLIC_SET_KEY); // Set the API key here!

  return {
    get account() {
      return new Account(client);
    },
  };
}

// session client
const createSessionClient = async (request) =>  {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_SET_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_SET_PROJECT)

  const session = request.cookies.get('cookie_session')
  if (session) {
    client.setSession(session);
  }

  return {
    get account() {
      return new Account(client);
    },
  };
}

export {createAdminClient, createSessionClient}
