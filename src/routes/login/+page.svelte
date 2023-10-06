<!-- // src/routes/login/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms'
	export let form
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  input {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
</style>

<div class="flex h-screen">
  <div class="m-auto">
    <h1 class="h1">
      <span class="bg-gradient-to-br from-blue-600 to-blue-100 bg-clip-text text-transparent box-decoration-clone">Login</span>
    </h1>
    <div class="card p-3">
      <form method="post" use:enhance>
        <label for="email">Email</label>
        <input name="email" value={form?.email ?? ''} />
        <label for="password">Password</label>
        <input type="password" name="password" />
        <button>Sign in</button>
      </form>
    </div>
  </div>
</div>