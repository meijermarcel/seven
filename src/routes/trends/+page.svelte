<script lang="ts">
	import type { PageData } from "./$types";
    import LineChart from "$lib/components/line-chart/LineChart.svelte";
    import DayRangeSelector from "$lib/components/day-range-selector/DayRangeSelector.svelte";

    export let data: PageData;
    let days = 3;
    const colors = ['#ff3e00', '#001524', '#15616D', '#08B2E3', '#8FC93A'];

    $: ({members} = data);

    $: [labels, datasets] = getChartData(members);

    $: trends = getTrends(members, days);

    function setDays(days: number) {
        days = days;
        // trends = getTrends(members, days);
    }

    function getChartData(members: any[]) {
        if (members === undefined) return [[], []];
        let labelSet = new Set();
        let datasets = [];
        for (let i = 0; i < members.length; i++) {
            // generate random color
            members[i].color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            let dataset = {
                label: members[i].name,
                data: new Array<number>(),
                fill: false,
                borderColor: colors[i],
                backgroundColor: colors[i],
                tension: 0.1,
                pointRadius: 0,
            };
            for (let record of members[i].records) {
                labelSet.add(record.date_time);
                dataset.data.push(record.wins);
            }
            datasets.push(dataset);
        }
        // create array from label set and format dates as MM/DD/YYYY
        let labels = Array.from(labelSet).map((date: any) => {
            let dateObj = new Date(date);
            return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
        });
        return [labels, datasets];
    }

    function getTrends(members: any[], days: number) {
        // find number of wins last 3 days for each member
        let trends = [];
        for (let member of members) {
            if (days > member.records.length - 1) {
                days = member.records.length - 1;
            }
            let wins = member.records[member.records.length - 1].wins - member.records[member.records.length - days - 1].wins;
            let losses = member.records[member.records.length - 1].losses - member.records[member.records.length - days - 1].losses;
            let gamesPlayed = wins + losses;
            trends.push({
                name: member.name,
                wins: wins,
                losses: losses,
                gamesPlayed: gamesPlayed,
            });
        }
        // sort by wins
        trends.sort((a, b) => {
            return b.wins - a.wins;
        });
        return trends;
    }

</script>

<style>
    h3:first-child {
        margin-top: 0;
    }

    table {
        text-align: center;
        width: 100%;
    }

    td {
        padding: 5px 0;
    }

    tr {
        border-bottom: 1px solid gray;
    }

    .card {
        background-color: whitesmoke;
        border-radius: 5px;
        padding: 1rem;
    }

    .trend-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>

<div class="trend-info">
    <DayRangeSelector bind:days={days}></DayRangeSelector>
    <div class="card">
        <table>
            {#each trends as member}
                <tr>
                    <td class="font-weight-bold text-left">{member.name}</td>
                    <td>{member.wins} - {member.losses}</td>
                    <td>{member.gamesPlayed} GP</td>
                </tr>
            {/each}
        </table>
    </div>
</div>

<h3>Total Wins</h3>
<LineChart {labels} {datasets} ></LineChart>
