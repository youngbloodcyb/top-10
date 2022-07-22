<script>
    import { Client, Account } from "appwrite";

    import { goto } from '$app/navigation';

    const client = new Client();

    const account = new Account(client);

    client
        .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your API Endpoint
        .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) // Your project ID
    ;

    let email = '';
    let password = '';

    const login = (email, password) => { 
        account.createEmailSession(email, password)
            .then(response => {
                console.log(response);
                goto("/success");
            }, error => {
                console.log(error);
            });
    }

    // const promise = login(email, password);

    // login.then(function (response) {
    //     console.log(response); // Success
    //     goto("/success");
    // }, function (error) {
    //     console.log(error); // Failure
    // });
</script>

<div class="h-screen w-screen">
    <div class="flex items-center flex-col font-roboto justify-center h-full w-full">
        <div class="w-10/12 h-auto mb-20">
            <h1 class="text-4xl font-extrabold py-2 mb-10">login</h1>
            <form class="max-w-2xl">
                <div class="flex flex-col mb-10 relative">
                    <input class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" type="text" id="email" name="email" placeholder="email" required="" bind:value={email}>
                    <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="name">email</label>
                </div>
                <div class="flex flex-col mb-10 relative">
                    <input class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" type="password" id="password" name="password" placeholder="password" required="" bind:value={password}>
                    <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="email">password</label>
                </div>
                <button class="py-3 px-6 hover:bg-secondary hover:text-white hover:border-black transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] hover:bg-blue-200 w-full md:w-40" type="submit" on:click|preventDefault={login(email, password)}>submit</button>
            </form>
            <div class="my-4">
                <a class="underline text-xs hover:text-gray-500" href="/new">get started</a>
            </div>
        </div>
    </div>
</div>
