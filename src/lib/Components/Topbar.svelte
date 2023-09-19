<script lang="ts">
    import DropdownLanguage from "./DropdownLanguage.svelte";

    let tabsSlider: HTMLDivElement;

    function slideTabs(e: Event) {
        let tabNumber: number = Number((e.target as HTMLElement).dataset.tabs);
        tabsSlider.style.transform = `translateX(${tabNumber * 133}%)`;
    }
</script>

<div class="w-full flex flex-row justify-between items-center p-4">
    <a href="/" class="h-[64px]">
        <img class="h-full" src="/logo.svg" alt="Logo">
    </a>
    <div id="tabs" class="flex flex-row gap-8 relative">
        <div bind:this={tabsSlider} class="-z-10 w-24 h-10 absolute bg-gray-200 rounded-full transition-transform duration-300 ease-in-out"></div>
        <a href="/" on:click={slideTabs} data-tabs="0">
            <p>Projects</p>
        </a>
        <a href="/" on:click={slideTabs} data-tabs="1">
            <p>CV</p>
        </a>
        <a href="/" on:click={slideTabs} data-tabs="2">
            <p>Contact</p>
        </a>
    </div>
    <DropdownLanguage/>
</div>

<style lang="postcss">
    #tabs a {
        @apply w-24 h-10 flex justify-center items-center;
    }

    #tabs a p {
        @apply font-sans font-medium text-base text-gray-600 pointer-events-none opacity-90 transition-opacity duration-300;
    }

    #tabs a:hover p {
        @apply opacity-100;
    }
</style>