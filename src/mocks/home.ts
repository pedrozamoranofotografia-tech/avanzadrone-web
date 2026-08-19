export const brand = {
  name: "AVANZA DRONE",
  tagline: "Tecnología aérea para proyectos que avanzan",
  whatsapp: "https://wa.me/34636980609",
  phone: "636 98 06 09",
  phoneLink: "tel:+34636980609",
  logo: "https://storage.helloreaddy.io/project_files/fb7f22ec-1338-4511-b03d-4a3896890b1d/2102015e-abaa-4b4f-9897-417c236b05a5_compressed_ChatGPT-Image-19-ago-2026-17_48_59.webp",
};

export const heroImages = [
  "https://readdy.ai/api/search-image?query=Epic%20cinematic%20aerial%20photograph%20of%20a%20professional%20quadcopter%20drone%20flying%20high%20above%20dramatic%20rugged%20coastal%20cliffs%20and%20crashing%20ocean%20waves%20at%20golden%20hour%20sunset%2C%20warm%20amber%20sunlight%20kissing%20the%20rocks%2C%20deep%20moody%20teal%20shadows%2C%20dramatic%20clouds%2C%20sense%20of%20scale%20and%20freedom%2C%20professional%20editorial%20photography%2C%20ultra%20high%20detail%2C%20dramatic%20lighting%2C%20clean%20composition&width=1600&height=900&seq=hero-drone-01&orientation=landscape",
  "https://readdy.ai/api/search-image?query=Close%20up%20dramatic%20photograph%20of%20a%20professional%20drone%20hovering%20in%20the%20foreground%20with%20a%20glowing%20modern%20city%20skyline%20and%20skyscrapers%20in%20the%20background%20at%20blue%20hour%20dusk%2C%20warm%20city%20lights%20bokeh%2C%20dark%20moody%20teal%20atmosphere%2C%20cinematic%20depth%20of%20field%2C%20professional%20editorial%20photography%2C%20high%20detail%2C%20dramatic%20lighting&width=1600&height=900&seq=hero-drone-02&orientation=landscape",
  "https://readdy.ai/api/search-image?query=Epic%20aerial%20photograph%20of%20a%20drone%20flying%20above%20a%20majestic%20mountain%20range%20surrounded%20by%20soft%20clouds%20and%20fog%20at%20golden%20hour%2C%20warm%20sunlight%20illuminating%20the%20peaks%2C%20dark%20moody%20teal%20valleys%20below%2C%20cinematic%20atmosphere%2C%20sense%20of%20adventure%2C%20professional%20editorial%20photography%2C%20ultra%20high%20detail%2C%20dramatic%20lighting&width=1600&height=900&seq=hero-drone-03&orientation=landscape",
  "https://readdy.ai/api/search-image?query=Dramatic%20silhouette%20photograph%20of%20a%20drone%20against%20a%20stunning%20sunset%20sky%20with%20radiant%20sun%20rays%20bursting%20through%20dramatic%20storm%20clouds%2C%20warm%20golden%20and%20amber%20tones%20fading%20to%20deep%20teal%2C%20cinematic%20epic%20atmosphere%2C%20professional%20editorial%20photography%2C%20high%20detail%2C%20dramatic%20lighting&width=1600&height=900&seq=hero-drone-04&orientation=landscape",
];

export const heroImage = heroImages[0];

export const trustIndicators = [
  { icon: "ri-flight-takeoff-line", title: "Pilotos profesionales" },
  { icon: "ri-shield-check-line", title: "Operaciones seguras" },
  { icon: "ri-focus-3-line", title: "Tecnología de alta precisión" },
  { icon: "ri-map-pin-2-line", title: "Servicio en toda España" },
];

export interface Service {
  id: string;
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  cta: string;
  image: string;
  wide?: boolean;
}

