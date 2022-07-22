<script>
    import { Client, Account } from 'appwrite';

    const client = new Client();

    // Init your Web SDK
    client
        .setEndpoint('http://localhost/v1') // Your API Endpoint
        .setProject('62d75e25ebbe8021f42f') // Your project ID
    ;

    const account = new Account(client);

    let email = '';
    let password = '';
    let name = '';

    // Register User
    const newUser = (email, password, name) => {
        account.create('unique()', email, password, name)
            .then(response => {
                console.log(response);
            }, error => {
                console.log(error);
        });
    }

</script>

<div class="h-screen w-screen">
    <div class="flex items-center flex-col font-roboto justify-center h-full w-full">
        <div class="w-10/12 h-auto mb-20">
            <h1 class="text-4xl font-extrabold py-2 mb-10">create account</h1>
            <form class="max-w-2xl" on:submit="{()=> {window.alert("submitted")}}">
                <div class="flex flex-col mb-10 relative">
                    <input class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" type="text" id="name" name="name" placeholder="name" required="" bind:value={name}>
                    <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="name">name</label>
                </div>
                <div class="flex flex-col mb-10 relative">
                    <input class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" type="text" id="email" name="email" placeholder="email" required="" bind:value={email}>
                    <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="email">email</label>
                </div>
                <div class="flex flex-col mb-10 relative">
                    <input class="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary" type="password" id="password" name="password" placeholder="password" required="" bind:value={password}>
                    <label class="absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75" for="password">password</label>
                </div>
                <button class="py-3 px-6 hover:bg-secondary hover:text-white hover:border-black transition-all duration-300 ease-in-out font-bold border-black border-solid border-2 rounded-2xl hover:shadow-[-6px_6px_#000] hover:bg-blue-200 w-full md:w-40" type="submit" on:click={newUser(email, password, name)}>submit</button>
            </form>
            <div class="my-4">
                <a class="underline text-xs hover:text-gray-500" href="/">login</a>
            </div>
        </div>
    </div>
</div>