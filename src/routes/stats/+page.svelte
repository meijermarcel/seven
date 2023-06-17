<script lang="ts">
	import type { Stats } from "$lib/types";
    import StatView from "$lib/components/stat-view/StatView.svelte";
    export let data: Stats;
</script>

<style>
    .stat-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    h3 {
        margin: 0;
        color: gray;
    }
</style>

<div class="stat-list">
    <h3>Batting</h3>
    {#each data.batting as stat}
        <StatView {stat}></StatView>
    {/each}
    <!-- <h3>Pitching</h3>
    {#each data.pitching as stat}
        <StatView {stat}></StatView>
    {/each} -->
</div>
