<script lang="ts">
    import type { ScoreGames } from "$lib/types";
    import ScoreCard from "$lib/components/score-card/ScoreCard.svelte";

    export let data: ScoreGames;
</script>

<style>
    .game-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
</style>

<h5>Live</h5>
<div class="game-container">
    {#each data.final_games as game}
        <ScoreCard {game} />
    {/each}
</div>