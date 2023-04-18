<script lang="ts">
	import type { Game } from "$lib/types";
    import GameCardTeam from "$lib/components/game-card-team/GameCardTeam.svelte";

    export let game: Game;
    export let memberName: string;

    $: opposingMember = game.homeTeam.memberName === memberName ? game.awayTeam.memberName : game.homeTeam.memberName;
</script>

<style>
    .card {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 10px;
        background-color: white;
        border-radius: 7px;
        font-size: 12px;
    }

    .status {
        font-weight: 600;
        color: gray;
    }
    
    .opposing {
        /* font-style: italic; */
        color: gray;
    }

    .bottom {
        border-top: 1px solid lightgray;
        font-size: 10px;
        padding-top: 5px;
    }

    .in-progress {
        color: var(--green);
    }
</style>

{ #if game }
    <div class="card">
        <GameCardTeam team={game.homeTeam} showScore={game.showScore} memberName={memberName} />
        <GameCardTeam team={game.awayTeam} showScore={game.showScore} memberName={memberName} />
        
        <div class="bottom">
            <div class="status" class:in-progress={game.status==='IN PROGRESS'}>
                { game.status }
            </div>
            <div class="opposing">
                Against { opposingMember }
            </div>
        </div>
    </div>
{ /if }