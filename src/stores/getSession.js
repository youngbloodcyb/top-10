import { Client, Account } from "appwrite";

import { writable } from "svelte/store";

const client = new Client();

    const account = new Account(client);

    client
        .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your API Endpoint
        .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) // Your project ID
    ;

export let session = writable({});