import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import WhatsAppButton from "@/components/feature/WhatsAppButton";
import Reveal from "@/components/base/Reveal";
import BlogHero from "../components/BlogHero";
import { blogPosts } from "@/mocks/blog";
import useSEO from "@/hooks/useSEO";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.seoDescription,
        image: post.heroImage,
        datePublished: post.publishDate,
        author: {
          "@type": "Organization",
          name: "AVANZA DRONE",
        },
        publisher: {
          "@type": "Organization",
          name: "AVANZA DRONE",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://avanzadrone.es/blog/${post.slug}`,
        },
      }
    : undefined;

  useSEO({
    title: post?.seoTitle ?? "Blog | AVANZA DRONE",
    description:
      post?.seoDescription ??
      "Artículos técnicos sobre inspecciones, topografía, termografía y fotogrametría con drones.",
    keywords: post?.seoKeywords,
    canonicalPath: post ? `/blog/${post.slug}` : "/blog",
    ogImage: post?.heroImage,
    ogType: "article",
    jsonLd,
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        <BlogHero post={post} />

        <section className="py-16 md:py-24 bg-background-50">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <Reveal>
              <div className="space-y-5">
                {post.intro.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="text-base md:text-lg text-foreground-700 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {post.sections.map((section, i) => (
          <section
            key={section.title}
            className={`py-16 md:py-20 ${
              i % 2 === 0 ? "bg-background-950" : "bg-background-50"
            }`}
          >
            <div className="max-w-3xl mx-auto px-4 md:px-8">
              <Reveal>
                <h2
                  className={`text-2xl md:text-3xl font-heading font-bold ${
                    i % 2 === 0 ? "text-foreground-50" : "text-foreground-950"
                  }`}
                >
                  {section.title}
                </h2>
                <div className="mt-6 space-y-4">
                  {section.content.map((c) => (
                    <p
                      key={c.slice(0, 24)}
                      className={`text-base leading-relaxed ${
                        i % 2 === 0 ? "text-foreground-300" : "text-foreground-700"
                      }`}
                    >
                      {c}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        ))}

        {post.relatedServices.length > 0 && (
          <section className="py-16 md:py-24 bg-background-950">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50">
                  Servicios relacionados
                </h2>
                <p className="mt-3 text-foreground-400">
                  Estos servicios se relacionan directamente con el contenido de
                  este artículo.
                </p>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {post.relatedServices.map((service, i) => (
                  <Reveal key={service.slug} delay={i * 60}>
                    <Link
                      to={`/${service.slug}`}
                      className="group flex items-center justify-between gap-4 p-6 rounded-lg border border-background-800/60 bg-background-900 hover:border-background-700 transition-all h-full"
                    >
                      <span className="font-heading font-semibold text-foreground-50 group-hover:text-accent-400 transition-colors">
                        {service.title}
                      </span>
                      <span className="w-10 h-10 flex items-center justify-center rounded-md bg-accent-500/10 text-accent-400 group-hover:bg-accent-500 group-hover:text-background-950 transition-colors shrink-0">
                        <i className="ri-arrow-right-up-line text-lg"></i>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}