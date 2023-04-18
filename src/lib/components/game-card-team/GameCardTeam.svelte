<script lang="ts">
    import type { GameTeam } from "$lib/types";

    export let team: GameTeam;
    export let showScore: boolean;
    export let memberName: string;
</script>

<style>
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
</style>

{ #if team }
    <div class="team-row">
        <div class="team-info">
            <div class="team-logo">
                <img height="10px" src="{team.logoSrc}" alt="" />
            </div>
            <div class="team-name" class:active={memberName === team.memberName}>
                { team.name }
            </div>
        </div>
        { #if showScore }
            <div class="team-score">
                { team.score }
            </div>
        { /if }
    </div>
{ /if }