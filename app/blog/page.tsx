import { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllCategories, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Marriage Biodata Blog | Tips, Guides & Trends",
  description: "Read the latest tips, guides, and trends for creating the perfect marriage biodata. Expert advice from RishtaMaker.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogListingPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <PageShell>
      <div className="container mx-auto px-4 py-16 sm:py-24 max-w-7xl">
        
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-semibold text-slate-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b11e24] to-[#e44b52]">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Tips, guides, and inspiration for your matrimonial journey.
          </p>
        </div>

        {/* Categories Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Link href="/blog" className="px-5 py-2 bg-[#b11e24] text-white rounded-full text-sm font-medium shadow-sm transition-all hover:bg-[#8b1c31]">
            All Posts
          </Link>
          {categories.map(category => (
            <Link key={category} href={`/category/${category.toLowerCase()}`} className="px-5 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#b11e24] hover:text-[#b11e24] transition-all">
              {category}
            </Link>
          ))}
        </div>

        {/* Blog Grid: 3 Cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.slug} className="group relative flex flex-col h-full rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1">
              <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">View Article</span>
              </Link>
              <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#b11e24] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#b11e24] transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-100">
                  <span className="text-[#b11e24] font-semibold text-sm group-hover:underline">Read article</span>
                  <svg className="w-4 h-4 text-[#b11e24] transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
