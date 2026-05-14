import { PageShell } from "@/components/shared/page-shell";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MessageSquare, MapPin, Clock, ArrowRight, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | RishtaMaker",
  description: "Get in touch with RishtaMaker. We are here to help you with any questions or support you need regarding your marriage biodata.",
  alternates: {
    canonical: "https://rishtamaker.in/contact",
  },
};

export default function ContactUs() {
  return (
    <PageShell>
      <div className="bg-[#fffcfb] min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden border-b border-red-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,30,36,0.05),_transparent_50%)]" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b11e24]/10 bg-[#b11e24]/5 px-4 py-1.5 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-[#b11e24]" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b11e24]">
                    Get In Touch
                  </p>
                </div>
                <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-slate-900 leading-tight mb-6">
                  We'd Love to Hear From You
                </h1>
                <p className="text-xl text-slate-600 mb-6 font-light leading-relaxed">
                  Have questions about our templates, pricing, or need help creating your biodata? Our team is here to assist you.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center text-[#b11e24] flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Email Us</p>
                      <a href="mailto:support@rishtamaker.in" className="text-sm text-slate-500 hover:text-[#b11e24] transition-colors">support@rishtamaker.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center text-[#b11e24] flex-shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Live Support</p>
                      <p className="text-sm text-slate-500">Available on WhatsApp for premium users.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center text-[#b11e24] flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Response Time</p>
                      <p className="text-sm text-slate-500">We typically respond within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(177,30,36,0.08)] border border-red-50 p-4">
                  <Image
                    src="/images/contact_hero.png"
                    alt="Contact RishtaMaker Illustration"
                    fill
                    className="object-cover rounded-[2.5rem]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contact Form (Spans 2 columns) */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
                  <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900 mb-2">Send Us a Message</h2>
                  <p className="text-slate-500 text-sm font-light mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="John Doe"
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#b11e24] focus:ring-1 focus:ring-[#b11e24] outline-none transition-colors text-sm font-light"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="john@example.com"
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#b11e24] focus:ring-1 focus:ring-[#b11e24] outline-none transition-colors text-sm font-light"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="How can we help?"
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#b11e24] focus:ring-1 focus:ring-[#b11e24] outline-none transition-colors text-sm font-light"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Type your message here..."
                        className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#b11e24] focus:ring-1 focus:ring-[#b11e24] outline-none transition-colors text-sm font-light resize-none"
                      ></textarea>
                    </div>
                    
                    <button
                      type="button"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#b11e24] px-6 text-sm font-bold text-white shadow-[0_10px_30px_rgba(177,30,36,0.15)] transition-all hover:scale-105 hover:bg-[#8b1c31] active:scale-95"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8">
                {/* Support Card */}
                <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold mb-4">Premium Support</h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                    Purchased a premium template and need help editing or downloading? Premium users get priority WhatsApp support.
                  </p>
                  <a href="mailto:support@rishtamaker.in" className="inline-flex items-center gap-2 text-[#fffcfb] hover:underline text-sm font-medium">
                    Contact Premium Support
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* FAQ Prompt */}
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Quick Answers?</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">
                    Check out our expert advice and frequently asked questions on our landing pages.
                  </p>
                  <Link href="/biodata-for-boy" className="text-sm font-bold text-[#b11e24] hover:underline inline-flex items-center gap-1">
                    View FAQs <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
