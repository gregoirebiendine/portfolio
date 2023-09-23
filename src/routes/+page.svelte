<script lang="ts">
    import { t } from '$lib/translations';
    import Topbar from "$lib/Components/Topbar.svelte";

</script>

<main class="w-[50%] h-screen mx-auto">
    <Topbar/>

    <div class="w-full mt-24 font-sans">
        <h1 class="inline-flex items-center gap-4 font-bold text-4xl">
            {$t("home.summary.welcome")}
            <picture>
                <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp" type="image/webp">
                <img class="w-10" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif" alt="🎉">
            </picture>
        </h1>
        <div class="w-full justify-between inline-flex">
            <p class="mt-4 text-lg text-gray-700">
                💼 {$t("home.summary.job")}
                <br>
                📍 {$t("home.summary.localisation")}
            </p>
            <p class="mt-4 text-lg text-gray-700">
                🤝 {$t("home.summary.openwork")}
            </p>
        </div>
    </div>
</main>
