<script>
    import { onMount, setContext } from "svelte";
    import getI18nStore from "$lib/Translations/i18n";
    import AOS from "aos";
    import "../app.css";
  
    setContext('i18n', getI18nStore());

    onMount(() => {
        AOS.init();
    });
</script>
  
<slot />