export const services: Service[] = [
  {
    id: "inspecciones",
    slug: "inspecciones-drones",
    icon: "ri-building-2-line",
    title: "Inspecciones técnicas con drones",
    tagline: "Cubiertas, fachadas, estructuras e instalaciones",
    description:
      "Inspección visual de cubiertas, tejados, fachadas, estructuras, instalaciones industriales e infraestructuras con captura de alta resolución.",
    highlights: [
      "Acceso a zonas difíciles",
      "Reducción de trabajos en altura",
      "Imágenes de alta resolución",
      "Documentación de anomalías",
      "Menos tiempos de inspección",
    ],
    cta: "Solicitar inspección",
    image:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20photography%20inspecting%20a%20modern%20industrial%20building%20facade%20and%20rooftop%2C%20warm%20amber%20and%20teal%20color%20grading%2C%20dark%20moody%20atmosphere%2C%20high%20detail%2C%20professional%20editorial%20style%2C%20dramatic%20lighting&width=800&height=600&seq=svc-inspeccion-01&orientation=landscape",
  },
  {
    id: "termografia",
    slug: "termografia-drones",
    icon: "ri-temp-hot-line",
    title: "Termografía aérea",
    tagline: "Detección de anomalías térmicas",
    description:
      "Captura térmica para analizar instalaciones y detectar posibles anomalías que el ojo humano no puede ver.",
    highlights: [
      "Instalaciones fotovoltaicas",
      "Cubiertas",
      "Edificios",
      "Instalaciones industriales",
    ],
    cta: "Solicitar estudio",
    image:
      "https://readdy.ai/api/search-image?query=Thermal%20infrared%20imaging%20of%20a%20building%20rooftop%2C%20heat%20signature%20color%20overlay%20in%20orange%20and%20teal%2C%20dark%20background%2C%20industrial%20inspection%20technology%2C%20high%20detail%2C%20professional%20editorial%20style%2C%20dramatic%20moody%20lighting&width=800&height=600&seq=svc-termografia-01&orientation=landscape",
  },
  {
    id: "topografia",
    slug: "topografia-drones",
    icon: "ri-map-2-line",
    title: "Topografía y cartografía",
    tagline: "Información geoespacial de precisión",
    description:
      "Captura aérea de información geoespacial para proyectos de construcción, ingeniería y gestión territorial.",
    highlights: [
      "Ortofotos",
      "Modelos digitales del terreno",
      "Nubes de puntos",
      "Mediciones",
      "Modelos 3D",
      "Compatible con CAD/GIS",
    ],
    cta: "Solicitar levantamiento",
    image:
      "https://readdy.ai/api/search-image?query=Aerial%20topographic%20survey%20of%20a%20landscape%20with%20contour%20lines%20overlay%2C%20drone%20perspective%2C%20digital%20terrain%20mapping%2C%20dark%20moody%20atmosphere%2C%20teal%20and%20amber%20color%20grading%2C%20high%20detail%2C%20professional%20editorial%20style&width=800&height=600&seq=svc-topografia-01&orientation=landscape",
  },
  {
    id: "fotogrametria",
    slug: "fotogrametria-drones",
    icon: "ri-stack-line",
    title: "Fotogrametría y modelos 3D",
    tagline: "FOTOGRAFÍAS → NUBE DE PUNTOS → MODELO 3D → INFORMACIÓN",
    description:
      "Transformamos cientos o miles de fotografías aéreas en representaciones digitales detalladas del terreno, edificios o infraestructuras.",
    highlights: [
      "Modelos tridimensionales",
      "Nubes de puntos densas",
      "Reconstrucción de superficies",
      "Texturizado realista",
    ],
    cta: "Ver aplicaciones",
    image:
      "https://readdy.ai/api/search-image?query=Three%20dimensional%20point%20cloud%20model%20of%20terrain%20and%20buildings%2C%20digital%20wireframe%20mesh%2C%20glowing%20teal%20points%20on%20dark%20background%2C%20photogrammetry%20technology%2C%20high%20detail%2C%20professional%20editorial%20style%2C%20dramatic%20lighting&width=800&height=600&seq=svc-fotogrametria-01&orientation=landscape",
  },
  {
    id: "seguimiento-obras",
    slug: "seguimiento-obras-drones",
    icon: "ri-line-chart-line",
    title: "Seguimiento de obras",
    tagline: "Documenta la evolución de tu proyecto",
    description:
      "Vuelos periódicos para documentar la evolución de proyectos de construcción, con material para dirección y comunicación.",
    highlights: [
      "Fotografías periódicas",
      "Vídeo aéreo",
      "Comparación temporal",
      "Ortofotografía",
      "Modelos 3D",
      "Documentación de progreso",
    ],
    cta: "Monitorizar mi obra",
    image:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20large%20construction%20site%20with%20cranes%20and%20scaffolding%2C%20progress%20documentation%2C%20warm%20golden%20hour%20light%2C%20dark%20moody%20teal%20shadows%2C%20high%20detail%2C%20professional%20editorial%20photography&width=800&height=600&seq=svc-obras-01&orientation=landscape",
  },
  {
    id: "energia-solar",
    slug: "inspeccion-placas-solares",
    icon: "ri-sun-line",
    title: "Energía solar",
    tagline: "Inspección de plantas fotovoltaicas",
    description:
      "Inspección aérea visual y, cuando corresponde, termográfica de instalaciones fotovoltaicas para detectar anomalías.",
    highlights: [
      "Detección de paneles defectuosos",
      "Inspección visual y térmica",
      "Localización de puntos calientes",
      "Informe de resultados",
    ],
    cta: "Solicitar inspección solar",
    image:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20solar%20energy%20plant%20with%20digital%20interface%20overlay%2C%20scanning%20lines%20and%20data%20readouts%2C%20warm%20amber%20and%20teal%20color%20grading%2C%20dark%20industrial%20atmosphere%2C%20high%20detail%2C%20professional%20editorial%20style&width=800&height=600&seq=svc-solar-01&orientation=landscape",
  },
  {
    id: "audiovisual",
    slug: "videos-con-drones",
    icon: "ri-movie-2-line",
    title: "Audiovisual profesional",
    tagline: "Producción aérea cinematográfica",
    description:
      "Producción aérea para inmobiliarias, constructoras, hoteles, turismo, publicidad, empresas, eventos, productoras y redes sociales.",
    highlights: [
      "Inmobiliarias",
      "Hoteles y turismo",
      "Publicidad",
      "Eventos",
      "Productoras",
      "Redes sociales",
    ],
    cta: "Ver portfolio",
    image:
      "https://readdy.ai/api/search-image?query=Cinematic%20aerial%20drone%20shot%20of%20a%20dramatic%20coastline%20at%20dusk%2C%20waves%20and%20cliffs%2C%20moody%20warm%20amber%20and%20teal%20color%20grading%2C%20film%20production%20quality%2C%20high%20detail%2C%20professional%20editorial%20photography%2C%20dramatic%20lighting&width=800&height=600&seq=svc-audiovisual-01&orientation=landscape",
  },
  {
    id: "real-estate",
    slug: "drones-inmobiliarias",
    icon: "ri-home-6-line",
    title: "Real Estate",
    tagline: "Fotografía y vídeo aéreo inmobiliario",
    description:
      "Fotografía y vídeo aéreo profesional para viviendas premium, promociones, terrenos, hoteles, complejos turísticos y naves industriales.",
    highlights: [
      "Viviendas premium",
      "Promociones inmobiliarias",
      "Terrenos",
      "Hoteles",
      "Complejos turísticos",
      "Naves industriales",
    ],
    cta: "Solicitar sesión",
    image:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20luxury%20modern%20villa%20with%20pool%20at%20twilight%2C%20warm%20interior%20lights%20glowing%2C%20dark%20moody%20atmosphere%2C%20teal%20shadows%2C%20high%20detail%2C%20professional%20real%20estate%20photography%2C%20dramatic%20lighting&width=800&height=600&seq=svc-realestate-01&orientation=landscape",
  },
];

