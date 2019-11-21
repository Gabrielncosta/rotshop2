<template>
  <footer class="font-small blue">
    <div class="conteudo">
      <div class="text-center">
        <img src="../assets/novabelle.png" class="img-fluid img-novabelle" alt="" style="width: 300px;">
      </div>
      <div class="footer-copyright text-center novabelle" style="color: white;">© 2019. Rotshop – Agência de Marketing Digital. Todos os direitos reservados.
        <p class="address">R. Virgílio de Carvalho Neves Neto, 996 - Res. e Comercial Palmares - Ribeirão Preto - SP, 14092-440</p>
      </div>
    </div>
  </footer>
</template>

<script>

export default {

}
</script>

<style scoped>

  footer {
    background-color: #616161;
    width: 100%;
    height: 30vh;
    padding: 10px 30px;
  }

  .conteudo{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .novabelle{
    padding: 10px 0;
  }

  .img-novabelle{
    margin: 10px;
  }

  .address {
    color: rgba(255,255,255, 0.5);
    margin: 0;
  }

  @media (max-width: 450px) {

    .img-novabelle{
      width: 230px!important;
    }

    .novabelle{
      font-size: 14px;
    }
  }

  @media (max-width: 360px) {

    .img-novabelle{
      width: 210px!important;
    }

    .novabelle{
      font-size: 12px;
    }

    .address {
      font-size: 12px;
    }
  }


</style>
