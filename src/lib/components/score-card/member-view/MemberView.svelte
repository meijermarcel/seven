<script lang="ts">
    import type { GameTeam } from "$lib/types";

    export let team: GameTeam;
</script>

<style>
    .team-container {
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
    }

    img {
        height: 10px;
    }

    .win {
        color: green;
        font-weight: bold;
    }
</style>

{#if team.member_name}
    <div class="team-container">
        <img src="{team.img}" alt="" />
        <div class:win={team.result === 'win'}>{team.member_name}</div>
    </div>
{/if}