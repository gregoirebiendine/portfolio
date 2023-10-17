<script lang="ts">
    import DropdownLanguage from "./DropdownLanguage.svelte";
    import { scrollToPage } from '$lib/Utils/PageBehavior';
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import type { i18n } from "i18next";

    const i18n: Writable<i18n> = getContext("i18n");
</script>

<div class="w-full flex flex-row justify-between items-center fixed py-2 px-8 z-10 bg-graybg">
    <a href="/" class="inline-flex items-center">
        <img class="w-10 h-full" src="/logo.svg" alt="Logo">
        <h1 class="font-bebas-neue text-[50px] text-white tracking-[5px] ml-8">GRéGOIRE BIENDINé</h1>
    </a>

    <div class="inline-flex items-center gap-20">
        <div id="tabsContainer" class="inline-flex gap-20">
            <button on:click={scrollToPage} data-tabs="about">
                <p>{$i18n.t("topbar.tab1")}</p> 
            </button>
            <button on:click={scrollToPage} data-tabs="cv">
                <p>{$i18n.t("topbar.tab2")}</p>
            </button>
            <button on:click={scrollToPage} data-tabs="porfolio">
                <p>{$i18n.t("topbar.tab3")}</p>
            </button>
            <button on:click={scrollToPage} data-tabs="contact">
                <p>{$i18n.t("topbar.tab4")}</p>
            </button>
        </div>
    
        <DropdownLanguage/>
    </div>
</div>

<style lang="postcss">
    #tabsContainer p {
        @apply pointer-events-none underline-offset-4 font-bebas-neue-pro text-[40px] text-white uppercase;
    }

    #tabsContainer button {
        @apply transition-opacity duration-300;
    }

    #tabsContainer button:hover {
        @apply opacity-80;
    }
</style>