import { Client, Account } from "appwrite";

import { writable } from "svelte/store";

const client = new Client();

    const account = new Account(client);

    client
        .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your API Endpoint
        .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) // Your project ID
    ;

export let user = writable({});

const getAccount = () => { account.get()
    .then(function (response) {
        console.log(response); // Success
        user.set(response);
    }, function (error) {
        console.log(error); // Failure
        return error;
    });
}

getAccount();