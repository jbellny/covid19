<script context="module">
    export async function load({params}) {
        const state = params.state

        return {
            props: {state}
        }
    }
</script>

<script>
    import CovidStat from "../components/CovidStat.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    export let state
</script>

<svelte:head>
    <title>Covid 19 - {state}</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - {state}</h1>
    </div>
</div>

<CovidStat/>
<CovidChart/>
