<script>
	import { page } from '$app/stores';
</script>

<div class="w-full h-screen flex flex-col justify-center items-center">
    <picture>
        <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1fae0/512.webp" type="image/webp">
        <img class="w-32" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1fae0/512.gif" alt="🫠">
    </picture>

    <h1 class="font-sans font-bold text-2xl mt-8 mb-4">Oops, something went wrong...</h1>
    <h2 class="font-sans text-3xl">{$page.status} {$page.error?.message}</h2>
</div>