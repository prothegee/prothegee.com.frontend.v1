<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
</svelte:head>
<script lang="ts">
    import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
    import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
    import "../../../css/main.css";


    import MainNavigation from "../../shared/MainNavigation.svelte";
    import MainFooter from "../../shared/MainFooter.svelte";




    // test #1
</script>








<MainNavigation/>




<main class="container font-small">
    <section class="section1">
        <h3>Whereas disregard and contempt for human rights have resulted</h3>
    </section>




    <!-- section2 -->
    <section class="section2">
        <div class="toast align-items-center text-bg-primary border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
              <div class="toast-body">
                    Hello, world! This is a toast message.
              </div>
              <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
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