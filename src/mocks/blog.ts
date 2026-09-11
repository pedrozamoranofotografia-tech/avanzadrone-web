export interface BlogSection {
  title: string;
  content: string[];
}

export interface BlogPost {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  heroImage: string;
  intro: string[];
  sections: BlogSection[];
  relatedServices: { title: string; slug: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "inspeccion-cubiertas-con-dron",
    seoTitle: "Inspección de cubiertas con dron: cómo se hace y qué se obtiene",
    seoDescription:
      "Cómo se realiza una inspección de cubiertas industriales con dron: tipos de cubierta, puntos críticos, termografía y entregables técnicos. Guía práctica.",
    seoKeywords:
      "inspección cubiertas dron, inspección tejados dron, termografía cubiertas, cubierta nave industrial, AVANZA DRONE",
    title: "Inspección de cubiertas con dron: cómo se hace y qué se obtiene",
    excerpt:
      "Qué se revisa en una cubierta industrial, dónde se concentran las patologías, qué aporta la termografía y qué documentación debe recibir el cliente al final.",
    publishDate: "2026-09-10",
    readTime: "8 min",
    heroImage:
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20large%20industrial%20warehouse%20roof%20with%20skylights%20and%20metal%20panels%2C%20rooftop%20inspection%20perspective%2C%20warm%20golden%20hour%20light%2C%20dark%20moody%20teal%20shadows%2C%20high%20detail%2C%20professional%20editorial%20photography%2C%20dramatic%20lighting&width=1600&height=900&seq=blog-cubiertas-hero&orientation=landscape",
    intro: [
      "Una cubierta industrial es la parte del edificio que más castigo recibe y la que menos se mira. Está expuesta al sol, a la lluvia y al viento todo el año, soporta maquinaria de climatización, y nadie sube a verla hasta que aparece una mancha de humedad en el techo de la nave. Para entonces, la reparación suele ser mucho más cara de lo que habría sido una revisión a tiempo.",
      "Una inspección de cubiertas es una evaluación técnica y sistemática del estado del tejado o la azotea, orientada a verificar la estanqueidad, comprobar la seguridad estructural y detectar filtraciones antes de que se conviertan en daños. En este artículo explicamos qué se revisa, dónde se concentran los problemas, qué aporta la termografía y qué documentación debe recibir el cliente al terminar.",
    ],
    sections: [
      {
        title: "Cuándo toca inspeccionar una cubierta",
        content: [
          "El Código Técnico de la Edificación establece obligaciones concretas de mantenimiento. En su Documento Básico de Salubridad DB-HS 1, apartado 6 de mantenimiento y conservación, la tabla de operaciones fija la limpieza de los elementos de desagüe (sumideros, canalones y rebosaderos) y la comprobación de su correcto funcionamiento una vez al año, y además cada vez que se produzcan tormentas importantes.",
          "Esa periodicidad anual es el mínimo legal, no el ideal. En naves con arbolado cercano, actividad que genera polvo o cubiertas con pendientes muy suaves, conviene revisar con más frecuencia porque los sumideros se obstruyen antes.",
          "Al margen del mantenimiento ordinario, hay momentos que piden una inspección completa: tras un episodio de viento fuerte o granizo, antes de comprar o alquilar una nave, cuando aparece la primera filtración, antes de instalar placas solares en cubierta, y al preparar un peritaje para el seguro.",
        ],
      },
      {
        title: "Los tres tipos de cubierta industrial y sus patologías",
        content: [
          "No todas las cubiertas fallan igual. Saber ante cuál estamos determina dónde hay que mirar.",
          "La cubierta deck combina chapa grecada, aislamiento rígido y una lámina impermeabilizante de TPO, PVC o asfáltica. Sus problemas típicos son punzonamientos y desgarros en la lámina, ampollas provocadas por humedad atrapada bajo el aislamiento, y el despegue de soldaduras en las juntas.",
          "El panel sándwich son dos chapas de acero con un núcleo aislante de poliuretano o lana de roca. Aquí la corrosión en los solapes y el envejecimiento de las juntas de estanqueidad son los fallos más frecuentes. Cuando entra agua en el núcleo, el aislamiento pierde capacidad y ya no se recupera.",
          "La cubierta ligera de fibrocemento merece un apartado propio. Las placas se vuelven frágiles con los años y aparecen fisuras y fijaciones oxidadas. Pero el factor determinante es otro: las placas de fibrocemento anteriores a 2002 contienen amianto. Caminar sobre ellas es peligroso por el riesgo de rotura y desprendimiento, y manipularlas exige empresa autorizada. En estas cubiertas la inspección con dron no es una comodidad, es la única forma razonable de evaluar el estado sin poner a nadie encima.",
        ],
      },
      {
        title: "Los puntos singulares: donde se concentran los problemas",
        content: [
          "La mayor parte de las patologías no aparece en el centro de los paños, sino en los encuentros y elementos especiales. Son los que llamamos puntos singulares y son el foco real de cualquier inspección.",
          "Sistemas de evacuación de agua. Canalones exteriores e interiores, sumideros y rebosaderos. Las obstrucciones por hojas, lodos o residuos generan balsas de agua que cargan la estructura y acaban encontrando el punto débil de la impermeabilización.",
          "Fijaciones y anclajes. Tornillería, juntas de estanqueidad de los tornillos y estado general del apriete. El viento trabaja estos elementos de forma continua y los va aflojando.",
          "Lucernarios y claraboyas. El policarbonato y el poliéster se vuelven quebradizos con la exposición solar. Además de perder estanqueidad, suponen un riesgo grave de caída para cualquiera que camine por la cubierta, porque desde arriba no se distingue un lucernario sano de uno degradado.",
          "Remates y encuentros. Juntas con petos perimetrales, chimeneas, salidas de ventilación y bancadas de maquinaria de frío o calor. Cada elemento que atraviesa la cubierta es un punto potencial de entrada de agua.",
        ],
      },
      {
        title: "Qué aporta la termografía",
        content: [
          "La inspección visual detecta lo que se ve: una placa rota, un canalón obstruido, una junta abierta. La termografía detecta lo que no se ve, y en cubiertas eso significa sobre todo humedad atrapada.",
          "El principio es sencillo. El agua tiene una inercia térmica distinta a la del aislamiento seco: absorbe calor durante el día y lo libera más despacio al caer la tarde. Una cámara térmica capta esa diferencia de temperatura y revela las zonas donde el aislamiento está empapado bajo la lámina impermeabilizante, aunque en superficie no haya absolutamente nada visible.",
          "Esto cambia por completo el enfoque de la reparación. Sin termografía se repara donde aparece la mancha en el techo, que rara vez coincide con el punto real de entrada del agua. Con el mapa térmico se delimita la extensión real de la zona afectada y se actúa donde toca.",
          "El momento del vuelo importa: la diferencia térmica se aprecia mejor al final del día o durante la noche, cuando la cubierta se está enfriando y el contraste entre zonas secas y húmedas es máximo. Una termografía hecha a mediodía con la cubierta uniformemente caliente aporta poco.",
        ],
      },
      {
        title: "Qué se entrega al final",
        content: [
          "Una inspección con dron no se entrega como un puñado de fotos sueltas. El resultado debe ser documentación procesada y utilizable para mantenimiento, ingeniería o peritaje.",
          "Ortomosaico de alta resolución. Una única imagen aérea a escala real de toda la cubierta, compuesta a partir de cientos de fotografías solapadas. Permite ampliar hasta distinguir una fijación suelta. Se entrega en formato estándar y, cuando el proyecto lo requiere, georreferenciado.",
          "Modelo digital de superficies. Mapa de elevación que muestra las pendientes reales de la cubierta. Es la forma objetiva de identificar dónde se acumula el agua y por qué.",
          "Nube de puntos y modelo 3D. Archivo tridimensional importable en CAD o en entornos BIM, útil para planificar reformas o para dimensionar una instalación fotovoltaica en cubierta.",
          "Mapa de patologías. El ortomosaico anotado, con cada anomalía marcada y numerada en su ubicación exacta. Es el documento que convierte la inspección en un plan de trabajo.",
          "Mapa térmico radiométrico, cuando se contrata termografía, con las zonas de humedad atrapada delimitadas.",
          "Informe técnico final. Documento con el estado general de la cubierta, una ficha por cada anomalía detectada con su fotografía, su gravedad y su localización, y las reparaciones ordenadas por prioridad.",
        ],
      },
      {
        title: "Por qué con dron",
        content: [
          "La razón principal no es económica, es de seguridad. Inspeccionar una cubierta por medios tradicionales significa poner personas en altura, con todo lo que eso conlleva: plan de seguridad, líneas de vida, y un riesgo que nunca llega a ser cero. Con dron ese riesgo desaparece por completo, y en cubiertas de fibrocemento con posible amianto la diferencia es todavía más clara.",
          "La segunda razón es de alcance. Un recorrido a pie documenta los puntos por los que pasa el técnico. Un vuelo fotogramétrico cubre la totalidad de la superficie de forma homogénea, incluidas las zonas por las que no es seguro caminar, y genera un registro completo sobre el que se puede volver a mirar meses después.",
          "La tercera es operativa. El montaje de medios de acceso condiciona la actividad de la nave: vallar zonas, bloquear accesos, detener equipos por seguridad. El dron opera desde el espacio aéreo sin interferir en la rutina de la instalación.",
          "Y hay una cuarta razón menos evidente: la repetibilidad. Al volar con planificación consistente, la inspección del año siguiente es directamente comparable con la anterior. Eso permite ver si una patología avanza o está estabilizada, que es información que ninguna fotografía suelta puede dar.",
        ],
      },
      {
        title: "Qué exigir a quien realiza la inspección",
        content: [
          "Volar un dron con fines profesionales en España está regulado. Antes de contratar, conviene comprobar que el operador está registrado en AESA, que el piloto dispone de la formación correspondiente a la categoría de la operación, y que existe seguro de responsabilidad civil en vigor.",
          "En el terreno técnico, pregunte por la resolución de la cámara térmica si va a contratar termografía, y por si el equipo dispone de RTK cuando necesite que los productos sean georreferenciados con precisión.",
          "Esa documentación no es burocracia: es lo que hace que el informe sea válido ante una compañía de seguros o en un expediente técnico.",
        ],
      },
    ],
    relatedServices: [
      { title: "Inspecciones técnicas con drones", slug: "inspecciones-drones" },
      { title: "Termografía aérea", slug: "termografia-drones" },
      { title: "Fotogrametría y modelos 3D", slug: "fotogrametria-drones" },
    ],
  },
];