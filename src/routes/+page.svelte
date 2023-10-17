<script lang="ts">
    import Topbar from "$lib/Components/Topbar.svelte";
    import PageHome from '$lib/Components/PageHome.svelte';
    import PageAbout from '$lib/Components/PageAbout.svelte';

    export let data;
</script>

<main class="w-full h-full flex flex-col mx-auto bg-graybg bg-deco bg-center bg-no-repeat bg-cover bg-fixed">
    <Topbar/>

    <PageHome/>
    <PageAbout/>
</main>