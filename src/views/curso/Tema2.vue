<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Dimensión social'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .col-12.col-xl-9(data-aos="fade-right")
        p.mb-4 La dimensión social es un componente fundamental del desarrollo sostenible, dado que aborda los aspectos relacionados con el bienestar humano, la equidad y la justicia social. 
        span Esta dimensión se centra en mejorar la calidad de vida de las personas, garantizar el acceso equitativo a recursos y oportunidades, y promover sociedades inclusivas y cohesionadas. El desarrollo sostenible no puede lograrse sin considerar el impacto de las políticas y acciones en la vida de las personas, especialmente de aquellas que se encuentran en situaciones de vulnerabilidad (Artaraz, 2002).

      .col-3.d-none.d-xl-block(data-aos="fade-left")
        img(src="@/assets/curso/unidad/img-25.png" alt="Texto que describa la imagen")

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src="@/assets/curso/unidad/img-26.png" alt="Texto que describa la imagen")
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 La dimensión social reconoce que el progreso económico y la protección del medio ambiente deben ir acompañados de avances en el ámbito social. 
        p.mb-4 Esto implica abordar las desigualdades existentes, eliminar la discriminación y garantizar que todas las personas, independientemente de su género, edad, origen étnico, condición socioeconómica o cualquier otra característica, puedan participar plenamente en la sociedad y beneficiarse del desarrollo (Artaraz, 2002).
        .bg-rojo.p-4
          span <strong>La promoción de la igualdad, la inclusión y la reducción de la pobreza</strong>, son pilares centrales en esta dimensión. Estos elementos están interrelacionados y son esenciales para construir sociedades justas y sostenibles.

    p.mb-4 A continuación, se exploran en detalle cada uno de estos componentes y su relevancia en el contexto del desarrollo sostenible. 

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Igualdad

    p.mb-4 Para conocer qué es la igualdad, lo invitamos a ver el siguiente video.

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        figure
          .video
            <iframe width="1903" height="748" src="https://www.youtube.com/embed/ukG1Lqpyv64" title="La planificación para la comercialización" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   
    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Inclusión

    p.mb-4 Para introducirnos en el estudio de este tema, conozcamos algunos conceptos importantes.

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="¿Qué es?")
            p Inclusión se refiere al proceso de integrar a todas las personas en la vida social, económica y política, asegurando que puedan participar plenamente y beneficiarse del desarrollo. La inclusión va más allá de la mera ausencia de discriminación; implica crear entornos y oportunidades que permitan a todas las personas, especialmente a aquellas en situaciones de vulnerabilidad, desarrollar su potencial y contribuir activamente en la sociedad.
          .div(titulo="Inclusión social")
            p La inclusión social busca reducir las barreras que enfrentan ciertos grupos, como personas con discapacidad, minorías étnicas, migrantes, personas mayores y otros colectivos que pueden estar marginados. Esto implica adaptar las políticas, las infraestructuras y los servicios, para que sean accesibles y pertinentes para todos.
          .div(titulo="Ámbito educativo")
            p La inclusión en el ámbito educativo, significa proporcionar una educación de calidad que sea accesible y relevante para todos los estudiantes, independientemente de sus capacidades, antecedentes o necesidades específicas. Esto incluye adaptar los métodos de enseñanza, los materiales educativos y las infraestructuras para atender a la diversidad de estudiantes. Una educación inclusiva no solo beneficia a los estudiantes que enfrentan barreras, sino que también enriquece el aprendizaje de todos al promover valores de respeto y comprensión.
          .div(titulo="Ámbito laboral")
            p La inclusión en el ámbito laboral, implica promover la diversidad en el lugar de trabajo y asegurar que todas las personas tengan oportunidades de empleo dignas. Esto puede lograrse a través de políticas de contratación inclusivas, programas de formación y desarrollo, y la creación de entornos laborales accesibles. La inclusión laboral no solo es justa, sino que también aporta beneficios económicos, al aprovechar el talento y las habilidades de una fuerza laboral diversa.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Participación ciudadana y política")
            p La inclusión es fundamental en la participación ciudadana y política. Garantizar que todas las personas puedan ejercer sus derechos civiles y políticos, como el derecho al voto, la libertad de expresión y la participación en la toma de decisiones, fortalece la democracia y asegura que las políticas y programas, reflejen las necesidades y aspiraciones de toda la población.
          .div(titulo="Accesibilidad")
            p La accesibilidad es un componente clave de la inclusión. Esto implica diseñar entornos físicos, información y comunicación que sean utilizables por todas las personas, incluidas aquellas con discapacidades. La implementación de normas de accesibilidad en edificios públicos, transporte, tecnologías de la información y la comunicación, es esencial para eliminar barreras y facilitar la participación plena de todas las personas en la sociedad.
          .div(titulo="Inclusión financiera")
            p La inclusión financiera es otro aspecto importante. Muchas personas, especialmente en zonas rurales o marginadas, carecen de acceso a servicios financieros básicos, como cuentas bancarias, créditos o seguros. Esto limita su capacidad para ahorrar, invertir y protegerse contra riesgos. Promover la inclusión financiera, implica desarrollar productos y servicios adaptados a las necesidades de estos grupos y facilitar su acceso, a través de canales apropiados.

    .row.mb-4
      .col-10.mx-auto(data-aos="fade-up")
        .row.mb-4
          .d-flex.align-items-center
            div.d-flex.align-items-center.bg-verde.px-3.py-4
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-29.svg', alt='Texto que describa la imagen')
              p.pe-xl-5.mb-0 La promoción de la inclusión requiere un enfoque multidimensional y la colaboración de múltiples actores, incluyendo gobiernos, sector privado, sociedad civil y comunidades. Es esencial implementar políticas integrales que aborden las causas subyacentes de la exclusión y promuevan la participación activa de los grupos marginados, en el diseño e implementación de soluciones.

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Reducción de la pobreza

    p.mb-4 La reducción de la pobreza es uno de los objetivos más urgentes y fundamentales del desarrollo sostenible. La pobreza no solo se refiere a la falta de ingresos, sino también a la carencia de oportunidades y capacidades para llevar una vida digna y plena. Las personas que viven en la pobreza, frecuentemente enfrentan múltiples privaciones, incluyendo acceso limitado a la educación, la salud, la vivienda adecuada, el agua potable y el saneamiento.
    p.mb-4 Abordar la pobreza requiere estrategias integrales que consideren sus diversas causas y manifestaciones:

    .row.position-relative.mb-5.py-4.bg-azul.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Crecimiento económico
              p Una de las acciones clave es promover el crecimiento económico inclusivo y sostenible. Esto implica generar oportunidades de empleo decente que permitan a las personas obtener ingresos suficientes para satisfacer sus necesidades básicas y mejorar su calidad de vida. Las políticas económicas deben enfocarse en sectores con potencial, para generar empleo y apoyar a las pequeñas y medianas empresas, motores claves de la creación de empleo.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Educación
              p Invertir en educación, es esencial para romper el ciclo de la pobreza. La educación brinda a las personas las habilidades y conocimientos necesarios para acceder a mejores oportunidades laborales y participar activamente en la sociedad. Garantizar el acceso a una educación de calidad, desde la primera infancia hasta niveles superiores, es fundamental para empoderar a las personas y promover la movilidad social.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Servicios de salud
              p El acceso a servicios de salud de calidad, es crucial. Las personas en situación de pobreza suelen tener una salud más precaria y enfrentan obstáculos para acceder a la atención médica. Implementar sistemas de salud universales y asequibles, ayuda a prevenir enfermedades, mejorar el bienestar y reducir gastos en salud, que pueden agravar la situación de pobreza.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Protección social
              p La protección social es otra herramienta eficaz para reducir la pobreza y la vulnerabilidad. Programas como transferencias monetarias, pensiones no contributivas y seguros de salud, proporcionan un apoyo básico a personas y familias en necesidad. Estos programas ayudan a asegurar un nivel mínimo de bienestar y pueden proteger a las personas frente a crisis económicas, desastres naturales u otras adversidades.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Infraestructuras y servicios
              p Es fundamental mejorar el acceso a vivienda adecuada y servicios básicos como agua potable y saneamiento. La inversión en infraestructuras y servicios en áreas urbanas, marginales y zonas rurales, contribuye a reducir las desigualdades y a promover un desarrollo equilibrado.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Desigualdades de género
              p Es importante abordar las desigualdades de género en la lucha contra la pobreza. Las mujeres y las niñas, generalmente enfrentan barreras que limitan su acceso a la educación, el empleo y los recursos productivos. Empoderar a las mujeres y garantizar sus derechos, es esencial para reducir la pobreza y promover el desarrollo sostenible.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-verde.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-36.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La participación de las comunidades es fundamental en la planificación y ejecución de estrategias de reducción de la pobreza. Las soluciones deben adaptarse a los contextos locales y aprovechar el conocimiento y las capacidades de las comunidades. Una gobernanza inclusiva y la transparencia en la gestión de los recursos públicos fortalecen la confianza y la eficacia de las intervenciones. 

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            // Tema 2.1
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/105522") Ramos Ramos, P. (Coord.). (2018). Género e igualdad de oportunidades. Editorial ICB.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/60902") Barrère, M. Á. (2006). Igualdad de oportunidades e igualdad de género: una relación a debate. Dykinson.

            // Tema 2.2
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/70993") Politécnico Grancolombiano, I. U. (2013). Inclusión: equidad y desigualdad social. Editorial Politécnico Grancolombiano.

            // Videos
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=ZqgqGap4I-I") Banco Interamericano de Desarrollo. (2018). Inclusión y democracia: ¿cómo impulsar políticas públicas inclusivas en América Latina? [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=PQveU35dxIE") UN Etxea - Asociación del País Vasco para la UNESCO. (2018). ODS 1 | Fin de la pobreza [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
