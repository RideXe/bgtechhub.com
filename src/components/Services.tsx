"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  process: string[];
  timeline: string;
  priceRange: string;
  accentColor: string;
  iconColor: string;
}

const serviceDetails: ServiceDetail[] = [
  {
    id: "web-dev",
    accentColor: "from-blue-500 to-cyan-400",
    iconColor: "text-blue-500",
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>,
    title: "Web Development",
    tagline: "High-performance, responsive web architectures.",
    description: "Modern, scalable websites using Next.js. From high-converting landing pages to complex SaaS platforms.",
    features: ["Next.js & React", "SEO Optimization", "Responsive UX", "Headless CMS"],
    process: [], timeline: "2 – 8 weeks", priceRange: "₹15k – ₹1.5L+",
  },
  {
    id: "app-dev",
    accentColor: "from-indigo-500 to-purple-500",
    iconColor: "text-indigo-500",
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="3" strokeWidth="1.5" /><path strokeLinecap="round" d="M12 18h.01" strokeWidth="2" /></svg>,
    title: "App Development",
    tagline: "Native and cross-platform mobile experiences.",
    description: "We build intuitive mobile apps for iOS and Android that focus on performance and user retention.",
    features: ["React Native & Flutter", "Native Performance", "Store Optimization", "Real-time Sync"],
    process: [], timeline: "6 – 14 weeks", priceRange: "₹30k – ₹2.5L+",
  },
  {
    id: "ai-apps",
    accentColor: "from-emerald-500 to-teal-400",
    iconColor: "text-emerald-500",
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
    title: "AI Applications",
    tagline: "Integrate intelligence into your workflows.",
    description: "Leveraging LLMs and Machine Learning to automate complex tasks and provide smart user insights.",
    features: ["Custom Chatbots", "OpenAI/Gemini Integration", "Predictive Analytics", "NLP Pipelines"],
    process: [], timeline: "4 – 12 weeks", priceRange: "₹40k – ₹3L+",
  },
  {
    id: "data-products",
    accentColor: "from-orange-500 to-yellow-400",
    iconColor: "text-orange-500",
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "Data Driven Products",
    tagline: "Turn your raw data into actionable assets.",
    description: "We build dashboards and analytics engines that help you make decisions based on real-time evidence.",
    features: ["Interactive Dashboards", "Data Visualization", "ETL Pipelines", "Business Intelligence"],
    process: [], timeline: "4 – 10 weeks", priceRange: "₹25k – ₹1.8L",
  },
  {
    id: "ui-ux",
    accentColor: "from-pink-500 to-rose-400",
    iconColor: "text-pink-500",
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    title: "UI/UX Design",
    tagline: "User-centric designs that convert.",
    description: "Creating visually stunning and highly functional interfaces focused on the end-user journey.",
    features: ["User Research", "Wireframing", "High-Fidelity Prototypes", "Design Systems"],
    process: [], timeline: "2 – 6 weeks", priceRange: "₹10k – ₹80k",
  },
  {
    id: "logo-design",
    accentColor: "from-amber-500 to-orange-400",
    iconColor: "text-amber-500",
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
    title: "Logo Designing",
    tagline: "Crafting memorable brand identities.",
    description: "Minimalist and impactful logos that define your brand and stand the test of time.",
    features: ["Vector Files", "Brand Guidelines", "Typography Selection", "Social Media Kits"],
    process: [], timeline: "1 – 3 weeks", priceRange: "₹5k – ₹25k",
  },
  {
    id: "mvp-prototyping",
    accentColor: "from-violet-500 to-fuchsia-400",
    iconColor: "text-violet-500",
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Rapid Prototyping & MVPs",
    tagline: "Go from idea to market in record time.",
    description: "Validation-first development to help startups launch their Minimum Viable Product quickly.",
    features: ["Lean Development", "Core Feature Focus", "Speed-to-Market", "Scalable Foundations"],
    process: [], timeline: "3 – 6 weeks", priceRange: "₹20k – ₹1L",
  },
  {
    id: "digital-marketing",
    accentColor: "from-green-500 to-emerald-400",
    iconColor: "text-green-500",
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.167H3.38a1.76 1.76 0 010-3.52h1.056L6.583 3.94a1.76 1.76 0 013.417.592l1 1.35zm0 0h1a3 3 0 013 3v2.5a3 3 0 01-3 3h-1m4-7a2 2 0 000 4m2-6a4 4 0 000 8" /></svg>,
    title: "Digital Marketing & SEO",
    tagline: "Drive traffic and dominate search rankings.",
    description: "Strategic marketing campaigns and technical SEO to ensure your product gets the attention it deserves.",
    features: ["Keyword Research", "On-Page/Off-Page SEO", "Content Strategy", "Ad Campaign Management"],
    process: [], timeline: "Ongoing", priceRange: "₹8k – ₹50k/mo",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);
  const [bookingStatus, setBookingStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const closeModal = () => {
    setActiveService(null);
    document.body.style.overflow = "auto";
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBookingStatus("loading");
    const formData = new FormData(e.currentTarget);
    const payload = {
      serviceId: activeService?.id,
      serviceTitle: activeService?.title,
      customerName: formData.get("customerName"),
      email: formData.get("email"),
      budgetTier: formData.get("budgetTier"),
      context: formData.get("context"),
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setBookingStatus("success");
        setTimeout(() => { closeModal(); setBookingStatus("idle"); }, 2000);
      } else {
        setBookingStatus("error");
        setTimeout(() => setBookingStatus("idle"), 3000);
      }
    } catch (error) {
      setBookingStatus("error");
      setTimeout(() => setBookingStatus("idle"), 3000);
    }
  };

  return (
    <section id="services" className="relative py-32 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Our Services
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            <span>Services built for the</span> <br />
            <span className="text-emerald-500 italic">India opportunity</span>
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Every service is positioned for the current market. India's digital economy is moving fast — our delivery is faster.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {serviceDetails.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              onClick={() => { setActiveService(svc); document.body.style.overflow = "hidden"; }}
              className="group cursor-pointer"
            >
              <div className="relative h-44 mb-6 flex justify-center items-center">
                <div className={`absolute w-28 h-36 bg-gradient-to-br ${svc.accentColor} rounded-2xl rotate-[-10deg] opacity-15 group-hover:rotate-[-18deg] group-hover:scale-110 transition-all duration-500 shadow-xl translate-x-[-15px]`} />
                <div className={`absolute w-28 h-36 bg-gradient-to-br ${svc.accentColor} rounded-2xl rotate-[10deg] opacity-30 group-hover:rotate-[18deg] group-hover:scale-105 transition-all duration-500 shadow-xl translate-x-[15px]`} />
                <div className="relative w-32 h-40 bg-white border border-slate-100 rounded-2xl shadow-2xl flex items-center justify-center p-8 group-hover:shadow-emerald-500/10 transition-all duration-500">
                  <div className={`w-full h-full ${svc.iconColor} transition-all duration-500 transform group-hover:scale-110`}>
                    {svc.icon}
                  </div>
                </div>
              </div>

              <div className="text-center px-4">
                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-emerald-600 transition-colors">{svc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[220px] mx-auto line-clamp-2 font-medium">{svc.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - Updated size to max-w-4xl for better focus */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="fixed inset-0 bg-slate-950/80 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[85vh] z-10"
            >
              {/* Left Details Sidebar */}
              <div className="w-full md:w-[45%] bg-slate-900 p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${activeService.accentColor} opacity-20`} />
                <div className="relative z-10">
                  <button onClick={closeModal} className="mb-8 text-slate-400 hover:text-white transition-colors text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                    <span>✕</span> Close Project
                  </button>
                  <div className={`w-12 h-12 mb-6 ${activeService.iconColor} brightness-125`}>{activeService.icon}</div>
                  <h2 className="text-3xl font-black mb-4 leading-tight tracking-tighter">{activeService.title}</h2>
                  <p className="text-slate-400 text-xs mb-6 leading-relaxed font-medium">{activeService.description}</p>
                  <div className="space-y-3">
                    {activeService.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-[10px] font-bold text-slate-200">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activeService.accentColor}`} /> {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                  <span className="text-[9px] uppercase tracking-widest text-emerald-500 font-black">Estimated Value</span>
                  <div className="text-xl font-black mt-1">{activeService.priceRange}</div>
                </div>
              </div>

              {/* Right Form Area */}
              <div className="w-full md:w-[55%] p-8 md:p-12 bg-white overflow-y-auto">
                <div className="max-w-sm mx-auto">
                  <h4 className="text-xl font-black text-slate-900 mb-1">Initialize Project</h4>
                  <p className="text-slate-500 text-[12px] mb-8 font-medium">Briefly explain your vision and we'll reach out.</p>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-wider">Full Name</label>
                      <input name="customerName" type="text" placeholder="John Doe" required className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-xs focus:bg-white focus:border-emerald-500 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-wider">Email Address</label>
                      <input name="email" type="email" placeholder="john@company.com" required className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-xs focus:bg-white focus:border-emerald-500 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-wider">Budget Allocation</label>
                      <select name="budgetTier" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-xs focus:bg-white focus:border-emerald-500 outline-none appearance-none font-medium">
                        <option>Select Tier...</option>
                        <option>Seed (₹20k-₹50k)</option>
                        <option>Scale (₹50k-₹2L)</option>
                        <option>Enterprise (₹2L+)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-wider">Context</label>
                      <textarea name="context" rows={2} placeholder="Project scope..." className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-xs focus:bg-white focus:border-emerald-500 outline-none resize-none transition-all font-medium" />
                    </div>
                    <button type="submit" disabled={bookingStatus !== "idle"} className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${bookingStatus === 'success' ? 'bg-emerald-600' : 'bg-slate-900 hover:bg-emerald-500'} text-white shadow-lg`}>
                      {bookingStatus === 'loading' ? 'Encrypting...' : bookingStatus === 'success' ? 'Received' : 'Submit Application'}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}