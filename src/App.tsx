/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Menu, X, Phone, Mail, Instagram, Facebook, Youtube, Send, 
  CheckCircle2, TrendingUp, Users, Sprout, ShieldCheck, 
  Calculator, BookOpen, Clock, ShoppingCart, Award, ArrowRight,
  ExternalLink, ChevronDown, ChevronUp, MessageCircle, MapPin, Briefcase,
  Play, Download, Layers, Shield, Zap, Info, Quote, Home, Waves
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';

// --- Constants & Types ---

const ProductionSOP = () => {
  const steps = [
    { title: "Phase-I Composting", days: "8–10 Days", temp: "60–70°C", param: "C:N Ratio Control", icon: Layers },
    { title: "Phase-II Pasteurization", days: "5–7 Days", temp: "57–60°C", param: "Ammonia Level < 10ppm", icon: Shield },
    { title: "Filling & Spawning", days: "1–2 Days", temp: "25–28°C", param: "Sterile Handling", icon: Sprout },
    { title: "Spawn Run", days: "14–16 Days", temp: "24–26°C", param: "90% Rel. Humidity", icon: Clock },
    { title: "Casing Application", days: "1–2 Days", temp: "22–24°C", param: "Soil pH 7.5-8.0", icon: Layers },
    { title: "Pinning Initiation", days: "7–10 Days", temp: "16–18°C", param: "CO2 Flush < 800ppm", icon: Zap },
    { title: "Cropping", days: "25–30 Days", temp: "14–16°C", param: "Peak Harvest Quality", icon: ShoppingCart },
  ];

  return (
    <section id="sop" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <div className="badge mx-auto mb-4">60-Day Cycle</div>
          <h2 className="mb-4 text-[18px] md:text-3xl uppercase tracking-tight">Production Cycle <span className="gradient-text">SOPs</span></h2>
          <p className="max-w-xl mx-auto text-[13px] md:text-base text-slate-400">Standardized operational procedures for high-yield button mushroom output.</p>
        </div>

        {/* Desktop View: Horizontal Scroll / Cards */}
        <div className="hidden md:flex gap-6 overflow-x-auto pb-12 snap-x scrollbar-hide">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              className="min-w-[300px] snap-center glass border border-white/5 p-6 rounded-3xl relative group transition-all"
            >
              <div className="absolute top-0 right-0 p-4 font-black text-slate-800 text-4xl -z-10 group-hover:text-primary-start/10 transition-colors">{i + 1}</div>
              <div className="w-12 h-12 rounded-2xl bg-primary-start/10 flex items-center justify-center mb-6 text-primary-start group-hover:bg-primary-start group-hover:text-white transition-all">
                <s.icon size={20} />
              </div>
              <h3 className="text-white font-bold text-lg mb-4">{s.title}</h3>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">Duration</span>
                  <span className="text-white">{s.days}</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">Temperature</span>
                  <span className="text-accent">{s.temp}</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">Key Param</span>
                  <span className="text-green-400">{s.param}</span>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-primary-start hover:border-primary-start transition-all">
                View Detailed SOP
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Accordion (Collapsible) */}
        <div className="md:hidden space-y-2">
          {steps.map((s, i) => (
            <Collapsible key={i} title={`${i + 1}. ${s.title}`}>
              <div className="grid grid-cols-2 gap-4 py-2">
                <div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Duration</div>
                  <div className="text-white font-bold">{s.days}</div>
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Temp</div>
                  <div className="text-accent font-bold">{s.temp}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Key Parameter</div>
                  <div className="text-green-400 font-bold">{s.param}</div>
                </div>
              </div>
              <button className="w-full mt-4 py-3 rounded-xl btn-primary text-[10px] font-bold">
                View SOP PDF
              </button>
            </Collapsible>
          ))}
        </div>

        {/* Progress Timeline Indicator */}
        <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto px-4">
          {steps.map((_, i) => (
            <React.Fragment key={i}>
              <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="flex-1 h-px bg-white/10 mx-2"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value, duration = 1.5 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      // Check if it's a number or a range
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      if (!isNaN(numericValue) && !value.includes('–')) {
        let start = 0;
        const end = numericValue;
        const totalFrames = Math.min(60, duration * 60);
        let frame = 0;
        
        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const current = Math.round(end * progress);
          
          if (frame === totalFrames) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            // Keep the prefix/suffix if it exists (like < 1000)
            const prefix = value.match(/^[^\d]*/)?.[0] || "";
            setDisplayValue(`${prefix}${current}`);
          }
        }, 1000 / 60);
        
        return () => clearInterval(timer);
      } else if (value.includes('–')) {
        // For ranges like 14–18, let's just fade it in or do a simpler animation
        setDisplayValue(value);
      } else {
        setDisplayValue(value);
      }
    }
  }, [value, isInView, duration]);

  return (
    <motion.span 
      ref={nodeRef}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="text-2xl md:text-4xl font-bold text-white tracking-tighter"
    >
      {displayValue}
    </motion.span>
  );
};

