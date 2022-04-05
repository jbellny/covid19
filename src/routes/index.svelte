<script context="module">
    import requests from '../data/requests'
    export async function load() {
        try {
            const usStats = await requests.usStats()

            return { props: { usStats }}

        } catch(e) {

        }
    }
</script>

<script>
    import CovidStat from "../components/CovidStat.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";
    export let usStats
    console.log('US-Stats', usStats)
</script>

<svelte:head>
    <title>Void 19 US Tracker</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - US</h1>
    </div>
</div>
<CovidStat/>
<CovidChart/>
<TableContainer/>