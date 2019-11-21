<template>
  <div class="home">
        <!--  <p>https://www.pixelmade.com.br/clientes/</p> -->
            <div id="carouselExampleControls" class="carousel flex-display" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active background-shampoo">
                  <div class="container flex-display" style="align-items: center;  padding: 60px 25px;">
                      <!-- <img class="img-shampoo" src="/src/assets/instantshampoos.png" alt="First slide"> -->
                  </div>
                </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .home{
    width: 100%;
    height: 60vh;
  }
  .background-shampoo{
    background-image: url('../assets/instant.png');
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat, repeat;
    background-size: cover;
  }

  .img-shampoo{
    max-height: 100%;
    width: auto;
  }

  .flex-display {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  @media (max-width: 450px) {

    .img-shampoo{
      width: inherit;
    }
  }

</style>
