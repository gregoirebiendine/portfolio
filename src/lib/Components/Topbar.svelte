<script lang="ts">
    import { t } from '$lib/Translations/translations';
    import DropdownLanguage from "./DropdownLanguage.svelte";

    let tabsContainer: HTMLDivElement;

    function setActiveTab(e: Event) {
        const target = (e.target as HTMLElement);

        tabsContainer.querySelectorAll('a').forEach(e => {
            if (e.dataset.tabs != target.dataset.tabs)
                e.querySelector('p')?.classList.remove('underline');
            else
                e.querySelector('p')?.classList.add('underline');
        });
    }
</script>

<div class="w-full flex flex-row justify-between items-center py-4 px-8">
    <a href="/" class="inline-flex items-center">
        <img class="w-12 h-full" src="/logo.svg" alt="Logo">
        <h1 class="font-bebas-neue text-[50px] text-white tracking-[5px] ml-8">GRéGOIRE BIENDINé</h1>
    </a>

    <div class="inline-flex items-center gap-20">
        <div id="tabsContainer" bind:this={tabsContainer} class="inline-flex gap-20 relative font-bebas-neue-pro text-[40px] text-white uppercase">
            <a href="#aboutpage" on:click={setActiveTab} data-tabs="0"> <!-- About -->
                <p>{$t("home.topbar.tab1")}</p> 
            </a>
            <a href="/" on:click={setActiveTab} data-tabs="1"> <!-- CV -->
                <p>{$t("home.topbar.tab2")}</p>
            </a>
            <a href="/" on:click={setActiveTab} data-tabs="2"> <!-- Portfolio -->
                <p>{$t("home.topbar.tab3")}</p>
            </a>
            <a href="/" on:click={setActiveTab} data-tabs="3"> <!-- Contact -->
                <p>{$t("home.topbar.tab4")}</p>
            </a>
        </div>
    
        <DropdownLanguage/>
    </div>
</div>

<style lang="postcss">
    #tabsContainer p {
        @apply pointer-events-none underline-offset-4;
    }
    /* #tabs a:hover p {
        @apply opacity-100;
    } */
</style>