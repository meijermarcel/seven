<script lang="ts">
	import type { Game } from "$lib/types";

    export let game: Game;
    export let memberName: string;
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

    .team-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .team-info {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .team-logo {
        margin-right: 5px;
    }

    .team-name {
        font-weight: 600;
    }

    .team-name.active {
        color: var(--primary-color);
    }

    .team-score {
        font-weight: bold;
    }

    .status {
        font-weight: 600;
        color: gray;
    }
</style>

{ #if game }
    <div class="card">
        <div class="team-row">
            <div class="team-info">
                <div class="team-logo">
                    <img height="10px" src="{game.awayTeam.logoSrc}" alt="" />
                </div>
                <div class="team-name" class:active={memberName === game.awayTeam.memberName}>
                    { game.awayTeam.name }
                </div>
            </div>
            { #if game.showScore }
                <div class="team-score">
                    { game.awayTeam.score }
                </div>
            { /if }
        </div>
        <div class="team-row">
            <div class="team-info">
                <div class="team-logo">
                    <img height="10px" src="{game.homeTeam.logoSrc}" alt="" />
                </div>
                <div class="team-name" class:active={memberName === game.homeTeam.memberName}>
                    { game.homeTeam.name }
                </div>
            </div>
            { #if game.showScore }
                <div class="team-score">
                    { game.homeTeam.score }
                </div>
            { /if }
        </div>
        <div class="status">
            { game.status }
        </div>
    </div>
{ /if }