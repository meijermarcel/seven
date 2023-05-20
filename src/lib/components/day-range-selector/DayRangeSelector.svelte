<script lang="ts">
    export let days: number = 3;

    const dayOptions = [1, 3, 5, 7];

    function setDays(newValue: number) {
        days = newValue;
    }
</script>

<style>
    button {
        border: none;
        padding: 6px;
        background-color: transparent;
        font-weight: 600;
    }

    .container {
        display: flex;
        justify-content: center;
    }

    .selector {
        display: flex;
        gap: 10px;
        /* justify-content: space-between; */
        padding: 5px;
        border-radius: 7px;
        border: 1px solid lightgray;
        /* background-color: whitesmoke; */
    }

    .selected {
        background-color: var(--primary-color);
        border-radius: 5px;
        color: white;
    }

</style>

<div class="container">
    <div class="selector">
        {#each dayOptions as day}
            <button class:selected={day === days} on:click={() => setDays(day)}>Last {day}d</button>
        {/each}
    </div>
</div>