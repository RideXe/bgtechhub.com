import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';

const blogData: Record<string, any> = {
   "generative-ai-enterprise": {
      title: "The Future of Generative AI in Enterprise",
      category: "AI Updates",
      date: "May 2, 2026",
      readTime: "5 min read",
      heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
      content: [
         "Generative AI is no longer just a novelty; it is rapidly becoming a cornerstone of enterprise IT strategy. Large Language Models (LLMs) are moving from experimental playgrounds into production environments, automating everything from customer support to complex data analysis.",
         "One of the biggest shifts we are seeing in 2026 is the democratization of AI within organizations. Employees across various departments now have access to specialized AI agents that assist them in their daily tasks, significantly boosting productivity.",
         "However, this widespread adoption brings new challenges. Enterprises must navigate data privacy concerns, ensure the ethical use of AI, and manage the substantial computing resources required to run these models effectively."
      ],
      extraImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
   },
   "scalable-saas-platforms": {
      title: "Building Scalable SaaS Platforms in 2026",
      category: "Software Dev",
      date: "April 28, 2026",
      readTime: "7 min read",
      heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
      content: [
         "The architecture of Software as a Service (SaaS) platforms has undergone a massive transformation. In 2026, building scalable and resilient multi-tenant applications requires more than just provisioning virtual machines; it requires embracing serverless paradigms and edge-first delivery.",
         "One of the major shifts we've seen is the widespread adoption of micro-frontends paired with decentralized backend services. By decoupling the user interface and the business logic into independent deployment units, engineering teams can iterate faster and scale individual components based on real-world demand.",
         "Data isolation and security remain paramount in multi-tenant environments. Modern platforms are leveraging advanced database sharding and Row-Level Security (RLS) built natively into cloud databases like Supabase, ensuring that tenant data is strictly compartmentalized without sacrificing query performance."
      ],
      extraImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
   },
   "ai-driven-cybersecurity": {
      title: "AI-Driven Cybersecurity: The New Frontier",
      category: "AI & Security",
      date: "April 20, 2026",
      readTime: "6 min read",
      heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
      content: [
         "As cyber threats become more sophisticated, traditional rule-based security systems are falling behind. Attackers are using AI to automate vulnerability scanning and generate convincing phishing campaigns. To combat this, organizations must fight fire with fire.",
         "AI-driven cybersecurity systems leverage machine learning algorithms to establish a baseline of normal network behavior. Any anomaly, no matter how subtle, is instantly flagged. This proactive approach allows security teams to detect and neutralize threats before they can cause significant damage.",
         "Furthermore, AI is streamlining incident response. Automated playbooks can immediately isolate compromised systems and gather forensics, drastically reducing the time it takes to contain a breach."
      ],
      extraImage: "https://images.unsplash.com/photo-1614064641913-6b714165ea73?auto=format&fit=crop&w=800&q=80"
   },
   "web-performance-optimization": {
      title: "Web Performance Optimization at Scale",
      category: "Engineering",
      date: "April 15, 2026",
      readTime: "8 min read",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
      content: [
         "In today's fast-paced digital world, users expect instantaneous interactions. Studies show that a one-second delay in page load time can lead to a significant drop in conversions. For massive e-commerce platforms, optimizing web performance is no longer a luxury—it's a critical business necessity.",
         "Our latest deep dive explores advanced techniques to conquer Core Web Vitals. We discuss the importance of optimizing First Contentful Paint (FCP) and Largest Contentful Paint (LCP) through strategic asset delivery, advanced caching mechanisms, and lazy loading off-screen images.",
         "Furthermore, we examine the role of modern JavaScript frameworks in minimizing Time to Interactive (TTI). By effectively code-splitting and deferring non-essential scripts, engineering teams can deliver seamless, high-performance web experiences."
      ],
      extraImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
   },
   "mastering-nextjs-app-router": {
      title: "Mastering Next.js App Router for Modern UIs",
      category: "Web Dev",
      date: "April 10, 2026",
      readTime: "10 min read",
      heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
      content: [
         "The Next.js App Router has revolutionized how we build React applications. By shifting the paradigm towards Server Components by default, it offers a more mental model for separating data fetching from interactive client-side logic.",
         "In this comprehensive guide, we dissect the App Router's architecture. We explore how nested layouts and suspense boundaries enable developers to create complex, highly optimized UIs without the heavy JavaScript bundle sizes associated with traditional SPAs.",
         "We also share our best practices for migrating existing applications to the App Router, highlighting common pitfalls and offering solutions to ensure a smooth transition and maximize performance gains."
      ],
      extraImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
   },
   "rapid-mvp-development": {
      title: "Rapid MVP Development Framework",
      category: "Startups",
      date: "April 5, 2026",
      readTime: "4 min read",
      heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
      content: [
         "For early-stage startups, speed to market is everything. Building a Minimum Viable Product (MVP) isn't about creating a perfect product; it's about validating assumptions and learning from real user feedback as quickly as possible.",
         "Our software studio has refined a battle-tested rapid MVP development framework. By leveraging modern tech stacks like Next.js, Supabase, and Tailwind CSS, we significantly reduce development cycles. We focus on core functionalities and postpone 'nice-to-have' features.",
         "This approach allows founders to launch in under six weeks. We share our blueprint for scoping, designing, and building MVPs that attract early adopters and secure crucial initial funding."
      ],
      extraImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
   }
};

export default async function BlogPostPage({
   params,
}: {
   params: Promise<{ slug: string }>
}) {
   const { slug } = await params;
   const post = blogData[slug];

   if (!post) {
      return (
         <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center">
            <h1 className="text-4xl font-black text-slate-900 mb-4">Article Not Found</h1>
            <Link href="/blog" className="text-emerald-600 font-bold hover:underline">
               Return to Blog
            </Link>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-emerald-100 overflow-x-hidden">
         <Navbar />

         <main className="pt-32 pb-24">
            <article className="max-w-4xl mx-auto px-6 lg:px-12">
               
               {/* Back Link */}
               <Link 
                  href="/blog" 
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-bold text-sm mb-10 transition-colors"
               >
                  <ArrowLeft size={16} /> Back to all articles
               </Link>

               {/* Header Info */}
               <div className="mb-10">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                     <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <Tag size={12} /> {post.category}
                     </span>
                     <div className="flex items-center gap-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                     </div>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 mb-8">
                     {post.title}
                  </h1>

                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                        <User size={20} className="text-slate-500" />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-slate-900">BG Team</p>
                        <p className="text-xs font-medium text-slate-500">Tech Editors</p>
                     </div>
                  </div>
               </div>

               {/* Hero Image */}
               <div className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-slate-200/50">
                  <img 
                     src={post.heroImage} 
                     alt={post.title}
                     className="w-full h-full object-cover"
                  />
               </div>

               {/* Content */}
               <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-p:font-medium prose-p:leading-relaxed prose-p:text-slate-600">
                  <p className="text-xl text-slate-800 font-medium mb-8 leading-relaxed">
                     {post.content[0]}
                  </p>
                  
                  <div className="my-12 w-full aspect-video rounded-[2rem] overflow-hidden shadow-lg border border-slate-100">
                     <img 
                        src={post.extraImage} 
                        alt="Detailed illustration"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                     />
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6">Diving Deeper</h2>
                  <p className="mb-6">{post.content[1]}</p>
                  
                  <h3 className="text-xl font-black text-slate-900 mt-10 mb-4">Looking Ahead</h3>
                  <p className="mb-6">{post.content[2]}</p>
               </div>
            </article>
         </main>

         <Footer />
      </div>
   );
}
