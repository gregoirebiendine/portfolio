<script lang="ts">
    import { t } from '$lib/Translations/translations';

    let textExpand: HTMLDivElement;
    let svgExpand: SVGElement;

    function mouseEnter(e: Event) {
        textExpand.style.transform = "translateX(-50%)";
        svgExpand.style.transform = "translateX(300%)";
        setTimeout(() => {
            textExpand.style.setProperty('--op', "1");
        }, 300);
    }

    function mouseLeave() {
        textExpand.style.setProperty('--op', "0");
        setTimeout(() => {
            textExpand.style.transform = "translateX(0%)";
            svgExpand.style.transform = "translateX(0%)";
        }, 300);
    }
</script>

<div class="w-full h-full flex flex-col justify-center items-center gap-36">
    <div class="flex flex-row items-center gap-36">
        <img src="/home-visu.svg" alt="Computer" data-aos="fade-up">
        <div data-aos="fade-down" data-aos-delay="200">
            <h1 class="font-bebas-neue text-white text-[150px] tracking-[3px] leading-none">FREELANCE</h1>
            <h2 class="font-bebas-neue-pro text-white text-[100px] tracking-[25px] leading-none">FRONT-END</h2>
        </div>
    </div>
    <a href="#aboutpage" class="inline-flex items-center gap-4 mb-4 relative" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
        <p id="expand" bind:this={textExpand} class="font-bebas-neue-pro text-white text-[30px] tracking-[5px] relative leading-none uppercase transition-transform duration-300">{$t('home.discover')}</p>
        <svg class="w-5 transition-transform duration-300" bind:this={svgExpand} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.791 11.803">
            <path id="Tracé_3280" data-name="Tracé 3280" d="M4,8.417l8.63,8.63a2.638,2.638,0,0,0,3.7,0l8.63-8.63" transform="translate(-2.586 -7.003)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
    </a>
</div>

<style lang="postcss">
    @keyframes fluid {
        0%, 100% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(-1%);
        }
        75% {
            transform: translateY(1%);
        }
    }

    img {
        animation: fluid 10s ease-in-out 0s infinite;
    }

    #expand::after {
        content: '\00a0MY\00a0WORK';
        transition: all 0.5s;
        position: absolute;
        opacity: var(--op, 0);
    }
</style>
