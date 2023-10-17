<script lang="ts">
    import DiscoverButton from "./DiscoverButton.svelte";

    let img: HTMLImageElement;

    function minMaxRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function mouseEnter() {
        img.style.transform = `translate(${minMaxRandom(-5, 5)}%, ${minMaxRandom(-5, 5)}%)`;
    }

    function mouseLeave() {
        img.style.transform = 'translate(0,0)';
    }

</script>

<section class="w-full h-screen flex flex-col justify-center items-center relative gap-36">
    <div class="flex flex-row items-center gap-36">
        <img bind:this={img} class="w-[40%] transition-transform duration-200" src="/home-visu.svg" alt="Computer" data-aos="fade-up" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
        <div data-aos="fade-down" data-aos-delay="200">
            <h1 class="font-bebas-neue text-white text-[150px] tracking-[3px] leading-none">FREELANCE</h1>
            <h2 class="font-bebas-neue-pro text-white text-[100px] tracking-[25px] leading-none">FRONT-END</h2>
        </div>
    </div>

    <DiscoverButton/>
</section>