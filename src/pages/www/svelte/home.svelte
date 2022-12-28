<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
</svelte:head>
<script lang="ts">
    import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
    import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
    import "../../../css/main.css";


    import MainNavigation from "../../shared/MainNavigation.svelte";
    import MainFooter from "../../shared/MainFooter.svelte";


    import CComonJs from "../../../libs/CComonJs";
    import CConstPub from "../../../libs/CConstPub";
    import CUrlPages from "../../../libs/CUrlPages";




    //#region constant
    const ComonJs = new CComonJs();
    const ConstPub = new CConstPub();
    const UrlPages = new CUrlPages();
    //#endregion
</script>








<MainNavigation/>




<main class="container font-small">
    <section class="section1">
        <h3>Whereas disregard and contempt for human rights have resulted</h3>
    </section>




    <!-- section2 -->
    <section class="section2">
        
    </section>
</main>






<MainFooter/>








<style>
    main
    {
        margin-top: 6rem;
        margin-bottom: 6rem;
    }
</style>