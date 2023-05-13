<script lang="ts">
	import type { PageData } from "./$types";
    import LineChart from "$lib/components/line-chart/LineChart.svelte";

    export let data: PageData;

    $: ({members} = data);

    $: [labels, datasets] = getChartData(members);

    const colors = ['#ff3e00', '#001524', '#15616D', '#08B2E3', '#8FC93A'];

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

</script>

<LineChart {labels} {datasets} ></LineChart>

<!-- {#each members as member}
    <div>
        <div>{member.name}</div>
        {#each member.records as record}
            <div>{record.wins} - {record.losses}</div>
        {/each}
    </div>

{/each} -->