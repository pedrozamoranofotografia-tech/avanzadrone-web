import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ServiceDetail from "../pages/service/page";
import SectorDetail from "../pages/sector/page";
import AvisoLegal from "../pages/legal/AvisoLegal";
import Privacidad from "../pages/legal/Privacidad";
import Cookies from "../pages/legal/Cookies";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inspecciones-drones",
    element: <ServiceDetail slug="inspecciones-drones" />,
  },
  {
    path: "/termografia-drones",
    element: <ServiceDetail slug="termografia-drones" />,
  },
  {
    path: "/topografia-drones",
    element: <ServiceDetail slug="topografia-drones" />,
  },
  {
    path: "/fotogrametria-drones",
    element: <ServiceDetail slug="fotogrametria-drones" />,
  },
  {
    path: "/seguimiento-obras-drones",
    element: <ServiceDetail slug="seguimiento-obras-drones" />,
  },
  {
    path: "/inspeccion-placas-solares",
    element: <ServiceDetail slug="inspeccion-placas-solares" />,
  },
  {
    path: "/videos-con-drones",
    element: <ServiceDetail slug="videos-con-drones" />,
  },
  {
    path: "/drones-inmobiliarias",
    element: <ServiceDetail slug="drones-inmobiliarias" />,
  },
  {
    path: "/drones-construccion",
    element: <SectorDetail slug="drones-construccion" />,
  },
  {
    path: "/drones-industria",
    element: <SectorDetail slug="drones-industria" />,
  },
  {
    path: "/drones-energia",
    element: <SectorDetail slug="drones-energia" />,
  },
  {
    path: "/drones-ingenieria",
    element: <SectorDetail slug="drones-ingenieria" />,
  },
  {
    path: "/drones-inmobiliario",
    element: <SectorDetail slug="drones-inmobiliario" />,
  },
  {
    path: "/drones-agricultura",
    element: <SectorDetail slug="drones-agricultura" />,
  },
  {
    path: "/drones-audiovisual",
    element: <SectorDetail slug="drones-audiovisual" />,
  },
  {
    path: "/drones-administraciones",
    element: <SectorDetail slug="drones-administraciones" />,
  },
  {
    path: "/aviso-legal",
    element: <AvisoLegal />,
  },
  {
    path: "/privacidad",
    element: <Privacidad />,
  },
  {
    path: "/cookies",
    element: <Cookies />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;