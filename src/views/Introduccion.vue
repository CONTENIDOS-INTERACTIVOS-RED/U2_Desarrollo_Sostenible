<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    p.mb-4 El desarrollo sostenible es un enfoque integral que busca un equilibrio entre el crecimiento económico, la equidad social y la protección del medio ambiente. La segunda unidad de este curso, titulada “Dimensiones del desarrollo sostenible,” tiene como propósito profundizar en las distintas dimensiones que conforman este concepto y cómo se interrelacionan para lograr un desarrollo armónico y duradero. Esta unidad es crucial para el curso, debido a que proporciona al estudiante una comprensión detallada de las facetas económica, social y ambiental, del desarrollo sostenible y su importancia en la creación de estrategias efectivas, para enfrentar los desafíos contemporáneos.
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Al finalizar esta unidad, el estudiante estará en capacidad de analizar y evaluar cada una de las dimensiones del desarrollo sostenible y entender cómo interactúan entre sí.
        .bg-rojo.p-4.mb-4
          span Esta competencia le permitirá aplicar un enfoque multidimensional en la toma de decisiones y en la formulación de propuestas que promuevan prácticas sostenibles. 
        span La relevancia de este contenido radica en su aplicación en múltiples sectores y disciplinas, preparando al estudiante para reconocer la importancia de integrar estas dimensiones en su futuro desempeño profesional y en la planificación de iniciativas, que buscan un impacto positivo en la sociedad y el entorno.

      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src="@/assets/curso/unidad/img-1.png" alt="Texto que describa la imagen")

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src="@/assets/curso/unidad/img-2.png" alt="Texto que describa la imagen")
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 La estructura de esta unidad está diseñada para guiar al estudiante a través de un análisis profundo de cada dimensión:
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Se da inicio con una revisión de la dimensión económica, abordando cómo el crecimiento puede ser inclusivo y respetuoso con el entorno.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Seguidamente, se explora la dimensión social, destacando la importancia de la equidad, la inclusión y el bienestar colectivo.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Para finalizar, se estudia la dimensión ambiental, enfocándose en las estrategias de conservación y el uso sostenible de los recursos.
        p.mb-4 Las actividades de la unidad, incluirán estudios de casos, análisis comparativos y foros de discusión que fomentarán una comprensión práctica y reflexiva de los conceptos.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
