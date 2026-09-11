import { Link } from "react-router-dom";
import type { BlogPost } from "@/mocks/blog";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-background-200 bg-background-100 hover:border-background-300 transition-all h-full"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={post.heroImage}
          alt={`${post.title} - AVANZA DRONE`}
          title={`${post.title} - AVANZA DRONE`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-center gap-3 text-xs text-foreground-500">
          <span className="flex items-center gap-1.5">
            <i className="ri-calendar-line text-accent-500"></i>
            {post.publishDate}
          </span>
          <span className="flex items-center gap-1.5">
            <i className="ri-time-line text-accent-500"></i>
            {post.readTime}
          </span>
        </div>
        <h2 className="mt-3 font-heading font-semibold text-lg text-foreground-950 leading-snug group-hover:text-primary-600 transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 whitespace-nowrap">
          Leer artículo
          <i className="ri-arrow-right-line"></i>
        </span>
      </div>
    </Link>
  );
}