<script lang="ts">
	import type { SelectValue } from "$lib/types";

    export let items: SelectValue[] = [];
</script>

<select>
    {#each items as item}
        <option value={item.value}>{item.label}</option>
    {/each}
</select>