export const sectors = [
  { icon: "ri-building-4-line", name: "Construcción", slug: "drones-construccion" },
  { icon: "ri-settings-3-line", name: "Industria", slug: "drones-industria" },
  { icon: "ri-flashlight-line", name: "Energía", slug: "drones-energia" },
  { icon: "ri-ruler-line", name: "Ingeniería", slug: "drones-ingenieria" },
  { icon: "ri-home-5-line", name: "Inmobiliario", slug: "drones-inmobiliario" },
  { icon: "ri-plant-line", name: "Agrícola", slug: "drones-agricultura" },
  { icon: "ri-film-line", name: "Audiovisual", slug: "drones-audiovisual" },
  { icon: "ri-government-line", name: "Administraciones", slug: "drones-administraciones" },
];

export const processSteps = [
  {
    number: "01",
    title: "Analizamos",
    description: "El cliente explica el proyecto y sus objetivos.",
  },
  {
    number: "02",
    title: "Planificamos",
    description:
      "Estudiamos ubicación, operación, necesidades técnicas y requisitos aplicables.",
  },
  {
    number: "03",
    title: "Volamos",
    description:
      "Realizamos la captura aérea con el equipo adecuado para cada trabajo.",
  },
  {
    number: "04",
    title: "Procesamos",
    description:
      "Convertimos los datos en imágenes, mapas, modelos, mediciones o informes.",
  },
  {
    number: "05",
    title: "Entregamos",
    description:
      "El cliente recibe información preparada para utilizarla en su proyecto.",
  },
];

