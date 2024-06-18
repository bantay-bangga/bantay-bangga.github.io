<script lang="ts">
    import { onMount } from 'svelte';

    // eslint-disable-next-line init-declarations
    let target: HTMLDivElement;
    export let data = [{}];

    onMount(async () => {
        const Plotly = await import('plotly.js-dist-min');
        Plotly.newPlot(
            target,
            data,
            {
                font: { family: 'Raleway' },
                showlegend: true,
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
                paper_bgcolor: '#cdd2d4',
                plot_bgcolor: '#cdd2d4',
            },
            { responsive: true },
        );
    });
</script>

<div class="overflow-x-auto rounded-2xl" bind:this={target}></div>
