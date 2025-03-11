<script>

export default {
  components: {
  },
  data() {
    return {
    }
  }
}

</script>

<template>

  
    <div class="row justify-content-between">
      <div class="col hero">
        <h2 class="mx-5">Benvenuto!</h2>
        <p class="mx-4">Questo è il mio portfolio, troverai dettagli sui miei progetti e il mio profilo professionale.</p>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="container my-5">
      <h3>Competenze tecniche: </h3>
      <div class="row my-5 gap-3">
        <div class="col d-flex flex-column card p-2">
          <h5 class="align-self-center">Front-End</h5>
          <ul class="d-flex flex-column gap-2">
            <li><i class="fa-brands fa-flutter"></i> Flutter.dart</li>
            <li><i class="fa-brands fa-square-js"></i> JavaScript </li>
            <li><i class="fa-brands fa-vuejs"></i> Vue.js </li>
            <li><i class="fa-brands fa-html5"></i> HTML </li>
            <li><i class="fa-brands fa-css3"></i> CSS </li>
  
          </ul>
        </div>
        <div class="col d-flex flex-column card p-2">
          <h5 class="align-self-center">Back-End</h5>
          <ul class="d-flex flex-column gap-2">
            <li><i class="fa-brands fa-php"></i> PHP</li>
            <li><i class="fa-brands fa-laravel"></i> Laravel.php</li>
            <li><i class="fa-solid fa-database"></i> SQL</li>
          </ul>
        </div>
      </div>

    </div>



</template>

<style>

.hero{
  background-color: teal;
  color: wheat;
  margin-top: 12px;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  padding: 4px;
}
</style>