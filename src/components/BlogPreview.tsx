"use client";

import React from 'react';
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
   }
];

export default function BlogPreview() {
   return (
      <section className="py-24 bg-slate-50 relative z-10">
         <div className="max-w-6xl mx-auto px-6 lg:px-12">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
               >
                  <Sparkles size={14} className="text-emerald-500 fill-emerald-500" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Tech Insights</span>
               </motion.div>

               <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  Latest from our <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent italic">Blog</span>
               </h2>
               <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Discover our newest articles, engineering deep-dives, and insights into the modern tech ecosystem.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {latestUpdates.map((post, i) => (
                  <motion.article 
                     key={post.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: i * 0.1 }}
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

            <div className="mt-16 text-center">
               <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-900/20"
               >
                  View All Posts <ArrowRight size={16} />
               </Link>
            </div>

         </div>
      </section>
   );
}
