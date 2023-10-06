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

<form method="post" use:enhance>
  <label for="email">Email</label>
  <input name="email" value={form?.email ?? ''} />
  <label for="password">Password</label>
  <input type="password" name="password" />
  <button>Sign in</button>
</form>