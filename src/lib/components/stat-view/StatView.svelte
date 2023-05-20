<script lang="ts">
	import type { StatField } from "$lib/types";
	import StatModal from "../stat-modal/StatModal.svelte";

    export let stat: StatField;

    let expanded = false;
</script>

<style>
    .stat-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 7px;
        /* background-color: whitesmoke; */
        background-image: linear-gradient(to right bottom, #f2f2f2, #efefef, #ededed, #eaeaea, #e8e8e8);
    }

    .stat-name {
        font-weight: bold;
        color: var(--primary-color);
        /* font-size: 1.2rem; */
    }

    .leader {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
    }

    .leader-name {
        font-weight: 600;
        color: gray;
    }

    .leader-value {
        font-weight: 500;
        font-size: 1.5rem;
    }
</style>

{#if expanded}
    <StatModal {stat} bind:expanded={expanded}></StatModal>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="stat-container" on:click={() => expanded = !expanded}>
    <div class="stat-name">{stat.name}</div>
    {#if stat.members.length > 0}
        <div class="leader">
            <div class="leader-value">{stat.members[0].value}</div>
            <div class="leader-name">{stat.members[0].name}</div>
        </div>
    {/if}
</div>