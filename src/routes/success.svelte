<script>
    import { Client, Account } from "appwrite";

    const client = new Client();

    const account = new Account(client);

    client
        .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your API Endpoint
        .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) // Your project ID
    ;

    let name = "";

    const getAccount = () => { account.get()
        .then(function (response) {
            console.log(response); // Success
            name = response.name;
            name = name;
        }, function (error) {
            console.log(error); // Failure
            return error;
        });
    }

    getAccount();
</script>

<h1 class="text-6xl">Success!</h1>
<h1>Welcome, {name}</h1>
