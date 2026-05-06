import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/shared/page-shell";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      authors: [post.author],
    }
  };
}

// Generate static paths for all known posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Better Markdown to HTML parser
  const formattedContent = post.content
    .split('\n')
    .map(line => {
      let processed = line.trim();
      if (!processed) return '';

      // Handle Headers
      if (processed.startsWith('## ')) {
        return `<h2 class="text-3xl font-[family-name:var(--font-display)] font-semibold text-slate-900 mt-12 mb-6 tracking-tight">${processed.replace('## ', '')}</h2>`;
      }

      // Handle Images: ![alt](url)
      const imgMatch = processed.match(/!\[(.*?)\]\((.*?)\)/);
      if (imgMatch) {
        return `
          <figure class="my-12 relative">
            <img src="${imgMatch[2]}" alt="${imgMatch[1]}" class="rounded-[2rem] w-full shadow-lg border border-slate-100" />
            <figcaption class="text-center text-sm text-slate-500 mt-4 italic">${imgMatch[1]}</figcaption>
          </figure>
        `;
      }

      // Handle Bold
      processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');

      return `<p class="text-[1.15rem] text-slate-700 leading-[1.7] mb-8 font-normal">${processed}</p>`;
    })
    .join('');

  const relatedPosts = getAllPosts()
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // ... (schemas stay same)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    author: {
      "@type": "Organization",
      name: post.author
    },
    datePublished: post.date,
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  return (
    <PageShell>
      {/* Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="relative overflow-hidden bg-[#fffdfc]">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,30,36,0.03),_transparent_40%)]" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-red-500/[0.02] blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <article className="relative container mx-auto px-6 py-16 sm:py-24 max-w-5xl">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-slate-400 mb-10 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
            <Link href="/" className="hover:text-[#b11e24] transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/blog" className="hover:text-[#b11e24] transition-colors">Blog</Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#b11e24]">{post.category}</span>
          </nav>
          
          {/* Header */}
          <header className="mb-12 max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 mb-8">
              <span className="px-4 py-1.5 bg-[#b11e24]/5 text-[#b11e24] rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>By {post.author}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-display)] font-semibold text-slate-900 tracking-tight leading-[1.05] mb-10">
              {post.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-normal">
              {post.excerpt}
            </p>
          </header>

          {/* Cover Image */}
          <div className="aspect-[21/9] w-full bg-slate-100 rounded-[2.5rem] overflow-hidden mb-20 relative shadow-2xl border border-white">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-20">
            {/* Main Content */}
            <div className="max-w-3xl">
              <div className="blog-content" dangerouslySetInnerHTML={{ __html: formattedContent }} />

              {/* FAQ Section */}
              {post.faqs && post.faqs.length > 0 && (
                <section className="mt-20 border-t border-slate-100 pt-16">
                  <h2 className="text-3xl font-[family-name:var(--font-display)] font-semibold text-slate-900 mb-10 tracking-tight">Common Questions</h2>
                  <div className="space-y-6">
                    {post.faqs.map((faq, index) => (
                      <div key={index} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{faq.question}</h3>
                        <p className="text-[1.05rem] text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-12">
              {/* Author Box */}
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Author</h4>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#b11e24] flex items-center justify-center text-white font-bold text-lg">
                    {post.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{post.author}</p>
                    <p className="text-xs text-slate-500">Matchmaking Expert</p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Related Articles</h4>
                  <div className="space-y-8">
                    {relatedPosts.map(p => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-slate-100">
                          <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <h5 className="font-bold text-slate-900 leading-snug group-hover:text-[#b11e24] transition-colors line-clamp-2">
                          {p.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* Call to Action */}
          <div className="mt-32 relative rounded-[3rem] overflow-hidden bg-slate-900 p-10 sm:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,30,36,0.2),_transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-white mb-6">Create your perfect biodata now</h2>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                Join thousands of families who have successfully created their matrimonial profiles with RishtaMaker.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#builder" className="inline-flex h-16 items-center justify-center gap-8 rounded-full bg-[#b11e24] px-10 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-[#8b1c31]">
                  Start Creating Free
                </Link>
                <Link href="/templates" className="inline-flex h-16 items-center justify-center rounded-full border border-slate-700 bg-white/5 px-10 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                  View Templates
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </PageShell>
  );
}
