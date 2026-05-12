"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";
import { Search, ArrowRight, ChevronRight, Home } from "lucide-react";

interface BlogListingProps {
  posts: BlogPost[];
  categories: string[];
}

export function BlogListing({ posts, categories }: BlogListingProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0];
  const regularPosts = filteredPosts.filter((post) => post.slug !== featuredPost.slug);

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 max-w-7xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
        <Link href="/" className="flex items-center gap-1 hover:text-[#b11e24] transition-colors">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-slate-900 font-semibold">Blog</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-semibold text-slate-900 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b11e24] to-[#e44b52]">Blog</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Tips, guides, and inspiration for your matrimonial journey.
        </p>
      </div>

      {/* Featured Post */}
      {selectedCategory === "All" && searchQuery === "" && featuredPost && (
        <div className="mb-16">
          <article className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all">
            <Link href={`/blog/${featuredPost.slug}`} className="absolute inset-0 z-10">
              <span className="sr-only">View Article</span>
            </Link>
            <div className="aspect-[16/10] lg:aspect-auto lg:h-full w-full bg-slate-100 overflow-hidden relative">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#b11e24] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 font-medium">
                <span>{featuredPost.category}</span>
                <span>•</span>
                <time dateTime={featuredPost.date}>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#b11e24] transition-colors leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 text-base mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-2 mt-auto text-[#b11e24] font-semibold group-hover:underline">
                <span>Read article</span>
                <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === "All"
                ? "bg-[#b11e24] text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:border-[#b11e24] hover:text-[#b11e24]"
            }`}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#b11e24] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#b11e24] hover:text-[#b11e24]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 rounded-full border border-slate-200 focus:border-[#b11e24] focus:ring-4 focus:ring-[#b11e24]/5 outline-none transition-all text-sm"
          />
          <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(selectedCategory !== "All" || searchQuery !== "" ? filteredPosts : regularPosts).map((post) => (
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
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#b11e24] transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-100 text-[#b11e24] font-semibold text-sm group-hover:underline">
                  <span>Read article</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-slate-500 font-medium">No articles found matching your search.</p>
        </div>
      )}

      {/* Internal Links Section */}
      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Ready to Create Your Own Biodata?
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Use our professional templates to create a stunning marriage biodata in minutes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/templates" className="px-6 py-3 bg-[#b11e24] text-white rounded-full font-semibold hover:bg-[#8b1c31] transition-all shadow-sm">
            Browse Templates
          </Link>
          <Link href="/marriage-biodata-format" className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold hover:border-[#b11e24] hover:text-[#b11e24] transition-all">
            View Formats
          </Link>
        </div>
      </div>
    </div>
  );
}
