<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import type { i18n } from "i18next";

    const i18n: Writable<i18n> = getContext("i18n");
</script>

<div id="about" class="w-full h-screen flex flex-col justify-center items-center gap-36">
    <div class="flex flex-row items-center gap-36">
        <img src="/home-visu.svg" alt="Computer" data-aos="fade-up">
        <div data-aos="fade-down" data-aos-delay="200">
            <h1 class="font-bebas-neue text-white text-[150px] tracking-[3px] leading-none">FREELANCE</h1>
            <h2 class="font-bebas-neue-pro text-white text-[100px] tracking-[25px] leading-none">FRONT-END</h2>
        </div>
    </div>
</div>