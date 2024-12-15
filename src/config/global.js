export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad: 'Dimensiones del desarrollo sostenible',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Dimensión ambiental: conservación de los recursos naturales y cambio climático',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conservación de los recursos naturales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cambio climático',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Dimensión social',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Igualdad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Inclusión',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Reducción de la pobreza',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Dimensión económica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Desarrollo económico responsable',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Sostenibilidad financiera',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Banco Mundial. (2013). La inclusión importa: El fundamento para la prosperidad compartida. Banco Mundial.',
      link: '',
    },
    {
      referencia:
        'Banco Mundial. (2018). La pobreza y la prosperidad compartida 2018: Armando el rompecabezas de la pobreza. Banco Mundial.',
      link: '',
    },
    {
      referencia:
        'Corporación Financiera Internacional (IFC). (2012). Normas de Desempeño sobre Sostenibilidad Ambiental y Social. IFC.',
      link: '',
    },
    {
      referencia:
        'Departamento de Asuntos Económicos y Sociales de las Naciones Unidas (UNDESA). (2016). Informe sobre la Situación Social Mundial 2016: No dejar a nadie atrás, el imperativo del desarrollo inclusivo. Naciones Unidas.',
      link: '',
    },
    {
      referencia:
        'Foro Económico Mundial. (2020). Informe Global de la Brecha de Género 2020. FEM.',
      link: '',
    },
    {
      referencia:
        'Iniciativa Financiera del Programa de las Naciones Unidas para el Medio Ambiente (UNEP FI). (2016). Principios para una Financiación de Impacto Positivo. UNEP FI.',
      link: '',
    },
    {
      referencia:
        'Intergovernmental Panel on Climate Change (IPCC). (2021). Cambio climático 2021: Bases físicas. Cambridge University Press.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2015). Transformar nuestro mundo: La Agenda 2030 para el Desarrollo Sostenible. Asamblea General de las Naciones Unidas.',
      link: '',
    },
    {
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos (OCDE). (2011). Hacia un crecimiento verde. OCDE.',
      link: '',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Desarrollo (PNUD). (2019). Informe sobre Desarrollo Humano 2019: Más allá del ingreso, más allá de los promedios, más allá de hoy. PNUD.',
      link: '',
    },
    {
      referencia:
        'United Nations Environment Programme (UNEP). (2019). Perspectivas del Medio Ambiente Mundial 6: Planeta sano, gente sana. UNEP.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Adaptación',
      significado:
        'Proceso mediante el cual las personas, comunidades y sistemas naturales ajustan sus comportamientos y estructuras para enfrentar y minimizar los efectos adversos del cambio climático, reduciendo la vulnerabilidad y aumentando la resiliencia.',
    },
    {
      termino: 'Degradación Ambiental',
      significado:
        'Deterioro del medio ambiente debido a actividades humanas que causan daños en los ecosistemas, pérdida de biodiversidad y disminución de la calidad del aire, el agua y el suelo. Incluye fenómenos como la contaminación, la deforestación y la sobreexplotación de recursos.',
    },
    {
      termino: 'Deforestación',
      significado:
        'Proceso de eliminación o destrucción de áreas forestales, generalmente causado por la tala indiscriminada, la expansión agrícola y el desarrollo urbano. La deforestación conduce a la pérdida de hábitats, afecta el ciclo del agua y contribuye al cambio climático.',
    },
    {
      termino: 'Economía Baja en Carbono',
      significado:
        'Modelo económico que busca reducir las emisiones de gases de efecto invernadero mediante el uso eficiente de la energía y la adopción de fuentes de energía limpias y renovables. Promueve prácticas sostenibles en todos los sectores para combatir el cambio climático.',
    },
    {
      termino: 'Exclusión Social',
      significado:
        'Situación en la que individuos o grupos son marginados y no pueden participar plenamente en la sociedad debido a factores como la pobreza, la discriminación o el acceso limitado a servicios básicos.',
    },
    {
      termino: 'Gases de Efecto Invernadero',
      significado:
        'Compuestos químicos en la atmósfera, como el dióxido de carbono (CO₂), metano (CH₄) y óxido nitroso (N₂O), que atrapan el calor del sol y provocan el calentamiento global. Sus emisiones provienen principalmente de actividades humanas.',
    },
    {
      termino: 'Huella de Carbono',
      significado:
        'Medida del total de emisiones de gases de efecto invernadero producidas directa o indirectamente por una persona, organización, evento o producto. Es un indicador clave para evaluar el impacto ambiental y diseñar estrategias de reducción de emisiones.',
    },
    {
      termino: 'Innovación Tecnológica',
      significado:
        'Desarrollo y aplicación de nuevas ideas, métodos y tecnologías que mejoran productos, procesos o servicios. Es fundamental para abordar desafíos ambientales y sociales y para impulsar el desarrollo económico responsable.',
    },
    {
      termino: 'Justicia Social',
      significado:
        'Principio que promueve una distribución equitativa de recursos, oportunidades y derechos dentro de una sociedad. Busca eliminar las desigualdades y garantizar que todas las personas puedan participar plenamente en la vida económica, social y política.',
    },
    {
      termino: 'Mitigación',
      significado:
        'Acciones y estrategias dirigidas a reducir o limitar las emisiones de gases de efecto invernadero, con el objetivo de minimizar el alcance y los impactos del cambio climático. Incluye la transición a energías renovables y la mejora de la eficiencia energética.',
    },
    {
      termino: 'Participación Ciudadana',
      significado:
        'Involucramiento activo de las personas en los procesos de toma de decisiones y en la vida pública. Fortalece la democracia y asegura que las políticas y programas reflejen las necesidades y aspiraciones de la población.',
    },
    {
      termino: 'Protección Social',
      significado:
        'Conjunto de políticas y programas diseñados para reducir la pobreza y la vulnerabilidad, proporcionando asistencia y apoyo a individuos y familias en situaciones de necesidad. Incluye transferencias monetarias, seguros de salud y programas de empleo.',
    },
    {
      termino: 'Recursos Naturales',
      significado:
        'Elementos proporcionados por la naturaleza, como agua, aire, minerales, bosques y fauna, que son esenciales para la supervivencia y el desarrollo humano. Su gestión sostenible es crucial para mantener el equilibrio ecológico.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'Capacidad de un sistema, comunidad o individuo para resistir, adaptarse y recuperarse de situaciones adversas, como desastres naturales o impactos del cambio climático, manteniendo sus funciones esenciales y estructura.',
    },
    {
      termino: 'Seguridad Alimentaria',
      significado:
        'Situación en la cual todas las personas tienen acceso físico, social y económico a alimentos suficientes, seguros y nutritivos para satisfacer sus necesidades dietéticas y preferencias alimenticias para una vida activa y saludable.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
