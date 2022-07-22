<script>
    import { Client, Account } from "appwrite";

    const client = new Client();

    const account = new Account(client);

    client
        .setEndpoint('http://localhost/v1') // Your API Endpoint
        .setProject('62d75e25ebbe8021f42f') // Your project ID
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
