<script lang="ts">
    import type { ScoreGames } from "$lib/types";
    import ScoreCard from "$lib/components/score-card/ScoreCard.svelte";

    export let data: ScoreGames;
</script>

<style>
    .game-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
    }

    h5 {
        margin-bottom: 0.5rem;
    }
</style>

<h5>Live</h5>
<div class="game-container">
    {#each data.live_games as game}
        <ScoreCard {game} />
    {/each}
</div>

<h5>Scheduled</h5>
<div class="game-container">
    {#each data.scheduled_games as game}
        <ScoreCard {game} />
    {/each}
</div>

<h5>Final</h5>
<div class="game-container">
    {#each data.final_games as game}
        <ScoreCard {game} />
    {/each}
</div>