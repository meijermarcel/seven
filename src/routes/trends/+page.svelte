<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;

    $: ({members} = data);

</script>

{#each members as member}
    <div>{member.name}</div>
{/each}