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

  // Very basic Markdown to HTML parser for our simple mock data structure
  const formattedContent = post.content
    .split('\n')
    .map(line => {
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">${line.replace('## ', '')}</h2>`;
      } else if (line.trim().length > 0) {
        return `<p class="text-slate-700 leading-relaxed mb-6">${line}</p>`;
      }
      return '';
    })
    .join('');

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

      <article className="container mx-auto px-4 py-16 sm:py-24 max-w-4xl">
        
        {/* Breadcrumbs (SEO Friendly) */}
        <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="hover:text-[#b11e24] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#b11e24] transition-colors">Blog</Link>
          <span>/</span>
          <Link href={`/category/${post.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:text-[#b11e24] transition-colors">
            {post.category}
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate">{post.title}</span>
        </nav>
        
        {/* Meta & Header */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <Link href={`/category/${post.category.toLowerCase()}`} className="px-3 py-1 bg-rose-50 text-[#b11e24] rounded-full font-medium hover:bg-rose-100 transition-colors">
              {post.category}
            </Link>
            <span>•</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            <span>•</span>
            <span>By {post.author}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-semibold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Cover Image */}
        <div className="aspect-[2/1] w-full bg-slate-100 rounded-3xl overflow-hidden mb-12 relative">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none mb-16" dangerouslySetInnerHTML={{ __html: formattedContent }} />

        {/* FAQ Section */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="mb-16 border-t border-slate-200 pt-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl p-8 sm:p-12 border border-rose-100 text-center mb-16 shadow-inner">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Create Your Biodata?</h2>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            Choose from our premium templates and generate your professional marriage biodata in less than 2 minutes.
          </p>
          <Link href="/#builder" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#b11e24] px-8 text-base font-semibold text-white shadow-[0_10px_25px_rgba(177,30,36,0.3)] transition-all hover:scale-105 hover:bg-[#8b1c31]">
            Create Biodata Now
          </Link>
        </div>

        {/* Tags footer */}
        <div className="pt-8 border-t border-slate-200">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Tags in this article</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Link key={tag} href={`/tag/${tag.toLowerCase()}`} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-600 hover:border-[#b11e24] hover:text-[#b11e24] transition-colors">
                #{tag}
              </Link>
            ))}
            <div className="mt-16 rounded-[2.5rem] bg-slate-900 p-8 text-center text-white md:p-12">
              <h3 className="mb-4 text-2xl font-bold">Ready to create your own biodata?</h3>
              <p className="mb-8 text-slate-400">Join thousands of others who have created professional biodatas with Rishtamaker.</p>
              <Link
                href="/#builder"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#b11e24] px-8 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#8b1c31]"
              >
                Create My Biodata Now →
              </Link>
            </div>
          </div>
        </div>

      </article>
    </PageShell>
  );
}
