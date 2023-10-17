<script lang="ts">
    import { scrollToPage } from '$lib/Utils/PageBehavior';
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import type { i18n } from "i18next";

    const i18n: Writable<i18n> = getContext("i18n");

    let textExpand: HTMLDivElement;
    let spanExpand: HTMLSpanElement;
    let svgExpand: SVGElement;

    function mouseEnter() {
        textExpand.style.transform = `translateX(-${spanExpand.getBoundingClientRect().width / 2}px)`;
        svgExpand.style.transform = `translateX(${spanExpand.getBoundingClientRect().width / 2}px)`;

        setTimeout(() => {
            spanExpand.classList.remove('opacity-0');
        }, 200);
    }

    function mouseLeave() {
        spanExpand.classList.add('opacity-0');

        setTimeout(() => {
            textExpand.style.transform = "translateX(0px)";
            svgExpand.style.transform = "translateX(0px)";
        }, 300);
    }
</script>

<button class="inline-flex items-center gap-4 mb-4 absolute bottom-4" on:click={() => scrollToPage(null, "about")} on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
    <p bind:this={textExpand} class="font-bebas-neue-pro text-white text-[30px] tracking-[5px] relative leading-none uppercase transition-transform duration-300">
        {$i18n.t('discover1')}
        <span bind:this={spanExpand} class="absolute opacity-0 transition-opacity duration-500">{$i18n.t('discover2')}</span>
    </p>
    <svg class="w-5 transition-transform duration-300" bind:this={svgExpand} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.791 11.803">
        <path id="Tracé_3280" data-name="Tracé 3280" d="M4,8.417l8.63,8.63a2.638,2.638,0,0,0,3.7,0l8.63-8.63" transform="translate(-2.586 -7.003)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </svg>
</button>