<script lang="ts">
    import type { GameScore } from "$lib/types";

    export let game: GameScore;
</script>

<style>
    .score-card {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 10px;
    }

    .score-card > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .game-info {
        font-size: 10px;
    }

    table {
        /* white-space: nowrap; */
        text-align: center;
    }

    td:first-child {
        text-align: left;
    }
</style>

<div class="score-card">
    <div class="game-info">
        <div>{game.time}</div>
        <div>{game.channel}</div>
    </div>
    <table>
        <tbody>
            <tr>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>T</td>
            </tr>
            <tr>
                <td>{game.away_team.name}</td>
                <td>{game.away_team.first_quarter}</td>
                <td>{game.away_team.second_quarter}</td>
                <td>{game.away_team.third_quarter}</td>
                <td>{game.away_team.fourth_quarter}</td>
                <td>{game.away_team.total}</td>
            </tr>
            <tr>
                <td>{game.home_team.name}</td>
                <td>{game.home_team.first_quarter}</td>
                <td>{game.home_team.second_quarter}</td>
                <td>{game.home_team.third_quarter}</td>
                <td>{game.home_team.fourth_quarter}</td>
                <td>{game.home_team.total}</td>
            </tr>
        </tbody>
    </table>
</div>