const CriticalParameters = () => {
  const params = [
    { label: "Production Temp", value: "14–18", unit: "°C", icon: Zap, color: "text-blue-400" },
    { label: "Air Humidity", value: "85–95", unit: "%", icon: Waves, color: "text-cyan-400" },
    { label: "CO₂ Level", value: "< 1000", unit: "ppm", icon: Info, color: "text-green-400" },
    { label: "Spawn Run Temp", value: "24–26", unit: "°C", icon: TrendingUp, color: "text-orange-400" },
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="badge mx-auto mb-4">Precision Metrics</div>
          <h2 className="mb-4 text-[18px] md:text-3xl uppercase tracking-tight">Critical <span className="gradient-text">Parameters</span></h2>
          <p className="text-slate-400 text-[13px] md:text-base">Scientific boundaries for consistent commercial yields.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {params.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ translateZ: 20 }}
              className="glass p-6 md:p-10 rounded-[2.5rem] border border-white/5 text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-start group-hover:text-white transition-all">
                <p.icon size={22} className={p.color} />
              </div>
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">{p.label}</div>
              <div className="flex items-baseline justify-center gap-1">
                <Counter value={p.value} />
                <span className="text-[14px] font-black text-slate-500">{p.unit}</span>
              </div>
              <div className="mt-4 h-1 w-12 bg-white/10 rounded-full mx-auto overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  className={`h-full bg-linear-to-r ${i % 2 === 0 ? 'from-primary-start to-primary-mid' : 'from-accent to-brand-purple'}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EcosystemFlow = () => {
  const steps = [
    { label: "Raw Material", icon: ShoppingCart },
    { label: "Compost Prep", icon: Layers },
    { label: "Production Room", icon: Home },
    { label: "Precision Harvest", icon: Sprout },
    { label: "Cold Chain", icon: Zap },
    { label: "Market Linkage", icon: TrendingUp },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="badge mx-auto mb-4">Operation Model</div>
          <h2 className="mb-4 text-[18px] md:text-3xl uppercase tracking-tight">Farming <span className="gradient-text">Ecosystem Flow</span></h2>
        </div>

        <div className="flex items-center gap-4 md:gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-4 min-w-[140px] md:min-w-[160px] snap-center shrink-0"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl glass border border-white/10 flex items-center justify-center text-primary-start shadow-xl">
                  <s.icon size={32} />
                </div>
                <span className="text-[11px] md:text-[14px] font-bold text-slate-300 text-center uppercase tracking-wider">{s.label}</span>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="shrink-0 flex items-center justify-center mx-2 md:mx-4">
                  <ArrowRight size={24} className="text-white/10" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const MushroomComparison = () => {
  const mushrooms = [
    { name: "Button", difficulty: "High Difficulty", speed: "Industrial", color: "bg-blue-500", text: "Premium market share, controlled environment setup." },
    { name: "Oyster", difficulty: "Low–Medium", speed: "Easy Growth", color: "bg-green-500", text: "Low investment start, versatile substrate requirements." },
    { name: "Paddy Straw", difficulty: "Seasonal", speed: "High Velocity", color: "bg-yellow-500", text: "Regional demand focus, high temperature preference." },
    { name: "Shiitake", difficulty: "Premium", speed: "Export Grade", color: "bg-amber-700", text: "High specialty value, intensive cycle management." },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="badge mx-auto mb-4">Product Variants</div>
          <h2 className="mb-4 text-[18px] md:text-3xl uppercase tracking-tight">Mushroom <span className="gradient-text">Genetics Table</span></h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block glass border border-white/5 rounded-3xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Mushroom Type</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Difficulty</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Complexity</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Market Segment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mushrooms.map((m, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${m.color}`}></div>
                      <span className="font-bold text-white text-sm">{m.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-[12px] text-slate-400 font-medium">{m.difficulty}</td>
                  <td className="px-8 py-5 text-[12px] text-slate-400 font-medium">{m.speed}</td>
                  <td className="px-8 py-5 text-[12px] text-slate-500 leading-relaxed font-medium">{m.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Swipe Cards */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 snap-x scrollbar-hide">
          {mushrooms.map((m, i) => (
            <div key={i} className="min-w-[280px] snap-center glass border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-4 h-4 rounded-full ${m.color} shadow-lg shadow-black/50`}></div>
                <h3 className="text-white font-bold text-lg">{m.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[8px] font-black text-slate-500 uppercase mb-1">Difficulty</div>
                  <div className="text-[11px] font-bold text-slate-300">{m.difficulty}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[8px] font-black text-slate-500 uppercase mb-1">Scale</div>
                  <div className="text-[11px] font-bold text-slate-300">{m.speed}</div>
                </div>
              </div>
              <p className="text-[13px] text-slate-400 leading-relaxed font-medium">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyProfile = () => {
  return (
    <section id="profile" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass border border-white/10 rounded-[3rem] p-8 md:p-12 relative shadow-2xl group overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-start/20 blur-[100px] rounded-full group-hover:bg-primary-start/30 transition-all"></div>
            
            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-[2rem] gradient-bg flex items-center justify-center text-white font-black text-3xl shadow-2xl">
                O
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Organic Mushroom Farm</h2>
                <p className="text-primary-start font-black text-[10px] uppercase tracking-[0.3em]">Premium Infrastructure Partner</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Founder", value: "Tanish Soni" },
                { label: "Established", value: "2021" },
                { label: "Business Type", value: "Exporter & Service Provider" },
                { label: "Base", value: "Central India" },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.label}</div>
                  <div className="text-sm font-bold text-white">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/5 mb-8">
              <p className="text-slate-400 text-[14px] leading-relaxed font-medium">
                Established as India's leading mushroom ecosystem architect, we bridge the gap between traditional farming and industrial precision. Our mission is to democratize <span className="text-white font-bold">organic farming</span> across India with high-yield <span className="text-white font-bold">spawn quality</span>, comprehensive <span className="text-white font-bold">training</span> modules, and unmatched <span className="text-white font-bold">India-wide support</span> systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Industrial Design", "Turnkey Builds", "Export Quality", "PAN-India Ops"].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold text-slate-500 bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Core Values / Benefits Highlights */}
          <div className="space-y-8">
            <div className="badge">Our Expertise</div>
            <h2 className="text-[18px] md:text-3xl tracking-tight leading-tight uppercase">Bridging Technology & <span className="gradient-text">Organic Cultivation</span></h2>
            <div className="grid gap-4">
              {[
                { icon: Award, title: "Precision Engineering", desc: "Scientific grow room design optimized for specific climatic zones." },
                { icon: Users, title: "Expert Training", desc: "Hands-on certification from industry pioneers." },
                { icon: ShieldCheck, title: "Quality Guarantee", desc: "Standardized materials with long-term structural durability." }
              ].map((b, i) => (
                <div key={i} className="flex gap-5 p-5 glass border border-white/5 rounded-2xl group hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-start group-hover:scale-110 transition-all shrink-0">
                    <b.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[14px] mb-1">{b.title}</h4>
                    <p className="text-slate-500 text-[12px] leading-snug">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Update existing constants for better icons/data
const COMP_DATA = [
  { label: "Insulation", us: "80-100mm PUF", others: "40-50mm" },
  { feature: "AC Systems", us: "Daikin Industrial", others: "Split ACs" },
  { feature: "Racking", us: "MS / GI", others: "Bamboo" },
  { feature: "Support", us: "Lifetime Video", others: "1 Year" },
  { feature: "Subsidy", us: "Full Document Support", others: "No Support" },
];

const LOCATIONS = ["Jabalpur", "Sagar", "Damoh", "Indore"];
const STATES = [
  "Haryana", "Punjab", "Himachal Pradesh", "Uttarakhand", "Uttar Pradesh", 
  "Madhya Pradesh", "Rajasthan", "Bihar", "Maharashtra", "Karnataka", 
  "Tamil Nadu", "Telangana", "Andhra Pradesh", "Kerala"
];

const NAV_ITEMS = [
  { name: "Home", href: "/", isExternal: false, icon: Home },
  { name: "About", href: "/about", isExternal: false, icon: Info },
  { name: "Services", href: "/services", isExternal: false, icon: Layers },
  { name: "Training", href: "/training", isExternal: false, icon: Award },
  { name: "Turnkey Projects", href: "/turnkey-projects", isExternal: false, icon: ShieldCheck },
  { name: "Gallery", href: "/gallery", isExternal: false, icon: ShoppingCart },
  { name: "Blog", href: "/blog", isExternal: false, icon: BookOpen },
  { name: "FAQ", href: "/faq", isExternal: false, icon: MessageCircle },
  { name: "Contact", href: "/contact", isExternal: false, icon: Phone }
];

// --- Components ---

const Collapsible: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass border border-white/5 mb-3 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-white"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-4 pt-0 text-[13px] text-slate-400 border-t border-white/5"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Background3D = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="blob blob-1 absolute w-[400px] h-[400px] bg-[#312e81] top-[-100px] left-[-100px] blur-[80px] opacity-40 rounded-full"></div>
    <div className="blob blob-2 absolute w-[350px] h-[350px] bg-[#4c1d95] bottom-[-50px] right-[-50px] blur-[80px] opacity-40 rounded-full"></div>
    <div className="absolute inset-0 bg-[#020617]"></div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-7xl z-50 glass py-3 md:py-4 px-4 md:px-10 transition-all duration-300 ${isScrolled ? 'shadow-2xl translate-y-[-2px]' : ''}`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl gradient-bg flex items-center justify-center font-bold text-base md:text-lg text-white shadow-lg group-hover:scale-110 transition-transform">
              O
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-white whitespace-nowrap">
              Organic <span className="gradient-text">Mushroom Farm</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.slice(0, -1).map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <div key={item.name} className="relative">
                  <Link 
                    to={item.href} 
                    className={`text-[13px] font-bold transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${isActive ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white'}`}
                  >
                    {item.name}
                  </Link>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-3 right-3 h-0.5 gradient-bg rounded-full"
                    />
                  )}
                </div>
              );
            })}
            <Link to="/contact" className="btn-primary px-7 py-2.5 rounded-xl text-sm shadow-xl shadow-brand-blue/20 font-bold">
              Join Workshop
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[85%] sm:w-[380px] bg-linear-to-b from-[#0f172a] via-[#10192e] to-[#020617] backdrop-blur-[20px] shadow-[-15px_0_50px_rgba(0,0,0,0.8)] rounded-l-[30px] border-l border-white/15 flex flex-col items-center overflow-hidden z-[9999]"
            >
              <div 
                className="flex items-center justify-between p-7 w-full border-b border-white/5 bg-white/5 relative z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center font-bold text-white shadow-lg">
                    O
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white">
                    Organic <span className="gradient-text">Mushroom Farm</span>
                  </span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-white p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div 
                className="flex-1 w-full flex flex-col items-center justify-center gap-2 px-8 py-10 overflow-y-auto relative z-10"
              >
                {NAV_ITEMS.map((item, i) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.div 
                      key={item.name}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.08, type: 'spring', damping: 20 }}
                      className="w-full"
                    >
                      <Link 
                        to={item.href} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className={`flex items-center gap-5 text-lg font-bold transition-all py-4 px-6 w-full rounded-2xl group hover:scale-[1.02] hover:bg-white/5 ${isActive ? 'bg-white/10 text-primary-start shadow-[0_0_30px_rgba(56,189,248,0.25)]' : 'text-slate-300 hover:text-white'}`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-primary-start text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]' : 'bg-white/5 text-slate-500 group-hover:text-primary-start group-hover:bg-white/10'}`}>
                          {item.icon && <item.icon size={20} />}
                        </div>
                        <span className={isActive ? 'gradient-text' : ''}>{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="w-full p-8 border-t border-white/5 bg-white/[0.02] text-center">
                <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-500 animate-pulse">Organic Ecosystems</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const features = [
    "Complete Turnkey Project Setup",
    "Professional Training Programs",
    "Government Subsidy Documentation",
    "Lifetime Technical Support"
  ];

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-28 pb-12 md:py-24 overflow-hidden section-padding">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr,0.8fr] gap-8 md:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <div className="text-[10px] md:text-sm font-bold text-green-500 uppercase tracking-[0.2em] mb-4 md:mb-6">
            From empty shed to harvest-ready infrastructure – we handle everything.
          </div>
          <h1 className="text-[1.5rem] md:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 tracking-tighter">
            <span className="gradient-text">Build Your Mushroom Empire</span> with Experts
          </h1>
          <p className="text-[0.8125rem] md:text-lg text-slate-400 mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Complete methodology, precision calculators, detailed SOPs, and turnkey solutions for profitable button mushroom farming across India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-8 mb-10 border-white/5 border-y py-6 md:py-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle2 size={16} className="text-primary-start" />
                <span className="text-[13px] md:text-sm font-bold text-slate-200 tracking-tight">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10 md:mb-12">
            <Link to="/contact" className="btn-primary w-full sm:w-auto px-10 min-h-[50px] rounded-xl text-sm shadow-2xl shadow-brand-blue/30 flex items-center justify-center">
              Get Free Quote
            </Link>
            <a href="tel:9203544140" className="btn-outline w-full sm:w-auto px-10 min-h-[50px] rounded-xl text-sm">
              Call Now: 9203544140
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-12 pt-4">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">1.2k+</div>
              <div className="text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">Active Units</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
              <div className="text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* 3D Visual Mock (Glass Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative lg:block hidden"
        >
          <div className="absolute inset-0 gradient-bg opacity-20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="relative glass rounded-[2.5rem] p-8 border-white/20 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <ShieldCheck className="text-accent" />
                </div>
                <div>
                  <div className="text-white font-bold">Turnkey Project</div>
                  <div className="text-xs text-slate-500">Quality Certified Infrastructure</div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest">Active</div>
            </div>
            
            <div className="space-y-6">
              {[
                { label: "Room Size", value: "18 x 70 ft Standard", icon: Layers },
                { label: "Annual Yield", value: "35,000+ kg", icon: TrendingUp },
                { label: "Cooling Sys", value: "Daikin Industrial", icon: Zap },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <stat.icon className="text-slate-400" size={18} />
                    <span className="text-sm text-slate-300 font-medium">{stat.label}</span>
                  </div>
                  <span className="text-sm text-white font-bold">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-3xl bg-linear-to-br from-white/10 to-transparent border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-slate-300">Phase 1 Cycle</span>
                <span className="text-[10px] text-accent font-bold">LIVE PROGRESS</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full gradient-bg"
                ></motion.div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold uppercase">
                <span>Composting</span>
                <span>Pasteurization</span>
                <span>Cropping</span>
              </div>
            </div>
          </div>
          
          {/* Floating Small Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-white/20 flex items-center gap-3 shadow-xl"
          >
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={16} />
            </div>
            <div className="pr-4">
              <div className="text-[10px] text-slate-400 font-bold uppercase">ROI Verified</div>
              <div className="text-xs text-white font-bold">120% Yearly Avg</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const chooseItems = [
    {
      title: "Cost Efficiency (15–25% Savings)",
      subtitle: "Factory-direct manufacturing eliminates middlemen, ensuring 15–25% lower costs compared to market rates.",
      points: ["In-house PUF panel production", "Own rack fabrication unit", "Direct pricing advantage", "Strict quality control"],
      icon: TrendingUp,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Smart B2B Pricing",
      subtitle: "Fair and transparent pricing for every farmer regardless of project size.",
      points: ["Wholesale pricing model", "Volume discounts", "Transparent breakdown", "No hidden costs"],
      icon: Briefcase,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Nationwide Execution",
      subtitle: "Seamless delivery and execution across India with expert teams.",
      points: ["Coverage across all states & UTs", "Consistent pricing nationwide", "Local installation teams", "End-to-end logistics"],
      icon: MapPin,
      color: "from-blue-600/20 to-cyan-500/20"
    },
    {
      title: "Price Match Guarantee",
      subtitle: "Get the best value without compromise.",
      points: ["Guaranteed lowest pricing", "Market comparison support", "Extra discount on matching quotes", "No quality compromise"],
      icon: ShieldCheck,
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Certified Quality",
      subtitle: "Built on globally recognized standards.",
      points: ["Premium materials only", "Multi-level quality checks", "Standardized processes", "Long-term durability"],
      icon: Award,
      color: "from-amber-400/20 to-orange-500/20"
    },
    {
      title: "Reliable Partnership",
      subtitle: "We don’t just build farms — we build success.",
      points: ["Lifetime technical support", "Expert consultation", "Proven project success", "Farmer-first approach"],
      icon: Users,
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-start/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mx-auto mb-4"
          >
            Infrastructure Leaders
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Why Choose <span className="gradient-text">Organic Mushroom Farm?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            India’s most trusted mushroom infrastructure partner delivering unmatched value, transparency, and performance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {chooseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass h-full card-padding rounded-2xl border border-white/5 flex flex-col shadow-2xl relative overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br ${item.color} blur-[50px] pointer-events-none opacity-20`}></div>
                
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <item.icon className="text-primary-start" size={24} />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="mb-6 flex-1 italic text-slate-500">
                  {item.subtitle}
                </p>
                
                <ul className="space-y-2">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-[12px] md:text-xs font-semibold text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-primary-start"></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FarmingModels = () => {
  const models = [
    {
      name: "Starter Package",
      size: "18 x 30 ft",
      investment: "₹8-12 Lakh",
      yield: "800-1000 kg/cycle",
      features: ["Small Scale", "Manual Ops", "Local Markets"],
      label: "Beginner Choice",
      recommended: false
    },
    {
      name: "Standard Model",
      size: "18 x 70 ft",
      investment: "₹35-42 Lakh",
      yield: "3000-3500 kg/cycle",
      features: ["Automated Climate", "Export Ready", "High ROI"],
      label: "Most Popular",
      recommended: true
    },
    {
      name: "Industrial Unit",
      size: "Compost + 4 Rooms",
      investment: "₹1.5Cr - 2.5Cr",
      yield: "15,000+ kg/cycle",
      features: ["Full Ecosystem", "Full Automation", "B2B Supply"],
      label: "Business Pro",
      recommended: false
    }
  ];

  return (
    <section id="farming-models" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-16 gap-6 text-center lg:text-left items-center lg:items-end">
          <div className="max-w-xl">
            <div className="badge mb-4 mx-auto lg:mx-0">Investment Paths</div>
            <h2 className="mb-4">Farming <span className="gradient-text">Models</span> & ROI</h2>
            <p>Scientifically designed grow rooms optimized for Indian climate conditions.</p>
          </div>
          <div className="glass p-1 rounded-xl flex gap-1 w-fit">
            <button className="px-4 py-2 rounded-lg bg-white/10 text-white text-[12px] font-bold">Fixed Models</button>
            <button className="px-4 py-2 rounded-lg text-slate-500 text-[12px] font-bold">Custom Build</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {models.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative glass card-padding flex flex-col ${m.recommended ? 'border-primary-mid/40 shadow-2xl lg:scale-105 z-10' : 'border-white/5'}`}
            >
              {m.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full btn-primary text-[9px] font-black uppercase tracking-widest text-white shadow-xl">
                  Recommended Model
                </div>
              )}
              <div className="mb-6">
                <div className="text-primary-start text-[9px] font-black uppercase tracking-[0.2em] mb-2">{m.label}</div>
                <h3 className="text-white tracking-tight">{m.name}</h3>
                <div className="mt-2 text-slate-500 text-[12px] font-medium">{m.size} Space Required</div>
              </div>
              
              <div className="space-y-3 mb-8 flex-1">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">Investment</div>
                  <div className="text-xl font-bold text-white">{m.investment}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">Expected Yield</div>
                  <div className="text-xl font-bold text-white">{m.yield}</div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {m.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-slate-400 text-[12px] md:text-sm">
                    <CheckCircle2 size={14} className="text-primary-start" /> {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full min-h-[44px] py-3 rounded-xl font-bold transition-all text-sm ${m.recommended ? 'btn-primary' : 'btn-outline'}`}>
                Get Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const [sellingPrice, setSellingPrice] = useState(120);
  const [operatingCost, setOperatingCost] = useState(30);
  const [productionCapacity, setProductionCapacity] = useState(3000); // kg

  const monthlyProfit = useMemo(() => {
    return (sellingPrice - operatingCost) * productionCapacity;
  }, [sellingPrice, operatingCost, productionCapacity]);

  const yearlyROI = useMemo(() => {
    const investment = 3500000;
    const yearlyProfit = monthlyProfit * 5; // 5 cycles a year usually
    return (yearlyProfit / investment * 100).toFixed(1);
  }, [monthlyProfit]);

  return (
    <section id="roi-calculator" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass card-padding border border-white/10 relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-primary-start/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="badge mb-4 mx-auto lg:mx-0">Profit Analytics</div>
              <h2 className="mb-4">Mushroom <span className="gradient-text">Profit Calculator</span></h2>
              <p className="mb-8 max-w-lg mx-auto lg:mx-0">Estimate your profits based on real-time market averages.</p>
              
              <div className="space-y-8 text-left">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Selling Price (₹/kg)</label>
                    <span className="text-xl font-bold text-white">₹{sellingPrice}</span>
                  </div>
                  <input 
                    type="range" min="80" max="250" value={sellingPrice} 
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-start"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Operating Cost (₹/kg)</label>
                    <span className="text-xl font-bold text-white">₹{operatingCost}</span>
                  </div>
                  <input 
                    type="range" min="20" max="80" value={operatingCost} 
                    onChange={(e) => setOperatingCost(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {[
                { label: "Cycle Profit", value: `₹${monthlyProfit.toLocaleString()}`, color: "text-green-400", sub: "Est. per cycle" },
                { label: "Yearly ROI", value: `${yearlyROI}%`, color: "text-primary-start", sub: "Return on CapEx" },
                { label: "Payback", value: "18-24 Mo", color: "text-white", sub: "Full recovery" },
                { label: "Success Odds", value: "High", color: "text-white", sub: "With our SOPs" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-5 md:p-8 border-white/5 flex flex-col justify-center text-center group"
                >
                  <div className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{item.label}</div>
                  <div className={`text-lg md:text-2xl font-bold mb-1 ${item.color}`}>{item.value}</div>
                  <div className="text-[9px] text-slate-600 font-medium">{item.sub}</div>
                </motion.div>
              ))}
              <div className="col-span-2 mt-4">
                <button className="btn-primary w-full min-h-[50px] py-4 rounded-xl shadow-2xl shadow-brand-blue/30 text-[11px] uppercase tracking-widest font-bold">
                  Download Financial DPR (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const steps = [
    { title: "Consultation", days: "Day 1-7", desc: "Site survey, feasibility study, and project proposal.", icon: Info },
    { title: "Setup & Build", days: "Day 15-60", desc: "Turnkey construction of grow rooms and compost tunnels.", icon: Zap },
    { title: "Training", days: "Day 61-75", desc: "Hands-on training on substrate preparation.", icon: BookOpen },
    { title: "Production Begins", days: "Day 76+", desc: "Casing, pinning, and first commercial harvest.", icon: Sprout },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="badge mx-auto mb-4">Process Flow</div>
          <h2 className="mb-4 uppercase">Your <span className="gradient-text">Journey</span> to First Harvest</h2>
          <p className="max-w-xl mx-auto">A data-driven approach to building a successful mushroom farm.</p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-[3.5rem] left-0 right-0 h-px bg-white/5 z-0"></div>
          <div className="grid lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {steps.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand-blue/30 transition-transform">
                  <s.icon className="text-white" size={24} />
                </div>
                <div className="text-primary-start text-[9px] font-black uppercase mb-1 tracking-widest">{s.days}</div>
                <h3 className="text-white mb-3 tracking-tight tracking-tight">{s.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5 -z-10 blur-[120px]"></div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="glass p-8 md:p-16 rounded-[3rem] border border-white/10 text-center relative overflow-hidden group">
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-primary-start/10 blur-[80px] rounded-full group-hover:bg-primary-start/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-brand-purple/10 blur-[80px] rounded-full group-hover:bg-brand-purple/20 transition-all duration-700"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge mx-auto mb-6">Ready to Start?</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Start Your <span className="gradient-text">Mushroom Project</span> Today
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join the organic revolution with India's most trusted infrastructure and training partner. 
              Get a custom feasibility report for your location.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10 py-4 rounded-xl shadow-2xl shadow-brand-blue/30 text-[11px] uppercase tracking-widest font-black w-full sm:w-auto flex items-center justify-center">
                Get Free Quote
              </Link>
              <a href="tel:9203544140" className="btn-outline px-10 py-4 rounded-xl text-[11px] uppercase tracking-widest font-black w-full sm:w-auto">
                Consult with Expert
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  const [state, handleSubmit, reset] = useForm('xykldqdy');
  const navigate = useNavigate();

  const handleClose = () => {
    reset();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden pt-24 md:pt-32 pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-start/10 border border-primary-start/20 text-[10px] font-black text-primary-start uppercase tracking-widest mb-4">
              Contact Us
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
              Start Your <span className="text-primary-start">Mushroom</span> Business
            </h1>
            <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-medium px-2">
              Ready to build a commercial factory or a small unit? Our specialists are here to guide you through every step.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Details Column */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { 
                  icon: Phone, 
                  label: "Call Operations", 
                  values: ["+91 9203544140", "+91 7440806690"],
                  href: "tel:+919203544140"
                },
                { 
                  icon: MessageCircle, 
                  label: "WhatsApp Support", 
                  values: ["Chat with Expert"],
                  isWhatsApp: true,
                  href: "https://wa.me/919203544140"
                },
                { 
                  icon: Mail, 
                  label: "Email Support", 
                  values: ["support@mushroomtraining.online"],
                  href: "mailto:support@mushroomtraining.online"
                }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target={item.isWhatsApp ? "_blank" : undefined}
                  rel={item.isWhatsApp ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-5 bg-white/[0.03] border border-white/10 rounded-2xl group transition-all hover:bg-white/[0.06] ${item.isWhatsApp ? 'ring-1 ring-green-500/30' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.isWhatsApp ? 'bg-green-500/20 text-green-400' : 'bg-primary-start/20 text-primary-start'}`}>
                    <item.icon size={22} className={item.isWhatsApp ? 'animate-pulse' : ''} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">{item.label}</div>
                    <div className="text-sm md:text-base font-bold text-white tracking-tight">{item.values[0]}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Map Optimized for Mobile */}
            <div className="rounded-2xl border border-white/10 overflow-hidden h-44 md:h-64 bg-white/5 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6593645366115!2d79.86616429726563!3d23.186307199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0dbcbb97%3A0x15f3810ec56063b4!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1713881900000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
              ></iframe>
            </div>
            
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl flex items-start gap-4">
              <MapPin className="text-primary-start shrink-0" size={20} />
              <div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Office Address</div>
                <div className="text-sm font-bold text-white tracking-tight leading-snug">Katangi Road, Jabalpur, Madhya Pradesh – 483105</div>
              </div>
            </div>
          </div>

          {/* Clean Enquiry Form */}
          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/[0.02] border border-white/10 p-6 md:p-10 rounded-3xl"
            >
              <div className="mb-8 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Enquiry Form</h3>
                <p className="text-slate-400 text-sm font-medium">Please fill in your details for a callback.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Hidden date field */}
                <input type="hidden" name="_date" value={new Date().toLocaleDateString()} />
                
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                  <input 
                    id="name" name="name" required type="text" placeholder="Your Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-start transition-all text-sm font-medium placeholder:text-slate-700 h-12 md:h-14"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-[10px] mt-1 ml-1" />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address *</label>
                  <input 
                    id="email" name="email" required type="email" placeholder="yourname@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-start transition-all text-sm font-medium placeholder:text-slate-700 h-12 md:h-14"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1 ml-1" />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message *</label>
                  <textarea 
                    id="message" name="message" required rows={4} placeholder="Briefly describe your requirements..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-start transition-all resize-none text-sm font-medium placeholder:text-slate-700 min-h-[100px]"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] mt-1 ml-1" />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className={`w-full py-5 rounded-xl bg-primary-start text-white text-[12px] uppercase tracking-widest font-black transition-all hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {state.submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>Send Enquiry</>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {state.succeeded && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/95 backdrop-blur-sm"
               onClick={handleClose}
              ></motion.div>
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: 10 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 10 }}
               className="relative bg-zinc-900 p-8 md:p-12 rounded-3xl border border-white/10 max-w-md w-full text-center shadow-2xl"
             >
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enquiry Received</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">
                  Thank you! Your enquiry has been received. Our expert will call you within <span className="text-white font-bold underline decoration-primary-start underline-offset-4">24 hours</span>.
                </p>
                <button 
                  onClick={handleClose}
                  className="w-full py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all shadow-xl"
                >
                  Close
                </button>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StatesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="badge mx-auto mb-4">Service Area</div>
        <h2 className="mb-4 uppercase tracking-tight">Active Project <span className="gradient-text">Hubs</span></h2>
        <p className="max-w-xl mx-auto mb-10 font-medium leading-relaxed">Pan-India operational presence with specialized installation teams.</p>
        
        <div className="flex flex-wrap justify-center gap-2">
          {STATES.map(state => (
            <div 
              key={state}
              className="px-4 py-2 glass border border-white/5 rounded-full text-[10px] font-bold text-slate-400"
            >
              {state}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-20 pb-24 md:pb-12 bg-black/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center font-bold text-white shadow-lg">
                O
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Organic <span className="gradient-text">Mushroom Farm</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm text-[13px] leading-relaxed mb-6 font-medium">
              Empowering high-yield organic mushroom cultivation across India through standardized SOPs, expert training, and industrial-grade turnkey projects.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[8px] font-black text-slate-600 uppercase tracking-[0.3em]">
              {LOCATIONS.map((loc, i) => (
                <span key={loc} className="flex items-center gap-2">
                  {loc} {i !== LOCATIONS.length - 1 && <div className="w-1 h-1 rounded-full bg-white/10"></div>}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[9px] border-l-2 border-primary-start pl-3">Pages</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Training", href: "/training" },
                { name: "Turnkey Projects", href: "/turnkey-projects" },
                { name: "Gallery", href: "/gallery" },
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="text-slate-500 hover:text-white transition-colors text-sm font-medium">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[9px] border-l-2 border-primary-start pl-3">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: "Blog / Insights", href: "/blog" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
                { name: "Terms of Service", href: "#" },
                { name: "Privacy Policy", href: "#" },
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="text-slate-500 hover:text-white transition-colors text-sm font-medium">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <div className="mb-6 md:mb-0">© 2026 Organic Mushroom Farm. All Rights Reserved.</div>
          <div className="flex gap-8">
            {[
              { label: "Insta", href: "https://www.instagram.com/organic_mushroom_farm_jabalpur" },
              { label: "FB", href: "https://www.facebook.com/organic.mushroom.farm0" },
              { label: "YT", href: "https://www.youtube.com/@organicmushroomfarm" },
            ].map(social => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary-start transition-colors flex items-center gap-2 group"
              >
                {social.label}
                <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileNavItems = [
    { label: "Spawn (Seed)", href: "#market", icon: Sprout },
    { label: "Training", href: "#sop", icon: BookOpen },
    { label: "Setup (Turnkey)", href: "#farming-models", icon: Home },
    { label: "Bags", href: "#compost-units", icon: Layers },
    { label: "Fresh Mushroom", href: "#market", icon: ShoppingCart },
    { label: "Call Us", href: "tel:+919203544140", icon: Phone },
  ];

  return (
    <>
      {/* Floating Buttons on Right Side */}
      <div className="fixed bottom-24 right-4 md:right-8 z-[100] flex flex-col gap-4">
        {/* WhatsApp Button with Glow & Pulse */}
        <motion.a 
          href="https://wa.me/919203544140" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)] relative group"
        >
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-40"></div>
          <MessageCircle size={28} className="relative z-10" />
        </motion.a>

        {/* Enquiry Button (Linking to /contact) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Link 
            to="/contact" 
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all border border-white/10"
          >
            <Mail size={24} />
          </Link>
        </motion.div>

        {/* Scroll To Top (Desktop) */}
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 glass rounded-full text-slate-400 flex items-center justify-center hover:bg-white/10 transition-all hidden md:flex"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </div>

      {/* Mobile Horizontal Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[110] md:hidden glass-dark border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="overflow-x-auto scrollbar-hide snap-x flex items-center gap-3 p-4">
          {mobileNavItems.map((item, i) => (
            <a 
              key={i} 
              href={item.href}
              className="snap-start shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-white/10 hover:border-primary-start/50 transition-all active:scale-95"
            >
              <item.icon size={14} className="text-primary-start" />
              <span className="text-[11px] font-bold text-white whitespace-nowrap tracking-tight">{item.label}</span>
            </a>
          ))}
          <div className="shrink-0 w-4"></div> {/* Spacer for scroll end */}
        </div>
        {/* Safe area padding for iPhones */}
        <div className="h-[env(safe-area-inset-bottom,0px)] bg-black/20"></div>
      </div>
    </>
  );
};

// --- Main App ---

const HomePage = () => {
  useEffect(() => {
    document.title = "Organic Mushroom Farm - India's Premium Turnkey Solutions";
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <EcosystemFlow />
      <WhyChooseUs />
      <FarmingModels />
      <MushroomComparison />
      <ROICalculator />
      <CriticalParameters />
      <ProductionSOP />
      
      {/* Compost Units Section */}
      <section id="compost-units" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-4">Infrastructure</div>
            <h2 className="mb-4 uppercase">Standard <span className="gradient-text">Compost Units</span></h2>
            <p className="max-w-2xl mx-auto">Complete Phase-I + Phase-II infrastructure with 15-day cycles.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {[
              { 
                name: "2000-Bag Unit (20T)", 
                desc: "14x30 System", 
                investment: "₹15-17 Lakh",
                stats: { bags: "2,000", cap: "20t", cycle: "15d" }
              },
              { 
                name: "3000-Bag Unit (30T)", 
                desc: "14x40 System", 
                investment: "₹19-21 Lakh",
                stats: { bags: "3,000", cap: "30t", cycle: "15d" },
                recommended: true
              }
            ].map((comp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`glass card-padding rounded-3xl border border-white/5 relative ${comp.recommended ? 'shadow-2xl shadow-brand-blue/10 border-primary-mid/30' : ''}`}
              >
                {comp.recommended && <div className="absolute top-4 right-5 badge text-[8px]">Best Value</div>}
                <h3 className="text-white mb-2">{comp.name}</h3>
                <div className="text-slate-500 mb-6 font-medium text-[13px]">{comp.desc}</div>
                
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(comp.stats).map(([k, v]) => (
                    <div key={k} className="p-2 md:p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-[8px] text-slate-500 font-bold uppercase mb-1">{k}</div>
                      <div className="text-sm md:text-lg font-bold text-white">{v}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 shadow shadow-brand-blue/10 ring-1 ring-white/10 ring-inset mb-6">
                  <span className="text-[11px] font-semibold text-slate-400">Est. CapEx</span>
                  <span className="text-lg font-bold text-white">{comp.investment}</span>
                </div>
                
                <button className="btn-primary w-full py-3.5 rounded-xl text-[12px] font-bold min-h-[44px]">Get Details</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-4">Testimonials</div>
            <h2 className="mb-4 uppercase">Real <span className="gradient-text">Voices</span></h2>
            <p>Join 5000+ farmers trained by our expert team.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Rahul S.", location: "Jabalpur", text: "Turnkey setup changed my perspective. Outstanding support even after 2 years.", avatar: "RS" },
              { name: "Deepak M.", location: "Indore", text: "Professional SOPs. Yield exceeded expectations by 20% due to climate design.", avatar: "DM" },
              { name: "Suresh K.", location: "Sagar", text: "Honest ROI analysis. No hidden costs, just pure business growth.", avatar: "SK" }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-3xl border border-white/5 flex flex-col h-full"
              >
                <Quote size={20} className="text-primary-start mb-4 opacity-40" />
                <p className="text-slate-300 text-[13px] italic mb-6 leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center font-bold text-white text-[10px] shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-[12px] tracking-tight">{t.name}</div>
                    <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section Placeholder */}
      <section id="market" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="badge mx-auto mb-4">Market Linkage</div>
          <h2 className="mb-4">Mushroom <span className="gradient-text">Exchange</span></h2>
          <p className="max-w-xl mx-auto mb-12 font-medium">Connect directly with verified buyers and sellers.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">
            {[
              { type: "Seller", title: "Fresh Milky Mushrooms", locale: "West Bengal", price: "₹140/kg" },
              { type: "Buyer", title: "Oyster Spawn Needed", locale: "Madhya Pradesh", price: "Bulk Order" },
              { type: "Seller", title: "Dry Button Mushrooms", locale: "Punjab", price: "₹850/kg" },
            ].map((ad, i) => (
              <div key={i} className="glass p-5 rounded-2xl border border-white/5 relative group cursor-pointer">
                <div className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${ad.type === 'Seller' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'}`}>
                  {ad.type}
                </div>
                <h3 className="text-white mb-1 mt-4 tracking-tight">{ad.title}</h3>
                <div className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                  <MapPin size={10} className="text-primary-start" /> {ad.locale}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-lg">{ad.price}</span>
                  <button className="w-9 h-9 rounded-lg bg-white/5 text-slate-400 flex items-center justify-center">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-outline mt-10 px-8 py-3.5 rounded-xl text-[12px] font-bold min-h-[44px]">
            Browse All Listings
          </button>
        </div>
      </section>

      {/* Resources & SOPs Section */}
      <section id="resources" className="section-padding bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="badge mb-6 mx-auto lg:mx-0">Documentation</div>
              <h2 className="mb-6 uppercase text-center lg:text-left">Production <span className="gradient-text">SOPs</span></h2>
              <p className="mb-10 text-center lg:text-left">Standard operating procedures used by specialists nationwide.</p>
              
              <div className="md:hidden">
                {[
                  { title: "Tunnel Ops", content: "Details for Phase-II Pasteurization Tunnel operations and parameters." },
                  { title: "Spawning", content: "Comprehensive checklist for spawning and incubation stages." },
                  { title: "Casing", content: "Material preparation guide for optimal casing layer." },
                  { title: "Hygiene", content: "Disease control protocols and farm hygiene standards." }
                ].map((sop, i) => (
                  <Collapsible key={i} title={sop.title}>
                    {sop.content}
                    <button className="flex items-center gap-2 text-primary-start font-bold mt-3">
                      <Download size={14} /> Download PDF
                    </button>
                  </Collapsible>
                ))}
              </div>

              <div className="hidden md:block space-y-4">
                {[
                  "Phase-II Pasteurization Tunnel Ops",
                  "Spawning & Incubation Checklist",
                  "Casing Material Preparation Guide",
                  "Disease Control & Hygiene Protocols"
                ].map(sop => (
                  <div key={sop} className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/5 group hover:bg-white/5 transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Download size={18} className="text-primary-start" />
                    </div>
                    <span className="text-sm font-bold text-slate-300">{sop}</span>
                    <ArrowRight className="ml-auto text-slate-700 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-10 blur-[80px] rounded-full"></div>
              <div className="relative glass p-6 md:p-10 rounded-[2.5rem] border border-white/10">
                <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                  <BookOpen className="text-primary-start" size={24} />
                  <h3 className="text-white tracking-tight">Knowledge Hub</h3>
                </div>
                <div className="space-y-6">
                  <div className="p-4 md:p-6 rounded-3xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Featured</span>
                      <div className="px-2 py-0.5 rounded bg-red-500/20 text-red-500 text-[8px] font-black uppercase">Video</div>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 group cursor-pointer">
                      <img loading="lazy" src="https://picsum.photos/seed/mushroom/800/450" alt="Training" className="w-full h-full object-cover opacity-60" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-2xl">
                          <Play size={20} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <h4 className="text-white font-bold text-[13px] tracking-tight">Composting Flow Explained</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable />
      <StatesSection />
      <CTASection />
      <CompanyProfile />
    </>
  );
};

const PageHero = ({ title, description, badge }: { title: string; description: string; badge?: string }) => (
  <section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {badge && <div className="badge mx-auto mb-6">{badge}</div>}
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {title.split(' ').map((word, i) => (
            <React.Fragment key={i}>
              {i === 1 ? <span className="gradient-text">{word} </span> : word + ' '}
            </React.Fragment>
          ))}
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          {description}
        </p>
      </motion.div>
    </div>
  </section>
);

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Organic Mushroom Farm - India's Leading Expert";
  }, []);
  return (
    <div className="min-h-screen">
      <PageHero 
        badge="Our Story"
        title="About Organic Mushroom Farm" 
        description="India's leading mushroom ecosystem architect, bridging the gap between traditional farming and industrial precision."
      />
      <CompanyProfile />
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 uppercase tracking-tight">Our <span className="gradient-text">Vision</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                To transform India into a global hub for organic mushroom production through sustainable practices and cutting-edge infrastructure.
              </p>
              <div className="space-y-4">
                {["Empowering local farmers", "Eco-friendly production", "Technological innovation"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary-start" size={20} />
                    <span className="text-white font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-white font-bold text-xl mb-4">Our Commitment</h3>
              <p className="text-slate-500 mb-6 font-medium">
                We don't just sell technology; we build partnerships. Every project we undertake is a step towards a greener, more profitable future for Indian agriculture.
              </p>
              <Link to="/contact" className="btn-primary w-full py-4 rounded-xl text-center font-bold">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Our Services | Turnkey Mushroom Farming Solutions";
  }, []);
  return (
    <div className="min-h-screen">
      <PageHero 
        badge="Expert Solutions"
        title="Our Comprehensive Services" 
        description="Tailored infrastructure and support systems for the modern mushroom farmer."
      />
      <EcosystemFlow />
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Hybrid Spawn Supply", desc: "Top-tier genetics for maximum yield and disease resistance.", icon: Sprout },
              { title: "Compost Production", desc: "Standardized Phase II & Phase III compost for commercial success.", icon: Layers },
              { title: "Technical Consultancy", desc: "Expert guidance from climate control to disease management.", icon: Info },
              { title: "Marketing Support", desc: "Connecting farmers with B2B buyers and export channels.", icon: TrendingUp },
              { title: "Cold Chain Logistics", desc: "Ensuring freshness from farm to market with specialized storage.", icon: Zap },
              { title: "Subsidy Guidance", desc: "Legal and documentation support for government schemes.", icon: ShieldCheck },
            ].map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border border-white/5 group hover:bg-white/5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-start/10 text-primary-start flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon size={26} />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">{s.desc}</p>
                <Link to="/contact" className="text-primary-start font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

const TrainingPage = () => {
  useEffect(() => {
    document.title = "Training Programs | Master Mushroom Cultivation";
  }, []);
  return (
    <div className="min-h-screen">
      <PageHero 
        badge="Skill Development"
        title="Professional Training Programs" 
        description="Master the science and art of mushroom farming with hands-on certification."
      />
      <ProductionSOP />
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 uppercase tracking-tight">Upcoming <span className="gradient-text">Workshops</span></h2>
            <p className="text-slate-400">Join our next session and start your journey with expert guidance.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-10 rounded-[3rem] border border-white/10 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BookOpen size={120} />
              </div>
              <div className="badge mb-6">3-Day Intensive</div>
              <h3 className="text-2xl font-bold text-white mb-4">Button Mushroom Masterclass</h3>
              <p className="text-slate-400 mb-8 font-medium">In-depth training on compost preparation, spawn run, and harvesting strategies.</p>
              <ul className="space-y-4 mb-10">
                {["Live Farm Sessions", "SOP Manuals", "ROI Calculation Tools", "Post-Training Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-bold">
                    <CheckCircle2 size={16} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary inline-flex px-8 py-4 rounded-xl font-bold">
                Enroll Now
              </Link>
            </div>
            <div className="glass p-10 rounded-[3rem] border border-white/10 relative overflow-hidden text-left">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                <Users size={120} />
              </div>
              <div className="badge mb-6">Specialty Focused</div>
              <h3 className="text-2xl font-bold text-white mb-4">Oyster & Milky Training</h3>
              <p className="text-slate-400 mb-8 font-medium">Low-cost entry models perfect for small-scale entrepreneurs and hobbyists.</p>
               <ul className="space-y-4 mb-10">
                {["Substrate Treatment", "Low-Cost Setup", "Local Channel Sales", "Quality Assessment"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-bold">
                    <CheckCircle2 size={16} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary inline-flex px-8 py-4 rounded-xl font-bold">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const TurnkeyProjectsPage = () => {
  useEffect(() => {
    document.title = "Turnkey Projects | Commercial Farm Infrastructure Setup";
  }, []);
  return (
    <div className="min-h-screen">
      <PageHero 
        badge="Turnkey Solutions"
        title="Commercial Farm Infrastructure" 
        description="Ready-to-harvest mushroom units designed for high-yield precision."
      />
      <CriticalParameters />
      <WhyChooseUs />
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 uppercase tracking-tight">Our <span className="gradient-text">Farming Models</span></h2>
            <p className="text-slate-400">Scale your production with our proven structural designs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Standard Unit", cap: "10-15 tons/yr", investment: "₹15-20 Lakhs", icon: Home },
              { title: "Industrial Unit", cap: "50+ tons/yr", investment: "₹60-80 Lakhs", icon: Layers },
              { title: "Export Factory", cap: "200+ tons/yr", investment: "₹2 Cr+", icon: ShieldCheck },
            ].map((model, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass p-8 rounded-[2.5rem] border border-white/5 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-start group-hover:text-white transition-all">
                  <model.icon size={28} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{model.title}</h3>
                <div className="text-primary-start font-black text-xs uppercase tracking-widest mb-6">Capacity: {model.cap}</div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-8">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Est. Investment</div>
                  <div className="text-lg font-bold text-white">{model.investment}</div>
                </div>
                <Link to="/contact" className="btn-outline w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest">
                  Enquire Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

const GalleryPage = () => {
  useEffect(() => {
    document.title = "Gallery | Modern Mushroom Farms & Infrastructure";
  }, []);
  const images = [
    { src: "https://picsum.photos/seed/farm1/800/600", category: "Infrastructure" },
    { src: "https://picsum.photos/seed/farm2/800/600", category: "Spawn" },
    { src: "https://picsum.photos/seed/farm3/800/600", category: "Training" },
    { src: "https://picsum.photos/seed/farm4/800/600", category: "Harvest" },
    { src: "https://picsum.photos/seed/farm5/800/600", category: "Infrastructure" },
    { src: "https://picsum.photos/seed/farm6/800/600", category: "Spawn" },
  ];

  return (
    <div className="min-h-screen">
      <PageHero 
        badge="Ecosystem Tour"
        title="Visualizing Success" 
        description="A glimpse into our farms, training sessions, and high-quality produce."
      />
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/10"
              >
                <img loading="lazy" src={img.src} alt={img.category} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6">
                    <span className="badge text-[10px]">{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog & Insights | Mushroom Farming Knowledge Hub";
  }, []);
  const posts = [
    { title: "The Future of Mushroom Farming in India 2026", date: "April 20, 2026", excerpt: "Exploring new market trends and export opportunities for Indian mushroom growers.", icon: TrendingUp },
    { title: "Standardizing SOPs for High-Yield Button Mushrooms", date: "April 15, 2026", excerpt: "A deep dive into climate control and substrate management for industrial units.", icon: ShieldCheck },
    { title: "Starting Small: Oyster Mushroom Units for Households", date: "April 10, 2026", excerpt: "How to launch a profitable small unit with minimal investment.", icon: Sprout },
  ];

  return (
    <div className="min-h-screen">
      <PageHero 
        badge="Knowledge Hub"
        title="Latest Insights & Guides" 
        description="Industry updates, technical guides, and success stories from the field."
      />
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-[2.5rem] border border-white/5 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-start">
                    <post.icon size={22} />
                  </div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{post.date}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{post.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                <button className="text-primary-start font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Read Article <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

const FAQPage = () => {
  useEffect(() => {
    document.title = "FAQ | Mushroom Project Common Doubts Cleared";
  }, []);
  const faqs = [
    { q: "What is the minimum investment required?", a: "For a small Oyster mushroom unit, it starts from ₹2-3 Lakhs. Commercial button mushroom units require ₹15 Lakhs or more depending on scale." },
    { q: "Do you provide marketing support?", a: "Yes, we connect our project partners with B2B buyers and provide market linkage support across India." },
    { q: "How long is the training program?", a: "Our intensive workshops typically run for 3 days, followed by lifetime technical support via video and site visits." },
    { q: "Can I get a government subsidy?", a: "Yes, mushroom units qualify for up to 40-50% subsidy under NHB and state-level schemes. We assist with all paperwork." },
    { q: "What is the typical ROI?", a: "With standardized SOPs and proper management, ROI ranges from 70% to 120% annually." },
  ];

  return (
    <div className="min-h-screen">
      <PageHero 
        badge="Direct Answers"
        title="Frequently Asked Questions" 
        description="Clarifying your doubts about project setups, training, and yields."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Collapsible key={i} title={faq.q}>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="selection:bg-primary-start/30 selection:text-white bg-black">
        <Background3D />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/turnkey-projects" element={<TurnkeyProjectsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}

const ComparisonTable = () => {
  const data = [
    { feature: "Insulation", us: "80-100mm PUF", others: "40-50mm" },
    { feature: "AC Systems", us: "Daikin Industrial", others: "Split ACs" },
    { feature: "Racking", us: "MS / GI", others: "Bamboo" },
    { feature: "Support", us: "Lifetime Video", others: "1 Year" },
    { feature: "Subsidy", us: "Full Document Support", others: "No Support" },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="badge mx-auto mb-4">Comparison</div>
          <h2 className="mb-4 uppercase tracking-tight">The <span className="gradient-text">Organic Edge</span></h2>
          <p className="max-w-xl mx-auto">Why we are the preferred partner nationwide.</p>
        </div>
        
        <div className="glass border border-white/10 overflow-hidden relative shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-4 md:px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">Features</th>
                  <th className="px-4 md:px-8 py-6 text-[9px] font-black text-white uppercase tracking-widest gradient-bg">Organic</th>
                  <th className="px-4 md:px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="px-4 md:px-8 py-5 text-[11px] font-bold text-slate-400">{row.feature}</td>
                    <td className="px-4 md:px-8 py-5 text-[12px] font-bold text-white tracking-tight">{row.us}</td>
                    <td className="px-4 md:px-8 py-5 text-[12px] font-medium text-slate-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
