<script lang="ts">
	import type { Standings } from "$lib/types";
    import StandingsTable from "$lib/components/standings-table/StandingsTable.svelte";

    export let data: Standings;
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .position {
        font-weight: bold;
        color: gray;
        margin-right: 1rem;
    }

    .member {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .member > * {
        flex: 1;
    }

    .member-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .team-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: whitesmoke;
        border-radius: 7px;
        padding: 1rem;
    }

    h3 {
        margin: 0;
    }

    .split {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>

<div class="container">
    {#each data.members as member, i}
        <div class="member">
            <div class="member-info">
                <div class="split">
                    <h3>
                        <span class="position">{ i + 1 }</span>
                        { member.name }
                    </h3>
                    <div>{member.gamesBehind } GB</div>
                </div>
            </div>
            <div class="team-container">
                <StandingsTable {member} />
            </div>
        </div>
    {/each}
</div>