export interface Comparison {
  title: string;
  beforeLabel: string;
  afterLabel: string;
  before: string;
  after: string;
}

export const comparisons: Comparison[] = [
  {
    title: "Fotografía normal vs Termografía",
    beforeLabel: "Imagen visual",
    afterLabel: "Análisis térmico",
    before:
      "https://readdy.ai/api/search-image?query=Normal%20photograph%20of%20a%20building%20rooftop%20with%20solar%20panels%2C%20daylight%2C%20neutral%20colors%2C%20clean%20architectural%20photography%2C%20high%20detail%2C%20professional%20editorial%20style&width=800&height=600&seq=ba-termo-before-01&orientation=landscape",
    after:
      "https://readdy.ai/api/search-image?query=Thermal%20infrared%20image%20of%20building%20rooftop%20with%20solar%20panels%2C%20orange%20and%20teal%20heat%20map%20overlay%2C%20hot%20spots%20highlighted%2C%20dark%20background%2C%20industrial%20inspection%2C%20high%20detail&width=800&height=600&seq=ba-termo-after-01&orientation=landscape",
  },
  {
    title: "Imagen aérea vs Ortofoto",
    beforeLabel: "Fotografía aérea",
    afterLabel: "Ortofoto georreferenciada",
    before:
      "https://readdy.ai/api/search-image?query=Aerial%20photograph%20of%20an%20agricultural%20landscape%20and%20terrain%20from%20above%2C%20natural%20perspective%2C%20warm%20light%2C%20high%20detail%2C%20professional%20editorial%20photography&width=800&height=600&seq=ba-orto-before-01&orientation=landscape",
    after:
      "https://readdy.ai/api/search-image?query=Orthophoto%20map%20of%20agricultural%20terrain%20with%20contour%20lines%20and%20coordinate%20grid%20overlay%2C%20georeferenced%20cartography%2C%20teal%20and%20amber%20color%20grading%2C%20dark%20background%2C%20high%20detail&width=800&height=600&seq=ba-orto-after-01&orientation=landscape",
  },
  {
    title: "Fotografías vs Modelo 3D",
    beforeLabel: "Cientos de fotografías",
    afterLabel: "Modelo 3D",
    before:
      "https://readdy.ai/api/search-image?query=Grid%20of%20aerial%20photographs%20of%20a%20building%20from%20multiple%20angles%2C%20photo%20mosaic%20collage%2C%20warm%20natural%20light%2C%20high%20detail%2C%20professional%20photography&width=800&height=600&seq=ba-model-before-01&orientation=landscape",
    after:
      "https://readdy.ai/api/search-image?query=Solid%20three%20dimensional%20digital%20model%20of%20a%20building%2C%20textured%20mesh%20rendered%20in%20teal%20and%20amber%20on%20dark%20background%2C%20photogrammetry%20reconstruction%2C%20high%20detail%2C%20professional%20editorial%20style&width=800&height=600&seq=ba-model-after-01&orientation=landscape",
  },
  {
    title: "Inicio de obra vs Estado actual",
    beforeLabel: "Inicio de obra",
    afterLabel: "Estado actual",
    before:
      "https://readdy.ai/api/search-image?query=Empty%20construction%20site%20with%20bare%20ground%20and%20foundation%20markings%20from%20aerial%20view%2C%20early%20stage%2C%20warm%20light%2C%20high%20detail%2C%20professional%20aerial%20photography&width=800&height=600&seq=ba-progress-before-01&orientation=landscape",
    after:
      "https://readdy.ai/api/search-image?query=Aerial%20view%20of%20a%20completed%20modern%20building%20structure%20on%20construction%20site%2C%20finished%20facade%2C%20warm%20golden%20hour%20light%2C%20dark%20moody%20teal%20shadows%2C%20high%20detail%2C%20professional%20aerial%20photography&width=800&height=600&seq=ba-progress-after-01&orientation=landscape",
  },
];

