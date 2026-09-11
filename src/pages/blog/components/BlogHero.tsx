import { Link } from "react-router-dom";
import type { BlogPost } from "@/mocks/blog";

export default function BlogHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative min-h-[420px] md:min-h-[520px] flex items-end overflow-hidden bg-background-950">
      <div className="absolute inset-0">
        <img
          src={post.heroImage}
          alt={`${post.title} - AVANZA DRONE`}
          title={`${post.title} - AVANZA DRONE`}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background-950"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <nav
          aria-label="Miga de pan"
          className="flex items-center gap-2 text-xs text-foreground-400"
        >
          <Link to="/" className="hover:text-foreground-100 transition-colors">
            Inicio
          </Link>
          <i className="ri-arrow-right-s-line"></i>
          <Link
            to="/blog"
            className="hover:text-foreground-100 transition-colors"
          >
            Blog
          </Link>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-accent-400">{post.title}</span>
        </nav>

        <h1 className="mt-4 text-3xl md:text-5xl font-heading font-bold text-white leading-tight max-w-3xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-foreground-300">
          <span className="flex items-center gap-2">
            <i className="ri-calendar-line text-accent-400"></i>
            {post.publishDate}
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-time-line text-accent-400"></i>
            {post.readTime}
          </span>
        </div>
      </div>
    </section>
  );
}