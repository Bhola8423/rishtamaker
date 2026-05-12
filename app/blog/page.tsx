import { Metadata } from "next";
import { PageShell } from "@/components/shared/page-shell";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { BlogListing } from "@/components/blog/blog-listing";

export const metadata: Metadata = {
  title: "Marriage Biodata Blog | Tips, Guides & Trends | RishtaMaker",
  description: "Read the latest tips, guides, and trends for creating the perfect marriage biodata. Expert advice to help you find your perfect match.",
  alternates: {
    canonical: "https://rishtamaker.in/blog",
  },
  openGraph: {
    title: "Marriage Biodata Blog | Tips, Guides & Trends",
    description: "Read the latest tips, guides, and trends for creating the perfect marriage biodata.",
    url: "https://rishtamaker.in/blog",
    siteName: "RishtaMaker",
    images: [
      {
        url: "/images/blog-1.jpg", // Use one of the blog images as default
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata Blog | Tips, Guides & Trends",
    description: "Read the latest tips, guides, and trends for creating the perfect marriage biodata.",
    images: ["/images/blog-1.jpg"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <PageShell>
      <BlogListing posts={posts} categories={categories} />
    </PageShell>
  );
}
