<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;

    $: ({teams} = data);
</script>

<h3>Picks</h3>

{#each teams as team}
    <div>{team.name}</div>
{/each}