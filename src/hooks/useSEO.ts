import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
}

function ensureMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function ensureProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function useSEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage,
  ogType = "website",
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    ensureMeta("description", description);
    if (keywords) ensureMeta("keywords", keywords);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}${canonicalPath}`);

    ensureProperty("og:type", ogType);
    ensureProperty("og:title", title);
    ensureProperty("og:description", description);
    ensureProperty("og:url", `${window.location.origin}${canonicalPath}`);
    ensureProperty("og:locale", "es_ES");
    ensureProperty("og:site_name", "AVANZA DRONE");
    if (ogImage) {
      ensureProperty("og:image", ogImage);
      ensureProperty("og:image:alt", title);
    }

    ensureMeta("twitter:card", "summary_large_image");
    ensureMeta("twitter:title", title);
    ensureMeta("twitter:description", description);
    if (ogImage) {
      ensureMeta("twitter:image", ogImage);
    }

    const scriptId = "page-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, keywords, canonicalPath, ogImage, ogType, jsonLd]);
}