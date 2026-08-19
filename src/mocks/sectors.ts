export interface SectorFAQ {
  question: string;
  answer: string;
}

export interface SectorSolution {
  title: string;
  description: string;
  slug: string;
}

export interface SectorDetail {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  title: string;
  tagline: string;
  heroImage: string;
  intro: string[];
  solutions: SectorSolution[];
  benefits: string[];
  useCases: string[];
  process: { title: string; description: string }[];
  faqs: SectorFAQ[];
}

export const sectorDetails: SectorDetail[] = [
  {
    slug: "drones-construccion",
    seoTitle: "Drones para construcción en España | AVANZA DRONE",
    seoDescription:
      "Drones para construcción en España: seguimiento de obras, topografía, inspecciones y fotogrametría. Documenta y controla tu proyecto con precisión. Solicita presupuesto.",
    seoKeywords:
      "drones construcción, seguimiento de obras drones, topografía construcción, drones obra, AVANZA DRONE",
    title: "Drones para construcción",
    tagline: "Seguimiento, topografía y control de obra",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20large%20construction%20site%20with%20tower%20cranes%20and%20concrete%20structure%20under%20construction%2C%20warm%20golden%20hour%20light%2C%20dark%20moody%20teal%20shadows%2C%20high%20detail%2C%20professional%20editorial%20photography%2C%20dramatic%20lighting%2C%20clean%20composition&width=1600&height=900&seq=sector-construccion-hero&orientation=landscape",
    intro: [
      "El sector de la construcción exige control, documentación y precisión en cada fase del proyecto. Los drones permiten monitorizar la evolución de la obra, levantar el terreno antes de empezar y verificar el estado de estructuras sin interrumpir el trabajo.",
      "En AVANZA DRONE trabajamos con constructoras, promotoras y direcciones de obra para aportar información visual y geoespacial que facilita la toma de decisiones, la comunicación con inversores y el cumplimiento de plazos, en toda España.",
    ],
    solutions: [
      {
        title: "Seguimiento de obras",
        description:
          "Vuelos periódicos para documentar la evolución del proyecto con fotos, vídeo y ortofotos comparables.",
        slug: "seguimiento-obras-drones",
      },
      {
        title: "Topografía y cartografía",
        description:
          "Levantamientos precisos del terreno para replanteos, mediciones y bases de proyecto.",
        slug: "topografia-drones",
      },
      {
        title: "Inspecciones técnicas",
        description:
          "Evaluación de cubiertas, fachadas y estructuras sin exponer a personas a trabajos en altura.",
        slug: "inspecciones-drones",
      },
      {
        title: "Fotogrametría y modelos 3D",
        description:
          "Reconstrucción tridimensional de la obra para medición, control y documentación.",
        slug: "fotogrametria-drones",
      },
    ],
    benefits: [
      "Control objetivo del avance de obra",
      "Reducción de riesgos en trabajos en altura",
      "Documentación periódica para dirección e inversores",
      "Mediciones y replanteos más rápidos",
      "Detección temprana de desviaciones",
    ],
    useCases: [
      "Monitorización mensual de obras de edificación",
      "Levantamiento topográfico previo al proyecto",
      "Inspección de cubiertas y fachadas en ejecución",
      "Control de volúmenes de tierras y acopios",
    ],
    process: [
      { title: "Análisis", description: "Definimos los objetivos y fases a documentar en la obra." },
      { title: "Planificación", description: "Establecemos frecuencias de vuelo y puntos de captura." },
      { title: "Captura", description: "Realizamos vuelos fotográficos, topográficos o termográficos." },
      { title: "Entrega", description: "Entregamos ortofotos, modelos y registros visuales de progreso." },
    ],
    faqs: [
      {
        question: "¿Qué aportan los drones a una obra de construcción?",
        answer:
          "Control visual del avance, levantamientos topográficos rápidos, inspección de estructuras sin riesgo y documentación objetiva para dirección e inversores.",
      },
      {
        question: "¿Con qué frecuencia se puede hacer el seguimiento de obra?",
        answer:
          "Habitualmente de forma mensual, aunque se adapta a las necesidades del proyecto: semanal, quincenal o en hitos concretos.",
      },
      {
        question: "¿Los levantamientos sirven para replanteo y certificaciones?",
        answer:
          "Sí, entregamos productos georreferenciados con precisión centimétrica, compatibles con CAD y útiles para replanteos, mediciones y justificación de certificaciones.",
      },
      {
        question: "¿Trabajáis en obras de toda España?",
        answer:
          "Sí, nos desplazamos a cualquier punto del territorio español para realizar los vuelos.",
      },
    ],
  },
  {
    slug: "drones-industria",
    seoTitle: "Drones para industria en España | AVANZA DRONE",
    seoDescription:
      "Drones para industria en España: inspección de instalaciones, termografía, modelos 3D y mantenimiento predictivo. Menos riesgo y más eficiencia. Solicita presupuesto.",
    seoKeywords:
      "drones industria, inspección industrial drones, termografía industrial, mantenimiento drones, AVANZA DRONE",
    title: "Drones para industria",
    tagline: "Inspección y mantenimiento de instalaciones",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20an%20industrial%20plant%20with%20pipelines%2C%20storage%20tanks%20and%20heavy%20machinery%2C%20warm%20amber%20and%20teal%20color%20grading%2C%20dark%20industrial%20atmosphere%2C%20high%20detail%2C%20professional%20editorial%20style%2C%20dramatic%20lighting&width=1600&height=900&seq=sector-industria-hero&orientation=landscape",
    intro: [
      "Las instalaciones industriales requieren inspecciones periódicas para garantizar su seguridad y operatividad. Los drones permiten evaluar cubiertas, estructuras, tuberías y equipos en altura sin detener la producción y sin exponer al personal.",
      "Combinamos inspección visual de alta resolución y termografía aérea para detectar anomalías de forma temprana, optimizando el mantenimiento predictivo y reduciendo costes en toda España.",
    ],
    solutions: [
      {
        title: "Inspecciones técnicas",
        description:
          "Evaluación de cubiertas, estructuras e instalaciones de difícil acceso con imágenes de alta resolución.",
        slug: "inspecciones-drones",
      },
      {
        title: "Termografía aérea",
        description:
          "Detección de anomalías térmicas, puntos calientes y fallos en equipos e instalaciones.",
        slug: "termografia-drones",
      },
      {
        title: "Fotogrametría y modelos 3D",
        description:
          "Gemelos digitales de instalaciones para documentación, medición y planificación.",
        slug: "fotogrametria-drones",
      },
      {
        title: "Seguimiento de obras",
        description:
          "Monitorización de ampliaciones, reformas y nuevas naves industriales.",
        slug: "seguimiento-obras-drones",
      },
    ],
    benefits: [
      "Inspección sin detener la producción",
      "Reducción del riesgo en trabajos en altura",
      "Detección temprana de anomalías",
      "Mantenimiento predictivo más eficiente",
      "Documentación técnica geolocalizada",
    ],
    useCases: [
      "Inspección de cubiertas y estructuras de naves",
      "Termografía de instalaciones eléctricas y de proceso",
      "Gemelos digitales de plantas industriales",
      "Monitorización de ampliaciones de instalaciones",
    ],
    process: [
      { title: "Análisis", description: "Identificamos las zonas y equipos a inspeccionar." },
      { title: "Planificación", description: "Estudiamos permisos, seguridad y condiciones de vuelo." },
      { title: "Captura", description: "Realizamos vuelos visuales y termográficos de alta resolución." },
      { title: "Informe", description: "Entregamos imágenes, mapas térmicos y documentación de anomalías." },
    ],
    faqs: [
      {
        question: "¿Se puede inspeccionar una planta sin parar la producción?",
        answer:
          "Sí, los vuelos se realizan sin contacto y sin interrumpir la actividad, incluso en instalaciones en funcionamiento.",
      },
      {
        question: "¿Qué anomalías detecta la termografía industrial?",
        answer:
          "Puntos calientes, fugas, pérdidas de aislamiento, fallos eléctricos y desgastes en equipos que el ojo humano no percibe.",
      },
      {
        question: "¿Sirve para mantenimiento predictivo?",
        answer:
          "Sí, la inspección periódica con dron permite detectar anomalías antes de que se conviertan en averías, optimizando el plan de mantenimiento.",
      },
      {
        question: "¿Cubrís instalaciones en toda España?",
        answer:
          "Sí, inspeccionamos instalaciones industriales en cualquier punto del territorio español.",
      },
    ],
  },
  {
    slug: "drones-energia",
    seoTitle: "Drones para energía en España | AVANZA DRONE",
    seoDescription:
      "Drones para energía en España: inspección de plantas fotovoltaicas, termografía, líneas e infraestructuras energéticas. Más eficiencia y menos riesgo. Solicita presupuesto.",
    seoKeywords:
      "drones energía, inspección fotovoltaica drones, termografía placas solares, drones renovables, AVANZA DRONE",
    title: "Drones para energía",
    tagline: "Inspección de instalaciones energéticas",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20renewable%20energy%20infrastructure%20with%20wind%20turbines%20and%20solar%20panels%20at%20dusk%2C%20warm%20amber%20light%2C%20dark%20moody%20teal%20shadows%2C%20high%20detail%2C%20professional%20editorial%20photography%2C%20dramatic%20lighting&width=1600&height=900&seq=sector-energia-hero&orientation=landscape",
    intro: [
      "El sector energético gestiona grandes infraestructuras que necesitan inspección y mantenimiento constantes. Los drones permiten evaluar plantas fotovoltaicas, parques eólicos y otras instalaciones de forma rápida, precisa y sin detener la producción.",
      "En AVANZA DRONE combinamos captura visual y termografía aérea para localizar módulos defectuosos, puntos calientes y anomalías, facilitando la priorización del mantenimiento en toda España.",
    ],
    solutions: [
      {
        title: "Inspección de placas solares",
        description:
          "Detección de paneles defectuosos y puntos calientes con localización GPS de cada módulo.",
        slug: "inspeccion-placas-solares",
      },
      {
        title: "Termografía aérea",
        description:
          "Mapas térmicos de plantas fotovoltaicas e instalaciones para localizar anomalías.",
        slug: "termografia-drones",
      },
      {
        title: "Inspecciones técnicas",
        description:
          "Evaluación de torres, líneas y estructuras de infraestructuras energéticas.",
        slug: "inspecciones-drones",
      },
      {
        title: "Topografía y cartografía",
        description:
          "Levantamientos del terreno para implantación de nuevas plantas y parques.",
        slug: "topografia-drones",
      },
    ],
    benefits: [
      "Inspección sin detener la producción",
      "Localización precisa de módulos afectados",
      "Cobertura rápida de grandes superficies",
      "Reducción del riesgo en altura",
      "Informes para priorizar el mantenimiento",
    ],
    useCases: [
      "Inspección termográfica de plantas fotovoltaicas",
      "Evaluación de parques eólicos",
      "Levantamiento de terrenos para nuevas instalaciones",
      "Inspección de líneas y subestaciones",
    ],
    process: [
      { title: "Análisis", description: "Dimensionamos la instalación y definimos el alcance." },
      { title: "Planificación", description: "Programamos el vuelo en las condiciones óptimas." },
      { title: "Vuelo", description: "Capturamos imágenes visuales y termográficas de toda la superficie." },
      { title: "Informe", description: "Entregamos el mapa de anomalías con localización de cada módulo." },
    ],
    faqs: [
      {
        question: "¿Cómo se detectan los paneles defectuosos?",
        answer:
          "Mediante termografía aérea identificamos puntos calientes y celdas con anomalías que indican módulos con bajo rendimiento o riesgo de fallo.",
      },
      {
        question: "¿Hay que parar la producción para inspeccionar?",
        answer:
          "No, la inspección se realiza mediante vuelo, sin contacto y sin necesidad de detener la instalación.",
      },
      {
        question: "¿Trabajáis con energías renovables y convencionales?",
        answer:
          "Sí, inspeccionamos tanto plantas fotovoltaicas y parques eólicos como otras infraestructuras energéticas convencionales.",
      },
      {
        question: "¿Cubrís toda España?",
        answer:
          "Sí, inspeccionamos instalaciones energéticas en todo el territorio español.",
      },
    ],
  },
  {
    slug: "drones-ingenieria",
    seoTitle: "Drones para ingeniería en España | AVANZA DRONE",
    seoDescription:
      "Drones para ingeniería en España: topografía, fotogrametría, modelos 3D e inspección de infraestructuras con precisión centimétrica. Solicita presupuesto.",
    seoKeywords:
      "drones ingeniería, topografía drones, fotogrametría ingeniería, modelos 3D infraestructuras, AVANZA DRONE",
    title: "Drones para ingeniería",
    tagline: "Datos geoespaciales de alta precisión",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20highway%20bridge%20and%20civil%20engineering%20infrastructure%20with%20digital%20survey%20overlay%20and%20contour%20lines%2C%20teal%20and%20amber%20color%20grading%2C%20dark%20background%2C%20high%20detail%2C%20professional%20editorial%20style&width=1600&height=900&seq=sector-ingenieria-hero&orientation=landscape",
    intro: [
      "Los proyectos de ingeniería necesitan datos geoespaciales precisos y actualizados. Los drones permiten levantar terrenos, generar modelos 3D y documentar infraestructuras con precisión centimétrica y en mucho menos tiempo que los métodos tradicionales.",
      "Trabajamos con GPS RTK y fotogrametría para entregar ortofotos, modelos digitales del terreno y nubes de puntos listos para integrarse en CAD y GIS, en toda España.",
    ],
    solutions: [
      {
        title: "Topografía y cartografía",
        description:
          "Levantamientos precisos con ortofotos, modelos del terreno y nubes de puntos.",
        slug: "topografia-drones",
      },
      {
        title: "Fotogrametría y modelos 3D",
        description:
          "Reconstrucción tridimensional de terrenos e infraestructuras para análisis y medición.",
        slug: "fotogrametria-drones",
      },
      {
        title: "Inspecciones técnicas",
        description:
          "Evaluación de puentes, viaductos y estructuras de difícil acceso.",
        slug: "inspecciones-drones",
      },
      {
        title: "Seguimiento de obras",
        description:
          "Monitorización de proyectos de ingeniería civil y documentación de avance.",
        slug: "seguimiento-obras-drones",
      },
    ],
    benefits: [
      "Precisión centimétrica con GPS RTK",
      "Levantamientos mucho más rápidos",
      "Compatibilidad con CAD y GIS",
      "Acceso a zonas de difícil cobertura",
      "Documentación actualizada del proyecto",
    ],
    useCases: [
      "Bases topográficas para diseño de infraestructuras",
      "Modelos digitales del terreno y cálculo de volúmenes",
      "Inspección de puentes y viaductos",
      "Documentación de obras de ingeniería civil",
    ],
    process: [
      { title: "Análisis", description: "Definimos la zona y la precisión requerida del levantamiento." },
      { title: "Planificación", description: "Diseñamos el plan de vuelo y el apoyo topográfico." },
      { title: "Captura", description: "Volamos con GPS RTK y capturamos las imágenes." },
      { title: "Procesado", description: "Generamos ortofoto, MDT y nube de puntos georreferenciados." },
    ],
    faqs: [
      {
        question: "¿Qué precisión se alcanza con topografía con dron?",
        answer:
          "Con GPS RTK y apoyo topográfico se alcanzan precisiones centimétricas, adecuadas para la mayoría de proyectos de ingeniería y obra civil.",
      },
      {
        question: "¿Los resultados son compatibles con AutoCAD y GIS?",
        answer:
          "Sí, entregamos productos en formatos estándar compatibles con CAD, GIS y software de modelado.",
      },
      {
        question: "¿Sirve la fotogrametría para calcular volúmenes?",
        answer:
          "Sí, sobre los modelos georreferenciados se pueden calcular volúmenes, distancias y superficies con precisión.",
      },
      {
        question: "¿Trabajáis en proyectos de toda España?",
        answer:
          "Sí, realizamos proyectos de ingeniería en cualquier punto del territorio español.",
      },
    ],
  },
  {
    slug: "drones-inmobiliario",
    seoTitle: "Drones para inmobiliarias en España | AVANZA DRONE",
    seoDescription:
      "Drones para el sector inmobiliario en España: fotografía y vídeo aéreo de viviendas, promociones y terrenos. Vende más rápido con imágenes impactantes.",
    seoKeywords:
      "drones inmobiliarias, fotografía aérea inmobiliaria, vídeo inmobiliario dron, real estate drones, AVANZA DRONE",
    title: "Drones para el sector inmobiliario",
    tagline: "Imágenes que venden propiedades",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20modern%20residential%20development%20with%20new%20homes%2C%20landscaped%20gardens%20and%20green%20areas%2C%20warm%20golden%20hour%20light%2C%20dark%20moody%20teal%20shadows%2C%20high%20detail%2C%20professional%20real%20estate%20photography%2C%20dramatic%20lighting&width=1600&height=900&seq=sector-inmobiliario-hero&orientation=landscape",
    intro: [
      "En el sector inmobiliario, la primera impresión lo es todo. La fotografía y el vídeo aéreo muestran la ubicación, el entorno y el potencial de una propiedad de una forma que ninguna foto en tierra puede igualar.",
      "Trabajamos con inmobiliarias, promotoras y propietarios para crear contenido de alto impacto que acelera la venta o el alquiler de viviendas, promociones, terrenos y hoteles en toda España.",
    ],
    solutions: [
      {
        title: "Drones para inmobiliarias",
        description:
          "Fotografía y vídeo aéreo de viviendas, promociones, terrenos y hoteles.",
        slug: "drones-inmobiliarias",
      },
      {
        title: "Vídeos y fotografía aérea",
        description:
          "Producción audiovisual cinematográfica para presentar propiedades y promociones.",
        slug: "videos-con-drones",
      },
      {
        title: "Fotogrametría y modelos 3D",
        description:
          "Modelos tridimensionales de edificios y complejos para presentaciones interactivas.",
        slug: "fotogrametria-drones",
      },
      {
        title: "Topografía y cartografía",
        description:
          "Levantamiento de terrenos y parcelas para promociones y desarrollo.",
        slug: "topografia-drones",
      },
    ],
    benefits: [
      "Anuncios más atractivos y diferenciados",
      "Mostrar el entorno y la ubicación real",
      "Acelerar la venta o el alquiler",
      "Destacar grandes superficies y fincas",
      "Contenido para portales y campañas",
    ],
    useCases: [
      "Fotografía aérea de viviendas premium",
      "Vídeo promocional de promociones inmobiliarias",
      "Presentación de terrenos y fincas",
      "Contenido para portales y redes sociales",
    ],
    process: [
      { title: "Briefing", description: "Definimos la propiedad y los puntos fuertes a destacar." },
      { title: "Planificación", description: "Elegimos el mejor momento de luz y los encuadres." },
      { title: "Captura", description: "Realizamos fotografía y vídeo aéreo de la propiedad." },
      { title: "Entrega", description: "Editamos y entregamos el material listo para publicar." },
    ],
    faqs: [
      {
        question: "¿Qué tipo de propiedades fotografiáis?",
        answer:
          "Viviendas premium, promociones inmobiliarias, terrenos, fincas, hoteles, complejos turísticos y naves industriales.",
      },
      {
        question: "¿Las imágenes sirven para portales inmobiliarios?",
        answer:
          "Sí, entregamos el material en formatos y resoluciones compatibles con los principales portales y campañas de marketing.",
      },
      {
        question: "¿Cuánto tarda la entrega?",
        answer:
          "Las fotografías suelen entregarse en pocos días y el vídeo editado en función de la complejidad del proyecto.",
      },
      {
        question: "¿Cubrís propiedades en toda España?",
        answer:
          "Sí, nos desplazamos a cualquier punto del territorio español para la sesión fotográfica o de vídeo.",
      },
    ],
  },
  {
    slug: "drones-agricultura",
    seoTitle: "Drones para agricultura en España | AVANZA DRONE",
    seoDescription:
      "Drones para agricultura en España: topografía de fincas, modelos del terreno, análisis de cultivos y documentación. Optimiza tu explotación. Solicita presupuesto.",
    seoKeywords:
      "drones agricultura, topografía fincas drones, fotogrametría agrícola, análisis cultivos drones, AVANZA DRONE",
    title: "Drones para agricultura",
    tagline: "Información aérea para tu explotación",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20vast%20agricultural%20fields%20with%20neat%20crop%20rows%2C%20irrigation%20systems%20and%20farm%20plots%2C%20warm%20golden%20hour%20light%2C%20dark%20moody%20teal%20shadows%2C%20high%20detail%2C%20professional%20editorial%20photography%2C%20dramatic%20lighting%2C%20clean%20composition&width=1600&height=900&seq=sector-agricultura-hero&orientation=landscape",
    intro: [
      "La agricultura moderna necesita información precisa sobre el terreno y los cultivos. Los drones permiten levantar fincas, generar modelos del terreno, analizar superficies y documentar el estado de las explotaciones de forma eficiente.",
      "En AVANZA DRONE ayudamos a explotaciones agrícolas y bodegas a planificar, medir y documentar sus terrenos con productos geoespaciales precisos, en toda España.",
    ],
    solutions: [
      {
        title: "Topografía y cartografía",
        description:
          "Levantamiento de fincas con ortofotos y modelos digitales del terreno.",
        slug: "topografia-drones",
      },
      {
        title: "Fotogrametría y modelos 3D",
        description:
          "Modelos tridimensionales del terreno para análisis de pendientes y drenajes.",
        slug: "fotogrametria-drones",
      },
      {
        title: "Inspecciones técnicas",
        description:
          "Evaluación de cubiertas de naves, bodegas e instalaciones agrícolas.",
        slug: "inspecciones-drones",
      },
      {
        title: "Vídeos y fotografía aérea",
        description:
          "Contenido visual de fincas, bodegas y productos para promoción.",
        slug: "videos-con-drones",
      },
    ],
    benefits: [
      "Medición precisa de superficies y parcelas",
      "Análisis del terreno y pendientes",
      "Documentación de explotaciones",
      "Inspección de instalaciones sin riesgo",
      "Contenido para promoción de productos",
    ],
    useCases: [
      "Levantamiento topográfico de fincas",
      "Análisis de pendientes y drenajes",
      "Inspección de cubiertas de bodegas y naves",
      "Vídeos promocionales de fincas y productos",
    ],
    process: [
      { title: "Análisis", description: "Definimos la finca y los datos que necesita la explotación." },
      { title: "Planificación", description: "Diseñamos el plan de vuelo sobre el terreno." },
      { title: "Captura", description: "Volamos y capturamos imágenes de alta resolución." },
      { title: "Procesado", description: "Generamos ortofotos, modelos del terreno y mediciones." },
    ],
    faqs: [
      {
        question: "¿Qué datos se pueden obtener de una finca con dron?",
        answer:
          "Ortofotos, modelos digitales del terreno, medición de superficies, análisis de pendientes y documentación visual de la explotación.",
      },
      {
        question: "¿Sirve para calcular superficies de parcelas?",
        answer:
          "Sí, sobre los productos georreferenciados se pueden medir superficies, distancias y volúmenes con precisión.",
      },
      {
        question: "¿Se pueden inspeccionar bodegas e instalaciones agrícolas?",
        answer:
          "Sí, inspeccionamos cubiertas y estructuras de naves, bodegas e instalaciones sin exponer a personas a trabajos en altura.",
      },
      {
        question: "¿Trabajáis en explotaciones de toda España?",
        answer:
          "Sí, realizamos vuelos en explotaciones agrícolas de todo el territorio español.",
      },
    ],
  },
  {
    slug: "drones-audiovisual",
    seoTitle: "Drones para audiovisual en España | AVANZA DRONE",
    seoDescription:
      "Drones para el sector audiovisual en España: vídeos cinematográficos, fotografía aérea y producción para cine, publicidad y eventos. Solicita presupuesto.",
    seoKeywords:
      "drones audiovisual, producción aérea cine, vídeo cinematográfico dron, fotografía aérea publicidad, AVANZA DRONE",
    title: "Drones para audiovisual",
    tagline: "Producción aérea cinematográfica",
    heroImage:
      "https://readdy.ai/api/search-image?query=Cinematic%20aerial%20drone%20shot%20of%20a%20film%20production%20set%20with%20lighting%20equipment%20and%20crew%20on%20a%20dramatic%20landscape%2C%20warm%20amber%20and%20teal%20color%20grading%2C%20film%20production%20quality%2C%20high%20detail%2C%20professional%20editorial%20photography%2C%20dramatic%20lighting&width=1600&height=900&seq=sector-audiovisual-hero&orientation=landscape",
    intro: [
      "El dron aporta una perspectiva única que transforma cualquier producción audiovisual. Creamos vídeos y fotografía aérea de calidad cinematográfica para cine, publicidad, eventos, productoras y contenido corporativo.",
      "Trabajamos el encuadre, la luz y la narrativa de cada plano para ofrecer material listo para publicar, con la agilidad que exige el sector audiovisual, en toda España.",
    ],
    solutions: [
      {
        title: "Vídeos y fotografía aérea",
        description:
          "Producción aérea cinematográfica para cine, publicidad y eventos.",
        slug: "videos-con-drones",
      },
      {
        title: "Drones para inmobiliarias",
        description:
          "Contenido aéreo de alto impacto para promociones y proyectos inmobiliarios.",
        slug: "drones-inmobiliarias",
      },
      {
        title: "Fotogrametría y modelos 3D",
        description:
          "Reconstrucción de escenarios y localizaciones para VFX y previsualización.",
        slug: "fotogrametria-drones",
      },
    ],
    benefits: [
      "Planos aéreos de calidad cinematográfica",
      "Perspectivas únicas e impactantes",
      "Material listo para publicar",
      "Corrección de color y montaje",
      "Clips optimizados para redes",
    ],
    useCases: [
      "Vídeos publicitarios y corporativos",
      "Cobertura aérea de eventos",
      "Planos para cine y series",
      "Contenido para redes sociales y marketing",
    ],
    process: [
      { title: "Briefing", description: "Definimos el objetivo, el estilo y la narrativa de la pieza." },
      { title: "Planificación", description: "Estudiamos localización, encuadres y condiciones de luz." },
      { title: "Rodaje", description: "Capturamos los planos aéreos y de apoyo." },
      { title: "Edición", description: "Montamos, corregimos color y entregamos el material final." },
    ],
    faqs: [
      {
        question: "¿Qué tipo de proyectos audiovisuales realizáis?",
        answer:
          "Vídeos publicitarios, corporativos, de eventos, planos para cine y series, y contenido para redes sociales y marketing.",
      },
      {
        question: "¿Entregáis el material editado y en bruto?",
        answer:
          "Sí, entregamos el vídeo editado en alta resolución y, bajo petición, el material en bruto o clips adicionales.",
      },
      {
        question: "¿Incluye corrección de color y música?",
        answer:
          "Sí, el proceso incluye montaje y corrección de color. La música se selecciona según el estilo de cada proyecto.",
      },
      {
        question: "¿Trabajáis en toda España?",
        answer:
          "Sí, nos desplazamos a cualquier punto del territorio nacional para la producción audiovisual.",
      },
    ],
  },
  {
    slug: "drones-administraciones",
    seoTitle: "Drones para administraciones en España | AVANZA DRONE",
    seoDescription:
      "Drones para administraciones públicas en España: inspección de infraestructuras, topografía, cartografía y documentación. Servicio profesional y cumplimiento.",
    seoKeywords:
      "drones administraciones públicas, inspección infraestructuras drones, cartografía administraciones, drones ayuntamientos, AVANZA DRONE",
    title: "Drones para administraciones",
    tagline: "Servicio técnico para el sector público",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20modern%20city%20with%20public%20buildings%2C%20urban%20infrastructure%20and%20green%20spaces%2C%20warm%20golden%20hour%20light%2C%20dark%20moody%20teal%20shadows%2C%20high%20detail%2C%20professional%20editorial%20photography%2C%20dramatic%20lighting&width=1600&height=900&seq=sector-administraciones-hero&orientation=landscape",
    intro: [
      "Las administraciones públicas gestionan infraestructuras, territorio y servicios que requieren información técnica precisa y documentación actualizada. Los drones aportan eficiencia, seguridad y objetividad en la inspección y el levantamiento de información.",
      "En AVANZA DRONE trabajamos con ayuntamientos, diputaciones y organismos públicos con total cumplimiento normativo, aportando soluciones de inspección, topografía y cartografía en toda España.",
    ],
    solutions: [
      {
        title: "Inspecciones técnicas",
        description:
          "Evaluación de edificios, infraestructuras y patrimonio de titularidad pública.",
        slug: "inspecciones-drones",
      },
      {
        title: "Topografía y cartografía",
        description:
          "Levantamientos del territorio, parcelas y espacios públicos para gestión municipal.",
        slug: "topografia-drones",
      },
      {
        title: "Fotogrametría y modelos 3D",
        description:
          "Documentación tridimensional de patrimonio e infraestructuras públicas.",
        slug: "fotogrametria-drones",
      },
      {
        title: "Seguimiento de obras",
        description:
          "Monitorización de obras públicas y control de ejecución.",
        slug: "seguimiento-obras-drones",
      },
    ],
    benefits: [
      "Eficiencia en la gestión de infraestructuras",
      "Documentación objetiva y georreferenciada",
      "Cumplimiento normativo y seguridad",
      "Reducción de costes frente a métodos tradicionales",
      "Transparencia en la gestión pública",
    ],
    useCases: [
      "Inspección de edificios y patrimonio municipal",
      "Levantamiento cartográfico del territorio",
      "Control de obras públicas",
      "Documentación de infraestructuras viarias",
    ],
    process: [
      { title: "Análisis", description: "Definimos el objeto del encargo y los requisitos administrativos." },
      { title: "Planificación", description: "Estudiamos permisos, normativa y condiciones de vuelo." },
      { title: "Captura", description: "Realizamos vuelos de inspección o levantamiento." },
      { title: "Entrega", description: "Entregamos documentación técnica e informes verificables." },
    ],
    faqs: [
      {
        question: "¿Trabajáis con ayuntamientos y organismos públicos?",
        answer:
          "Sí, trabajamos con administraciones locales, autonómicas y otros organismos públicos con total cumplimiento normativo.",
      },
      {
        question: "¿Cumplís la normativa de vuelo vigente?",
        answer:
          "Sí, realizamos todas las operaciones con pilotos habilitados y cumpliendo la normativa de aviación y el resto de requisitos aplicables.",
      },
      {
        question: "¿Qué documentación entregáis para licitaciones?",
        answer:
          "Entregamos informes técnicos, imágenes georreferenciadas y productos cartográficos verificables, adecuados para expedientes administrativos.",
      },
      {
        question: "¿Cubrís todo el territorio español?",
        answer:
          "Sí, prestamos servicio a administraciones de todo el territorio nacional.",
      },
    ],
  },
];