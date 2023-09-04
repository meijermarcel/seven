<script lang="ts">
    import { weeks } from '$lib/global-var';
    
    export let selectedWeek = 1;
    const weeks_to_display = 3;
    let weeks_filtered = weeks.slice(0, weeks_to_display);
</script>

<style>
    .week-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        overflow-x: auto;
        justify-content: center;
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: gray;
        font-size: 10px;
    }

    a.selected {
        color: black;
        font-weight: bold;
    }
</style>

<div class="week-container">
    {#each weeks_filtered as week}
        <div>
            <a href="/scores/{week.week_number}" class:selected={week.week_number === selectedWeek}>
                <span>Week {week.week_number}</span>
                <span>{week.period}</span>
            </a>
        </div>
    {/each}
</div>

