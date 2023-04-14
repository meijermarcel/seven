<script lang="ts">
	import type { Standings } from "$lib/types";


    export let data: Standings;

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');

    .container {
        font-family: 'Manrope', sans-serif;
        max-width: 300px;
        margin: 2rem auto;
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
        padding: 2rem;
    }

    .team {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    h3 {
        margin: 0;
    }

    .team .name {
        font-weight: 600;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
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
                <div class="split">
                    <div>{ member.wins + member.losses } GP</div>
                    <div>{ member.wins } - { member.losses }</div>
                </div>
            </div>
            <div class="team-container">
                {#each member.teams as team}
                    <div class="team">
                        <div class="name">
                            <img height="25px" src="{team.img}" alt="" />
                            <div>{ team.name }</div>
                        </div>
                        <div>{ team.wins } - { team.losses }</div>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>