export interface Project {
  sector: string;
  title: string;
  problem: string;
  solution: string;
  technology: string[];
  work: string;
  deliverables: string[];
  result: string;
  image: string;
  demo: boolean;
}

export const projects: Project[] = [
  {
    sector: "Energía",
    title: "Inspección termográfica de planta fotovoltaica",
    problem:
      "Necesidad de detectar paneles con bajo rendimiento en una instalación de gran extensión sin detener la producción.",
    solution:
      "Vuelos termográficos planificados para identificar puntos calientes y anomalías en cada módulo.",
    technology: ["Termografía aérea", "Fotogrametría", "GPS RTK"],
    work: "Captura aérea térmica y visual de toda la superficie de la planta.",
    deliverables: ["Mapa térmico completo", "Informe de anomalías", "Localización GPS de paneles afectados"],
    result:
      "Identificación temprana de módulos defectuosos para priorizar el mantenimiento.",
    image:
      "https://readdy.ai/api/search-image?query=Aerial%20thermal%20inspection%20of%20a%20solar%20farm%2C%20heat%20map%20overlay%20in%20orange%20and%20teal%2C%20defective%20panels%20highlighted%2C%20dark%20industrial%20atmosphere%2C%20high%20detail%2C%20professional%20editorial%20style&width=800&height=600&seq=proj-solar-01&orientation=landscape",
    demo: true,
  },
  {
    sector: "Construcción",
    title: "Monitorización de obra de edificación",
    problem:
      "Documentar la evolución mensual de una obra para dirección de proyecto y comunicación con los inversores.",
    solution:
      "Vuelos periódicos con captura fotográfica, vídeo y ortofotos para comparación temporal.",
    technology: ["Fotogrametría", "Ortofotografía", "Vídeo aéreo"],
    work: "Seguimiento mensual con entregables visuales y métricas de avance.",
    deliverables: ["Ortofotos mensuales", "Vídeo de progreso", "Comparación temporal", "Modelos 3D"],
    result:
      "Registro visual continuo que facilitó la toma de decisiones y la comunicación del avance.",
    image:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20construction%20site%20in%20progress%20with%20cranes%2C%20monthly%20documentation%2C%20warm%20golden%20hour%20light%2C%20dark%20moody%20teal%20shadows%2C%20high%20detail%2C%20professional%20aerial%20photography&width=800&height=600&seq=proj-obras-01&orientation=landscape",
    demo: true,
  },
  {
    sector: "Ingeniería",
    title: "Levantamiento topográfico para proyecto de ingeniería",
    problem:
      "Obtención de una base topográfica precisa y actualizada para el diseño de una infraestructura.",
    solution:
      "Captura aérea con generación de ortofoto, modelo digital del terreno y nube de puntos.",
    technology: ["Topografía", "Fotogrametría", "GPS RTK"],
    work: "Vuelo planificado y procesamiento geoespacial de alta precisión.",
    deliverables: ["Ortofoto", "Modelo digital del terreno", "Nube de puntos", "Archivos CAD/GIS"],
    result:
      "Base cartográfica lista para integrarse directamente en el flujo de diseño del proyecto.",
    image:
      "https://readdy.ai/api/search-image?query=Aerial%20topographic%20survey%20of%20terrain%20for%20infrastructure%20engineering%2C%20contour%20lines%20and%20digital%20elevation%20model%20overlay%2C%20teal%20and%20amber%20color%20grading%2C%20dark%20background%2C%20high%20detail&width=800&height=600&seq=proj-topo-01&orientation=landscape",
    demo: true,
  },
];

export const whyDrones = [
  {
    icon: "ri-shield-star-line",
    title: "Menos riesgo",
    description:
      "Reducimos la exposición de personas a trabajos en altura o zonas de difícil acceso.",
  },
  {
    icon: "ri-database-2-line",
    title: "Más información",
    description:
      "Capturamos grandes cantidades de información visual y geoespacial en cada vuelo.",
  },
  {
    icon: "ri-timer-flash-line",
    title: "Más rapidez",
    description:
      "Inspeccionamos y documentamos superficies de forma eficiente y sin interrumpir la actividad.",
  },
  {
    icon: "ri-file-chart-line",
    title: "Mejor documentación",
    description:
      "Creamos registros visuales, mapas y modelos que pueden consultarse en cualquier momento.",
  },
];