<script lang="ts">
	import type { Stats, MemberStat } from "$lib/types";

    export let data: Stats;

    let selectedStat = "hr" as const;

    const availableStats = [
        { label: "HR", value: "hr" },
        { label: "RBI", value: "rbi" },
        { label: "AVG", value: "avg" },
    ] as const;

    // function to assign selectedStat and sort members by that stat
    function sortMembersByStat(stat: any) {
        selectedStat = stat;
        data.members = data.members.sort((a, b) => b[selectedStat] - a[selectedStat]);
    }

</script>

<style>
    
    table {
        width: 100%;
        font-size: 24px;
        border-collapse: collapse;
    }

    td {
        border-bottom: 1px solid lightgray;
        padding: 5px;
    }

    .stat-picker {
        overflow-x: auto;
    }

    .stat-picker button {
        border-radius: 10px;
        margin: 0.5rem;
        padding: 7px 15px;
        border: none;
        background-color: lightgray;
        font-size: 20px;
        font-weight: bold;
    }

    .stat-picker button.selected {
        /* background-color: green; */
        background-image: linear-gradient(to right top, #b20000, #c83a00, #dc5e00, #ef7f00, #ffa000);
        color: white;
    }
    
</style>

<div class="stat-picker">
    { #each availableStats as stat }
        <button class:selected="{selectedStat === stat.value}" on:click={() => sortMembersByStat(stat.value)}>{ stat.label }</button>
    { /each }
</div>

<table>
    <thead>
    </thead>
    <tbody>
        { #each data.members as member, i }
            <tr>
                <td>{ i + 1 }</td>
                <td>{ member.name }</td>
                <td class="text-center">{ member[selectedStat] }</td>
            </tr>
        { /each }
    </tbody>
</table>