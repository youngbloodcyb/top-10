<script context="module">
    import { user } from "../stores/getUser";
    import { session , loggedIn } from "../stores/getSession";
    
</script>

{#if $loggedIn}
    <h1 class="text-6xl">Success!</h1>
    <h1>Welcome, {$user.name}.</h1>
    <p>You are logged in.</p>
{/if}
