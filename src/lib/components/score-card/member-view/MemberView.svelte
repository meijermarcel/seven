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
        height: 12px;
    }

    .win {
        color: green;
        font-weight: bold;
    }

    .circle {
        background-color: white;
        border-radius: 50%;
        --size: 20px;
        width: var(--size);
        height: var(--size);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

{#if team.member_name}
    <div class="team-container">
        <div class="circle">
            <img src="{team.img}" alt="" />
        </div>
        <div class:win={team.result === 'win'}>{team.member_name}</div>
    </div>
{/if}