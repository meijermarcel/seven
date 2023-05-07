<script lang="ts">
	import type { PageData } from "./$types";
    import dayjs from 'dayjs';

    export let data: PageData;

    $: ({games} = data);

    function convertDate(date: Date) {
        // use dayjs
        return dayjs(date).format('ddd MMM D, h:mm A');
    }

    function addPlusSign(spread: number) {
        if (spread > 0) {
            return `+${spread}`;
        }
        return spread;
    }
</script>

<style>

    .games {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .game {
        display: flex;
        flex-direction: column;
        gap: 5px;
        /* background-color: whitesmoke; */
        /* border-radius: 7px; */
    }

    .game-time {
        font-weight: bold;
    }

    .game-lines {
        display: flex;
        flex-direction: column;
    }
    
    .game-lines > div {
        display: flex;
        flex-direction: row;
        padding: 5px;
        justify-content: center;
        align-items: center;
    }

    .team-name {
        font-weight: bold;
        font-size: 12px;
        text-align: left;
        flex: 2;
    }

    .line {
        flex: 1;
        text-align: center;
        background-color: whitesmoke;
        border-radius: 7px;
        margin: 2px;
        padding: 5px 0;
    }

    .divider {
        height: 2px;
        width: 100%;
        background-color: lightgray;
    }

</style>

<h3>Picks</h3>

<div class="games">
    <div class="divider"></div>
    {#each games as game}
        <div class="game">
            <div class="game-time">{convertDate(game.date_time)}</div>
            <div class="game-lines">
                <div>
                    <div class="team-name">{game.away_team}</div>
                    <div class="line">{addPlusSign(game.away_spread)}</div>
                    <div class="line">O{game.total}</div>
                </div>
                <div>
                    <div class="team-name">{game.home_team}</div>
                    <div class="line">{addPlusSign(game.home_spread)}</div>
                    <div class="line">U{game.total}</div>
                </div>
            </div>
        </div>
        <div class="divider"></div>
    {/each}
</div>