<script lang="ts">
    import { onMount } from 'svelte';

    // eslint-disable-next-line init-declarations
    let target: HTMLDivElement;
    export let data = [{}];
    export let showLegend: boolean = true;
    export let xaxisLabel = '';
    export let yaxisLabel = '';

    onMount(async () => {
        const Plotly = await import('plotly.js-dist-min');
        Plotly.newPlot(
            target,
            data,
            {
                font: { family: 'Raleway' },
                showlegend: showLegend,
                legend: {
                    x: 1,
                    xanchor: 'right',
                    y: 1,
                },
                margin: {
                    b: 30,
                    t: 30,
                    r: 60,
                    l: 60,
                    pad: 2,
                },
                paper_bgcolor: '#F5F8F7',
                plot_bgcolor: '#F5F8F7',
                xaxis: { title: { text: xaxisLabel, standoff: 15 }, automargin: true },
                yaxis: { title: yaxisLabel },
            },
            { responsive: true, scrollZoom: true },
        );
    });
</script>

<div class="overflow-x-auto rounded-2xl" bind:this={target}></div>
