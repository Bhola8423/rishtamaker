import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rishtamaker.in';

  const staticRoutes = [
    { url: '', changeFrequency: 'daily' as const, priority: 1 },
    { url: '/templates', changeFrequency: 'daily' as const, priority: 0.9 },
    { url: '/premium-templates', changeFrequency: 'daily' as const, priority: 0.95 },
    { url: '/premium-templates/floral-royal', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/biodata-for-boy', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/biodata-for-girl', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/hindi-biodata', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/marriage-biodata-format', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/simple-biodata-format', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/blog', changeFrequency: 'daily' as const, priority: 0.8 },
  ];

  const professions = ["engineer", "doctor", "teacher", "lawyer", "accountant", "software-developer", "business-owner"];
  const professionRoutes = professions.map(p => ({
    url: `/biodata-for/${p}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const sitemapRoutes: MetadataRoute.Sitemap = [...staticRoutes, ...professionRoutes].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Dynamically add all blog posts
  const posts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...sitemapRoutes, ...blogRoutes];
}
