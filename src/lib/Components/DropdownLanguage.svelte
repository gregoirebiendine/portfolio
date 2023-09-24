<script lang="ts">
    import { clickOutside } from '$lib/Events/ClickOutside';
    import { locale, locales } from '$lib/Translations/translations';
    import { flags } from '$lib/Translations/langs/flags';

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
        $locale = selection;
        window.localStorage.setItem('lang', selection);
    }
</script>

<div class="relative">
    <button on:click={openDropdownPanel} use:clickOutside={closeDropdownPanel} class="inline-flex items-center py-2.5 px-4 text-sm font-sans font-medium text-center select-none text-gray-500 bg-gray-100 border border-gray-300 rounded-lg outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-100">
        <img src={flags[$locale]} alt="flag" class="aspect-2/1 mr-2 h-3">
        {$locale?.toLocaleUpperCase()}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="shrink-0 w-3 h-3 ml-2" role="img" viewBox="0 0 10 6">
            <path fill="currentColor" d="M5.012 6a1 1 0 0 1-.707-.292l-4-3.992A.998.998 0 0 1 1.395.08a1 1 0 0 1 .324.224L5.012 3.59 8.305.305A1.001 1.001 0 0 1 10 1.014a.997.997 0 0 1-.28.702l-4 3.992A1.001 1.001 0 0 1 5.011 6Z"></path>
        </svg>
    </button>

    <div bind:this={dropdownPanel} class="w-full hidden rounded-lg bg-gray-100 border border-gray-300 absolute top-full left-0 select-none">
        {#each locales.get() as l}
            <button on:click={selectLocale} class="w-full py-2.5 px-4 inline-flex justify-center items-center outline-none hover:bg-gray-200" data-locale={l}>
                <img src={flags[l]} alt="flag" class="aspect-2/1 mr-2 h-3 pointer-events-none">
                <p class="text-sm font-sans font-medium text-center text-gray-500 pointer-events-none">{l?.toLocaleUpperCase()}</p>
            </button>
        {/each}
    </div>
</div>
