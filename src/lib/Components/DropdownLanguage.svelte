<script lang="ts">
    import { clickOutside } from '$lib/Events/ClickOutside';
    import { flags } from '$lib/Translations/flags';
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import type { i18n } from "i18next";

    const i18n: Writable<i18n> = getContext("i18n");

    let dropdownPanel: HTMLDivElement;

    function openDropdownPanel() {
        if (dropdownPanel.classList.contains('hidden'))
            dropdownPanel.classList.remove('hidden');
    }

    function closeDropdownPanel() {
        if (!dropdownPanel.classList.contains('hidden'))
            dropdownPanel.classList.add('hidden');
    }

    function selectLocale(e: Event) {
        const selection = String((e.target as HTMLElement).dataset.locale);

        $i18n.changeLanguage(selection, (err) => {
            if (err) return console.log('something went wrong loading', err);
        });

        window.localStorage.setItem('lang', selection);
    }
</script>

<div class="relative">
    <button on:click={openDropdownPanel} use:clickOutside={closeDropdownPanel} class="inline-flex items-center py-2.5 px-4 text-base font-bebas-neue-pro text-white text-center select-none border border-white rounded-lg outline-none focus:ring-4 focus:ring-gray-700">
        <img src={flags[$i18n.language]} alt="flag" class="aspect-2/1 mr-2 h-3">
        {$i18n.language?.toLocaleUpperCase()}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="shrink-0 w-3 h-3 ml-2" role="img" viewBox="0 0 10 6">
            <path fill="currentColor" d="M5.012 6a1 1 0 0 1-.707-.292l-4-3.992A.998.998 0 0 1 1.395.08a1 1 0 0 1 .324.224L5.012 3.59 8.305.305A1.001 1.001 0 0 1 10 1.014a.997.997 0 0 1-.28.702l-4 3.992A1.001 1.001 0 0 1 5.011 6Z"></path>
        </svg>
    </button>

    <div bind:this={dropdownPanel} class="w-full hidden rounded-lg border border-white absolute top-full left-0 select-none">
        {#each ['en', 'fr'] as l}
            <button on:click={selectLocale} class="w-full py-2.5 px-4 inline-flex justify-center items-center outline-none hover:opacity-70" data-locale={l}>
                <img src={flags[l]} alt="flag" class="aspect-2/1 mr-2 h-3 pointer-events-none">
                <p class="text-base font-bebas-neue-pro text-white text-center pointer-events-none">{l?.toLocaleUpperCase()}</p>
            </button>
        {/each}
    </div>
</div>
