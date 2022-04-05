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

<h1>{state}</h1>
<CovidStat/>
<CovidChart/>
