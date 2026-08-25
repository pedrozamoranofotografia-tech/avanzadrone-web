export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  title: string;
  tagline: string;
  heroImage: string;
  intro: string[];
  problems: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  faqs: ServiceFAQ[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "inspecciones-drones",
    seoTitle: "Inspecciones técnicas con drones en España | AVANZA DRONE",
    seoDescription:
      "Inspecciones técnicas con drones en España: cubiertas, fachadas, estructuras e instalaciones. Imágenes de alta resolución, menos riesgo y sin interrumpir la actividad. Solicita presupuesto.",
    seoKeywords:
      "inspecciones con drones, inspección técnica dron, cubiertas drones, fachadas drones, AVANZA DRONE",
    title: "Inspecciones técnicas con drones",
    tagline: "Cubiertas, fachadas, estructuras e instalaciones",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20photography%20inspecting%20a%20modern%20industrial%20building%20facade%20and%20rooftop%2C%20warm%20amber%20and%20teal%20color%20grading%2C%20dark%20moody%20atmosphere%2C%20high%20detail%2C%20professional%20editorial%20style%2C%20dramatic%20lighting&width=1600&height=900&seq=svc-inspeccion-hero&orientation=landscape",
    intro: [
      "Las inspecciones técnicas con drones permiten evaluar el estado de cubiertas, tejados, fachadas, estructuras e instalaciones industriales sin exponer a personas a trabajos en altura. Capturamos imágenes y vídeo de alta resolución en zonas de difícil acceso, reduciendo costes y tiempos frente a métodos tradicionales.",
      "En AVANZA DRONE planificamos cada vuelo de inspección en función del objetivo del cliente: detectar patologías, documentar el estado previo a una actuación o generar un registro visual para mantenimiento. El resultado es información clara, documentada y lista para la toma de decisiones.",
    ],
    problems: [
      "Acceso a cubiertas, tejados y fachadas de difícil o peligroso acceso",
      "Necesidad de documentar patologías y anomalías sin medios auxiliares",
      "Inspecciones rápidas de grandes superficies industriales",
      "Reducción de la exposición a trabajos en altura",
    ],
    deliverables: [
      "Fotografías de alta resolución geolocalizadas",
      "Vídeo aéreo de inspección",
      "Informe de anomalías y patologías",
      "Documentación para mantenimiento o actuaciones",
    ],
    process: [
      { title: "Análisis", description: "Definimos el objetivo de la inspección y las zonas a evaluar." },
      { title: "Planificación", description: "Estudiamos la ubicación, permisos y condiciones de vuelo." },
      { title: "Captura", description: "Realizamos el vuelo con la cámara y resolución adecuadas." },
      { title: "Entrega", description: "Entregamos imágenes y un informe documentado de resultados." },
    ],
    faqs: [
      {
        question: "¿Qué tipo de edificios o estructuras se pueden inspeccionar con dron?",
        answer:
          "Cubiertas, tejados, fachadas, naves industriales, torres, depósitos, puentes y cualquier estructura donde el acceso sea complicado o implique riesgo en altura.",
      },
      {
        question: "¿Las imágenes sirven como documento técnico?",
        answer:
          "Sí. Entregamos fotografías de alta resolución geolocalizadas y, cuando se solicita, un informe de anomalías que puede incorporarse al expediente de mantenimiento o a la dirección de obra.",
      },
      {
        question: "¿Cuánto se tarda en realizar una inspección?",
        answer:
          "Depende de la superficie y la complejidad, pero en la mayoría de los casos el vuelo se realiza en una única jornada y los resultados se entregan en pocos días.",
      },
      {
        question: "¿Cubrís todo el territorio español?",
        answer:
          "Sí, prestamos servicio en toda España. Estamos ubicados en Madrid pero nos desplazamos a cualquier punto del territorio nacional.",
      },
    ],
  },
  {
    slug: "termografia-drones",
    seoTitle: "Termografía aérea con drones en España | AVANZA DRONE",
    seoDescription:
      "Termografía aérea con drones en España para detectar anomalías térmicas en cubiertas, fotovoltaicas y edificios. Análisis preciso y no invasivo. Solicita presupuesto sin compromiso.",
    seoKeywords:
      "termografía aérea, termografía con dron, inspección térmica dron, anomalías térmicas, AVANZA DRONE",
    title: "Termografía aérea",
    tagline: "Detección de anomalías térmicas",
    heroImage:
      "https://readdy.ai/api/search-image?query=Thermal%20infrared%20imaging%20of%20a%20building%20rooftop%2C%20heat%20signature%20color%20overlay%20in%20orange%20and%20teal%2C%20dark%20background%2C%20industrial%20inspection%20technology%2C%20high%20detail%2C%20professional%20editorial%20style%2C%20dramatic%20moody%20lighting&width=1600&height=900&seq=svc-termografia-hero&orientation=landscape",
    intro: [
      "La termografía aérea combina el vuelo con dron y cámaras térmicas para detectar anomalías que el ojo humano no puede ver: puntos calientes en paneles fotovoltaicos, pérdidas de aislamiento, humedades ocultas o fallos en instalaciones.",
      "Cada vuelo termográfico se planifica para capturar la información en las condiciones adecuadas, y los resultados se procesan en mapas térmicos e informes que localizan con precisión cada anomalía.",
    ],
    problems: [
      "Detección de puntos calientes y módulos defectuosos en plantas fotovoltaicas",
      "Localización de pérdidas térmicas y humedades en cubiertas",
      "Evaluación del aislamiento de edificios e instalaciones",
      "Análisis no invasivo de grandes superficies",
    ],
    deliverables: [
      "Mapa térmico completo de la instalación",
      "Informe de anomalías localizadas",
      "Localización GPS de puntos calientes",
      "Imágenes visuales y térmicas comparativas",
    ],
    process: [
      { title: "Análisis", description: "Identificamos el objetivo del estudio termográfico." },
      { title: "Planificación", description: "Determinamos horarios y condiciones óptimas de captura." },
      { title: "Vuelo térmico", description: "Capturamos imágenes térmicas y visuales de toda la superficie." },
      { title: "Informe", description: "Procesamos los datos y entregamos el mapa de anomalías." },
    ],
    faqs: [
      {
        question: "¿Qué anomalías puede detectar la termografía aérea?",
        answer:
          "Puntos calientes en paneles solares, pérdidas de aislamiento, humedades ocultas, infiltraciones y fallos eléctricos o mecánicos en instalaciones industriales.",
      },
      {
        question: "¿Es necesario detener la producción para el estudio?",
        answer:
          "No. La inspección termográfica se realiza mediante vuelo, sin contacto y sin interrumpir la actividad de la instalación.",
      },
      {
        question: "¿La termografía sustituye a una inspección visual?",
        answer:
          "Son complementarias. Combinamos la cámara térmica con captura visual de alta resolución para ofrecer un diagnóstico completo.",
      },
      {
        question: "¿Trabajáis en plantas solares grandes?",
        answer:
          "Sí, realizamos inspecciones termográficas en plantas fotovoltaicas de cualquier tamaño en toda España, localizando cada módulo afectado por GPS.",
      },
    ],
  },
  {
    slug: "topografia-drones",
    seoTitle: "Topografía y cartografía con drones | AVANZA DRONE",
    seoDescription:
      "Topografía y cartografía con drones en España: ortofotos, modelos digitales del terreno y nubes de puntos para ingeniería. Precisión y rapidez. Solicita presupuesto.",
    seoKeywords:
      "topografía con drones, cartografía aérea, ortofoto, modelo digital del terreno, AVANZA DRONE",
    title: "Topografía y cartografía",
    tagline: "Información geoespacial de precisión",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20topographic%20survey%20of%20a%20landscape%20with%20contour%20lines%20overlay%2C%20drone%20perspective%2C%20digital%20terrain%20mapping%2C%20dark%20moody%20atmosphere%2C%20teal%20and%20amber%20color%20grading%2C%20high%20detail%2C%20professional%20editorial%20style&width=1600&height=900&seq=svc-topografia-hero&orientation=landscape",
    intro: [
      "La topografía con drones permite capturar información geoespacial de precisión de forma mucho más rápida y segura que los levantamientos tradicionales. Generamos ortofotos, modelos digitales del terreno y nubes de puntos listos para integrarse en CAD y GIS.",
      "Trabajamos con GPS RTK y fotogrametría para garantizar la precisión que exigen los proyectos de construcción, ingeniería y gestión territorial, en toda España.",
    ],
    problems: [
      "Obtención de bases topográficas precisas y actualizadas",
      "Levantamientos de terrenos de difícil acceso",
      "Generación de cartografía para proyectos de ingeniería",
      "Medición de superficies y volúmenes",
    ],
    deliverables: [
      "Ortofotos georreferenciadas",
      "Modelos digitales del terreno (MDT)",
      "Nubes de puntos densas",
      "Curvas de nivel y archivos CAD/GIS",
    ],
    process: [
      { title: "Análisis", description: "Definimos la zona y la precisión requerida del levantamiento." },
      { title: "Planificación", description: "Diseñamos el plan de vuelo y el apoyo topográfico." },
      { title: "Captura", description: "Volamos con GPS RTK y capturamos las imágenes." },
      { title: "Procesado", description: "Generamos ortofoto, MDT y nube de puntos georreferenciados." },
    ],
    faqs: [
      {
        question: "¿Qué precisión se puede alcanzar con topografía con dron?",
        answer:
          "Con GPS RTK y apoyo topográfico se alcanzan precisiones centimétricas, adecuadas para la mayoría de proyectos de ingeniería y obra civil.",
      },
      {
        question: "¿Los resultados son compatibles con AutoCAD o GIS?",
        answer:
          "Sí, entregamos los productos en formatos estándar compatibles con CAD, GIS y software de modelado, listos para usar en tu flujo de trabajo.",
      },
      {
        question: "¿Cuánto terreno se puede levantar en un vuelo?",
        answer:
          "Depende de la resolución requerida, pero un dron puede cubrir decenas de hectáreas en una sola jornada, mucho más rápido que los métodos tradicionales.",
      },
      {
        question: "¿Hacéis levantamientos en cualquier parte de España?",
        answer:
          "Sí, prestamos servicio en todo el territorio español, con desplazamiento a la zona del proyecto.",
      },
    ],
  },
  {
    slug: "fotogrametria-drones",
    seoTitle: "Fotogrametría y modelos 3D con drones | AVANZA DRONE",
    seoDescription:
      "Fotogrametría con drones en España: nubes de puntos y modelos 3D de terrenos, edificios e infraestructuras. Reconstrucción precisa para ingeniería y arquitectura.",
    seoKeywords:
      "fotogrametría con drones, modelos 3D, nube de puntos, reconstrucción 3D, AVANZA DRONE",
    title: "Fotogrametría y modelos 3D",
    tagline: "FOTOGRAFÍAS → NUBE DE PUNTOS → MODELO 3D → INFORMACIÓN",
    heroImage:
      "https://readdy.ai/api/search-image?query=Three%20dimensional%20point%20cloud%20model%20of%20terrain%20and%20buildings%2C%20digital%20wireframe%20mesh%2C%20glowing%20teal%20points%20on%20dark%20background%2C%20photogrammetry%20technology%2C%20high%20detail%2C%20professional%20editorial%20style%2C%20dramatic%20lighting&width=1600&height=900&seq=svc-fotogrametria-hero&orientation=landscape",
    intro: [
      "La fotogrametría convierte cientos o miles de fotografías aéreas en representaciones digitales precisas del terreno, edificios e infraestructuras. El resultado son nubes de puntos densas y modelos 3D texturizados que sirven para medir, documentar y visualizar.",
      "Estos modelos se utilizan en ingeniería, arquitectura, patrimonio, minería y construcción para analizar superficies, calcular volúmenes o generar gemelos digitales del entorno.",
    ],
    problems: [
      "Generación de modelos tridimensionales de terrenos y estructuras",
      "Reconstrucción de superficies complejas o de difícil acceso",
      "Cálculo de volúmenes y mediciones sobre el modelo",
      "Documentación digital de edificios e infraestructuras",
    ],
    deliverables: [
      "Nubes de puntos densas",
      "Modelos 3D texturizados",
      "Mallas y reconstrucción de superficies",
      "Mediciones y cálculo de volúmenes",
    ],
    process: [
      { title: "Captura", description: "Realizamos vuelos fotogramétricos con solape adecuado." },
      { title: "Procesado", description: "Reconstruimos la nube de puntos a partir de las imágenes." },
      { title: "Modelado", description: "Generamos la malla y el texturizado realista del modelo 3D." },
      { title: "Entrega", description: "Entregamos el modelo en formatos compatibles con tu software." },
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre fotogrametría y LiDAR?",
        answer:
          "La fotogrametría reconstruye la geometría a partir de fotografías y aporta textura realista, mientras que el LiDAR mide directamente la distancia con láser. Elegimos el método más adecuado para cada proyecto.",
      },
      {
        question: "¿Los modelos 3D sirven para medir?",
        answer:
          "Sí, sobre los modelos georreferenciados se pueden realizar mediciones, calcular distancias, superficies y volúmenes con precisión.",
      },
      {
        question: "¿En qué sectores se utiliza la fotogrametría?",
        answer:
          "Ingeniería, arquitectura, minería, construcción, patrimonio histórico, agricultura y gestión territorial, entre otros.",
      },
      {
        question: "¿Cubrís proyectos en toda España?",
        answer:
          "Sí, realizamos proyectos de fotogrametría en cualquier punto del territorio nacional.",
      },
    ],
  },
  {
    slug: "seguimiento-obras-drones",
    seoTitle: "Seguimiento de obras con drones | Monitorización de obra",
    seoDescription:
      "Seguimiento de obras con drones en España. Documentamos la evolución de tu obra con fotografías, vídeo aéreo y ortofotos comparables mes a mes. Solicita presupuesto.",
    seoKeywords:
      "seguimiento de obras con drones, monitorización de obras, documentación de obra, ortofoto obra, AVANZA DRONE",
    title: "Seguimiento de obras",
    tagline: "Documenta la evolución de tu proyecto",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20large%20construction%20site%20with%20cranes%20and%20scaffolding%2C%20progress%20documentation%2C%20warm%20golden%20hour%20light%2C%20dark%20moody%20teal%20shadows%2C%20high%20detail%2C%20professional%20editorial%20photography&width=1600&height=900&seq=svc-obras-hero&orientation=landscape",
    intro: [
      "El seguimiento de obras con drones permite documentar la evolución de un proyecto de construcción de forma periódica y objetiva. Capturamos fotografías, vídeo aéreo, ortofotos y modelos 3D que sirven para la dirección de obra y la comunicación con inversores y equipos.",
      "Al repetir los vuelos con una planificación consistente, generamos una línea temporal visual que permite comparar el avance mes a mes y detectar desviaciones a tiempo.",
    ],
    problems: [
      "Documentar la evolución de la obra de forma periódica",
      "Comunicar el avance a dirección e inversores",
      "Comparar el estado de la obra entre periodos",
      "Detectar desviaciones respecto a la planificación",
    ],
    deliverables: [
      "Fotografías aéreas periódicas",
      "Vídeo aéreo de progreso",
      "Ortofotos comparativas",
      "Modelos 3D y comparación temporal",
    ],
    process: [
      { title: "Definición", description: "Establecemos la frecuencia y los puntos de captura del seguimiento." },
      { title: "Vuelos periódicos", description: "Realizamos capturas consistentes en cada fase de la obra." },
      { title: "Procesado", description: "Generamos ortofotos, vídeo y modelos comparables." },
      { title: "Informe", description: "Entregamos el registro visual y las métricas de avance." },
    ],
    faqs: [
      {
        question: "¿Con qué frecuencia se realiza el seguimiento?",
        answer:
          "Habitualmente de forma mensual, aunque la frecuencia se adapta a las necesidades del proyecto: semanal, quincenal o en hitos concretos de la obra.",
      },
      {
        question: "¿Se pueden comparar vuelos de distintos meses?",
        answer:
          "Sí. Al mantener una planificación de vuelo consistente, generamos ortofotos y modelos comparables que muestran la evolución entre periodos.",
      },
      {
        question: "¿Qué aporta el seguimiento con dron a la dirección de obra?",
        answer:
          "Un registro visual objetivo y georreferenciado del avance, útil para la toma de decisiones, la justificación de certificaciones y la comunicación con los inversores.",
      },
      {
        question: "¿Trabajáis en obras de toda España?",
        answer:
          "Sí, realizamos seguimientos de obra en cualquier punto del territorio español.",
      },
      {
        question: "¿Qué es el seguimiento de obra con dron?",
        answer:
          "Consiste en realizar vuelos periódicos sobre la obra para capturar fotografías, vídeo y ortofotos desde los mismos puntos, generando un registro visual comparable que muestra la evolución del proyecto a lo largo del tiempo.",
      },
      {
        question: "¿Qué diferencia hay entre el seguimiento con dron y la documentación fotográfica tradicional?",
        answer:
          "El dron cubre la totalidad de la obra desde el aire en una sola sesión, incluyendo zonas inaccesibles a pie, y permite generar ortofotos georreferenciadas sobre las que medir. La fotografía a pie de obra solo documenta puntos concretos.",
      },
      {
        question: "¿Qué entregables se reciben en cada vuelo?",
        answer:
          "Fotografías aéreas de alta resolución, vídeo del estado de la obra, ortofoto georreferenciada y, cuando el proyecto lo requiere, modelo 3D y comparativa con el vuelo anterior.",
      },
    ],
  },
  {
    slug: "inspeccion-placas-solares",
    seoTitle: "Inspección de placas solares con drones | AVANZA DRONE",
    seoDescription:
      "Inspección de placas solares y plantas fotovoltaicas con drones en España. Detección de paneles defectuosos y puntos calientes mediante termografía. Solicita presupuesto.",
    seoKeywords:
      "inspección placas solares drones, inspección fotovoltaica dron, paneles defectuosos, termografía solar, AVANZA DRONE",
    title: "Inspección de placas solares",
    tagline: "Plantas fotovoltaicas y autoconsumo",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20solar%20energy%20plant%20with%20digital%20interface%20overlay%2C%20scanning%20lines%20and%20data%20readouts%2C%20warm%20amber%20and%20teal%20color%20grading%2C%20dark%20industrial%20atmosphere%2C%20high%20detail%2C%20professional%20editorial%20style&width=1600&height=900&seq=svc-solar-hero&orientation=landscape",
    intro: [
      "La inspección de placas solares con drones permite detectar paneles defectuosos, puntos calientes y anomalías en plantas fotovoltaicas sin detener la producción y sin recorrer a pie grandes superficies.",
      "Combinamos captura visual y termográfica para localizar cada módulo afectado con precisión GPS y entregar un informe que facilita la priorización del mantenimiento.",
    ],
    problems: [
      "Detección de paneles con bajo rendimiento",
      "Localización de puntos calientes y módulos defectuosos",
      "Inspección de grandes plantas sin interrumpir la producción",
      "Priorización de tareas de mantenimiento",
    ],
    deliverables: [
      "Mapa térmico y visual de la planta",
      "Localización GPS de módulos afectados",
      "Informe de anomalías",
      "Recomendaciones de mantenimiento",
    ],
    process: [
      { title: "Análisis", description: "Dimensionamos la planta y definimos el alcance de la inspección." },
      { title: "Planificación", description: "Programamos el vuelo en las condiciones óptimas." },
      { title: "Vuelo", description: "Capturamos imágenes visuales y termográficas de toda la superficie." },
      { title: "Informe", description: "Entregamos el mapa de anomalías con localización de cada módulo." },
    ],
    faqs: [
      {
        question: "¿Cómo se detectan los paneles defectuosos?",
        answer:
          "Mediante termografía aérea identificamos puntos calientes y celdas con anomalías, que indican módulos con bajo rendimiento o riesgo de fallo.",
      },
      {
        question: "¿Hay que parar la producción para la inspección?",
        answer:
          "No, la inspección se realiza mediante vuelo, sin contacto y sin necesidad de detener la planta.",
      },
      {
        question: "¿Sirve para instalaciones de autoconsumo pequeñas?",
        answer:
          "Sí, trabajamos tanto con grandes plantas fotovoltaicas como con instalaciones de autoconsumo industrial y comercial de menor tamaño.",
      },
      {
        question: "¿Cubrís toda España?",
        answer:
          "Sí, inspeccionamos plantas fotovoltaicas en todo el territorio español.",
      },
    ],
  },
  {
    slug: "videos-con-drones",
    seoTitle: "Vídeos y fotos aéreas con drones | AVANZA DRONE",
    seoDescription:
      "Producción audiovisual aérea con drones en España: vídeos cinematográficos y fotografía aérea para inmobiliarias, turismo, publicidad y eventos. Solicita presupuesto.",
    seoKeywords:
      "vídeos con drones, fotografía aérea, producción audiovisual dron, vídeo cinematográfico, AVANZA DRONE",
    title: "Vídeos y fotografía aérea",
    tagline: "Producción aérea cinematográfica",
    heroImage:
      "https://readdy.ai/api/search-image?query=Cinematic%20aerial%20drone%20shot%20of%20a%20dramatic%20coastline%20at%20dusk%2C%20waves%20and%20cliffs%2C%20moody%20warm%20amber%20and%20teal%20color%20grading%2C%20film%20production%20quality%2C%20high%20detail%2C%20professional%20editorial%20photography%2C%20dramatic%20lighting&width=1600&height=900&seq=svc-audiovisual-hero&orientation=landscape",
    intro: [
      "Creamos vídeos y fotografía aérea de calidad cinematográfica para inmobiliarias, hoteles, turismo, publicidad, eventos, productoras y empresas. El dron aporta una perspectiva única que transforma cualquier proyecto en una pieza visual impactante.",
      "Trabajamos el encuadre, la luz y la narrativa de cada plano para ofrecer material listo para publicar en web, redes sociales o campañas de marketing.",
    ],
    problems: [
      "Contenido visual diferenciador para inmobiliarias y hoteles",
      "Vídeos promocionales para empresas y destinos turísticos",
      "Cobertura aérea de eventos y producciones",
      "Material para redes sociales y publicidad",
    ],
    deliverables: [
      "Vídeo aéreo editado en alta resolución",
      "Fotografía aérea profesional",
      "Clips para redes sociales",
      "Material en bruto bajo petición",
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
          "Vídeos inmobiliarios, promocionales de hoteles y turismo, publicidad, cobertura de eventos, vídeos corporativos y contenido para redes sociales.",
      },
      {
        question: "¿Entregáis el material editado y en bruto?",
        answer:
          "Sí, entregamos el vídeo editado en alta resolución y, bajo petición, el material en bruto o clips adicionales para redes sociales.",
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
];