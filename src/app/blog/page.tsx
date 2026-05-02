"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
   Sparkles,
   Rocket,
   ArrowRight,
   Clock,
   User,
   Cpu,
   Network,
   ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

const latestUpdates = [
   {
      id: 1,
      title: "The Future of Generative AI in Enterprise",
      excerpt: "Discover how large language models are transforming business operations and automating complex workflows across the IT landscape.",
      category: "AI Updates",
      date: "May 2, 2026",
      readTime: "5 min read",
      slug: "generative-ai-enterprise",
      icon: <Cpu size={14} className="text-emerald-500" />,
      cardImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90"
   },
   {
      id: 2,
      title: "Building Scalable SaaS Platforms in 2026",
      excerpt: "Explore modern architectural patterns for building resilient, multi-tenant SaaS applications using serverless technologies.",
      category: "Software Dev",
      date: "April 28, 2026",
      readTime: "7 min read",
      slug: "scalable-saas-platforms",
      icon: <Network size={14} className="text-blue-500" />,
      cardImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90"
   },
   {
      id: 3,
      title: "AI-Driven Cybersecurity: The New Frontier",
      excerpt: "Leveraging machine learning algorithms to proactively predict, detect, and neutralize cyber threats before they cause harm.",
      category: "AI & Security",
      date: "April 20, 2026",
      readTime: "6 min read",
      slug: "ai-driven-cybersecurity",
      icon: <ShieldCheck size={14} className="text-purple-500" />,
      cardImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90"
   },
   {
      id: 4,
      title: "Web Performance Optimization at Scale",
      excerpt: "Strategies for achieving sub-second load times and flawless Core Web Vitals on massive global e-commerce platforms.",
      category: "Engineering",
      date: "April 15, 2026",
      readTime: "8 min read",
      slug: "web-performance-optimization",
      icon: <Rocket size={14} className="text-orange-500" />,
      cardImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90"
   },
   {
      id: 5,
      title: "Mastering Next.js App Router for Modern UIs",
      excerpt: "A comprehensive guide to leveraging server components, dynamic routing, and suspense boundaries in Next.js 15+.",
      category: "Web Dev",
      date: "April 10, 2026",
      readTime: "10 min read",
      slug: "mastering-nextjs-app-router",
      icon: <Sparkles size={14} className="text-yellow-500" />,
      cardImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90"
   },
   {
      id: 6,
      title: "Rapid MVP Development Framework",
      excerpt: "How our software studio builds and scales Minimum Viable Products for tech startups in under six weeks.",
      category: "Startups",
      date: "April 5, 2026",
      readTime: "4 min read",
      slug: "rapid-mvp-development",
      icon: <Rocket size={14} className="text-pink-500" />,
      cardImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90"
   }
];

export default function BlogPage() {
   return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-emerald-100 overflow-x-hidden">
         <Navbar />

         <main className="pt-32 pb-24 relative">
            {/* Background Decorations */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
               <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-[120px] opacity-60" />
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60" />
            </div>

            {/* --- HEADER --- */}
            <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 relative z-10 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-emerald-100/50 border border-emerald-200 shadow-sm"
               >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">Latest Insights</span>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
               >
                  <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 mb-6">
                     Latest Updates in <br />
                     <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent italic">AI & Tech Innovations</span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed">
                     Explore our newest articles on artificial intelligence, modern web development, 
                     and the evolving landscape of digital product engineering.
                  </p>
               </motion.div>
            </section>

            {/* --- BLOG GRID --- */}
            <section className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {latestUpdates.map((post, i) => (
                     <motion.article 
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                        className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 flex flex-col"
                     >
                        {/* 3D Image Header */}
                        <div className="w-full h-56 relative overflow-hidden bg-slate-100">
                           <img 
                              src={post.cardImage} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                           <div className="absolute bottom-4 left-6">
                              <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-xl text-[10px] font-black uppercase tracking-widest text-slate-800 flex items-center gap-1.5">
                                 {post.icon} {post.category}
                              </span>
                           </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col pt-6">
                           <div className="flex items-center justify-end mb-4">
                              <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                 <Clock size={12} /> {post.readTime}
                              </div>
                           </div>

                           <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                              {post.title}
                           </h3>

                           <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed flex-1">
                              {post.excerpt}
                           </p>

                           <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                              <div className="flex items-center gap-2">
                                 <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                                    <User size={12} className="text-slate-400" />
                                 </div>
                                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">BG Team</span>
                              </div>
                              <Link
                                 href={`/blog/${post.slug}`}
                                 className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 uppercase tracking-widest hover:gap-2 transition-all"
                              >
                                 Read Article <ArrowRight size={12} />
                              </Link>
                           </div>
                        </div>
                     </motion.article>
                  ))}
               </div>
            </section>

            {/* Floating Icon Decorations */}
            <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute left-[10%] top-[20%] text-emerald-200 hidden lg:block"
            >
               <Sparkles size={48} strokeWidth={1} />
            </motion.div>
            <motion.div
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute right-[10%] bottom-[20%] text-blue-200 hidden lg:block"
            >
               <Rocket size={56} strokeWidth={1} />
            </motion.div>

         </main>

         <Footer />
      </div>
   );
}
