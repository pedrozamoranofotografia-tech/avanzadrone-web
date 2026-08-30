import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";
import prerender from "@prerenderer/rollup-plugin";
// import { readdyJsxRuntimeProxyPlugin } from "./vite.jsx-runtime-proxy";

const base = process.env.BASE_PATH || "/";
const isPreview = process.env.IS_PREVIEW ? true : false;
//const proxyPlugins = isPreview ? [readdyJsxRuntimeProxyPlugin()] : [];

// https://vite.dev/config/
export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
    __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ""),
    __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ""),
    __READDY_AI_DOMAIN__: JSON.stringify(process.env.READDY_AI_DOMAIN || ""),
  },

  plugins: [
    // ...proxyPlugins,
    react(),

    AutoImport({
      imports: [
        {
          react: [
            ["default", "React"],
            "useState",
            "useEffect",
            "useContext",
            "useReducer",
            "useCallback",
            "useMemo",
            "useRef",
            "useImperativeHandle",
            "useLayoutEffect",
            "useDebugValue",
            "useDeferredValue",
            "useId",
            "useInsertionEffect",
            "useSyncExternalStore",
            "useTransition",
            "startTransition",
            "lazy",
            "memo",
            "forwardRef",
            "createContext",
            "createElement",
            "cloneElement",
            "isValidElement",
          ],
        },
        {
          "react-router-dom": [
            "useNavigate",
            "useLocation",
            "useParams",
            "useSearchParams",
            "Link",
            "NavLink",
            "Navigate",
            "Outlet",
          ],
        },
        // React i18n
        {
          "react-i18next": ["useTranslation", "Trans"],
        },
      ],
      dts: true,
    }),

    prerender({
      routes: [
        "/",

        "/por-que-elegirnos",
        "/contacto",

        "/aviso-legal",
        "/politica-privacidad",
        "/politica-cookies",

        "/bodas",

        "/bodas/aldea-santillana",
        "/bodas/cigarral-de-las-mercedes",
        "/bodas/araceli-etxemendi",
        "/bodas/castillo-de-vinuelas",
        "/bodas/cigarral-del-angel-custodio",
        "/bodas/mirador-cuatro-vientos",
        "/bodas/castillo-de-guadamur",
        "/bodas/complejo-la-ciguena",
        "/bodas/jardin-el-botero",
        "/bodas/finca-la-alqueria",
        "/bodas/hacienda-jacaranda",
        "/bodas/hacienda-los-santos",
        "/bodas/antiguo-convento-boadilla",
        "/bodas/penarrubia-araceli",
        "/bodas/valquijancho-araceli",

        "/fotografo-bodas-toledo",

        "/servicios/prebodas",
        "/servicios/postbodas",
        "/servicios/videos-bodas",
        "/servicios/fotomaton",
        "/servicios/photo-booth-360",
        "/servicios/coche-clasico-bodas",
        "/servicios/video-dron-bodas",

        "/portfolio/embarazo",
        "/portfolio/bebes-y-ninos",
        "/portfolio/comuniones",
        "/portfolio/familias",

        "/blog",
        "/ideas-para-regalar-en-san-valetin",
        "/regalos-de-boda",
        "/ceremonias-alternativas",
        "/el-color-de-vuestra-boda",
        "/ideas-las-fotos-exterior-boda",
        "/tendencias-boda-2022",
      ],

      renderer: "@prerenderer/renderer-puppeteer",

      rendererOptions: {
        renderAfterTime: 3000,
        maxConcurrentRoutes: 2,
        launchOptions: {
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
      },
    }),
  ],

  base,

  build: {
    sourcemap: true,
    outDir: "out",
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
