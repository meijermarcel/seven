<script lang="ts">
    import { Line } from 'svelte-chartjs'

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
    } from 'chart.js';

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
    );

    export let labels: any[] = [];
    export let datasets: any[] = [];
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            // hide x-axis labels and lines
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
        interaction: {
            mode: "index",
            intersect: false,
        }
    }

    $: chartData = {
        labels: labels,
        datasets: datasets
    }
</script>

<Line data={chartData} height="500" {options}></Line>