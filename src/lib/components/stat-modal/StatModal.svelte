<script lang="ts">
	import type { StatField } from "$lib/types";
    import { slide, fade } from "svelte/transition";

    export let stat: StatField;
    export let expanded = false;
</script>

<style>
    .shade {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background-color: white;
        border-radius: 7px;
        padding: 1rem;
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 400px;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
    }

    h3 {
        margin: 0;
    }

    button {
        background-color: transparent;
        color: var(--primary-color);
        border: none;
    }

    .stat-container {
        display: flex;
        flex-direction: column;
    }

    .member {
        display: flex;
        border-bottom: 1px solid var(--accent-color);
        padding: 1rem 0;
        align-items: center;
    }

    .member:last-child {
        border-bottom: none;
    }

    .index {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .index > div {
        background-color: var(--primary-color);
        color: white;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .member-name {
        flex: 2;
    }

    .member-value {
        flex: 1;
        text-align: center;
        font-weight: bold;
    }

</style>

<div class="shade" transition:fade|global={{ duration: 100 }}>
    <div class="modal" transition:slide|global={{ duration: 300 }}>
        <div class="modal-header">
            <h3>{stat.name}</h3>
            <div>
                <button on:click={() => expanded = false }>Close</button>
            </div>
        </div>
        <div class="stat-container">
            {#each stat.members as member, i}
                <div class="member">
                    <div class="index">
                        <div>
                            {i + 1}
                        </div>
                    </div>
                    <div class="member-name">{member.name}</div>
                    <div class="member-value">{member.value}</div>
                </div>
            {/each}
        </div>
    </div>
</div>