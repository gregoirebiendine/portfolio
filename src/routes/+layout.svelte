<script>
    import AOS from "aos";
    import "../app.css";
    import { onMount } from "svelte";

    onMount(() => {
      AOS.init();
    });
</script>
  
<slot />