<script lang="ts">
    import type { GameScore } from "$lib/types";
    import MemberView from "./member-view/MemberView.svelte";

    export let game: GameScore;

    function sanitize(score: number) {
        return isNaN(score) ? '-' : score;
    }
</script>

<style>
    .score-card {
        display: flex;
        flex-direction: column;
        font-size: 10px;
        border: 1px solid var(--accent-color);
        border-radius: 5px;
    }
    
    .score-card > * {
        padding: 5px;
    }

    .score-card > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .game-info {
        font-size: 10px;
        border-bottom: 1px solid var(--accent-color);
    }

    table {
        /* white-space: nowrap; */
        text-align: center;
    }

    td:first-child {
        text-align: left;
    }

    td:last-child {
        text-align: end;
    }

    .name {
        font-weight: 600;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
    }

    .members {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: var(--accent-color);
    }

    .win {
        color: green;
        font-weight: bold;
    }

    .quarters {
        font-size: 8px;
    }
</style>

<div class="score-card">
    <div class="members">
        <MemberView team={game.away_team} />
        <MemberView team={game.home_team} />
    </div>
    {#if game.status !== 'final'}
        <div class="game-info">
            <div>{game.channel ? game.channel : 'N/A'}</div>
            <div>{game.time}</div>
        </div>
    {/if}
    <table>
        <tbody>
            {#if game.status === 'live'}
                <tr class="quarters">
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>T</td>
                </tr>
            {/if}
            <tr>
                <td>
                    <div class="name">
                        <img height="10px" src="{game.away_team.img}" alt="" />
                        <div class:win={game.away_team.result === 'win'}>{ game.away_team.name }</div>
                    </div>
                </td>
                {#if game.status === 'live'}
                    <td>{sanitize(game.away_team.first_quarter)}</td>
                    <td>{sanitize(game.away_team.second_quarter)}</td>
                    <td>{sanitize(game.away_team.third_quarter)}</td>
                    <td>{sanitize(game.away_team.fourth_quarter)}</td>
                {/if}
                {#if game.status !== 'scheduled'}
                    <td class:win={game.away_team.result === 'win'}>{game.away_team.total}</td>
                {/if}
            </tr>
            <tr>
                <td>
                    <div class="name">
                        <img height="10px" src="{game.home_team.img}" alt="" />
                        <div class:win={game.home_team.result === 'win'}>{ game.home_team.name }</div>
                    </div>
                </td>
                {#if game.status === 'live'}
                    <td>{sanitize(game.home_team.first_quarter)}</td>
                    <td>{sanitize(game.home_team.second_quarter)}</td>
                    <td>{sanitize(game.home_team.third_quarter)}</td>
                    <td>{sanitize(game.home_team.fourth_quarter)}</td>
                {/if}
                {#if game.status !== 'scheduled'}
                    <td class:win={game.home_team.result === 'win'}>{game.home_team.total}</td>
                {/if}
            </tr>
        </tbody>
    </table>
</div>