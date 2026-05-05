import { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import { getPostsByCategory, getAllCategories } from "@/lib/blog";

export async function generateMetadata({ params }: { params: Promise<{ 'category-name': string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const decodedCategory = decodeURIComponent(resolvedParams['category-name']);
  // Format standard casing e.g. "tips & advice" -> "Tips & Advice"
  const titleCategory = decodedCategory.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${titleCategory} Blog Posts | RishtaMaker`,
    description: `Read the latest articles and guides filed under ${titleCategory}.`,
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    'category-name': cat.toLowerCase(),
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ 'category-name': string }> }) {
  const resolvedParams = await params;
  const decodedCategory = decodeURIComponent(resolvedParams['category-name']);
  const posts = getPostsByCategory(decodedCategory);
  const titleCategory = decodedCategory.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <PageShell>
      <div className="container mx-auto px-4 py-16 sm:py-24 max-w-5xl">
        
        <div className="mb-12">
          <Link href="/blog" className="inline-flex items-center text-[#b11e24] hover:underline font-medium mb-8">
            <svg className="w-4 h-4 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Back to All Posts
          </Link>
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-semibold text-slate-900 tracking-tight">
            Category: <span className="text-[#b11e24]">{titleCategory}</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Showing {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this category.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">No posts found</h2>
            <p className="text-slate-600 mt-2">Check back later for more content in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
              <article key={post.slug} className="group relative rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View Article</span>
                </Link>
                <div className="aspect-[16/9] w-full bg-slate-100 overflow-hidden relative">
                  <img src={post.coverImage} alt={post.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#b11e24] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[#b11e24] font-medium text-sm group-hover:underline">Read full article</span>
                    <svg className="w-4 h-4 text-[#b11e24] transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
}
