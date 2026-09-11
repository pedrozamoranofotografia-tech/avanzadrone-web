import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import WhatsAppButton from "@/components/feature/WhatsAppButton";
import Reveal from "@/components/base/Reveal";
import PostCard from "./components/PostCard";
import { blogPosts } from "@/mocks/blog";
import useSEO from "@/hooks/useSEO";

export default function Blog() {
  useSEO({
    title: "Blog | AVANZA DRONE",
    description:
      "Artículos técnicos sobre inspecciones, topografía, termografía y fotogrametría con drones.",
    keywords:
      "blog drones, artículos técnicos drones, inspección con drones, topografía drones, AVANZA DRONE",
    canonicalPath: "/blog",
  });

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        <section className="relative min-h-[320px] md:min-h-[400px] flex items-end overflow-hidden bg-background-950">
          <div className="absolute inset-0 bg-gradient-to-b from-background-900 via-background-950 to-background-950"></div>
          <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
            <nav
              aria-label="Miga de pan"
              className="flex items-center gap-2 text-xs text-foreground-400"
            >
              <Link to="/" className="hover:text-foreground-100 transition-colors">
                Inicio
              </Link>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-accent-400">Blog</span>
            </nav>

            <h1 className="mt-4 text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              Blog
            </h1>
            <p className="mt-3 text-base md:text-lg text-foreground-300 max-w-2xl">
              Artículos técnicos sobre inspecciones, topografía, termografía y
              fotogrametría con drones.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {blogPosts.length === 0 ? (
              <Reveal>
                <div className="rounded-lg border border-background-200 bg-background-100 px-6 py-20 text-center">
                  <span className="w-14 h-14 flex items-center justify-center rounded-full bg-accent-500/10 text-accent-500 mx-auto">
                    <i className="ri-article-line text-2xl"></i>
                  </span>
                  <h2 className="mt-6 font-heading font-semibold text-xl text-foreground-950">
                    Próximamente
                  </h2>
                  <p className="mt-2 text-foreground-600 max-w-md mx-auto">
                    Estamos preparando artículos técnicos. Vuelve pronto para
                    descubrir contenido sobre inspecciones, topografía,
                    termografía y fotogrametría con drones.
                  </p>
                </div>
              </Reveal>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 60}>
                    <PostCard post={post} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}