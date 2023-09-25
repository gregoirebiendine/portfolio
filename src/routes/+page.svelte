<script lang="ts">
    import { t } from '$lib/Translations/translations';
    import Topbar from "$lib/Components/Topbar.svelte";

    export let data;
</script>

<main class="w-[50%] h-screen mx-auto">
    <Topbar/>

    <div class="w-full mt-24 font-sans">
        <!-- Welcome -->
        <h1 class="inline-flex items-center gap-4 font-bold text-4xl" data-aos="fade-left">
            {$t("home.summary.welcome")}
            <picture>
                <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp" type="image/webp">
                <img class="w-10" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif" alt="🎉">
            </picture>
        </h1>

        <!-- Summary -->
        <div class="w-full justify-between inline-flex mt-8">
            <p class="text-lg text-gray-700" data-aos="fade-left" data-aos-delay="300">
                💼 {$t("home.summary.job")}
                <br>
                📍 {$t("home.summary.localisation")}
            </p>
            <p class="text-lg text-gray-700" data-aos="fade-left" data-aos-delay="500">
                🔥 {$t("home.summary.experience")}
                <br>
                🤝 {$t("home.summary.openwork")}
            </p>
        </div>

        <!-- Stats -->
        <div class="w-full inline-flex justify-between items-center mt-24">
            <div class="stats-wrapper bg-primary" data-aos="fade-up" data-aos-delay="800">
                <div class="stats-container">
                    <svg class="stroke-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75049 6.15675C7.75049 5.60441 7.30273 5.15665 6.7504 5.15665H3.7501C3.19776 5.15665 2.75 5.60441 2.75 6.15675V18.1579C2.75 18.7103 3.19776 19.158 3.7501 19.158H6.7504C7.30273 19.158 7.75049 18.7103 7.75049 18.1579" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.7509 5.15665H8.75059C8.19825 5.15665 7.75049 5.60441 7.75049 6.15675V18.1579C7.75049 18.7103 8.19825 19.158 8.75059 19.158H11.7509C12.3032 19.158 12.751 18.7103 12.751 18.1579V6.15675C12.751 5.60441 12.3032 5.15665 11.7509 5.15665Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.6139 4.85089L13.7185 5.63753C13.1855 5.78235 12.8708 6.33185 13.0156 6.86486L16.1622 18.4462C16.307 18.9792 16.8565 19.2939 17.3896 19.1491L20.2849 18.3625C20.8179 18.2176 21.1326 17.6681 20.9878 17.1351L17.8412 5.55379C17.6964 5.02077 17.1469 4.70607 16.6139 4.85089Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.2507 16.1578V15.1577" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.0515 15.8562L17.7915 14.8961" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.25025 16.1578V15.1577" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="">
                        <h3 class="text-primary">
                            {data.projects.length} projets
                        </h3>
                        <p>
                            en cours de développement
                        </p>
                    </div>
                </div>
            </div>

            <div class="stats-wrapper bg-secondary" data-aos="fade-down" data-aos-delay="1000">
                <div class="stats-container">
                    <svg class="stroke-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6806 5.0625H5.31944C3.90038 5.0625 2.75 6.21288 2.75 7.63194V18.4236C2.75 19.8427 3.90038 20.9931 5.31944 20.9931H18.6806C20.0996 20.9931 21.25 19.8427 21.25 18.4236V7.63194C21.25 6.21288 20.0996 5.0625 18.6806 5.0625Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.75 10.2014H21.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.1389 3.00696V7.11807" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.86111 3.00696V7.11807" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.37506 14.0555H8.40284" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.5972 14.0555H16.625" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.4862 14.0555H12.514" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.37506 17.1389H8.40284" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.5972 17.1389H16.625" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.4862 17.1389H12.514" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="">
                        <h3 class="text-secondary">
                            2 ans
                        </h3>
                        <p>
                            d'expérience en Freelance Web
                        </p>
                    </div>                  
                </div>
            </div>

            <div class="stats-wrapper bg-tertiary" data-aos="fade-up" data-aos-delay="1200">
                <div class="stats-container">
                    <svg class="stroke-tertiary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.132 15.4039C13.9898 15.4039 15.4958 13.8979 15.4958 12.0402C15.4958 10.1824 13.9898 8.67642 12.132 8.67642C10.2743 8.67642 8.76828 10.1824 8.76828 12.0402C8.76828 13.8979 10.2743 15.4039 12.132 15.4039Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.9834 15.094C20.5864 16.2329 19.9745 17.2853 19.181 18.1937L17.0571 17.7115C16.2517 18.4346 15.2945 18.9681 14.2559 19.2727L13.6819 21.3507C13.1438 21.4475 12.5983 21.4974 12.0517 21.5C11.3679 21.4999 10.6862 21.4228 10.0197 21.2703L9.41117 19.1236C8.50337 18.7897 7.66902 18.2828 6.95437 17.631L4.85347 18.1706C4.01977 17.1983 3.39458 16.0651 3.01662 14.8414L4.56646 13.1194C4.50763 12.7395 4.47692 12.3557 4.47462 11.9712C4.47515 11.4657 4.52902 10.9617 4.63535 10.4674L3.10846 8.87159C3.55167 7.62023 4.25608 6.4775 5.17493 5.51933L7.34471 6.05891C7.94202 5.57995 8.60757 5.19299 9.31932 4.91088L9.89335 2.78701C10.602 2.60229 11.3308 2.50589 12.0631 2.5C12.6484 2.50063 13.2325 2.55443 13.8081 2.66073L14.3592 4.77311C15.1898 5.04156 15.9668 5.45343 16.6553 5.99003L18.8365 5.42749C19.7177 6.31405 20.4124 7.36797 20.88 8.52718L19.3991 10.1344C19.6798 11.2356 19.7034 12.3865 19.4679 13.4982L20.9834 15.094Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="">
                        <h3 class="text-tertiary">
                            +10 technos
                        </h3>
                        <p>
                            apprises et maitrisées
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style lang="postcss">
    .stats-wrapper {
        @apply w-72 h-72 rounded-2xl pb-1;
    }

    .stats-container {
        @apply w-full h-full rounded-2xl flex flex-col justify-between items-start bg-gray-100 bg-stats bg-bottom bg-contain bg-no-repeat p-4;
    }

    .stats-container svg {
        @apply self-end w-8;
    }
    
    .stats-container h3 {
        @apply font-poppins font-black text-[40px];
    }
    
    .stats-container p {
        @apply mt-4 mb-2 font-poppins text-base text-gray-700;
    }
</style>
