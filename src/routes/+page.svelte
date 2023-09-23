<script>
    export let data;
</script>

<h1>leagues</h1>
<ul>
{#each data.leagues as league}
    <li>{league.name}</li>
{/each}
</ul>